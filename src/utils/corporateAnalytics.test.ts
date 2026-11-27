import test from 'node:test';
import assert from 'node:assert/strict';
import {
  CORPORATE_COMPANIES,
  CORPORATE_INSIGHTS,
  CORPORATE_PROGRAMS,
  CORPORATE_SCHEDULES,
  RECOMMENDED_CORPORATE_PHASES,
} from '../data/corporateBenchmarkData';
import {
  buildCorporateComparisonRows,
  computeCorporateMetrics,
  filterCorporatePrograms,
  filterCorporateSchedules,
} from './corporateAnalytics';
import { createCorporateBenchmarkWorkbook } from './corporateExcelExport';
import { isDirectNonHomepageUrl } from './analytics';

test('dataset covers 5 major Indonesian oil palm companies with direct non-redirect verified URLs', () => {
  assert.equal(CORPORATE_COMPANIES.length, 5);
  assert.ok(CORPORATE_PROGRAMS.length >= 16);
  assert.ok(CORPORATE_SCHEDULES.length >= 15);
  assert.equal(CORPORATE_INSIGHTS.length, 10);
  assert.equal(RECOMMENDED_CORPORATE_PHASES.length, 5);

  for (const prog of CORPORATE_PROGRAMS) {
    assert.ok(
      prog.sourceUrl.startsWith('https://'),
      `Program ${prog.id} must have an HTTPS URL`
    );
    assert.ok(
      !prog.sourceUrl.includes('vertexaisearch.cloud.google.com'),
      `Program ${prog.id} must not use a redirect wrapper URL`
    );
    assert.ok(
      isDirectNonHomepageUrl(prog.sourceUrl),
      `Program ${prog.id} should point to a direct non-homepage URL: ${prog.sourceUrl}`
    );
    assert.ok(
      ['Terverifikasi', 'Informasi Sebagian', 'Belum Terverifikasi'].includes(
        prog.verificationStatus
      ),
      `Program ${prog.id} has invalid verification status`
    );
  }

  for (const sch of CORPORATE_SCHEDULES) {
    assert.ok(
      sch.sourceUrl.startsWith('https://') &&
        !sch.sourceUrl.includes('vertexaisearch.cloud.google.com'),
      `Schedule ${sch.id} must use a direct HTTPS URL`
    );
  }
});

test('filterCorporatePrograms filters by company, programType, category, verificationStatus, and query', () => {
  const frOnly = filterCorporatePrograms(CORPORATE_PROGRAMS, {
    search: '',
    companyId: 'first-resources',
    programType: 'ALL',
    category: 'ALL',
    verificationStatus: 'ALL',
  });
  assert.equal(frOnly.length, 6);
  assert.ok(frOnly.every((p) => p.companyId === 'first-resources'));

  const rindamMatches = filterCorporatePrograms(CORPORATE_PROGRAMS, {
    search: 'Rindam',
    companyId: 'ALL',
    programType: 'ALL',
    category: 'Fisik',
    verificationStatus: 'Terverifikasi',
  });
  assert.equal(rindamMatches.length, 1);
  assert.equal(rindamMatches[0].id, 'aal-pdp');

  const partialOnly = filterCorporatePrograms(CORPORATE_PROGRAMS, {
    search: '',
    companyId: 'ALL',
    programType: 'ALL',
    category: 'ALL',
    verificationStatus: 'Informasi Sebagian',
  });
  assert.ok(partialOnly.length >= 2);
  assert.ok(partialOnly.every((p) => p.verificationStatus === 'Informasi Sebagian'));
});

test('filterCorporateSchedules filters cleanly by company and granularity', () => {
  const dailyOnly = filterCorporateSchedules(CORPORATE_SCHEDULES, 'ALL', 'Harian');
  assert.ok(dailyOnly.length >= 1);
  assert.ok(dailyOnly.every((s) => s.granularity === 'Harian'));

  const bgaSchedules = filterCorporateSchedules(
    CORPORATE_SCHEDULES,
    'bumitama-agri',
    'ALL'
  );
  assert.equal(bgaSchedules.length, 4);
});

test('computeCorporateMetrics and buildCorporateComparisonRows return accurate totals', () => {
  const metrics = computeCorporateMetrics(
    CORPORATE_COMPANIES,
    CORPORATE_PROGRAMS,
    CORPORATE_SCHEDULES
  );
  assert.equal(metrics.totalCompanies, 5);
  assert.equal(metrics.totalPrograms, CORPORATE_PROGRAMS.length);
  assert.equal(
    metrics.verifiedPrograms + metrics.partialPrograms + metrics.unverifiedPrograms,
    metrics.totalPrograms
  );
  assert.equal(metrics.directVerifiedUrls, CORPORATE_PROGRAMS.length);

  const matrix = buildCorporateComparisonRows(CORPORATE_PROGRAMS);
  assert.equal(matrix.length, CORPORATE_PROGRAMS.length);
  assert.ok(matrix.every((row) => row.companyShortName.length > 0 && row.duration.length > 0));
});

test('createCorporateBenchmarkWorkbook builds 4 requested sheets with exact column schemas', async () => {
  const wb = await createCorporateBenchmarkWorkbook(
    CORPORATE_PROGRAMS,
    CORPORATE_SCHEDULES
  );

  const sheetNames = wb.worksheets.map((ws) => ws.name);
  assert.deepEqual(sheetNames, [
    'Benchmark Program Perusahaan',
    'Jadwal Pelatihan',
    'Perbandingan Perusahaan',
    'Insight & Rekomendasi',
  ]);

  const s1Headers = (wb.worksheets[0].getRow(1).values as (string | undefined)[]).slice(1);
  assert.deepEqual(s1Headers, [
    'Perusahaan',
    'Nama Program',
    'Jenis Program',
    'Target Peserta',
    'Durasi',
    'Tahapan Program',
    'Kegiatan',
    'Materi',
    'Kategori Kegiatan',
    'Metode',
    'Evaluasi',
    'Tahun',
    'Sumber Link',
    'Catatan',
  ]);
  assert.equal(wb.worksheets[0].rowCount, CORPORATE_PROGRAMS.length + 1);

  const s2Headers = (wb.worksheets[1].getRow(1).values as (string | undefined)[]).slice(1);
  assert.deepEqual(s2Headers, [
    'Perusahaan',
    'Program',
    'Hari/Minggu/Bulan',
    'Waktu',
    'Durasi Sesi',
    'Kegiatan',
    'Materi',
    'Metode',
    'Lokasi (kelas/kebun/pabrik)',
    'Sumber Link',
  ]);
  assert.equal(wb.worksheets[1].rowCount, CORPORATE_SCHEDULES.length + 1);

  const s3Headers = (wb.worksheets[2].getRow(1).values as (string | undefined)[]).slice(1);
  assert.deepEqual(s3Headers, [
    'Nama Perusahaan',
    'Nama Program',
    'Durasi',
    'Kegiatan Fisik',
    'Mental dan Disiplin',
    'Leadership',
    'Teamwork',
    'Teknis Kebun',
    'Teknis Pabrik',
    'Sustainability',
    'K3',
    'Praktik Lapangan',
    'Rotasi',
    'Mentoring',
    'Assessment',
    'Kelengkapan Sumber',
  ]);
  assert.equal(wb.worksheets[2].rowCount, CORPORATE_PROGRAMS.length + 1);

  const buf = await wb.xlsx.writeBuffer();
  assert.ok(buf.byteLength > 10000, 'Generated XLSX buffer should be non-trivial');
});

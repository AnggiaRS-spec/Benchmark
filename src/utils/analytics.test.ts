import test from 'node:test';
import assert from 'node:assert/strict';
import ExcelJS from 'exceljs';
import { ACTIVITIES, INSTITUTIONS, INSIGHT_BLOCKS, TARUNA_DAILY_SCHEDULE } from '../data/benchmarkData';
import { ALL_CATEGORIES } from '../types/benchmark';
import {
  buildCategoryMatrix,
  computeDatasetMetrics,
  filterActivities,
  isDirectNonHomepageUrl,
} from './analytics';
import { generateBenchmarkExcelBuffer } from './excelExport';

test('every benchmark activity has a valid direct non-homepage URL and required fields', () => {
  assert.ok(ACTIVITIES.length >= 30, 'Expected at least 30 verified activities');

  for (const act of ACTIVITIES) {
    assert.ok(act.institution.length > 0, `Missing institution for ${act.id}`);
    assert.ok(act.program.length > 0, `Missing program for ${act.id}`);
    assert.ok(act.categories.length > 0, `Missing categories for ${act.id}`);
    assert.ok(act.duration.length > 0, `Missing duration text for ${act.id}`);
    assert.ok(act.year.length === 4, `Expected 4-digit year for ${act.id}`);
    assert.equal(
      isDirectNonHomepageUrl(act.sourceUrl),
      true,
      `Expected direct non-homepage URL for ${act.id}: ${act.sourceUrl}`
    );
    assert.equal(
      /kompas\.(com|id)/i.test(act.sourceUrl),
      false,
      `Paywalled Kompas domain is forbidden for ${act.id}: ${act.sourceUrl}`
    );
  }

  assert.ok(TARUNA_DAILY_SCHEDULE.length >= 14, 'Expected full official Taruna daily schedule slots');
  for (const slot of TARUNA_DAILY_SCHEDULE) {
    assert.equal(
      isDirectNonHomepageUrl(slot.sourceUrl),
      true,
      `Expected direct non-homepage URL for ${slot.id}: ${slot.sourceUrl}`
    );
    assert.equal(
      /kompas\.(com|id)/i.test(slot.sourceUrl),
      false,
      `Paywalled Kompas domain is forbidden for ${slot.id}: ${slot.sourceUrl}`
    );
  }
});

test('all 13 required benchmark categories have verified institution coverage', () => {
  const matrix = buildCategoryMatrix(ACTIVITIES, INSTITUTIONS);
  assert.equal(matrix.length, 13);

  for (const cat of ALL_CATEGORIES) {
    const row = matrix.find((r) => r.category === cat);
    assert.ok(row, `Missing category row for ${cat}`);
    assert.ok(row.totalActivities > 0, `Expected at least 1 activity for category ${cat}`);
    assert.ok(row.institutionCount > 0, `Expected at least 1 institution for category ${cat}`);
  }
});

test('filterActivities filters accurately by institution, category, programType, and search query', () => {
  const akpyFisik = filterActivities(ACTIVITIES, {
    search: '',
    institutionId: 'akpy-stiper',
    category: 'Fisik',
    programType: 'ALL',
  });
  assert.equal(akpyFisik.length, 2);
  assert.ok(akpyFisik.every((a) => a.institutionId === 'akpy-stiper' && a.categories.includes('Fisik')));

  const ispoSearch = filterActivities(ACTIVITIES, {
    search: 'ISPO',
    institutionId: 'ALL',
    category: 'Lingkungan',
    programType: 'Pelatihan Profesional',
  });
  assert.ok(ispoSearch.length >= 1);
  assert.ok(ispoSearch.some((a) => a.program.includes('ISPO')));

  const noMatch = filterActivities(ACTIVITIES, {
    search: 'nonexistent-keyword-xyz-999',
    institutionId: 'ALL',
    category: 'ALL',
    programType: 'ALL',
  });
  assert.equal(noMatch.length, 0);
});

test('computeDatasetMetrics returns exact counts matching dataset', () => {
  const metrics = computeDatasetMetrics(ACTIVITIES, INSTITUTIONS);
  assert.equal(metrics.totalInstitutions, INSTITUTIONS.length);
  assert.equal(metrics.totalActivities, ACTIVITIES.length);
  assert.equal(metrics.totalCategoriesCovered, 13);
  assert.equal(metrics.verifiedDirectLinks, ACTIVITIES.length);
  assert.equal(metrics.explicitDurationCount + metrics.missingDurationCount, ACTIVITIES.length);
});

test('generateBenchmarkExcelBuffer creates a valid 5-sheet .xlsx workbook with all required sheets and rows', async () => {
  const buffer = await generateBenchmarkExcelBuffer(ACTIVITIES);
  assert.ok(buffer.byteLength > 10000, 'Expected substantial .xlsx binary payload');

  const reloaded = new ExcelJS.Workbook();
  await reloaded.xlsx.load(buffer);

  const sheetNames = reloaded.worksheets.map((ws) => ws.name);
  assert.deepEqual(sheetNames, [
    'Benchmark Kegiatan',
    'Ringkasan Institusi',
    'Perbandingan Kategori',
    'Insight & Benchmarking',
    'Jadwal Taruna Nusantara',
  ]);

  const s1 = reloaded.getWorksheet('Benchmark Kegiatan')!;
  assert.equal(s1.rowCount, ACTIVITIES.length + 1);
  assert.equal(s1.getRow(1).getCell(1).value, 'Institusi');
  assert.equal(s1.getRow(1).getCell(14).value, 'Sumber Link');

  const s2 = reloaded.getWorksheet('Ringkasan Institusi')!;
  assert.equal(s2.rowCount, INSTITUTIONS.length + 1);

  const s3 = reloaded.getWorksheet('Perbandingan Kategori')!;
  assert.equal(s3.rowCount, 14); // 1 header + 13 categories

  const s4 = reloaded.getWorksheet('Insight & Benchmarking')!;
  assert.ok(s4.rowCount >= INSIGHT_BLOCKS.length + 6);

  const s5 = reloaded.getWorksheet('Jadwal Taruna Nusantara')!;
  assert.equal(s5.rowCount, TARUNA_DAILY_SCHEDULE.length + 1);
});

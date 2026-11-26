import ExcelJS from 'exceljs';
import {
  ACTIVITIES,
  CORPORATE_BLUEPRINT,
  INSIGHT_BLOCKS,
  INSTITUTIONS,
  TARUNA_DAILY_SCHEDULE,
} from '../data/benchmarkData';
import { buildCategoryMatrix, countActivitiesByInstitution } from './analytics';
import { BenchmarkActivity } from '../types/benchmark';

const HEADER_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FF14532D' },
};

const SUBHEADER_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFECFDF3' },
};

const ZEBRA_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFF8FAF9' },
};

const BORDER_THIN: Partial<ExcelJS.Borders> = {
  top: { style: 'thin', color: { argb: 'FFD6DDD8' } },
  left: { style: 'thin', color: { argb: 'FFD6DDD8' } },
  bottom: { style: 'thin', color: { argb: 'FFD6DDD8' } },
  right: { style: 'thin', color: { argb: 'FFD6DDD8' } },
};

function styleHeaderRow(row: ExcelJS.Row) {
  row.height = 28;
  row.eachCell((cell) => {
    cell.fill = HEADER_FILL;
    cell.font = {
      name: 'Calibri',
      size: 11,
      bold: true,
      color: { argb: 'FFFFFFFF' },
    };
    cell.alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
    cell.border = BORDER_THIN;
  });
}

function styleDataRow(row: ExcelJS.Row, isZebra: boolean) {
  row.eachCell({ includeEmpty: true }, (cell) => {
    if (isZebra) {
      cell.fill = ZEBRA_FILL;
    }
    if (!cell.font || !cell.font.color) {
      cell.font = { name: 'Calibri', size: 10, color: { argb: 'FF111816' } };
    }
    cell.alignment = {
      vertical: 'top',
      horizontal: cell.alignment?.horizontal || 'left',
      wrapText: true,
    };
    cell.border = BORDER_THIN;
  });
}

export async function createBenchmarkWorkbook(
  activitiesToExport: BenchmarkActivity[] = ACTIVITIES
): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'SawitBench Research';
  workbook.created = new Date();
  workbook.modified = new Date();

  // =========================================================================
  // SHEET 1: Benchmark Kegiatan
  // =========================================================================
  const s1 = workbook.addWorksheet('Benchmark Kegiatan', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s1.columns = [
    { header: 'Institusi', key: 'institution', width: 28 },
    { header: 'Program', key: 'program', width: 34 },
    { header: 'Jenis Program', key: 'programType', width: 24 },
    { header: 'Kategori', key: 'categories', width: 26 },
    { header: 'Target Peserta', key: 'targetParticipants', width: 28 },
    { header: 'Aktivitas/Materi', key: 'activitiesAndMaterials', width: 46 },
    { header: 'Durasi', key: 'duration', width: 26 },
    { header: 'Jadwal', key: 'schedule', width: 28 },
    { header: 'Frekuensi', key: 'frequency', width: 22 },
    { header: 'Metode Pelaksanaan', key: 'deliveryMethod', width: 32 },
    { header: 'Tujuan', key: 'objectives', width: 36 },
    { header: 'Evaluasi', key: 'evaluation', width: 30 },
    { header: 'Tahun', key: 'year', width: 10 },
    { header: 'Sumber Link', key: 'sourceUrl', width: 42 },
    { header: 'Catatan', key: 'notes', width: 36 },
  ];

  styleHeaderRow(s1.getRow(1));

  activitiesToExport.forEach((act, idx) => {
    const row = s1.addRow({
      institution: act.institution,
      program: act.program,
      programType: act.programType,
      categories: act.categories.join(', '),
      targetParticipants: act.targetParticipants,
      activitiesAndMaterials: `${act.description}\n\nMateri/Aktivitas: ${act.activitiesAndMaterials}`,
      duration: act.duration,
      schedule: act.schedule,
      frequency: act.frequency,
      deliveryMethod: act.deliveryMethod,
      objectives: act.objectives,
      evaluation: act.evaluation,
      year: act.year,
      sourceUrl: { text: act.sourceUrl, hyperlink: act.sourceUrl },
      notes: act.notes,
    });

    styleDataRow(row, idx % 2 === 1);
    const linkCell = row.getCell('sourceUrl');
    linkCell.font = {
      name: 'Calibri',
      size: 10,
      color: { argb: 'FF14532D' },
      underline: true,
    };
    const yearCell = row.getCell('year');
    yearCell.alignment = { vertical: 'top', horizontal: 'center' };
  });

  s1.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: 15 },
  };

  // =========================================================================
  // SHEET 2: Ringkasan Institusi
  // =========================================================================
  const s2 = workbook.addWorksheet('Ringkasan Institusi', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s2.columns = [
    { header: 'Peringkat Kelengkapan', key: 'rank', width: 12 },
    { header: 'Institusi', key: 'name', width: 34 },
    { header: 'Tipe Institusi', key: 'institutionType', width: 30 },
    { header: 'Lokasi', key: 'location', width: 26 },
    { header: 'Jumlah Program Terverifikasi', key: 'programCount', width: 16 },
    { header: 'Program Unggulan', key: 'flagshipPrograms', width: 42 },
    { header: 'Fokus Pembinaan', key: 'coachingFocus', width: 38 },
    { header: 'Kelengkapan Data', key: 'completeness', width: 18 },
    { header: 'Detail Kelengkapan', key: 'completenessDetail', width: 36 },
    { header: 'Keunggulan Program', key: 'keyStrengths', width: 40 },
    { header: 'Keterbatasan Data', key: 'dataLimitations', width: 38 },
  ];

  styleHeaderRow(s2.getRow(1));

  INSTITUTIONS.forEach((inst, idx) => {
    const row = s2.addRow({
      rank: inst.rank,
      name: inst.name,
      institutionType: inst.institutionType,
      location: inst.location,
      programCount: countActivitiesByInstitution(ACTIVITIES, inst.id),
      flagshipPrograms: inst.flagshipPrograms,
      coachingFocus: inst.coachingFocus,
      completeness: inst.completeness,
      completenessDetail: inst.completenessDetail,
      keyStrengths: inst.keyStrengths,
      dataLimitations: inst.dataLimitations,
    });

    styleDataRow(row, idx % 2 === 1);
    row.getCell('rank').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('programCount').alignment = { vertical: 'top', horizontal: 'center' };
  });

  s2.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: 11 },
  };

  // =========================================================================
  // SHEET 3: Perbandingan Kategori
  // =========================================================================
  const s3 = workbook.addWorksheet('Perbandingan Kategori', {
    views: [{ state: 'frozen', xSplit: 1, ySplit: 1 }],
  });

  const matrix = buildCategoryMatrix(ACTIVITIES, INSTITUTIONS);

  s3.columns = [
    { header: 'Kategori Kegiatan', key: 'category', width: 22 },
    { header: 'Total Kegiatan', key: 'totalActivities', width: 15 },
    { header: 'Jumlah Institusi', key: 'institutionCount', width: 16 },
    { header: 'Daftar Institusi yang Memiliki', key: 'institutionsCovered', width: 44 },
    ...INSTITUTIONS.map((inst) => ({
      header: inst.shortName,
      key: inst.id,
      width: 18,
    })),
  ];

  styleHeaderRow(s3.getRow(1));

  matrix.forEach((rowData, idx) => {
    const record: Record<string, string | number> = {
      category: rowData.category,
      totalActivities: rowData.totalActivities,
      institutionCount: rowData.institutionCount,
      institutionsCovered:
        rowData.institutionsCovered.length > 0
          ? rowData.institutionsCovered.join('; ')
          : 'Tidak ditemukan pada sumber',
    };

    for (const inst of INSTITUTIONS) {
      const items = rowData.byInstitution[inst.id] || [];
      record[inst.id] = items.length > 0 ? `Ada (${items.length})` : '-';
    }

    const row = s3.addRow(record);
    styleDataRow(row, idx % 2 === 1);
    row.getCell('totalActivities').alignment = { vertical: 'top', horizontal: 'center' };
    row.getCell('institutionCount').alignment = { vertical: 'top', horizontal: 'center' };

    for (const inst of INSTITUTIONS) {
      const cell = row.getCell(inst.id);
      cell.alignment = { vertical: 'top', horizontal: 'center' };
      if (String(cell.value).startsWith('Ada')) {
        cell.fill = SUBHEADER_FILL;
        cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FF14532D' } };
      }
    }
  });

  // =========================================================================
  // SHEET 4: Insight & Benchmarking
  // =========================================================================
  const s4 = workbook.addWorksheet('Insight & Benchmarking', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s4.columns = [
    { header: 'No', key: 'number', width: 8 },
    { header: 'Dimensi Analisis', key: 'dimension', width: 32 },
    { header: 'Temuan Utama', key: 'headline', width: 42 },
    { header: 'Ringkasan Analisis', key: 'summary', width: 46 },
    { header: 'Poin Bukti & Detail', key: 'keyFindings', width: 56 },
    { header: 'Institusi Rujukan', key: 'evidenceInstitutions', width: 32 },
  ];

  styleHeaderRow(s4.getRow(1));

  INSIGHT_BLOCKS.forEach((block, idx) => {
    const row = s4.addRow({
      number: block.number,
      dimension: block.dimension,
      headline: block.headline,
      summary: block.summary,
      keyFindings: block.keyFindings.map((f, i) => `${i + 1}. ${f}`).join('\n'),
      evidenceInstitutions: block.evidenceInstitutions.join(', '),
    });
    styleDataRow(row, idx % 2 === 1);
    row.getCell('number').alignment = { vertical: 'top', horizontal: 'center' };
  });

  // Add Corporate Blueprint section cleanly below Insights in Sheet 4
  s4.addRow({});
  const bpTitleRow = s4.addRow({
    number: 'BP',
    dimension: 'REKOMENDASI ARSITEKTUR PROGRAM PERUSAHAAN KELAPA SAWIT (4 FASE)',
    headline: 'Fase & Nama Program',
    summary: 'Institusi Benchmark & Durasi Rekomendasi',
    keyFindings: 'Aktivitas Inti yang Diadaptasi',
    evidenceInstitutions: 'Target Kompetensi / Output',
  });
  styleHeaderRow(bpTitleRow);

  CORPORATE_BLUEPRINT.forEach((phase, idx) => {
    const row = s4.addRow({
      number: phase.phase,
      dimension: phase.title,
      headline: phase.recommendedDuration,
      summary: phase.benchmarkSource,
      keyFindings: phase.coreActivities,
      evidenceInstitutions: phase.targetOutcome,
    });
    styleDataRow(row, idx % 2 === 1);
  });

  // =========================================================================
  // SHEET 5: Jadwal Taruna Nusantara (Harian vs Periodik)
  // =========================================================================
  const s5 = workbook.addWorksheet('Jadwal Taruna Nusantara', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s5.columns = [
    { header: 'Jam (WIB)', key: 'timeRange', width: 16 },
    { header: 'Durasi', key: 'durationLabel', width: 20 },
    { header: 'Kegiatan Harian', key: 'activity', width: 36 },
    { header: 'Kategori Utama', key: 'category', width: 16 },
    { header: 'Rincian Pelaksanaan', key: 'details', width: 42 },
    { header: 'Variasi Hari / Catatan', key: 'dayVariation', width: 34 },
    { header: 'Adaptasi untuk Perusahaan Sawit', key: 'palmOilAdaptation', width: 44 },
    { header: 'Sumber Link', key: 'sourceUrl', width: 42 },
  ];

  styleHeaderRow(s5.getRow(1));

  TARUNA_DAILY_SCHEDULE.forEach((slot, idx) => {
    const row = s5.addRow({
      timeRange: slot.timeRange,
      durationLabel: slot.durationLabel,
      activity: slot.activity,
      category: slot.category,
      details: slot.details,
      dayVariation: slot.dayVariation,
      palmOilAdaptation: slot.palmOilAdaptation,
      sourceUrl: { text: slot.sourceUrl, hyperlink: slot.sourceUrl },
    });
    styleDataRow(row, idx % 2 === 1);
    row.getCell('sourceUrl').font = {
      name: 'Calibri',
      size: 10,
      color: { argb: 'FF14532D' },
      underline: true,
    };
  });

  return workbook;
}

export async function generateBenchmarkExcelBuffer(
  activitiesToExport: BenchmarkActivity[] = ACTIVITIES
): Promise<ArrayBuffer> {
  const workbook = await createBenchmarkWorkbook(activitiesToExport);
  return workbook.xlsx.writeBuffer();
}

export async function downloadBenchmarkExcel(
  activitiesToExport: BenchmarkActivity[] = ACTIVITIES,
  fileName = 'Benchmark_Pembinaan_Pelatihan_Sawit.xlsx'
): Promise<void> {
  const buffer = await generateBenchmarkExcelBuffer(activitiesToExport);
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

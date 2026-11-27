import ExcelJS from 'exceljs';
import {
  CORPORATE_COMPANIES,
  CORPORATE_INSIGHTS,
  CORPORATE_PROGRAMS,
  CORPORATE_SCHEDULES,
  RECOMMENDED_CORPORATE_PHASES,
} from '../data/corporateBenchmarkData';
import {
  CorporateScheduleEntry,
  CorporateTrainingProgram,
} from '../types/corporateBenchmark';
import { buildCorporateComparisonRows } from './corporateAnalytics';

const HEADER_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FF14532D' },
};

const SECTION_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FF1F3A2C' },
};

const POSITIVE_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFECFDF3' },
};

const WARN_FILL: ExcelJS.Fill = {
  type: 'pattern',
  pattern: 'solid',
  fgColor: { argb: 'FFFFFBEB' },
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

function styleHeaderRow(row: ExcelJS.Row, fill: ExcelJS.Fill = HEADER_FILL) {
  row.height = 30;
  row.eachCell((cell) => {
    cell.fill = fill;
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

function styleLinkCell(cell: ExcelJS.Cell) {
  cell.font = {
    name: 'Calibri',
    size: 10,
    color: { argb: 'FF14532D' },
    underline: true,
  };
}

export async function createCorporateBenchmarkWorkbook(
  programsToExport: CorporateTrainingProgram[] = CORPORATE_PROGRAMS,
  schedulesToExport: CorporateScheduleEntry[] = CORPORATE_SCHEDULES
): Promise<ExcelJS.Workbook> {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = 'SawitBench Corporate Research';
  workbook.created = new Date();
  workbook.modified = new Date();

  // =========================================================================
  // SHEET 1 – Benchmark Program Perusahaan (14 exact columns requested)
  // =========================================================================
  const s1 = workbook.addWorksheet('Benchmark Program Perusahaan', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s1.columns = [
    { header: 'Perusahaan', key: 'company', width: 32 },
    { header: 'Nama Program', key: 'program', width: 34 },
    { header: 'Jenis Program', key: 'programType', width: 26 },
    { header: 'Target Peserta', key: 'targetParticipants', width: 32 },
    { header: 'Durasi', key: 'duration', width: 28 },
    { header: 'Tahapan Program', key: 'stages', width: 38 },
    { header: 'Kegiatan', key: 'activities', width: 42 },
    { header: 'Materi', key: 'materials', width: 44 },
    { header: 'Kategori Kegiatan', key: 'categories', width: 28 },
    { header: 'Metode', key: 'methods', width: 34 },
    { header: 'Evaluasi', key: 'evaluation', width: 34 },
    { header: 'Tahun', key: 'year', width: 12 },
    { header: 'Sumber Link', key: 'sourceUrl', width: 44 },
    { header: 'Catatan', key: 'notes', width: 42 },
  ];

  styleHeaderRow(s1.getRow(1));

  programsToExport.forEach((prog, idx) => {
    const row = s1.addRow({
      company: prog.companyName,
      program: prog.programName,
      programType: prog.programType,
      targetParticipants: prog.targetParticipants,
      duration: prog.duration,
      stages: prog.stages,
      activities: prog.activities,
      materials: prog.materials,
      categories: prog.categories.join(', '),
      methods: prog.learningMethods,
      evaluation: prog.evaluation,
      year: prog.year,
      sourceUrl: { text: prog.sourceUrl, hyperlink: prog.sourceUrl },
      notes: `[${prog.verificationStatus} · ${prog.implementationStatus}] ${prog.notes}`,
    });

    styleDataRow(row, idx % 2 === 1);
    styleLinkCell(row.getCell('sourceUrl'));
    row.getCell('year').alignment = { vertical: 'top', horizontal: 'center' };
  });

  s1.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: 14 },
  };

  // =========================================================================
  // SHEET 2 – Jadwal Pelatihan (10 exact columns requested)
  // =========================================================================
  const s2 = workbook.addWorksheet('Jadwal Pelatihan', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s2.columns = [
    { header: 'Perusahaan', key: 'company', width: 30 },
    { header: 'Program', key: 'program', width: 32 },
    { header: 'Hari/Minggu/Bulan', key: 'period', width: 30 },
    { header: 'Waktu', key: 'timeRange', width: 24 },
    { header: 'Durasi Sesi', key: 'sessionDuration', width: 28 },
    { header: 'Kegiatan', key: 'activity', width: 36 },
    { header: 'Materi', key: 'material', width: 42 },
    { header: 'Metode', key: 'method', width: 30 },
    { header: 'Lokasi (kelas/kebun/pabrik)', key: 'location', width: 32 },
    { header: 'Sumber Link', key: 'sourceUrl', width: 44 },
  ];

  styleHeaderRow(s2.getRow(1));

  schedulesToExport.forEach((slot, idx) => {
    const row = s2.addRow({
      company: slot.companyName,
      program: slot.programName,
      period: slot.periodLabel,
      timeRange: slot.timeRange,
      sessionDuration: slot.sessionDuration,
      activity: slot.activity,
      material: slot.material,
      method: slot.method,
      location: slot.location,
      sourceUrl: { text: slot.sourceUrl, hyperlink: slot.sourceUrl },
    });

    styleDataRow(row, idx % 2 === 1);
    styleLinkCell(row.getCell('sourceUrl'));
  });

  s2.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: 10 },
  };

  // =========================================================================
  // SHEET 3 – Perbandingan Perusahaan (16 exact columns requested)
  // =========================================================================
  const s3 = workbook.addWorksheet('Perbandingan Perusahaan', {
    views: [{ state: 'frozen', xSplit: 2, ySplit: 1 }],
  });

  s3.columns = [
    { header: 'Nama Perusahaan', key: 'companyName', width: 28 },
    { header: 'Nama Program', key: 'programName', width: 32 },
    { header: 'Durasi', key: 'duration', width: 24 },
    { header: 'Kegiatan Fisik', key: 'physical', width: 26 },
    { header: 'Mental dan Disiplin', key: 'mentalDiscipline', width: 26 },
    { header: 'Leadership', key: 'leadership', width: 26 },
    { header: 'Teamwork', key: 'teamwork', width: 24 },
    { header: 'Teknis Kebun', key: 'estateTechnical', width: 26 },
    { header: 'Teknis Pabrik', key: 'millTechnical', width: 26 },
    { header: 'Sustainability', key: 'sustainability', width: 26 },
    { header: 'K3', key: 'k3', width: 26 },
    { header: 'Praktik Lapangan', key: 'fieldPractice', width: 26 },
    { header: 'Rotasi', key: 'rotation', width: 26 },
    { header: 'Mentoring', key: 'mentoring', width: 26 },
    { header: 'Assessment', key: 'assessment', width: 26 },
    { header: 'Kelengkapan Sumber', key: 'sourceCompleteness', width: 20 },
  ];

  styleHeaderRow(s3.getRow(1));

  const comparisonRows = buildCorporateComparisonRows(programsToExport);
  comparisonRows.forEach((item, idx) => {
    const row = s3.addRow({
      companyName: item.companyShortName,
      programName: item.programName,
      duration: item.duration,
      physical: item.physical,
      mentalDiscipline: item.mentalDiscipline,
      leadership: item.leadership,
      teamwork: item.teamwork,
      estateTechnical: item.estateTechnical,
      millTechnical: item.millTechnical,
      sustainability: item.sustainability,
      k3: item.k3,
      fieldPractice: item.fieldPractice,
      rotation: item.rotation,
      mentoring: item.mentoring,
      assessment: item.assessment,
      sourceCompleteness: item.sourceCompleteness,
    });

    styleDataRow(row, idx % 2 === 1);
    const statusCell = row.getCell('sourceCompleteness');
    statusCell.alignment = { vertical: 'top', horizontal: 'center' };
    if (item.sourceCompleteness === 'Terverifikasi') {
      statusCell.fill = POSITIVE_FILL;
      statusCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FF14532D' } };
    } else if (item.sourceCompleteness === 'Informasi Sebagian') {
      statusCell.fill = WARN_FILL;
      statusCell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FFB45309' } };
    }
  });

  s3.autoFilter = {
    from: { row: 1, column: 1 },
    to: { row: 1, column: 16 },
  };

  // =========================================================================
  // SHEET 4 – Insight & Rekomendasi
  // =========================================================================
  const s4 = workbook.addWorksheet('Insight & Rekomendasi', {
    views: [{ state: 'frozen', ySplit: 1 }],
  });

  s4.columns = [
    { header: 'No', key: 'number', width: 10 },
    { header: 'Dimensi Analisis', key: 'dimension', width: 34 },
    { header: 'Temuan Utama', key: 'headline', width: 42 },
    { header: 'Ringkasan Analisis', key: 'summary', width: 46 },
    { header: 'Bukti Konkret & Detail', key: 'evidence', width: 58 },
    { header: 'Perusahaan Rujukan', key: 'companies', width: 32 },
  ];

  styleHeaderRow(s4.getRow(1));

  CORPORATE_INSIGHTS.forEach((insight, idx) => {
    const row = s4.addRow({
      number: insight.number,
      dimension: insight.dimension,
      headline: insight.headline,
      summary: insight.summary,
      evidence: insight.evidencePoints.map((pt, i) => `${i + 1}. ${pt}`).join('\n'),
      companies: insight.referencedCompanies.join(', '),
    });
    styleDataRow(row, idx % 2 === 1);
    row.getCell('number').alignment = { vertical: 'top', horizontal: 'center' };
  });

  // Blueprint Recommendation Section
  s4.addRow({});
  const recHeader = s4.addRow({
    number: 'FASE',
    dimension: 'REKOMENDASI PROGRAM PEMBINAAN PERUSAHAAN KELAPA SAWIT (5 FASE)',
    headline: 'Durasi Rekomendasi',
    summary: 'Perusahaan Benchmark Rujukan',
    evidence: 'Kegiatan & Materi Inti yang Direkomendasikan',
    companies: 'Metode & Evaluasi Kelulusan',
  });
  styleHeaderRow(recHeader, SECTION_FILL);

  RECOMMENDED_CORPORATE_PHASES.forEach((phase, idx) => {
    const row = s4.addRow({
      number: phase.phase,
      dimension: phase.title,
      headline: phase.duration,
      summary: phase.benchmarkCompanies,
      evidence: phase.activitiesAndMaterials,
      companies: phase.deliveryAndEvaluation,
    });
    styleDataRow(row, idx % 2 === 1);
    row.getCell('number').alignment = { vertical: 'top', horizontal: 'center' };
  });

  // Ranking Basis & 2024 Data Transparency Table
  s4.addRow({});
  const rankHeader = s4.addRow({
    number: 'RANK',
    dimension: 'BASIS PEMILIHAN 5 PERUSAHAAN SAWIT BESAR INDONESIA',
    headline: 'Luas Areal Tertanam & Skala',
    summary: 'Dasar Peringkat & Tahun Data',
    evidence: 'Pusat Pelatihan & Realisasi Jam Pelatihan',
    companies: 'Laporan Resmi (AR/SR)',
  });
  styleHeaderRow(rankHeader, SECTION_FILL);

  CORPORATE_COMPANIES.forEach((comp, idx) => {
    const row = s4.addRow({
      number: String(comp.rank).padStart(2, '0'),
      dimension: comp.name,
      headline: `${comp.plantedAreaLabel} (${comp.dataYear})`,
      summary: comp.rankingBasis,
      evidence: `${comp.trainingCenter}\n${comp.avgTrainingHoursNote}`,
      companies: { text: comp.annualReportUrl, hyperlink: comp.annualReportUrl },
    });
    styleDataRow(row, idx % 2 === 1);
    row.getCell('number').alignment = { vertical: 'top', horizontal: 'center' };
    styleLinkCell(row.getCell('companies'));
  });

  return workbook;
}

export async function generateCorporateBenchmarkExcelBuffer(
  programsToExport: CorporateTrainingProgram[] = CORPORATE_PROGRAMS,
  schedulesToExport: CorporateScheduleEntry[] = CORPORATE_SCHEDULES
): Promise<ArrayBuffer> {
  const workbook = await createCorporateBenchmarkWorkbook(
    programsToExport,
    schedulesToExport
  );
  return workbook.xlsx.writeBuffer();
}

export async function downloadCorporateBenchmarkExcel(
  programsToExport: CorporateTrainingProgram[] = CORPORATE_PROGRAMS,
  schedulesToExport: CorporateScheduleEntry[] = CORPORATE_SCHEDULES,
  fileName = 'Benchmark_Pelatihan_Perusahaan_Sawit_Indonesia.xlsx'
): Promise<void> {
  const buffer = await generateCorporateBenchmarkExcelBuffer(
    programsToExport,
    schedulesToExport
  );
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

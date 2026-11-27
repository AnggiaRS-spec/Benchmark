import {
  ArrowRight,
  Download,
  ExternalLink,
  FileSpreadsheet,
  RotateCcw,
  Search,
} from 'lucide-react';
import {
  ALL_CORPORATE_CATEGORIES,
  ALL_CORPORATE_PROGRAM_TYPES,
  CorporateActivityCategory,
  CorporateCompanyProfile,
  CorporateProgramType,
  CorporateTrainingProgram,
  VerificationStatus,
} from '../types/corporateBenchmark';
import {
  CorporateDatasetMetrics,
  CorporateFilterState,
  countProgramsByCompany,
} from '../utils/corporateAnalytics';
import { formatSourceHost } from '../utils/analytics';

interface CorporateProgramsSectionProps {
  companies: CorporateCompanyProfile[];
  allPrograms: CorporateTrainingProgram[];
  filteredPrograms: CorporateTrainingProgram[];
  metrics: CorporateDatasetMetrics;
  filters: CorporateFilterState;
  onChangeFilters: (next: CorporateFilterState) => void;
  onResetFilters: () => void;
  onSelectProgram: (program: CorporateTrainingProgram) => void;
  onDownloadFullExcel: () => void;
  onDownloadFilteredExcel: () => void;
  isExporting: boolean;
}

const VERIFICATION_OPTIONS: VerificationStatus[] = [
  'Terverifikasi',
  'Informasi Sebagian',
  'Belum Terverifikasi',
];

export function CorporateProgramsSection({
  companies,
  allPrograms,
  filteredPrograms,
  metrics,
  filters,
  onChangeFilters,
  onResetFilters,
  onSelectProgram,
  onDownloadFullExcel,
  onDownloadFilteredExcel,
  isExporting,
}: CorporateProgramsSectionProps) {
  const hasActiveFilters =
    filters.search.trim().length > 0 ||
    filters.companyId !== 'ALL' ||
    filters.programType !== 'ALL' ||
    filters.category !== 'ALL' ||
    filters.verificationStatus !== 'ALL';

  const handleFilterCompany = (companyId: string) => {
    onChangeFilters({
      ...filters,
      companyId,
    });
    const el = document.getElementById('sheet-1-programs');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-10">
      {/* Executive Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
          <span>Riset Benchmarking Korporat Kelapa Sawit Indonesia</span>
          <span aria-hidden="true">·</span>
          <span>5 Perusahaan Sawit Besar (Data 2024–2026)</span>
          <span aria-hidden="true">·</span>
          <span>Workbook Excel 4 Sheet (.xlsx)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111816]">
          Benchmark Program Pelatihan, Management Trainee, Leadership &amp; K3 Perusahaan Kelapa Sawit Indonesia
        </h1>
        <p className="text-sm sm:text-base text-[#4B5953] leading-relaxed">
          Kompilasi terverifikasi program pengembangan SDM dari 5 grup perkebunan kelapa sawit
          terkemuka di Indonesia —{' '}
          <strong className="font-medium text-[#111816]">
            PT SMART Tbk / GAR, PT Astra Agro Lestari Tbk, First Resources Limited, Bumitama Agri
            Ltd, dan PT Triputra Agro Persada Tbk
          </strong>
          . Seluruh sumber dibuka dan diverifikasi langsung dari situs resmi korporat, portal
          akademi internal, Laporan Tahunan/Keberlanjutan (2024–2025), serta kanal rekrutmen kampus
          mitra tanpa mengarang jadwal atau durasi.
        </p>
      </section>

      {/* 4-Column KPI Strip */}
      <section
        aria-label="Ringkasan statistik riset perusahaan sawit"
        className="grid grid-cols-2 lg:grid-cols-4 border border-[#E2E7E4] bg-white rounded-lg divide-y lg:divide-y-0 lg:divide-x divide-[#E2E7E4]"
      >
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Perusahaan Besar Ditelusuri</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#111816]">
            {metrics.totalCompanies}
          </p>
          <p className="text-xs text-[#4B5953]">
            Dipilih berdasar luas areal 2024 &amp; kualitas dokumen
          </p>
        </div>
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Program Terdokumentasi</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#111816]">
            {metrics.totalPrograms}
          </p>
          <p className="text-xs text-[#4B5953]">
            {metrics.verifiedPrograms} terverifikasi · {metrics.partialPrograms} informasi sebagian
          </p>
        </div>
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Entri Jadwal / Tahapan</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#14532D]">
            {metrics.totalScheduleEntries}
          </p>
          <p className="text-xs text-[#4B5953]">
            Harian K3, event 4–18 hari, &amp; fase bulanan
          </p>
        </div>
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Tautan Sumber Langsung</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#111816]">
            {metrics.directVerifiedUrls} / {metrics.totalPrograms}
          </p>
          <p className="text-xs text-[#4B5953]">
            100% tautan primer non-homepage &amp; diverifikasi
          </p>
        </div>
      </section>

      {/* Excel Workbook Deliverable Bar */}
      <section className="bg-white border border-[#E2E7E4] rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#111816]">
            <FileSpreadsheet className="h-4 w-4 text-[#14532D] shrink-0" aria-hidden="true" />
            <span>
              File Excel Siap Unduh: Benchmark_Pelatihan_Perusahaan_Sawit_Indonesia.xlsx
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5953] leading-relaxed">
            Memuat tepat 4 sheet sesuai struktur riset:{' '}
            <strong className="font-medium text-[#111816]">
              Sheet 1 Benchmark Program Perusahaan
            </strong>{' '}
            (14 kolom),{' '}
            <strong className="font-medium text-[#111816]">Sheet 2 Jadwal Pelatihan</strong> (10
            kolom),{' '}
            <strong className="font-medium text-[#111816]">Sheet 3 Perbandingan Perusahaan</strong>{' '}
            (16 kolom), dan{' '}
            <strong className="font-medium text-[#111816]">Sheet 4 Insight &amp; Rekomendasi</strong>{' '}
            (10 dimensi analisis, blueprint 5 fase, dan basis peringkat 2024).
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onDownloadFullExcel}
            disabled={isExporting}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#14532D] bg-white border border-[#14532D]/35 hover:bg-[#ECFDF3] disabled:opacity-60 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
          >
            <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{isExporting ? 'Memproses .xlsx...' : 'Unduh Excel 4 Sheet (.xlsx)'}</span>
          </button>
        </div>
      </section>

      {/* Ranking Basis Table — 5 Major Indonesian Palm Oil Companies */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#111816]">
              Profil &amp; Basis Pemilihan 5 Perusahaan Kelapa Sawit Besar Indonesia
            </h2>
            <p className="text-sm text-[#4B5953] mt-1">
              Dipilih berdasarkan skala luas areal tertanam (data Laporan Tahunan &amp; Keberlanjutan
              2024–2025) serta kelengkapan dokumentasi program pelatihan resmi.
            </p>
          </div>
          <span className="text-xs font-mono-tabular text-[#64746D] whitespace-nowrap shrink-0">
            Tahun data skala: 2024–2025
          </span>
        </div>

        <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[960px]">
            <thead>
              <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4 w-64">Perusahaan &amp; Entitas</th>
                <th className="py-3 px-4 w-52">Luas Areal Tertanam &amp; Basis</th>
                <th className="py-3 px-4">Pusat Pelatihan &amp; Realisasi Jam Training</th>
                <th className="py-3 px-4 w-28 text-right">Program</th>
                <th className="py-3 px-4 w-36 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7E4] text-sm">
              {companies.map((comp) => {
                const count = countProgramsByCompany(allPrograms, comp.id);
                const completenessColor =
                  comp.sourceCompleteness === 'Sangat Lengkap'
                    ? 'text-[#14532D] font-semibold'
                    : comp.sourceCompleteness === 'Lengkap'
                      ? 'text-[#111816] font-medium'
                      : 'text-[#B45309] font-medium';
                return (
                  <tr
                    key={comp.id}
                    className="hover:bg-[#F8FAF9] transition-colors align-top"
                  >
                    <td className="py-4 px-4 font-mono-tabular text-xs text-[#64746D] text-center">
                      {String(comp.rank).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-4 space-y-1">
                      <div className="font-semibold text-[#111816]">{comp.name}</div>
                      <div className="text-xs text-[#64746D]">{comp.tickerOrGroup}</div>
                      <div className="text-xs text-[#64746D] flex flex-wrap items-center gap-1.5">
                        <span className={completenessColor}>{comp.sourceCompleteness}</span>
                        <span aria-hidden="true">·</span>
                        <a
                          href={comp.annualReportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#14532D] hover:underline inline-flex items-center gap-0.5"
                        >
                          AR/SR {comp.dataYear}
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </td>
                    <td className="py-4 px-4 space-y-1">
                      <div className="text-xs font-semibold text-[#111816]">
                        {comp.plantedAreaLabel}
                      </div>
                      <p className="text-xs text-[#64746D] leading-relaxed">
                        {comp.operationalRegions}
                      </p>
                    </td>
                    <td className="py-4 px-4 space-y-1.5">
                      <p className="text-xs font-medium text-[#111816] leading-relaxed">
                        {comp.trainingCenter}
                      </p>
                      <p className="text-xs text-[#4B5953] leading-relaxed">
                        {comp.avgTrainingHoursNote}
                      </p>
                    </td>
                    <td className="py-4 px-4 font-mono-tabular font-medium text-[#111816] text-right">
                      {count}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => handleFilterCompany(comp.id)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#14532D] hover:text-[#0F3F22] hover:underline whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
                      >
                        Filter {count} program
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sheet 1 — Benchmark Program Perusahaan */}
      <section id="sheet-1-programs" className="space-y-4 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-[#111816]">
              Sheet 1 — Benchmark Program Perusahaan
            </h2>
            <p className="text-sm text-[#4B5953] mt-1">
              Klik baris program untuk membuka rincian lengkap 20+ variabel (fisik, mental,
              leadership, teknis kebun/pabrik, K3, sustainability, metode, evaluasi, dan catatan
              validitas).
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono-tabular text-[#64746D]">
              Menampilkan {filteredPrograms.length} / {allPrograms.length} program
            </span>
            {hasActiveFilters && (
              <button
                type="button"
                onClick={onDownloadFilteredExcel}
                disabled={isExporting || filteredPrograms.length === 0}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#14532D] bg-white border border-[#14532D]/35 hover:bg-[#ECFDF3] disabled:opacity-50 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Ekspor Terfilter (.xlsx)</span>
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-[#E2E7E4] rounded-lg p-4 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
            <div className="lg:col-span-4 relative">
              <label htmlFor="corp-search" className="sr-only">
                Cari program, materi, atau metode pelatihan
              </label>
              <Search
                className="h-4 w-4 text-[#64746D] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="corp-search"
                type="search"
                value={filters.search}
                onChange={(e) =>
                  onChangeFilters({ ...filters, search: e.target.value })
                }
                placeholder="Cari program, materi, Rindam, 70:20:10, K3..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] placeholder:text-[#64746D] focus:bg-white focus:border-[#14532D] focus:outline-none"
              />
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="corp-company-filter" className="sr-only">
                Filter berdasarkan perusahaan
              </label>
              <select
                id="corp-company-filter"
                value={filters.companyId}
                onChange={(e) =>
                  onChangeFilters({ ...filters, companyId: e.target.value })
                }
                className="w-full px-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:bg-white focus:border-[#14532D] focus:outline-none"
              >
                <option value="ALL">Semua Perusahaan (5)</option>
                {companies.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.shortName}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="corp-type-filter" className="sr-only">
                Filter berdasarkan jenis program
              </label>
              <select
                id="corp-type-filter"
                value={filters.programType}
                onChange={(e) =>
                  onChangeFilters({
                    ...filters,
                    programType: e.target.value as CorporateProgramType | 'ALL',
                  })
                }
                className="w-full px-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:bg-white focus:border-[#14532D] focus:outline-none"
              >
                <option value="ALL">Semua Jenis Program</option>
                {ALL_CORPORATE_PROGRAM_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="corp-category-filter" className="sr-only">
                Filter berdasarkan kategori kegiatan
              </label>
              <select
                id="corp-category-filter"
                value={filters.category}
                onChange={(e) =>
                  onChangeFilters({
                    ...filters,
                    category: e.target.value as CorporateActivityCategory | 'ALL',
                  })
                }
                className="w-full px-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:bg-white focus:border-[#14532D] focus:outline-none"
              >
                <option value="ALL">Semua Kategori</option>
                {ALL_CORPORATE_CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2">
              <label htmlFor="corp-status-filter" className="sr-only">
                Filter berdasarkan status verifikasi
              </label>
              <select
                id="corp-status-filter"
                value={filters.verificationStatus}
                onChange={(e) =>
                  onChangeFilters({
                    ...filters,
                    verificationStatus: e.target.value as VerificationStatus | 'ALL',
                  })
                }
                className="w-full px-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:bg-white focus:border-[#14532D] focus:outline-none"
              >
                <option value="ALL">Semua Validitas</option>
                {VERIFICATION_OPTIONS.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex items-center justify-between pt-2 border-t border-[#EEF1EF] text-xs">
              <span className="text-[#4B5953]">
                Filter aktif diterapkan pada {filteredPrograms.length} program.
              </span>
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 font-medium text-[#14532D] hover:underline cursor-pointer"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Reset filter</span>
              </button>
            </div>
          )}
        </div>

        {/* Programs Data Table */}
        {filteredPrograms.length === 0 ? (
          <div className="bg-white border border-[#E2E7E4] rounded-lg p-10 text-center space-y-3">
            <p className="text-sm font-medium text-[#111816]">
              Tidak ada program perusahaan yang cocok dengan kombinasi filter saat ini.
            </p>
            <p className="text-xs text-[#64746D]">
              Ubah kata kunci pencarian atau reset filter untuk melihat seluruh {allPrograms.length}{' '}
              program terverifikasi.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-md transition-colors cursor-pointer"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Tampilkan Semua Program</span>
            </button>
          </div>
        ) : (
          <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1060px]">
              <thead>
                <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                  <th className="py-3 px-4 w-44">Perusahaan</th>
                  <th className="py-3 px-4 w-64">Nama Program &amp; Jenis</th>
                  <th className="py-3 px-4 w-48">Durasi &amp; Tahun</th>
                  <th className="py-3 px-4">Tahapan, Kegiatan &amp; Materi Utama</th>
                  <th className="py-3 px-4 w-44">Validitas &amp; Sumber</th>
                  <th className="py-3 px-4 w-28 text-right">Rincian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E7E4] text-sm">
                {filteredPrograms.map((prog) => {
                  const statusTone =
                    prog.verificationStatus === 'Terverifikasi'
                      ? 'text-[#14532D] font-semibold'
                      : prog.verificationStatus === 'Informasi Sebagian'
                        ? 'text-[#B45309] font-semibold'
                        : 'text-[#64746D] font-medium';

                  return (
                    <tr
                      key={prog.id}
                      className="hover:bg-[#F8FAF9] transition-colors align-top"
                    >
                      <td className="py-4 px-4 space-y-1">
                        <div className="font-semibold text-[#111816]">
                          {prog.companyShortName}
                        </div>
                        <div className="text-xs text-[#64746D] leading-relaxed">
                          {prog.implementationStatus}
                        </div>
                      </td>
                      <td className="py-4 px-4 space-y-1.5">
                        <div className="font-semibold text-[#111816] leading-snug">
                          {prog.programName}
                        </div>
                        <div className="text-xs text-[#4B5953]">{prog.programType}</div>
                        <div className="text-xs text-[#64746D] leading-relaxed">
                          {prog.categories.slice(0, 4).join(' · ')}
                          {prog.categories.length > 4
                            ? ` · +${prog.categories.length - 4}`
                            : ''}
                        </div>
                      </td>
                      <td className="py-4 px-4 space-y-1">
                        <div className="text-xs font-medium text-[#111816] leading-relaxed">
                          {prog.duration}
                        </div>
                        <div className="text-xs font-mono-tabular text-[#64746D]">
                          Tahun: {prog.year}
                        </div>
                      </td>
                      <td className="py-4 px-4 space-y-1.5">
                        <p className="text-xs text-[#31403A] leading-relaxed">
                          <strong className="font-medium text-[#111816]">Tahapan:</strong>{' '}
                          {prog.stages}
                        </p>
                        <p className="text-xs text-[#4B5953] leading-relaxed line-clamp-2">
                          <strong className="font-medium text-[#111816]">Materi:</strong>{' '}
                          {prog.materials}
                        </p>
                      </td>
                      <td className="py-4 px-4 space-y-1">
                        <div className={`text-xs ${statusTone}`}>
                          {prog.verificationStatus}
                        </div>
                        <a
                          href={prog.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#14532D] hover:underline inline-flex items-center gap-1 break-all"
                        >
                          <span>{formatSourceHost(prog.sourceUrl)}</span>
                          <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                        </a>
                      </td>
                      <td className="py-4 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => onSelectProgram(prog)}
                          aria-label={`Lihat rincian ${prog.programName}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-[#14532D] hover:text-[#0F3F22] hover:underline whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
                        >
                          Detail
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

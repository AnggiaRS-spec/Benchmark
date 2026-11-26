import { ArrowRight, ExternalLink, FileSpreadsheet } from 'lucide-react';
import { BenchmarkActivity, InstitutionSummary, NavSection } from '../types/benchmark';
import { countActivitiesByInstitution, DatasetMetrics } from '../utils/analytics';

interface OverviewSectionProps {
  institutions: InstitutionSummary[];
  activities: BenchmarkActivity[];
  metrics: DatasetMetrics;
  onInspectInstitution: (institutionId: string) => void;
  onNavigate: (section: NavSection) => void;
  onDownloadExcel: () => void;
  isExporting: boolean;
}

export function OverviewSection({
  institutions,
  activities,
  metrics,
  onInspectInstitution,
  onNavigate,
  onDownloadExcel,
  isExporting,
}: OverviewSectionProps) {
  return (
    <div className="space-y-10">
      {/* Executive Header */}
      <section className="space-y-4 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
          <span>Riset Benchmarking SDM Industri Kelapa Sawit</span>
          <span aria-hidden="true">·</span>
          <span>11 Institusi Rujukan</span>
          <span aria-hidden="true">·</span>
          <span>Format Ekspor Excel 5 Sheet (.xlsx)</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111816]">
          Benchmark Program Pendidikan, Orientasi, Pelatihan & Pembinaan Industri Kelapa Sawit
        </h1>
        <p className="text-sm sm:text-base text-[#4B5953] leading-relaxed">
          Kompilasi terverifikasi program pembinaan fisik, mental, disiplin, kepemimpinan, teknis
          perkebunan, praktik lapangan, K3, dan keberlanjutan ISPO dari institusi vokasi sawit,
          corporate university perkebunan, lembaga riset/regulator, serta SMA Taruna Nusantara.
          Setiap kegiatan ditautkan langsung ke halaman atau dokumen sumber resmi tanpa estimasi
          durasi yang dikarang.
        </p>
      </section>

      {/* Key Metrics Strip - Unboxed flat grid with hairline dividers */}
      <section
        aria-label="Ringkasan statistik riset"
        className="grid grid-cols-2 lg:grid-cols-4 border border-[#E2E7E4] bg-white rounded-lg divide-y lg:divide-y-0 lg:divide-x divide-[#E2E7E4]"
      >
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Institusi Ditelusuri</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#111816]">
            {metrics.totalInstitutions}
          </p>
          <p className="text-xs text-[#4B5953]">
            {metrics.completeInstitutionsCount} lengkap · {metrics.totalInstitutions - metrics.completeInstitutionsCount} cukup/parsial
          </p>
        </div>
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Program Terverifikasi</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#111816]">
            {metrics.totalActivities}
          </p>
          <p className="text-xs text-[#4B5953]">
            100% tautan langsung ke sumber asli
          </p>
        </div>
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Cakupan Kategori</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#14532D]">
            {metrics.totalCategoriesCovered} / 13
          </p>
          <p className="text-xs text-[#4B5953]">
            Fisik, mental, teknis, K3 hingga lingkungan
          </p>
        </div>
        <div className="p-5 space-y-1">
          <p className="text-xs text-[#64746D]">Transparansi Durasi</p>
          <p className="text-2xl font-bold font-mono-tabular text-[#111816]">
            {metrics.explicitDurationCount} / {metrics.totalActivities}
          </p>
          <p className="text-xs text-[#4B5953]">
            {metrics.missingDurationCount} ditandai tidak ditemukan di sumber
          </p>
        </div>
      </section>

      {/* Excel Workbook Deliverable Bar */}
      <section className="bg-white border border-[#E2E7E4] rounded-lg p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5 max-w-2xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#111816]">
            <FileSpreadsheet className="h-4 w-4 text-[#14532D] shrink-0" aria-hidden="true" />
            <span>Workbook Excel Lengkap: Benchmark_Pembinaan_Pelatihan_Sawit.xlsx</span>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5953] leading-relaxed">
            Berisi 5 sheet siap pakai: <strong className="font-medium text-[#111816]">Sheet 1 Benchmark Kegiatan</strong>,{' '}
            <strong className="font-medium text-[#111816]">Sheet 2 Ringkasan Institusi</strong>,{' '}
            <strong className="font-medium text-[#111816]">Sheet 3 Perbandingan Kategori</strong>,{' '}
            <strong className="font-medium text-[#111816]">Sheet 4 Insight & Benchmarking</strong>, dan{' '}
            <strong className="font-medium text-[#111816]">Sheet 5 Jadwal Taruna Nusantara</strong> dengan tautan aktif dan auto-filter.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onNavigate('activities')}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-[#31403A] bg-[#F1F3F2] hover:bg-[#E5EBE7] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
          >
            Lihat Semua Kegiatan
          </button>
          <button
            type="button"
            onClick={onDownloadExcel}
            disabled={isExporting}
            className="px-4 py-2 text-xs sm:text-sm font-medium text-[#14532D] bg-white border border-[#14532D]/35 hover:bg-[#ECFDF3] disabled:opacity-60 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
          >
            {isExporting ? 'Memproses...' : 'Unduh Workbook (.xlsx)'}
          </button>
        </div>
      </section>

      {/* Sheet 2 Table: Ringkasan Institusi (Ranked by Data Completeness) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <h2 className="text-xl font-bold text-[#111816]">
              Sheet 2 — Ringkasan & Peringkat Kelengkapan Institusi
            </h2>
            <p className="text-sm text-[#4B5953] mt-1">
              Diurutkan berdasarkan kelengkapan data konkret, validitas dokumen resmi, dan kedalaman informasi pelaksanaan kegiatan.
            </p>
          </div>
          <span className="text-xs font-mono-tabular text-[#64746D]">
            {institutions.length} institusi rujukan
          </span>
        </div>

        <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[920px]">
            <thead>
              <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                <th className="py-3 px-4 w-12 text-center">#</th>
                <th className="py-3 px-4 w-60">Institusi & Tipe</th>
                <th className="py-3 px-4 w-24 text-right">Program</th>
                <th className="py-3 px-4 w-36">Kelengkapan</th>
                <th className="py-3 px-4">Program Unggulan & Fokus Pembinaan</th>
                <th className="py-3 px-4 w-64">Keunggulan Utama</th>
                <th className="py-3 px-4 w-32 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7E4] text-sm">
              {institutions.map((inst) => {
                const count = countActivitiesByInstitution(activities, inst.id);
                const completenessColor =
                  inst.completeness === 'Lengkap'
                    ? 'text-[#14532D] font-semibold'
                    : inst.completeness === 'Cukup Lengkap'
                      ? 'text-[#31403A] font-medium'
                      : 'text-[#B45309] font-medium';

                return (
                  <tr
                    key={inst.id}
                    className="hover:bg-[#F8FAF9] transition-colors align-top"
                  >
                    <td className="py-4 px-4 font-mono-tabular text-xs text-[#64746D] text-center">
                      {String(inst.rank).padStart(2, '0')}
                    </td>
                    <td className="py-4 px-4 space-y-1">
                      <div className="font-semibold text-[#111816]">{inst.name}</div>
                      <div className="text-xs text-[#64746D]">{inst.institutionType}</div>
                      <div className="text-xs text-[#64746D]">
                        {inst.location} ·{' '}
                        <a
                          href={inst.officialPortal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#14532D] hover:underline inline-flex items-center gap-0.5"
                        >
                          Portal
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-mono-tabular font-medium text-[#111816] text-right">
                      {count}
                    </td>
                    <td className="py-4 px-4 space-y-1">
                      <div className={`text-xs ${completenessColor}`}>{inst.completeness}</div>
                      <p className="text-xs text-[#64746D] leading-relaxed">
                        {inst.completenessDetail}
                      </p>
                    </td>
                    <td className="py-4 px-4 space-y-1.5">
                      <p className="text-xs font-medium text-[#111816] leading-relaxed">
                        {inst.flagshipPrograms}
                      </p>
                      <p className="text-xs text-[#4B5953] leading-relaxed">
                        Fokus: {inst.coachingFocus}
                      </p>
                    </td>
                    <td className="py-4 px-4 space-y-1.5">
                      <p className="text-xs text-[#31403A] leading-relaxed">{inst.keyStrengths}</p>
                      <p className="text-xs text-[#64746D] leading-relaxed">
                        Catatan: {inst.dataLimitations}
                      </p>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => onInspectInstitution(inst.id)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#14532D] hover:text-[#0F3F22] hover:underline whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
                      >
                        Lihat {count} program
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
    </div>
  );
}

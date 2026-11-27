import { Download } from 'lucide-react';
import {
  CorporateInsightItem,
  RecommendedCorporatePhase,
} from '../types/corporateBenchmark';

interface CorporateInsightsSectionProps {
  insights: CorporateInsightItem[];
  recommendedPhases: RecommendedCorporatePhase[];
  onDownloadExcel: () => void;
  isExporting: boolean;
}

export function CorporateInsightsSection({
  insights,
  recommendedPhases,
  onDownloadExcel,
  isExporting,
}: CorporateInsightsSectionProps) {
  return (
    <div className="space-y-10">
      <section className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
            <span>Sheet 4 Workbook Excel</span>
            <span aria-hidden="true">·</span>
            <span>10 Dimensi Analisis Komparatif</span>
            <span aria-hidden="true">·</span>
            <span>Rekomendasi Arsitektur 5 Fase</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111816]">
            Sheet 4 — Insight &amp; Rekomendasi Program Pembinaan Korporat Sawit
          </h1>
          <p className="text-sm text-[#4B5953] leading-relaxed">
            Sintesis menyeluruh dari 5 perusahaan kelapa sawit besar Indonesia mencakup pola
            kegiatan paling umum, diferensiasi antarperusahaan, durasi terpanjang, kelengkapan
            sumber, pembinaan fisik/karakter, rasio kelas vs praktik, rotasi, dan rekomendasi
            blueprint yang siap diadaptasi.
          </p>
        </div>
        <button
          type="button"
          onClick={onDownloadExcel}
          disabled={isExporting}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-[#14532D] bg-white border border-[#14532D]/35 hover:bg-[#ECFDF3] disabled:opacity-60 rounded-md transition-colors whitespace-nowrap shrink-0 self-start md:self-end cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{isExporting ? 'Memproses .xlsx...' : 'Unduh Excel 4 Sheet (.xlsx)'}</span>
        </button>
      </section>

      {/* 10 Analytical Insight Blocks */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-[#111816]">
          Analisis Lintas Perusahaan (10 Dimensi Utama)
        </h2>

        <div className="bg-white border border-[#E2E7E4] rounded-lg divide-y divide-[#E2E7E4]">
          {insights.map((item) => (
            <article key={item.id} className="p-6 space-y-3">
              <div className="flex flex-wrap items-baseline gap-2.5">
                <span className="font-mono-tabular text-xs font-semibold text-[#14532D]">
                  {item.number}.
                </span>
                <span className="text-xs font-medium text-[#64746D]">
                  {item.dimension}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#111816] leading-snug">
                {item.headline}
              </h3>

              <p className="text-sm text-[#31403A] leading-relaxed max-w-4xl">
                {item.summary}
              </p>

              <ul className="space-y-2 pt-1 max-w-4xl">
                {item.evidencePoints.map((pt, idx) => (
                  <li
                    key={idx}
                    className="text-xs sm:text-sm text-[#4B5953] leading-relaxed flex items-start gap-2.5"
                  >
                    <span className="font-mono-tabular text-xs text-[#64746D] mt-0.5 shrink-0">
                      —
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-[#64746D] pt-1">
                Rujukan: {item.referencedCompanies.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* 5-Phase Recommended Corporate Blueprint */}
      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-[#111816]">
            Rekomendasi Blueprint Program Pembinaan SDM Perusahaan Kelapa Sawit (5 Fase)
          </h2>
          <p className="text-sm text-[#4B5953] mt-1">
            Sintesis praktik terbaik terverifikasi dari Astra Agro Lestari, First Resources, PT
            SMART Tbk / GAR, Bumitama Agri, dan Triputra Agro Persada untuk membangun program
            Calon Asisten &amp; Kepemimpinan Berkelanjutan.
          </p>
        </div>

        <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[920px]">
            <thead>
              <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                <th className="py-3 px-4 w-24">Fase</th>
                <th className="py-3 px-4 w-56">Nama Fase &amp; Durasi</th>
                <th className="py-3 px-4 w-56">Perusahaan Benchmark</th>
                <th className="py-3 px-4">Kegiatan &amp; Materi Inti</th>
                <th className="py-3 px-4 w-64">Metode &amp; Evaluasi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7E4] text-sm">
              {recommendedPhases.map((phase) => (
                <tr
                  key={phase.phase}
                  className="hover:bg-[#F8FAF9] transition-colors align-top"
                >
                  <td className="py-4 px-4 font-mono-tabular text-xs font-semibold text-[#14532D] whitespace-nowrap">
                    {phase.phase}
                  </td>
                  <td className="py-4 px-4 space-y-1">
                    <div className="font-semibold text-[#111816] text-xs sm:text-sm">
                      {phase.title}
                    </div>
                    <div className="text-xs font-mono-tabular text-[#64746D]">
                      {phase.duration}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-[#4B5953] leading-relaxed">
                    {phase.benchmarkCompanies}
                  </td>
                  <td className="py-4 px-4 text-xs text-[#31403A] leading-relaxed">
                    {phase.activitiesAndMaterials}
                  </td>
                  <td className="py-4 px-4 text-xs text-[#4B5953] leading-relaxed">
                    {phase.deliveryAndEvaluation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

import { CorporateProgramPhase, InsightBlock } from '../types/benchmark';

interface InsightsSectionProps {
  insights: InsightBlock[];
  blueprint: CorporateProgramPhase[];
  onDownloadExcel: () => void;
  isExporting: boolean;
}

export function InsightsSection({
  insights,
  blueprint,
  onDownloadExcel,
  isExporting,
}: InsightsSectionProps) {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1 max-w-3xl">
          <h1 className="text-2xl font-bold tracking-tight text-[#111816]">
            Sheet 4 — Insight, Analisis Komparatif & Rekomendasi Perusahaan Sawit
          </h1>
          <p className="text-sm text-[#4B5953]">
            Sintesis 8 dimensi analisis benchmarking dari 11 institusi rujukan serta cetak biru 4
            fase program pembinaan calon asisten kebun, pabrik, dan karyawan operasional.
          </p>
        </div>
        <button
          type="button"
          onClick={onDownloadExcel}
          disabled={isExporting}
          className="px-4 py-2 text-xs sm:text-sm font-medium text-[#14532D] bg-white border border-[#14532D]/35 hover:bg-[#ECFDF3] disabled:opacity-60 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          {isExporting ? 'Menyiapkan Excel...' : 'Ekspor Analisis (.xlsx)'}
        </button>
      </div>

      {/* 8 Structured Analytical Dimensions */}
      <section aria-label="Delapan dimensi analisis benchmarking" className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {insights.map((block) => (
            <article
              key={block.id}
              className="bg-white border border-[#E2E7E4] rounded-lg p-6 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#64746D]">
                  <span className="font-mono-tabular font-semibold text-[#14532D]">
                    {block.number}.
                  </span>
                  <span className="font-semibold text-[#31403A]">{block.dimension}</span>
                </div>

                <h2 className="text-base font-bold text-[#111816] leading-snug">
                  {block.headline}
                </h2>

                <p className="text-xs sm:text-sm text-[#4B5953] leading-relaxed">
                  {block.summary}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[#E2E7E4] text-xs sm:text-sm text-[#31403A]">
                  {block.keyFindings.map((finding, idx) => (
                    <li key={idx} className="leading-relaxed flex gap-2.5">
                      <span
                        className="font-mono-tabular text-xs text-[#64746D] shrink-0 mt-0.5"
                        aria-hidden="true"
                      >
                        {idx + 1}.
                      </span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#E2E7E4] text-xs text-[#64746D]">
                Rujukan: <span className="text-[#31403A]">{block.evidenceInstitutions.join(' · ')}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4-Phase Corporate Blueprint Table */}
      <section aria-label="Cetak biru program pembinaan perusahaan kelapa sawit" className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-bold text-[#111816]">
            Cetak Biru Rekomendasi: Plantation Future Leader & Assistant Academy (4 Fase)
          </h2>
          <p className="text-sm text-[#4B5953]">
            Model integrasi konkret yang menggabungkan praktik terbaik dari seluruh institusi
            benchmark untuk program Management Trainee (MT), Calon Asisten Kebun/PKS, dan
            penjenjangan karyawan.
          </p>
        </div>

        <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[920px]">
            <thead>
              <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                <th className="py-3 px-4 w-24">Fase</th>
                <th className="py-3 px-4 w-56">Tahap Program & Durasi</th>
                <th className="py-3 px-4 w-64">Institusi Rujukan Benchmark</th>
                <th className="py-3 px-4">Aktivitas Inti yang Diadaptasi</th>
                <th className="py-3 px-4 w-56">Output / Target Kompetensi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7E4] text-xs sm:text-sm">
              {blueprint.map((item) => (
                <tr key={item.phase} className="hover:bg-[#F8FAF9] align-top">
                  <td className="py-4 px-4 font-mono-tabular font-semibold text-[#14532D] whitespace-nowrap">
                    {item.phase}
                  </td>
                  <td className="py-4 px-4 space-y-1">
                    <div className="font-semibold text-[#111816]">{item.title}</div>
                    <div className="text-xs font-mono-tabular text-[#4B5953]">
                      {item.recommendedDuration}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs text-[#4B5953] leading-relaxed">
                    {item.benchmarkSource}
                  </td>
                  <td className="py-4 px-4 text-xs text-[#31403A] leading-relaxed">
                    {item.coreActivities}
                  </td>
                  <td className="py-4 px-4 text-xs font-medium text-[#111816] leading-relaxed">
                    {item.targetOutcome}
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

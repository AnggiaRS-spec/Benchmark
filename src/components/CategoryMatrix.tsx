import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import {
  BenchmarkActivity,
  BenchmarkCategory,
  InstitutionSummary,
} from '../types/benchmark';
import { CategoryCoverageRow } from '../utils/analytics';

interface CategoryMatrixProps {
  matrix: CategoryCoverageRow[];
  institutions: InstitutionSummary[];
  onSelectActivity: (activity: BenchmarkActivity) => void;
}

interface SelectedCell {
  category: BenchmarkCategory;
  institutionId: string | 'ALL';
}

export function CategoryMatrix({
  matrix,
  institutions,
  onSelectActivity,
}: CategoryMatrixProps) {
  const [selected, setSelected] = useState<SelectedCell>({
    category: 'Fisik',
    institutionId: 'ALL',
  });

  const activeRow = matrix.find((r) => r.category === selected.category) || matrix[0];
  const activeInstitution =
    selected.institutionId === 'ALL'
      ? null
      : institutions.find((i) => i.id === selected.institutionId) || null;

  const matchingActivities: BenchmarkActivity[] =
    selected.institutionId === 'ALL'
      ? Object.values(activeRow.byInstitution).flat()
      : activeRow.byInstitution[selected.institutionId] || [];

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-[#111816]">
          Sheet 3 — Perbandingan 13 Kategori Pembinaan Lintas Institusi
        </h1>
        <p className="text-sm text-[#4B5953]">
          Matriks cakupan seluruh 13 kategori pembinaan pada 11 institusi rujukan. Klik angka pada
          sel atau nama kategori untuk memeriksa daftar program pendukungnya di bawah tabel.
        </p>
      </div>

      {/* Coverage Matrix Grid */}
      <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1100px]">
          <thead>
            <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
              <th className="py-3 px-4 sticky left-0 bg-[#F8FAF9] z-10 w-44 border-r border-[#E2E7E4]">
                Kategori (13)
              </th>
              <th className="py-3 px-3 text-right w-24 border-r border-[#E2E7E4]">
                Institusi
              </th>
              {institutions.map((inst) => (
                <th
                  key={inst.id}
                  className="py-3 px-2 text-center font-medium text-[11px] leading-tight min-w-[82px]"
                >
                  {inst.shortName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E7E4] text-xs">
            {matrix.map((row) => {
              const isRowSelected =
                selected.category === row.category && selected.institutionId === 'ALL';
              return (
                <tr key={row.category} className="hover:bg-[#F8FAF9]">
                  <td className="py-2.5 px-4 sticky left-0 bg-white z-10 border-r border-[#E2E7E4]">
                    <button
                      type="button"
                      onClick={() =>
                        setSelected({ category: row.category, institutionId: 'ALL' })
                      }
                      className={`text-left font-semibold cursor-pointer hover:text-[#14532D] focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                        isRowSelected ? 'text-[#14532D] underline' : 'text-[#111816]'
                      }`}
                    >
                      {row.category}
                    </button>
                  </td>
                  <td className="py-2.5 px-3 text-right font-mono-tabular text-[#4B5953] border-r border-[#E2E7E4]">
                    {row.institutionCount}/{institutions.length}
                  </td>
                  {institutions.map((inst) => {
                    const count = (row.byInstitution[inst.id] || []).length;
                    const isCellSelected =
                      selected.category === row.category &&
                      selected.institutionId === inst.id;

                    return (
                      <td key={inst.id} className="p-1.5 text-center">
                        {count > 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                              setSelected({
                                category: row.category,
                                institutionId: inst.id,
                              })
                            }
                            aria-label={`${row.category} pada ${inst.shortName}: ${count} program`}
                            className={`w-full py-1.5 rounded text-xs font-mono-tabular font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                              isCellSelected
                                ? 'bg-[#14532D] text-white'
                                : 'bg-[#ECFDF3] text-[#14532D] hover:bg-[#DCFCE7]'
                            }`}
                          >
                            {count}
                          </button>
                        ) : (
                          <span className="text-[#B8C4BE] font-mono-tabular" aria-label="Tidak ditemukan">
                            —
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Cell / Category Drill-down Panel */}
      <section
        aria-label="Detail program pada kategori terpilih"
        className="bg-white border border-[#E2E7E4] rounded-lg p-6 space-y-4"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E2E7E4]">
          <div>
            <h2 className="text-lg font-bold text-[#111816]">
              Kategori: {selected.category}
              {activeInstitution ? ` — ${activeInstitution.shortName}` : ' — Semua Institusi'}
            </h2>
            <p className="text-xs text-[#4B5953] mt-0.5">
              Ditemukan pada {activeRow.institutionCount} institusi: {activeRow.institutionsCovered.join(', ')}.
            </p>
          </div>
          <span
            data-testid="matrix-selection-count"
            className="text-xs font-mono-tabular text-[#14532D] font-medium shrink-0"
          >
            {matchingActivities.length} program terverifikasi
          </span>
        </div>

        <div className="divide-y divide-[#E2E7E4]">
          {matchingActivities.map((act) => (
            <div
              key={act.id}
              className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="space-y-1 max-w-3xl">
                <div className="text-xs text-[#64746D]">
                  {act.institution} · {act.programType} · Durasi: {act.duration}
                </div>
                <button
                  type="button"
                  onClick={() => onSelectActivity(act)}
                  className="text-left text-sm font-semibold text-[#111816] hover:text-[#14532D] hover:underline cursor-pointer"
                >
                  {act.program}
                </button>
                <p className="text-xs text-[#4B5953] leading-relaxed">{act.objectives}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectActivity(act)}
                  className="text-xs font-medium text-[#14532D] hover:underline whitespace-nowrap cursor-pointer"
                >
                  Buka Detail
                </button>
                <a
                  href={act.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#64746D] hover:text-[#14532D] whitespace-nowrap"
                >
                  Sumber
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

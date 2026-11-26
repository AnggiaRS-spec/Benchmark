import { Download, ExternalLink, RotateCcw, Search } from 'lucide-react';
import {
  ALL_CATEGORIES,
  ALL_PROGRAM_TYPES,
  BenchmarkActivity,
  BenchmarkCategory,
  InstitutionSummary,
  ProgramType,
} from '../types/benchmark';
import { ActivityFilterState } from '../utils/analytics';

interface ActivitiesTableProps {
  activities: BenchmarkActivity[];
  totalCount: number;
  institutions: InstitutionSummary[];
  filters: ActivityFilterState;
  onChangeFilters: (next: ActivityFilterState) => void;
  onResetFilters: () => void;
  onSelectActivity: (activity: BenchmarkActivity) => void;
  onExportFiltered: () => void;
  isExporting: boolean;
}

export function ActivitiesTable({
  activities,
  totalCount,
  institutions,
  filters,
  onChangeFilters,
  onResetFilters,
  onSelectActivity,
  onExportFiltered,
  isExporting,
}: ActivitiesTableProps) {
  const hasActiveFilter =
    filters.search.trim() !== '' ||
    filters.institutionId !== 'ALL' ||
    filters.category !== 'ALL' ||
    filters.programType !== 'ALL';

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-[#111816]">
            Sheet 1 — Benchmark Kegiatan Terverifikasi
          </h1>
          <p className="text-sm text-[#4B5953] mt-1">
            Klik baris program mana saja untuk memeriksa deskripsi rinci, materi, jadwal, metode
            evaluasi, catatan keterbatasan data, dan tautan sumber asli.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span
            data-testid="filtered-count"
            className="text-xs font-mono-tabular text-[#4B5953]"
          >
            Menampilkan {activities.length} dari {totalCount} program
          </span>
          {hasActiveFilter && activities.length > 0 && (
            <button
              type="button"
              onClick={onExportFiltered}
              disabled={isExporting}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#14532D] bg-[#ECFDF3] hover:bg-[#DCFCE7] border border-[#BBF7D0] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Ekspor Hasil Filter
            </button>
          )}
        </div>
      </div>

      {/* Filter Toolbar */}
      <section
        aria-label="Filter kegiatan benchmark"
        className="bg-white border border-[#E2E7E4] rounded-lg p-4 space-y-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div className="md:col-span-5">
            <label htmlFor="activity-search" className="block text-xs font-medium text-[#4B5953] mb-1">
              Cari program, materi, target, atau metode
            </label>
            <div className="relative">
              <Search
                className="h-4 w-4 text-[#64746D] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="activity-search"
                type="search"
                value={filters.search}
                onChange={(e) => onChangeFilters({ ...filters, search: e.target.value })}
                placeholder="Contoh: Bintalfisdis, PLDP, ISPO, Kopasgat, K3..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] placeholder:text-[#7D8C85] focus:outline-none focus:border-[#14532D] focus:bg-white"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <label
              htmlFor="institution-filter"
              className="block text-xs font-medium text-[#4B5953] mb-1"
            >
              Institusi
            </label>
            <select
              id="institution-filter"
              value={filters.institutionId}
              onChange={(e) => onChangeFilters({ ...filters, institutionId: e.target.value })}
              className="w-full px-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:outline-none focus:border-[#14532D] focus:bg-white"
            >
              <option value="ALL">Semua Institusi ({institutions.length})</option>
              {institutions.map((inst) => (
                <option key={inst.id} value={inst.id}>
                  {inst.shortName}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <label
              htmlFor="program-type-filter"
              className="block text-xs font-medium text-[#4B5953] mb-1"
            >
              Jenis Program
            </label>
            <select
              id="program-type-filter"
              value={filters.programType}
              onChange={(e) =>
                onChangeFilters({
                  ...filters,
                  programType: e.target.value as ProgramType | 'ALL',
                })
              }
              className="w-full px-3 py-2 text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:outline-none focus:border-[#14532D] focus:bg-white"
            >
              <option value="ALL">Semua Jenis Program</option>
              {ALL_PROGRAM_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Filter Buttons (interactive controls, not static pills) */}
        <div className="space-y-1.5 pt-2 border-t border-[#E2E7E4]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#4B5953]">Filter Kategori Pembinaan</span>
            {hasActiveFilter && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-xs font-medium text-[#14532D] hover:underline cursor-pointer"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                Reset Filter
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            <button
              type="button"
              onClick={() => onChangeFilters({ ...filters, category: 'ALL' })}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                filters.category === 'ALL'
                  ? 'bg-[#14532D] text-white'
                  : 'bg-[#F1F3F2] text-[#31403A] hover:bg-[#E5EBE7]'
              }`}
            >
              Semua Kategori
            </button>
            {ALL_CATEGORIES.map((cat: BenchmarkCategory) => {
              const active = filters.category === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onChangeFilters({ ...filters, category: active ? 'ALL' : cat })}
                  className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                    active
                      ? 'bg-[#14532D] text-white'
                      : 'bg-[#F1F3F2] text-[#31403A] hover:bg-[#E5EBE7]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Table or Empty State */}
      {activities.length === 0 ? (
        <div className="bg-white border border-[#E2E7E4] rounded-lg p-12 text-center space-y-3">
          <p className="text-base font-semibold text-[#111816]">
            Tidak ada program yang cocok dengan filter saat ini
          </p>
          <p className="text-sm text-[#4B5953] max-w-md mx-auto">
            Coba longgarkan kata kunci pencarian atau atur ulang pilihan institusi, jenis program,
            dan kategori pembinaan.
          </p>
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-[#14532D] hover:bg-[#0F3F22] rounded-md transition-colors cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Tampilkan Semua {totalCount} Program
          </button>
        </div>
      ) : (
        <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1040px]">
            <thead>
              <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                <th className="py-3 px-4 w-48">Institusi</th>
                <th className="py-3 px-4 w-64">Program & Jenis</th>
                <th className="py-3 px-4 w-44">Kategori</th>
                <th className="py-3 px-4 w-44">Target Peserta</th>
                <th className="py-3 px-4 w-40">Durasi</th>
                <th className="py-3 px-4 w-44">Metode Pelaksanaan</th>
                <th className="py-3 px-4 w-16 text-center">Tahun</th>
                <th className="py-3 px-4 w-28 text-right">Sumber</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7E4] text-sm">
              {activities.map((act) => {
                const missingDuration = act.duration
                  .toLowerCase()
                  .includes('tidak ditemukan pada sumber');
                return (
                  <tr
                    key={act.id}
                    className="hover:bg-[#F8FAF9] transition-colors align-top"
                  >
                    <td className="py-3.5 px-4 text-xs font-medium text-[#31403A]">
                      {act.institution}
                    </td>
                    <td className="py-3.5 px-4 space-y-1">
                      <button
                        type="button"
                        onClick={() => onSelectActivity(act)}
                        className="text-left font-semibold text-[#111816] hover:text-[#14532D] hover:underline cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
                      >
                        {act.program}
                      </button>
                      <div className="text-xs text-[#64746D]">
                        {act.programType} · {act.frequency}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#31403A] leading-relaxed">
                      {act.categories.join(' · ')}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#4B5953] leading-relaxed">
                      {act.targetParticipants}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-xs leading-relaxed ${
                        missingDuration ? 'text-[#B45309]' : 'text-[#111816] font-medium'
                      }`}
                    >
                      {act.duration}
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#4B5953] leading-relaxed">
                      {act.deliveryMethod}
                    </td>
                    <td className="py-3.5 px-4 text-xs font-mono-tabular text-[#4B5953] text-center">
                      {act.year}
                    </td>
                    <td className="py-3.5 px-4 text-right space-y-1">
                      <div>
                        <button
                          type="button"
                          onClick={() => onSelectActivity(act)}
                          className="text-xs font-medium text-[#14532D] hover:underline whitespace-nowrap cursor-pointer"
                        >
                          Detail
                        </button>
                      </div>
                      <div>
                        <a
                          href={act.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Buka sumber resmi untuk ${act.program}`}
                          className="inline-flex items-center gap-1 text-xs text-[#64746D] hover:text-[#14532D] whitespace-nowrap"
                        >
                          Tautan
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

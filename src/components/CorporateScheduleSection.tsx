import { useMemo, useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import {
  CorporateCompanyProfile,
  CorporateScheduleEntry,
  ScheduleGranularity,
} from '../types/corporateBenchmark';
import { filterCorporateSchedules } from '../utils/corporateAnalytics';
import { formatSourceHost } from '../utils/analytics';

interface CorporateScheduleSectionProps {
  companies: CorporateCompanyProfile[];
  schedules: CorporateScheduleEntry[];
}

const GRANULARITY_OPTIONS: (ScheduleGranularity | 'ALL')[] = [
  'ALL',
  'Harian',
  'Event (Harian)',
  'Bulanan / Fase',
  'Tahapan (Durasi Tidak Dirinci)',
];

export function CorporateScheduleSection({
  companies,
  schedules,
}: CorporateScheduleSectionProps) {
  const [selectedCompany, setSelectedCompany] = useState<string>('ALL');
  const [selectedGranularity, setSelectedGranularity] = useState<
    ScheduleGranularity | 'ALL'
  >('ALL');

  const filtered = useMemo(
    () => filterCorporateSchedules(schedules, selectedCompany, selectedGranularity),
    [schedules, selectedCompany, selectedGranularity]
  );

  return (
    <div className="space-y-8">
      <section className="space-y-3 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
          <span>Sheet 2 Workbook Excel</span>
          <span aria-hidden="true">·</span>
          <span>10 Kolom Jadwal &amp; Tahapan Pelatihan</span>
          <span aria-hidden="true">·</span>
          <span>Tanpa Asumsi Jam Fiktif</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111816]">
          Sheet 2 — Jadwal &amp; Tahapan Pelatihan Perusahaan Sawit
        </h1>
        <p className="text-sm text-[#4B5953] leading-relaxed">
          Menyajikan struktur pelaksanaan aktual sesuai tingkat granularitas yang benar-benar
          tersedia pada sumber resmi (apel K3 harian, event intensif 4–18 hari, pembagian fase
          bulanan kelas vs OJT, serta urutan tahapan program).
        </p>
      </section>

      {/* Honesty / Transparency Notice */}
      <section className="bg-white border border-[#E2E7E4] rounded-lg p-5 flex items-start gap-3">
        <Info className="h-4 w-4 text-[#14532D] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#31403A] leading-relaxed space-y-1">
          <p className="font-semibold text-[#111816]">
            Catatan Transparansi Granularitas Jadwal
          </p>
          <p>
            Dari seluruh dokumen resmi 5 perusahaan kelapa sawit besar yang ditelusuri,{' '}
            <strong className="font-medium text-[#111816]">
              tidak ada perusahaan yang mempublikasikan jadwal pelatihan rinci per jam (misal
              05.00–21.00)
            </strong>{' '}
            secara terbuka. Oleh karena itu, kolom <em>Waktu</em> dan <em>Durasi Sesi</em> diisi
            apa adanya sesuai level yang terverifikasi (harian apel K3, 4 hari PNLA, ±18 hari
            Rindam, 3 bulan/3,5 bulan kelas vs 2,5–3 bulan OJT, serta rasio 70:20:10) dan diberi
            keterangan jujur &ldquo;Tidak dirinci pada sumber&rdquo; bila tidak tertulis.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-[#E2E7E4] rounded-lg p-4">
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F1F3F2] p-1 rounded-md">
          {GRANULARITY_OPTIONS.map((opt) => {
            const active = selectedGranularity === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setSelectedGranularity(opt)}
                className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                  active
                    ? 'bg-white text-[#111816] shadow-2xs'
                    : 'text-[#4B5953] hover:text-[#111816]'
                }`}
              >
                {opt === 'ALL' ? `Semua Level (${schedules.length})` : opt}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <label htmlFor="schedule-company-select" className="text-xs text-[#4B5953] whitespace-nowrap">
            Perusahaan:
          </label>
          <select
            id="schedule-company-select"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
            className="px-3 py-1.5 text-xs sm:text-sm bg-[#F8FAF9] border border-[#D6DDD8] rounded-md text-[#111816] focus:bg-white focus:border-[#14532D] focus:outline-none"
          >
            <option value="ALL">Semua Perusahaan (5)</option>
            {companies.map((c) => (
              <option key={c.id} value={c.id}>
                {c.shortName}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Schedule Table — Exact 10 Sheet 2 Columns */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-[#E2E7E4] rounded-lg p-8 text-center text-sm text-[#4B5953]">
          Tidak ada entri jadwal untuk kombinasi perusahaan dan granularitas yang dipilih.
        </div>
      ) : (
        <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[1160px]">
            <thead>
              <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                <th className="py-3 px-4 w-44">Perusahaan &amp; Program</th>
                <th className="py-3 px-4 w-48">Hari / Minggu / Bulan</th>
                <th className="py-3 px-4 w-44">Waktu &amp; Durasi Sesi</th>
                <th className="py-3 px-4 w-56">Kegiatan</th>
                <th className="py-3 px-4">Materi</th>
                <th className="py-3 px-4 w-48">Metode &amp; Lokasi</th>
                <th className="py-3 px-4 w-36">Sumber Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E7E4] text-sm">
              {filtered.map((slot) => (
                <tr
                  key={slot.id}
                  className="hover:bg-[#F8FAF9] transition-colors align-top"
                >
                  <td className="py-4 px-4 space-y-1">
                    <div className="text-xs font-semibold text-[#111816]">
                      {slot.companyName}
                    </div>
                    <div className="text-xs text-[#4B5953] leading-relaxed">
                      {slot.programName}
                    </div>
                  </td>
                  <td className="py-4 px-4 space-y-1">
                    <div className="text-xs font-semibold text-[#14532D] leading-relaxed">
                      {slot.periodLabel}
                    </div>
                    <div className="text-[11px] text-[#64746D]">{slot.granularity}</div>
                  </td>
                  <td className="py-4 px-4 space-y-1">
                    <div className="text-xs text-[#111816] font-mono-tabular leading-relaxed">
                      {slot.sessionDuration}
                    </div>
                    <div className="text-[11px] text-[#64746D] leading-relaxed">
                      Waktu: {slot.timeRange}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-xs font-medium text-[#111816] leading-relaxed">
                    {slot.activity}
                  </td>
                  <td className="py-4 px-4 text-xs text-[#31403A] leading-relaxed">
                    {slot.material}
                  </td>
                  <td className="py-4 px-4 space-y-1">
                    <div className="text-xs text-[#111816] leading-relaxed">{slot.method}</div>
                    <div className="text-[11px] text-[#64746D] leading-relaxed">
                      Lokasi: {slot.location}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <a
                      href={slot.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#14532D] hover:underline inline-flex items-center gap-1 break-all"
                    >
                      <span>{formatSourceHost(slot.sourceUrl)}</span>
                      <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

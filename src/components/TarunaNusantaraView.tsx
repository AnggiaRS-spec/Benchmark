import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { BenchmarkActivity, TarunaDailySlot } from '../types/benchmark';

interface TarunaNusantaraViewProps {
  dailySchedule: TarunaDailySlot[];
  periodicActivities: BenchmarkActivity[];
  onSelectActivity: (activity: BenchmarkActivity) => void;
}

type TarunaTab = 'daily' | 'periodic';

export function TarunaNusantaraView({
  dailySchedule,
  periodicActivities,
  onSelectActivity,
}: TarunaNusantaraViewProps) {
  const [activeTab, setActiveTab] = useState<TarunaTab>('daily');

  return (
    <div className="space-y-8">
      <div className="space-y-2 max-w-4xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
          <span>Benchmark Karakter, Fisik, Disiplin & Bela Negara</span>
          <span aria-hidden="true">·</span>
          <span>SMA Taruna Nusantara</span>
          <span aria-hidden="true">·</span>
          <span>Sheet 5 pada Workbook Excel</span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-[#111816]">
          Struktur Pembinaan SMA Taruna Nusantara: Rutinitas Harian vs Program Khusus
        </h1>
        <p className="text-sm text-[#4B5953] leading-relaxed">
          Memisahkan secara tegas antara jadwal harian berasrama (04.30–22.00 WIB) yang dijalankan
          konsisten setiap hari dengan program pembinaan intensif/periodik (PDK 3 bulan, Napak Tilas
          RPS 3 hari, survival & lintas medan, serta ekstrakurikuler kepemimpinan).
        </p>
      </div>

      {/* Segmented Control */}
      <div
        role="tablist"
        aria-label="Jenis jadwal SMA Taruna Nusantara"
        className="inline-flex items-center gap-1 p-1 bg-[#EAEFEC] rounded-lg"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'daily'}
          onClick={() => setActiveTab('daily')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
            activeTab === 'daily'
              ? 'bg-white text-[#111816] shadow-xs'
              : 'text-[#4B5953] hover:text-[#111816]'
          }`}
        >
          Rutinitas Harian (04.30 – 22.00)
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'periodic'}
          onClick={() => setActiveTab('periodic')}
          className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
            activeTab === 'periodic'
              ? 'bg-white text-[#111816] shadow-xs'
              : 'text-[#4B5953] hover:text-[#111816]'
          }`}
        >
          Program Periodik, PDK & Tradisi ({periodicActivities.length})
        </button>
      </div>

      {activeTab === 'daily' ? (
        <section aria-label="Tabel jadwal harian SMA Taruna Nusantara" className="space-y-4">
          <div className="bg-white border border-[#E2E7E4] rounded-lg overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[960px]">
              <thead>
                <tr className="border-b border-[#E2E7E4] bg-[#F8FAF9] text-xs font-semibold text-[#4B5953]">
                  <th className="py-3 px-4 w-32">Jam (WIB)</th>
                  <th className="py-3 px-4 w-36">Durasi</th>
                  <th className="py-3 px-4 w-60">Aktivitas & Kategori</th>
                  <th className="py-3 px-4">Rincian Pelaksanaan & Variasi Hari</th>
                  <th className="py-3 px-4 w-72">Relevansi Adaptasi Perusahaan Sawit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2E7E4] text-sm">
                {dailySchedule.map((slot) => (
                  <tr key={slot.id} className="hover:bg-[#F8FAF9] align-top">
                    <td className="py-3.5 px-4 font-mono-tabular text-xs font-semibold text-[#111816] whitespace-nowrap">
                      {slot.timeRange}
                    </td>
                    <td className="py-3.5 px-4 font-mono-tabular text-xs text-[#4B5953]">
                      {slot.durationLabel}
                    </td>
                    <td className="py-3.5 px-4 space-y-1">
                      <div className="font-semibold text-[#111816] text-xs sm:text-sm">
                        {slot.activity}
                      </div>
                      <div className="text-xs text-[#14532D]">{slot.category}</div>
                    </td>
                    <td className="py-3.5 px-4 space-y-1.5 text-xs">
                      <p className="text-[#31403A] leading-relaxed">{slot.details}</p>
                      <p className="text-[#64746D]">Catatan: {slot.dayVariation}</p>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-[#31403A] leading-relaxed">
                      {slot.palmOilAdaptation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-xs text-[#4B5953] flex flex-wrap items-center justify-between gap-2 px-1">
            <span>
              Keterbatasan data: Jam mulai tiap aktivitas diambil langsung dari laman resmi sekolah;
              rincian menit antar sub-aktivitas di blok sore (15.00–18.30) tidak dipecah pada sumber.
            </span>
            <a
              href="https://smatncimahi.sch.id/kurikulum/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#14532D] font-medium hover:underline whitespace-nowrap"
            >
              Sumber Resmi: Kurikulum &amp; Jadwal Harian SMA Taruna Nusantara (Terbuka)
              <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </section>
      ) : (
        <section
          aria-label="Program periodik dan tradisi SMA Taruna Nusantara"
          className="bg-white border border-[#E2E7E4] rounded-lg divide-y divide-[#E2E7E4]"
        >
          {periodicActivities.map((act) => (
            <div key={act.id} className="p-6 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-xs text-[#64746D]">
                    {act.programType} · {act.frequency} · Tahun {act.year}
                  </div>
                  <h2 className="text-base font-bold text-[#111816]">{act.program}</h2>
                  <p className="text-xs text-[#14532D] font-medium">
                    {act.categories.join(' · ')}
                  </p>
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  <button
                    type="button"
                    onClick={() => onSelectActivity(act)}
                    className="text-xs font-medium text-[#14532D] hover:underline whitespace-nowrap cursor-pointer"
                  >
                    Lihat Detail Lengkap
                  </button>
                  <a
                    href={act.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#64746D] hover:text-[#14532D] whitespace-nowrap"
                  >
                    Sumber Resmi
                    <ExternalLink className="h-3 w-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-[#31403A] leading-relaxed">{act.description}</p>

              <dl className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div>
                  <dt className="text-[#64746D] font-medium">Durasi Terverifikasi</dt>
                  <dd className="text-[#111816] mt-0.5">{act.duration}</dd>
                </div>
                <div>
                  <dt className="text-[#64746D] font-medium">Materi & Aktivitas Utama</dt>
                  <dd className="text-[#31403A] mt-0.5 leading-relaxed">
                    {act.activitiesAndMaterials}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#64746D] font-medium">Tujuan Pembinaan</dt>
                  <dd className="text-[#31403A] mt-0.5 leading-relaxed">{act.objectives}</dd>
                </div>
              </dl>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}

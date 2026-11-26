import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { BenchmarkActivity } from '../types/benchmark';

interface ActivityDrawerProps {
  activity: BenchmarkActivity | null;
  onClose: () => void;
}

export function ActivityDrawer({ activity, onClose }: ActivityDrawerProps) {
  useEffect(() => {
    if (!activity) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activity, onClose]);

  if (!activity) return null;

  const missingDuration = activity.duration.toLowerCase().includes('tidak ditemukan pada sumber');
  const missingEvaluation = activity.evaluation
    .toLowerCase()
    .includes('tidak ditemukan pada sumber');

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-activity-title"
    >
      <div
        className="fixed inset-0 bg-[#111816]/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-2xl bg-white h-full overflow-y-auto border-l border-[#E2E7E4] flex flex-col">
        <div className="sticky top-0 bg-white border-b border-[#E2E7E4] px-6 py-4 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs text-[#64746D]">
              {activity.institution} · {activity.programType} · {activity.year}
            </p>
            <h2
              id="drawer-activity-title"
              className="text-lg font-bold text-[#111816] leading-snug"
            >
              {activity.program}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup panel detail kegiatan"
            className="p-2 text-[#4B5953] hover:text-[#111816] rounded-md cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-sm flex-1">
          <div className="space-y-1.5">
            <h3 className="text-xs font-semibold text-[#64746D]">Kategori Pembinaan</h3>
            <p className="text-sm font-medium text-[#14532D]">
              {activity.categories.join(' · ')}
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-semibold text-[#64746D]">Deskripsi Kegiatan</h3>
            <p className="text-[#111816] leading-relaxed">{activity.description}</p>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xs font-semibold text-[#64746D]">
              Materi & Aktivitas yang Dilakukan Peserta
            </h3>
            <p className="text-[#31403A] leading-relaxed">{activity.activitiesAndMaterials}</p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E2E7E4]">
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-[#64746D]">Target Peserta</dt>
              <dd className="text-[#111816] leading-relaxed">{activity.targetParticipants}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-[#64746D]">Durasi Kegiatan</dt>
              <dd
                className={`leading-relaxed ${
                  missingDuration ? 'text-[#B45309] font-medium' : 'text-[#111816] font-medium'
                }`}
              >
                {activity.duration}
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-[#64746D]">Jadwal Pelaksanaan</dt>
              <dd className="text-[#111816] leading-relaxed">{activity.schedule}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-semibold text-[#64746D]">Frekuensi</dt>
              <dd className="text-[#111816] leading-relaxed">{activity.frequency}</dd>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-xs font-semibold text-[#64746D]">Metode Pelaksanaan</dt>
              <dd className="text-[#111816] leading-relaxed">{activity.deliveryMethod}</dd>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-xs font-semibold text-[#64746D]">
                Tujuan / Kompetensi yang Dibentuk
              </dt>
              <dd className="text-[#111816] leading-relaxed">{activity.objectives}</dd>
            </div>
            <div className="space-y-1 sm:col-span-2">
              <dt className="text-xs font-semibold text-[#64746D]">Metode Evaluasi</dt>
              <dd
                className={`leading-relaxed ${
                  missingEvaluation ? 'text-[#B45309]' : 'text-[#111816]'
                }`}
              >
                {activity.evaluation}
              </dd>
            </div>
          </dl>

          <div className="pt-4 border-t border-[#E2E7E4] space-y-2">
            <h3 className="text-xs font-semibold text-[#64746D]">
              Sumber Asli Terverifikasi ({activity.year})
            </h3>
            <p className="text-xs text-[#4B5953]">{activity.sourceLabel}</p>
            <a
              href={activity.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#14532D] hover:underline break-all"
            >
              <span>{activity.sourceUrl}</span>
              <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>

          <div className="pt-4 border-t border-[#E2E7E4] space-y-1.5">
            <h3 className="text-xs font-semibold text-[#64746D]">
              Catatan & Keterbatasan Data
            </h3>
            <p className="text-xs text-[#4B5953] leading-relaxed">{activity.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

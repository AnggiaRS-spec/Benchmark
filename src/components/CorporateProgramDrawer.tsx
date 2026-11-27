import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { CorporateTrainingProgram } from '../types/corporateBenchmark';

interface CorporateProgramDrawerProps {
  program: CorporateTrainingProgram | null;
  onClose: () => void;
}

export function CorporateProgramDrawer({
  program,
  onClose,
}: CorporateProgramDrawerProps) {
  useEffect(() => {
    if (!program) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [program, onClose]);

  if (!program) return null;

  const statusColor =
    program.verificationStatus === 'Terverifikasi'
      ? 'text-[#14532D]'
      : program.verificationStatus === 'Informasi Sebagian'
        ? 'text-[#B45309]'
        : 'text-[#64746D]';

  const dimensions: { label: string; value: string }[] = [
    { label: 'Kegiatan Fisik', value: program.physicalActivities },
    { label: 'Mental & Disiplin', value: program.mentalDisciplineActivities },
    { label: 'Leadership', value: program.leadershipActivities },
    { label: 'Teamwork', value: program.teamworkActivities },
    { label: 'Teknis Perkebunan (Kebun)', value: program.estateTechnicalActivities },
    { label: 'Praktik Lapangan (OJT)', value: program.fieldPracticeActivities },
    { label: 'Praktik Pabrik (PKS / Mill)', value: program.millPracticeActivities },
    { label: 'Sosial / Community Engagement', value: program.socialCommunityActivities },
    { label: 'Sustainability', value: program.sustainabilityActivities },
    { label: 'Keselamatan & Kesehatan Kerja (K3)', value: program.k3Activities },
    { label: 'Pola Rotasi', value: program.rotationDetails },
    { label: 'Mentoring & Coaching', value: program.mentoringDetails },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="corp-drawer-title"
      className="fixed inset-0 z-50 flex justify-end"
    >
      <div
        className="fixed inset-0 bg-[#111816]/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative z-10 w-full max-w-2xl bg-white h-full overflow-y-auto border-l border-[#E2E7E4] flex flex-col">
        <div className="sticky top-0 z-10 bg-white border-b border-[#E2E7E4] px-6 py-4 flex items-start justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#4B5953]">
              <span className="font-medium text-[#111816]">{program.companyShortName}</span>
              <span aria-hidden="true">·</span>
              <span>{program.programType}</span>
              <span aria-hidden="true">·</span>
              <span className={`font-semibold ${statusColor}`}>
                {program.verificationStatus}
              </span>
            </div>
            <h2
              id="corp-drawer-title"
              className="text-lg font-bold text-[#111816] leading-snug"
            >
              {program.programName}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup panel rincian program"
            className="p-2 text-[#4B5953] hover:text-[#111816] hover:bg-[#F1F3F2] rounded-md shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6 text-sm">
          {/* Core Summary Grid */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-5 border-b border-[#E2E7E4]">
            <div className="space-y-1">
              <dt className="text-xs font-medium text-[#64746D]">Perusahaan</dt>
              <dd className="text-[#111816] font-medium">{program.companyName}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-medium text-[#64746D]">Status Pelaksanaan &amp; Tahun</dt>
              <dd className="text-[#111816]">
                {program.implementationStatus} ·{' '}
                <span className="font-mono-tabular">{program.year}</span>
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-medium text-[#64746D]">Durasi Keseluruhan</dt>
              <dd className="text-[#111816] font-medium">{program.duration}</dd>
            </div>
            <div className="space-y-1">
              <dt className="text-xs font-medium text-[#64746D]">Kategori Kegiatan</dt>
              <dd className="text-[#31403A] text-xs leading-relaxed">
                {program.categories.join(' · ')}
              </dd>
            </div>
          </dl>

          {/* Objective, Target, Stages, Activities, Materials */}
          <div className="space-y-4 pb-5 border-b border-[#E2E7E4]">
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Target Peserta</h3>
              <p className="text-[#111816] leading-relaxed">{program.targetParticipants}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Tujuan Program</h3>
              <p className="text-[#31403A] leading-relaxed">{program.objective}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Urutan / Tahapan Program</h3>
              <p className="text-[#111816] leading-relaxed">{program.stages}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Jadwal Pelatihan (Ringkasan)</h3>
              <p className="text-[#31403A] leading-relaxed">{program.scheduleSummary}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Kegiatan yang Dilaksanakan</h3>
              <p className="text-[#31403A] leading-relaxed">{program.activities}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Materi Pelatihan</h3>
              <p className="text-[#31403A] leading-relaxed">{program.materials}</p>
            </div>
          </div>

          {/* 12 Specific Benchmarking Dimensions */}
          <div className="space-y-3 pb-5 border-b border-[#E2E7E4]">
            <h3 className="text-sm font-bold text-[#111816]">
              Rincian Dimensi Pelatihan &amp; Pembinaan
            </h3>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dimensions.map((d) => (
                <div key={d.label} className="space-y-1">
                  <dt className="text-xs font-semibold text-[#4B5953]">{d.label}</dt>
                  <dd className="text-xs text-[#31403A] leading-relaxed">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Methods, Evaluation & Target Competencies */}
          <div className="space-y-4 pb-5 border-b border-[#E2E7E4]">
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Metode Pembelajaran</h3>
              <p className="text-[#31403A] leading-relaxed">{program.learningMethods}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Evaluasi &amp; Penilaian Peserta</h3>
              <p className="text-[#31403A] leading-relaxed">{program.evaluation}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-semibold text-[#64746D]">Hasil / Kompetensi yang Ditargetkan</h3>
              <p className="text-[#31403A] leading-relaxed">{program.targetCompetencies}</p>
            </div>
          </div>

          {/* Verification Sources & Notes */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#111816]">
              Sumber Primer &amp; Catatan Validitas
            </h3>
            <div className="bg-[#F8FAF9] border border-[#E2E7E4] rounded-md p-4 space-y-2.5">
              <div className="space-y-1">
                <p className="text-xs font-medium text-[#64746D]">Sumber Utama Terverifikasi</p>
                <a
                  href={program.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#14532D] hover:underline inline-flex items-center gap-1 break-all"
                >
                  <span>{program.sourceLabel}</span>
                  <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
                <p className="text-[11px] font-mono-tabular text-[#64746D] break-all">
                  {program.sourceUrl}
                </p>
              </div>

              {program.additionalSources && program.additionalSources.length > 0 && (
                <div className="pt-2 border-t border-[#E2E7E4] space-y-1.5">
                  <p className="text-xs font-medium text-[#64746D]">Sumber Pendukung</p>
                  <ul className="space-y-1.5">
                    {program.additionalSources.map((src) => (
                      <li key={src.url} className="text-xs">
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#14532D] hover:underline inline-flex items-center gap-1"
                        >
                          <span>
                            {src.label} ({src.year})
                          </span>
                          <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 border-t border-[#E2E7E4]">
                <p className="text-xs text-[#4B5953] leading-relaxed">
                  <strong className="font-semibold text-[#111816]">Catatan Validitas:</strong>{' '}
                  {program.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

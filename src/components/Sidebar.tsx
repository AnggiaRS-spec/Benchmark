import {
  BookOpen,
  Building2,
  Clock,
  Grid3X3,
  Lightbulb,
  X,
} from 'lucide-react';
import { NavSection } from '../types/benchmark';
import { DatasetMetrics } from '../utils/analytics';

interface SidebarProps {
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  metrics: DatasetMetrics;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const NAV_ITEMS: { id: NavSection; label: string; sheetHint: string; icon: typeof Building2 }[] = [
  {
    id: 'overview',
    label: 'Ringkasan Institusi',
    sheetHint: 'S2',
    icon: Building2,
  },
  {
    id: 'activities',
    label: 'Benchmark Kegiatan',
    sheetHint: 'S1',
    icon: BookOpen,
  },
  {
    id: 'matrix',
    label: 'Perbandingan Kategori',
    sheetHint: 'S3',
    icon: Grid3X3,
  },
  {
    id: 'taruna',
    label: 'Taruna Nusantara',
    sheetHint: 'S5',
    icon: Clock,
  },
  {
    id: 'insights',
    label: 'Insight & Rekomendasi',
    sheetHint: 'S4',
    icon: Lightbulb,
  },
];

export function Sidebar({
  activeSection,
  onSelectSection,
  metrics,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const handleSelect = (id: NavSection) => {
    onSelectSection(id);
    onCloseMobile();
  };

  const navContent = (
    <div className="flex h-full flex-col justify-between bg-[#F1F3F2] border-r border-[#E2E7E4]">
      <div>
        <div className="flex items-center justify-between px-5 h-16 border-b border-[#E2E7E4]">
          <span className="font-display text-lg font-bold tracking-tight text-[#111816] whitespace-nowrap shrink-0">
            SawitBench
          </span>
          <button
            type="button"
            onClick={onCloseMobile}
            aria-label="Tutup menu navigasi"
            className="lg:hidden p-2 text-[#4B5953] hover:text-[#111816] rounded-md focus-visible:outline-2 focus-visible:outline-[#14532D]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Navigasi utama riset" className="p-3 space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                  isActive
                    ? 'bg-[#14532D] text-white'
                    : 'text-[#31403A] hover:bg-[#E5EBE7] hover:text-[#111816]'
                }`}
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </span>
                <span
                  className={`text-[11px] font-mono-tabular shrink-0 ${
                    isActive ? 'text-[#D1FAE5]' : 'text-[#64746D]'
                  }`}
                >
                  {item.sheetHint}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="p-5 border-t border-[#E2E7E4] space-y-3">
        <p className="text-xs font-medium text-[#4B5953]">Cakupan Dataset Terverifikasi</p>
        <dl className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-xs">
          <div>
            <dt className="text-[#64746D]">Institusi</dt>
            <dd className="font-mono-tabular text-sm font-medium text-[#111816]">
              {metrics.totalInstitutions}
            </dd>
          </div>
          <div>
            <dt className="text-[#64746D]">Program</dt>
            <dd className="font-mono-tabular text-sm font-medium text-[#111816]">
              {metrics.totalActivities}
            </dd>
          </div>
          <div>
            <dt className="text-[#64746D]">Kategori</dt>
            <dd className="font-mono-tabular text-sm font-medium text-[#111816]">
              {metrics.totalCategoriesCovered}/13
            </dd>
          </div>
          <div>
            <dt className="text-[#64746D]">Link Sumber</dt>
            <dd className="font-mono-tabular text-sm font-medium text-[#14532D]">
              {metrics.verifiedDirectLinks}/{metrics.totalActivities}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );

  return (
    <>
      <aside className="hidden lg:block w-[268px] shrink-0 h-screen sticky top-0">
        {navContent}
      </aside>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-[#111816]/40"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <aside className="relative w-72 max-w-[85vw] h-full z-10">{navContent}</aside>
        </div>
      )}
    </>
  );
}

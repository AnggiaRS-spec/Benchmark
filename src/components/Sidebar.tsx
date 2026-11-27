import {
  BookOpen,
  Building2,
  CalendarClock,
  Clock,
  Factory,
  Grid3X3,
  Lightbulb,
  Table2,
  X,
} from 'lucide-react';
import { NavSection } from '../types/benchmark';
import {
  CorporateNavSection,
  ResearchWorkspace,
} from '../types/corporateBenchmark';
import { DatasetMetrics } from '../utils/analytics';
import { CorporateDatasetMetrics } from '../utils/corporateAnalytics';

interface SidebarProps {
  workspace: ResearchWorkspace;
  onChangeWorkspace: (ws: ResearchWorkspace) => void;
  activeSection: NavSection;
  onSelectSection: (section: NavSection) => void;
  activeCorporateSection: CorporateNavSection;
  onSelectCorporateSection: (section: CorporateNavSection) => void;
  metrics: DatasetMetrics;
  corporateMetrics: CorporateDatasetMetrics;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const CORP_NAV_ITEMS: {
  id: CorporateNavSection;
  label: string;
  sheetHint: string;
  icon: typeof Factory;
}[] = [
  {
    id: 'corp-programs',
    label: 'Program Perusahaan',
    sheetHint: 'S1',
    icon: Factory,
  },
  {
    id: 'corp-schedule',
    label: 'Jadwal Pelatihan',
    sheetHint: 'S2',
    icon: CalendarClock,
  },
  {
    id: 'corp-comparison',
    label: 'Matriks Perusahaan',
    sheetHint: 'S3',
    icon: Table2,
  },
  {
    id: 'corp-insights',
    label: 'Insight & Rekomendasi',
    sheetHint: 'S4',
    icon: Lightbulb,
  },
];

const INST_NAV_ITEMS: {
  id: NavSection;
  label: string;
  sheetHint: string;
  icon: typeof Building2;
}[] = [
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
  workspace,
  onChangeWorkspace,
  activeSection,
  onSelectSection,
  activeCorporateSection,
  onSelectCorporateSection,
  metrics,
  corporateMetrics,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  const handleSelectCorp = (id: CorporateNavSection) => {
    onSelectCorporateSection(id);
    onCloseMobile();
  };

  const handleSelectInst = (id: NavSection) => {
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

        {/* Research Phase Switcher */}
        <div className="p-3 border-b border-[#E2E7E4]">
          <p className="text-[11px] font-medium text-[#64746D] px-1 mb-2">
            Dataset Riset Benchmarking
          </p>
          <div className="grid grid-cols-2 gap-1 p-1 bg-[#E5EBE7] rounded-md">
            <button
              type="button"
              onClick={() => onChangeWorkspace('corporate')}
              aria-pressed={workspace === 'corporate'}
              className={`px-2 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                workspace === 'corporate'
                  ? 'bg-white text-[#111816] shadow-2xs'
                  : 'text-[#4B5953] hover:text-[#111816]'
              }`}
            >
              Perusahaan
            </button>
            <button
              type="button"
              onClick={() => onChangeWorkspace('institutions')}
              aria-pressed={workspace === 'institutions'}
              className={`px-2 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                workspace === 'institutions'
                  ? 'bg-white text-[#111816] shadow-2xs'
                  : 'text-[#4B5953] hover:text-[#111816]'
              }`}
            >
              Institusi
            </button>
          </div>
        </div>

        <nav aria-label="Navigasi utama riset" className="p-3 space-y-1">
          {workspace === 'corporate'
            ? CORP_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeCorporateSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectCorp(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                      isActive
                        ? 'bg-[#14532D] text-white'
                        : 'text-[#31403A] hover:bg-[#E5EBE7] hover:text-[#111816]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="whitespace-nowrap truncate">{item.label}</span>
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
              })
            : INST_NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleSelectInst(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 text-sm font-medium rounded-md transition-colors text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#14532D] ${
                      isActive
                        ? 'bg-[#14532D] text-white'
                        : 'text-[#31403A] hover:bg-[#E5EBE7] hover:text-[#111816]'
                    }`}
                  >
                    <span className="flex items-center gap-2.5 min-w-0">
                      <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span className="whitespace-nowrap truncate">{item.label}</span>
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
        <p className="text-xs font-medium text-[#4B5953]">
          {workspace === 'corporate'
            ? 'Cakupan Riset Perusahaan Sawit'
            : 'Cakupan Dataset Institusi'}
        </p>
        {workspace === 'corporate' ? (
          <dl className="grid grid-cols-2 gap-y-2.5 gap-x-3 text-xs">
            <div>
              <dt className="text-[#64746D]">Perusahaan</dt>
              <dd className="font-mono-tabular text-sm font-medium text-[#111816]">
                {corporateMetrics.totalCompanies}
              </dd>
            </div>
            <div>
              <dt className="text-[#64746D]">Program</dt>
              <dd className="font-mono-tabular text-sm font-medium text-[#111816]">
                {corporateMetrics.totalPrograms}
              </dd>
            </div>
            <div>
              <dt className="text-[#64746D]">Jadwal/Fase</dt>
              <dd className="font-mono-tabular text-sm font-medium text-[#111816]">
                {corporateMetrics.totalScheduleEntries}
              </dd>
            </div>
            <div>
              <dt className="text-[#64746D]">Terverifikasi</dt>
              <dd className="font-mono-tabular text-sm font-medium text-[#14532D]">
                {corporateMetrics.verifiedPrograms}/{corporateMetrics.totalPrograms}
              </dd>
            </div>
          </dl>
        ) : (
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
        )}
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

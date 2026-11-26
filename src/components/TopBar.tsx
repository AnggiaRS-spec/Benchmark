import { Download, Menu } from 'lucide-react';
import { NavSection } from '../types/benchmark';

interface TopBarProps {
  activeSection: NavSection;
  onOpenMobileMenu: () => void;
  onDownloadExcel: () => void;
  isExporting: boolean;
}

const SECTION_TITLES: Record<NavSection, string> = {
  overview: 'Ringkasan Institusi',
  activities: 'Benchmark Kegiatan',
  matrix: 'Perbandingan Kategori',
  taruna: 'Benchmark Taruna Nusantara',
  insights: 'Insight & Rekomendasi',
};

export function TopBar({
  activeSection,
  onOpenMobileMenu,
  onDownloadExcel,
  isExporting,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/95 backdrop-blur-xs border-b border-[#E2E7E4] px-4 sm:px-8 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onOpenMobileMenu}
          aria-label="Buka menu navigasi"
          className="lg:hidden p-2 -ml-2 text-[#31403A] hover:text-[#111816] rounded-md focus-visible:outline-2 focus-visible:outline-[#14532D]"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-sm min-w-0">
          <span className="font-display font-medium text-[#64746D] whitespace-nowrap shrink-0 hidden sm:inline">
            Workbook Riset
          </span>
          <span className="text-[#A3B1AA] hidden sm:inline" aria-hidden="true">
            /
          </span>
          <span className="font-display font-semibold text-[#111816] truncate whitespace-nowrap">
            {SECTION_TITLES[activeSection]}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onDownloadExcel}
        disabled={isExporting}
        className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium text-white bg-[#14532D] hover:bg-[#0F3F22] disabled:opacity-60 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14532D]"
      >
        <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{isExporting ? 'Menyiapkan .xlsx...' : 'Unduh Excel (.xlsx)'}</span>
      </button>
    </header>
  );
}

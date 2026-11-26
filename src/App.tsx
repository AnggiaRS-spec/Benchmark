import { useMemo, useState } from 'react';
import {
  ACTIVITIES,
  CORPORATE_BLUEPRINT,
  INSIGHT_BLOCKS,
  INSTITUTIONS,
  TARUNA_DAILY_SCHEDULE,
} from './data/benchmarkData';
import { BenchmarkActivity, NavSection } from './types/benchmark';
import {
  ActivityFilterState,
  buildCategoryMatrix,
  computeDatasetMetrics,
  filterActivities,
} from './utils/analytics';
import { downloadBenchmarkExcel } from './utils/excelExport';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { OverviewSection } from './components/OverviewSection';
import { ActivitiesTable } from './components/ActivitiesTable';
import { ActivityDrawer } from './components/ActivityDrawer';
import { CategoryMatrix } from './components/CategoryMatrix';
import { TarunaNusantaraView } from './components/TarunaNusantaraView';
import { InsightsSection } from './components/InsightsSection';

const INITIAL_FILTERS: ActivityFilterState = {
  search: '',
  institutionId: 'ALL',
  category: 'ALL',
  programType: 'ALL',
};

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filters, setFilters] = useState<ActivityFilterState>(INITIAL_FILTERS);
  const [selectedActivity, setSelectedActivity] = useState<BenchmarkActivity | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const metrics = useMemo(() => computeDatasetMetrics(ACTIVITIES, INSTITUTIONS), []);
  const categoryMatrix = useMemo(
    () => buildCategoryMatrix(ACTIVITIES, INSTITUTIONS),
    []
  );
  const filteredActivities = useMemo(
    () => filterActivities(ACTIVITIES, filters),
    [filters]
  );
  const tarunaPeriodicActivities = useMemo(
    () =>
      ACTIVITIES.filter(
        (act) =>
          act.institutionId === 'taruna-nusantara' &&
          act.programType !== 'Rutinitas Harian Asrama'
      ),
    []
  );

  const handleInspectInstitution = (institutionId: string) => {
    setFilters({
      ...INITIAL_FILTERS,
      institutionId,
    });
    setActiveSection('activities');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExportFull = async () => {
    setIsExporting(true);
    setExportNotice(null);
    try {
      await downloadBenchmarkExcel(ACTIVITIES, 'Benchmark_Pembinaan_Pelatihan_Sawit.xlsx');
      setExportNotice(
        'File Excel 5 sheet (Benchmark_Pembinaan_Pelatihan_Sawit.xlsx) berhasil diunduh.'
      );
    } catch {
      setExportNotice('Gagal membuat file Excel. Silakan coba kembali.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportFiltered = async () => {
    setIsExporting(true);
    setExportNotice(null);
    try {
      await downloadBenchmarkExcel(
        filteredActivities,
        'Benchmark_Kegiatan_Terfilter_Sawit.xlsx'
      );
      setExportNotice(
        `File Excel terfilter (${filteredActivities.length} program pada Sheet 1) berhasil diunduh.`
      );
    } catch {
      setExportNotice('Gagal membuat file Excel terfilter. Silakan coba kembali.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F8F9F8] text-[#111816]">
      <Sidebar
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        metrics={metrics}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          activeSection={activeSection}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onDownloadExcel={handleExportFull}
          isExporting={isExporting}
        />

        {exportNotice && (
          <div
            role="status"
            className="bg-[#ECFDF3] border-b border-[#BBF7D0] px-4 sm:px-8 py-2.5 flex items-center justify-between gap-4 text-xs sm:text-sm text-[#14532D]"
          >
            <span>{exportNotice}</span>
            <button
              type="button"
              onClick={() => setExportNotice(null)}
              className="font-medium hover:underline whitespace-nowrap shrink-0 cursor-pointer"
            >
              Tutup
            </button>
          </div>
        )}

        <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 sm:px-8 py-8">
          {activeSection === 'overview' && (
            <OverviewSection
              institutions={INSTITUTIONS}
              activities={ACTIVITIES}
              metrics={metrics}
              onInspectInstitution={handleInspectInstitution}
              onNavigate={setActiveSection}
              onDownloadExcel={handleExportFull}
              isExporting={isExporting}
            />
          )}

          {activeSection === 'activities' && (
            <ActivitiesTable
              activities={filteredActivities}
              totalCount={ACTIVITIES.length}
              institutions={INSTITUTIONS}
              filters={filters}
              onChangeFilters={setFilters}
              onResetFilters={() => setFilters(INITIAL_FILTERS)}
              onSelectActivity={setSelectedActivity}
              onExportFiltered={handleExportFiltered}
              isExporting={isExporting}
            />
          )}

          {activeSection === 'matrix' && (
            <CategoryMatrix
              matrix={categoryMatrix}
              institutions={INSTITUTIONS}
              onSelectActivity={setSelectedActivity}
            />
          )}

          {activeSection === 'taruna' && (
            <TarunaNusantaraView
              dailySchedule={TARUNA_DAILY_SCHEDULE}
              periodicActivities={tarunaPeriodicActivities}
              onSelectActivity={setSelectedActivity}
            />
          )}

          {activeSection === 'insights' && (
            <InsightsSection
              insights={INSIGHT_BLOCKS}
              blueprint={CORPORATE_BLUEPRINT}
              onDownloadExcel={handleExportFull}
              isExporting={isExporting}
            />
          )}
        </main>

        <footer className="border-t border-[#E2E7E4] px-4 sm:px-8 py-4 text-xs text-[#64746D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            SawitBench · Kompilasi riset benchmarking SDM industri kelapa sawit berbasis sumber terverifikasi.
          </span>
          <span>
            Seluruh durasi yang tidak tertulis pada dokumen resmi ditandai eksplisit &ldquo;Tidak ditemukan pada sumber&rdquo;.
          </span>
        </footer>
      </div>

      <ActivityDrawer
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </div>
  );
}

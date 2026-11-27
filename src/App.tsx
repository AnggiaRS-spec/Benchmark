import { useMemo, useState } from 'react';
import {
  ACTIVITIES,
  CORPORATE_BLUEPRINT,
  INSIGHT_BLOCKS,
  INSTITUTIONS,
  TARUNA_DAILY_SCHEDULE,
} from './data/benchmarkData';
import {
  CORPORATE_COMPANIES,
  CORPORATE_INSIGHTS,
  CORPORATE_PROGRAMS,
  CORPORATE_SCHEDULES,
  RECOMMENDED_CORPORATE_PHASES,
} from './data/corporateBenchmarkData';
import { BenchmarkActivity, NavSection } from './types/benchmark';
import {
  CorporateNavSection,
  CorporateTrainingProgram,
  ResearchWorkspace,
} from './types/corporateBenchmark';
import {
  ActivityFilterState,
  buildCategoryMatrix,
  computeDatasetMetrics,
  filterActivities,
} from './utils/analytics';
import {
  buildCorporateComparisonRows,
  computeCorporateMetrics,
  CorporateFilterState,
  filterCorporatePrograms,
} from './utils/corporateAnalytics';
import { downloadBenchmarkExcel } from './utils/excelExport';
import { downloadCorporateBenchmarkExcel } from './utils/corporateExcelExport';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { OverviewSection } from './components/OverviewSection';
import { ActivitiesTable } from './components/ActivitiesTable';
import { ActivityDrawer } from './components/ActivityDrawer';
import { CategoryMatrix } from './components/CategoryMatrix';
import { TarunaNusantaraView } from './components/TarunaNusantaraView';
import { InsightsSection } from './components/InsightsSection';
import { CorporateProgramsSection } from './components/CorporateProgramsSection';
import { CorporateProgramDrawer } from './components/CorporateProgramDrawer';
import { CorporateScheduleSection } from './components/CorporateScheduleSection';
import { CorporateComparisonSection } from './components/CorporateComparisonSection';
import { CorporateInsightsSection } from './components/CorporateInsightsSection';

const INITIAL_FILTERS: ActivityFilterState = {
  search: '',
  institutionId: 'ALL',
  category: 'ALL',
  programType: 'ALL',
};

const INITIAL_CORPORATE_FILTERS: CorporateFilterState = {
  search: '',
  companyId: 'ALL',
  programType: 'ALL',
  category: 'ALL',
  verificationStatus: 'ALL',
};

export default function App() {
  const [workspace, setWorkspace] = useState<ResearchWorkspace>('corporate');
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [activeCorporateSection, setActiveCorporateSection] =
    useState<CorporateNavSection>('corp-programs');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [filters, setFilters] = useState<ActivityFilterState>(INITIAL_FILTERS);
  const [corporateFilters, setCorporateFilters] = useState<CorporateFilterState>(
    INITIAL_CORPORATE_FILTERS
  );

  const [selectedActivity, setSelectedActivity] = useState<BenchmarkActivity | null>(null);
  const [selectedCorporateProgram, setSelectedCorporateProgram] =
    useState<CorporateTrainingProgram | null>(null);

  const [isExporting, setIsExporting] = useState(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  // Phase 1 memos (Institutions & Taruna)
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

  // Phase 2 memos (Corporate Oil Palm Companies)
  const corporateMetrics = useMemo(
    () =>
      computeCorporateMetrics(
        CORPORATE_COMPANIES,
        CORPORATE_PROGRAMS,
        CORPORATE_SCHEDULES
      ),
    []
  );
  const filteredCorporatePrograms = useMemo(
    () => filterCorporatePrograms(CORPORATE_PROGRAMS, corporateFilters),
    [corporateFilters]
  );
  const corporateComparisonRows = useMemo(
    () => buildCorporateComparisonRows(CORPORATE_PROGRAMS),
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

  const handleExportCorporateFull = async () => {
    setIsExporting(true);
    setExportNotice(null);
    try {
      await downloadCorporateBenchmarkExcel(
        CORPORATE_PROGRAMS,
        CORPORATE_SCHEDULES,
        'Benchmark_Pelatihan_Perusahaan_Sawit_Indonesia.xlsx'
      );
      setExportNotice(
        'File Excel 4 sheet (Benchmark_Pelatihan_Perusahaan_Sawit_Indonesia.xlsx) berhasil diunduh.'
      );
    } catch {
      setExportNotice('Gagal membuat file Excel perusahaan sawit. Silakan coba kembali.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportCorporateFiltered = async () => {
    setIsExporting(true);
    setExportNotice(null);
    try {
      const matchingIds = new Set(filteredCorporatePrograms.map((p) => p.id));
      const matchingSchedules = CORPORATE_SCHEDULES.filter((s) =>
        matchingIds.has(s.programId)
      );
      await downloadCorporateBenchmarkExcel(
        filteredCorporatePrograms,
        matchingSchedules.length > 0 ? matchingSchedules : CORPORATE_SCHEDULES,
        'Benchmark_Perusahaan_Sawit_Terfilter.xlsx'
      );
      setExportNotice(
        `File Excel terfilter (${filteredCorporatePrograms.length} program pada Sheet 1) berhasil diunduh.`
      );
    } catch {
      setExportNotice('Gagal membuat file Excel terfilter. Silakan coba kembali.');
    } finally {
      setIsExporting(false);
    }
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

  const handleTopBarDownload = () => {
    if (workspace === 'corporate') {
      void handleExportCorporateFull();
    } else {
      void handleExportFull();
    }
  };

  return (
    <div className="min-h-screen flex bg-[#F8F9F8] text-[#111816]">
      <Sidebar
        workspace={workspace}
        onChangeWorkspace={(ws) => {
          setWorkspace(ws);
          setExportNotice(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        activeCorporateSection={activeCorporateSection}
        onSelectCorporateSection={(sec) => {
          setActiveCorporateSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        metrics={metrics}
        corporateMetrics={corporateMetrics}
        mobileOpen={mobileMenuOpen}
        onCloseMobile={() => setMobileMenuOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          workspace={workspace}
          activeSection={activeSection}
          activeCorporateSection={activeCorporateSection}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onDownloadExcel={handleTopBarDownload}
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
          {workspace === 'corporate' ? (
            <>
              {activeCorporateSection === 'corp-programs' && (
                <CorporateProgramsSection
                  companies={CORPORATE_COMPANIES}
                  allPrograms={CORPORATE_PROGRAMS}
                  filteredPrograms={filteredCorporatePrograms}
                  metrics={corporateMetrics}
                  filters={corporateFilters}
                  onChangeFilters={setCorporateFilters}
                  onResetFilters={() => setCorporateFilters(INITIAL_CORPORATE_FILTERS)}
                  onSelectProgram={setSelectedCorporateProgram}
                  onDownloadFullExcel={handleExportCorporateFull}
                  onDownloadFilteredExcel={handleExportCorporateFiltered}
                  isExporting={isExporting}
                />
              )}

              {activeCorporateSection === 'corp-schedule' && (
                <CorporateScheduleSection
                  companies={CORPORATE_COMPANIES}
                  schedules={CORPORATE_SCHEDULES}
                />
              )}

              {activeCorporateSection === 'corp-comparison' && (
                <CorporateComparisonSection
                  companies={CORPORATE_COMPANIES}
                  comparisonRows={corporateComparisonRows}
                  programs={CORPORATE_PROGRAMS}
                  onSelectProgram={setSelectedCorporateProgram}
                />
              )}

              {activeCorporateSection === 'corp-insights' && (
                <CorporateInsightsSection
                  insights={CORPORATE_INSIGHTS}
                  recommendedPhases={RECOMMENDED_CORPORATE_PHASES}
                  onDownloadExcel={handleExportCorporateFull}
                  isExporting={isExporting}
                />
              )}
            </>
          ) : (
            <>
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
            </>
          )}
        </main>

        <footer className="border-t border-[#E2E7E4] px-4 sm:px-8 py-4 text-xs text-[#64746D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>
            SawitBench · Kompilasi riset benchmarking SDM industri kelapa sawit berbasis sumber terverifikasi.
          </span>
          <span>
            Jadwal atau durasi yang tidak dipublikasikan pada sumber resmi ditandai secara eksplisit tanpa asumsi.
          </span>
        </footer>
      </div>

      <ActivityDrawer
        activity={selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />

      <CorporateProgramDrawer
        program={selectedCorporateProgram}
        onClose={() => setSelectedCorporateProgram(null)}
      />
    </div>
  );
}

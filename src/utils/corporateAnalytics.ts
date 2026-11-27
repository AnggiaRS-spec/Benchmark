import {
  CorporateActivityCategory,
  CorporateCompanyProfile,
  CorporateComparisonRow,
  CorporateProgramType,
  CorporateScheduleEntry,
  CorporateTrainingProgram,
  ScheduleGranularity,
  VerificationStatus,
} from '../types/corporateBenchmark';
import { isDirectNonHomepageUrl } from './analytics';

export interface CorporateFilterState {
  search: string;
  companyId: string;
  programType: CorporateProgramType | 'ALL';
  category: CorporateActivityCategory | 'ALL';
  verificationStatus: VerificationStatus | 'ALL';
}

export interface CorporateDatasetMetrics {
  totalCompanies: number;
  totalPrograms: number;
  verifiedPrograms: number;
  partialPrograms: number;
  unverifiedPrograms: number;
  totalScheduleEntries: number;
  directVerifiedUrls: number;
  programsWithPhysicalOrCharacter: number;
}

export function filterCorporatePrograms(
  programs: CorporateTrainingProgram[],
  filters: CorporateFilterState
): CorporateTrainingProgram[] {
  const q = filters.search.trim().toLowerCase();

  return programs.filter((item) => {
    if (filters.companyId !== 'ALL' && item.companyId !== filters.companyId) {
      return false;
    }
    if (filters.programType !== 'ALL' && item.programType !== filters.programType) {
      return false;
    }
    if (filters.category !== 'ALL' && !item.categories.includes(filters.category)) {
      return false;
    }
    if (
      filters.verificationStatus !== 'ALL' &&
      item.verificationStatus !== filters.verificationStatus
    ) {
      return false;
    }
    if (!q) {
      return true;
    }

    const haystack = [
      item.companyName,
      item.companyShortName,
      item.programName,
      item.programType,
      item.targetParticipants,
      item.objective,
      item.duration,
      item.stages,
      item.activities,
      item.materials,
      item.learningMethods,
      item.evaluation,
      item.notes,
      ...item.categories,
    ]
      .join(' ')
      .toLowerCase();

    return haystack.includes(q);
  });
}

export function filterCorporateSchedules(
  schedules: CorporateScheduleEntry[],
  companyId: string,
  granularity: ScheduleGranularity | 'ALL'
): CorporateScheduleEntry[] {
  return schedules.filter((slot) => {
    if (companyId !== 'ALL' && slot.companyId !== companyId) {
      return false;
    }
    if (granularity !== 'ALL' && slot.granularity !== granularity) {
      return false;
    }
    return true;
  });
}

function summarizePresence(text: string, fallback = 'Tidak ditemukan di sumber'): string {
  const cleaned = text.trim();
  const lower = cleaned.toLowerCase();
  if (
    !cleaned ||
    lower.startsWith('tidak ditemukan') ||
    lower.startsWith('tidak berlaku') ||
    lower.startsWith('tidak dirinci') ||
    lower.startsWith('tidak menjadi fokus')
  ) {
    return fallback;
  }
  return cleaned.length > 95 ? `${cleaned.slice(0, 92).trim()}...` : cleaned;
}

export function buildCorporateComparisonRows(
  programs: CorporateTrainingProgram[]
): CorporateComparisonRow[] {
  return programs.map((p) => ({
    programId: p.id,
    companyName: p.companyName,
    companyShortName: p.companyShortName,
    programName: p.programName,
    duration: p.duration,
    physical: summarizePresence(p.physicalActivities),
    mentalDiscipline: summarizePresence(p.mentalDisciplineActivities),
    leadership: summarizePresence(p.leadershipActivities),
    teamwork: summarizePresence(p.teamworkActivities),
    estateTechnical: summarizePresence(p.estateTechnicalActivities),
    millTechnical: summarizePresence(p.millPracticeActivities),
    sustainability: summarizePresence(p.sustainabilityActivities),
    k3: summarizePresence(p.k3Activities),
    fieldPractice: summarizePresence(p.fieldPracticeActivities),
    rotation: summarizePresence(p.rotationDetails),
    mentoring: summarizePresence(p.mentoringDetails),
    assessment: summarizePresence(p.evaluation),
    sourceCompleteness: p.verificationStatus,
  }));
}

export function computeCorporateMetrics(
  companies: CorporateCompanyProfile[],
  programs: CorporateTrainingProgram[],
  schedules: CorporateScheduleEntry[]
): CorporateDatasetMetrics {
  let verifiedPrograms = 0;
  let partialPrograms = 0;
  let unverifiedPrograms = 0;
  let directVerifiedUrls = 0;
  let programsWithPhysicalOrCharacter = 0;

  for (const prog of programs) {
    if (prog.verificationStatus === 'Terverifikasi') verifiedPrograms += 1;
    else if (prog.verificationStatus === 'Informasi Sebagian') partialPrograms += 1;
    else unverifiedPrograms += 1;

    if (isDirectNonHomepageUrl(prog.sourceUrl)) {
      directVerifiedUrls += 1;
    }
    if (
      prog.categories.includes('Fisik') ||
      prog.categories.includes('Mental & Disiplin')
    ) {
      programsWithPhysicalOrCharacter += 1;
    }
  }

  return {
    totalCompanies: companies.length,
    totalPrograms: programs.length,
    verifiedPrograms,
    partialPrograms,
    unverifiedPrograms,
    totalScheduleEntries: schedules.length,
    directVerifiedUrls,
    programsWithPhysicalOrCharacter,
  };
}

export function countProgramsByCompany(
  programs: CorporateTrainingProgram[],
  companyId: string
): number {
  return programs.filter((p) => p.companyId === companyId).length;
}

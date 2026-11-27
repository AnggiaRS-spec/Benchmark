export type VerificationStatus =
  | 'Terverifikasi'
  | 'Informasi Sebagian'
  | 'Belum Terverifikasi';

export type CorporateProgramType =
  | 'Management Trainee / Calon Asisten'
  | 'Leadership Development'
  | 'Technical & Operator Training'
  | 'K3 & Sustainability Training'
  | 'Pembinaan Fisik, Mental & Karakter'
  | 'Onboarding & Corporate University';

export const ALL_CORPORATE_PROGRAM_TYPES: CorporateProgramType[] = [
  'Management Trainee / Calon Asisten',
  'Leadership Development',
  'Technical & Operator Training',
  'K3 & Sustainability Training',
  'Pembinaan Fisik, Mental & Karakter',
  'Onboarding & Corporate University',
];

export type CorporateActivityCategory =
  | 'Fisik'
  | 'Mental & Disiplin'
  | 'Leadership'
  | 'Teamwork'
  | 'Teknis Kebun'
  | 'Teknis Pabrik'
  | 'Praktik Lapangan'
  | 'Sosial / Community'
  | 'Sustainability'
  | 'K3'
  | 'Manajerial & Administrasi';

export const ALL_CORPORATE_CATEGORIES: CorporateActivityCategory[] = [
  'Fisik',
  'Mental & Disiplin',
  'Leadership',
  'Teamwork',
  'Teknis Kebun',
  'Teknis Pabrik',
  'Praktik Lapangan',
  'Sosial / Community',
  'Sustainability',
  'K3',
  'Manajerial & Administrasi',
];

export type CorporateNavSection =
  | 'corp-programs'
  | 'corp-schedule'
  | 'corp-comparison'
  | 'corp-insights';

export type ResearchWorkspace = 'corporate' | 'institutions';

export type ScheduleGranularity =
  | 'Harian'
  | 'Event (Harian)'
  | 'Bulanan / Fase'
  | 'Tahapan (Durasi Tidak Dirinci)';

export interface CorporateSourceLink {
  label: string;
  url: string;
  year: string;
}

export interface CorporateCompanyProfile {
  id: string;
  rank: number;
  name: string;
  shortName: string;
  tickerOrGroup: string;
  plantedAreaLabel: string;
  rankingBasis: string;
  dataYear: string;
  trainingCenter: string;
  operationalRegions: string;
  avgTrainingHoursNote: string;
  sourceCompleteness: 'Sangat Lengkap' | 'Lengkap' | 'Cukup Lengkap';
  officialWebsite: string;
  annualReportUrl: string;
}

export interface CorporateTrainingProgram {
  id: string;
  companyId: string;
  companyName: string;
  companyShortName: string;
  programName: string;
  programType: CorporateProgramType;
  targetParticipants: string;
  objective: string;
  duration: string;
  scheduleSummary: string;
  stages: string;
  activities: string;
  materials: string;
  categories: CorporateActivityCategory[];
  physicalActivities: string;
  mentalDisciplineActivities: string;
  leadershipActivities: string;
  teamworkActivities: string;
  estateTechnicalActivities: string;
  fieldPracticeActivities: string;
  millPracticeActivities: string;
  socialCommunityActivities: string;
  sustainabilityActivities: string;
  k3Activities: string;
  rotationDetails: string;
  mentoringDetails: string;
  learningMethods: string;
  evaluation: string;
  targetCompetencies: string;
  implementationStatus: 'Dilaksanakan Rutin' | 'Terdokumentasi Dilaksanakan' | 'Ditawarkan / Rekrutmen Aktif';
  verificationStatus: VerificationStatus;
  year: string;
  sourceUrl: string;
  sourceLabel: string;
  additionalSources?: CorporateSourceLink[];
  notes: string;
}

export interface CorporateScheduleEntry {
  id: string;
  companyId: string;
  companyName: string;
  programId: string;
  programName: string;
  periodLabel: string;
  granularity: ScheduleGranularity;
  timeRange: string;
  sessionDuration: string;
  activity: string;
  material: string;
  method: string;
  location: string;
  sourceUrl: string;
  sourceLabel: string;
  notes?: string;
}

export interface CorporateComparisonRow {
  programId: string;
  companyName: string;
  companyShortName: string;
  programName: string;
  duration: string;
  physical: string;
  mentalDiscipline: string;
  leadership: string;
  teamwork: string;
  estateTechnical: string;
  millTechnical: string;
  sustainability: string;
  k3: string;
  fieldPractice: string;
  rotation: string;
  mentoring: string;
  assessment: string;
  sourceCompleteness: VerificationStatus;
}

export interface CorporateInsightItem {
  id: string;
  number: string;
  dimension: string;
  headline: string;
  summary: string;
  evidencePoints: string[];
  referencedCompanies: string[];
}

export interface RecommendedCorporatePhase {
  phase: string;
  title: string;
  duration: string;
  benchmarkCompanies: string;
  activitiesAndMaterials: string;
  deliveryAndEvaluation: string;
}

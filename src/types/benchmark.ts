export type BenchmarkCategory =
  | 'Fisik'
  | 'Mental'
  | 'Disiplin'
  | 'Leadership'
  | 'Teamwork'
  | 'Bela Negara'
  | 'Teknis Perkebunan'
  | 'Praktik Lapangan'
  | 'Soft Skills'
  | 'Akademik'
  | 'Manajemen'
  | 'K3'
  | 'Lingkungan';

export const ALL_CATEGORIES: BenchmarkCategory[] = [
  'Fisik',
  'Mental',
  'Disiplin',
  'Leadership',
  'Teamwork',
  'Bela Negara',
  'Teknis Perkebunan',
  'Praktik Lapangan',
  'Soft Skills',
  'Akademik',
  'Manajemen',
  'K3',
  'Lingkungan',
];

export type ProgramType =
  | 'Orientasi & Pembinaan Dasar'
  | 'Pendidikan Reguler & Praktik'
  | 'Pelatihan Profesional'
  | 'Kegiatan Khusus & Tradisi'
  | 'Rutinitas Harian Asrama'
  | 'Ekstrakurikuler & Pengembangan Diri';

export const ALL_PROGRAM_TYPES: ProgramType[] = [
  'Orientasi & Pembinaan Dasar',
  'Pendidikan Reguler & Praktik',
  'Pelatihan Profesional',
  'Kegiatan Khusus & Tradisi',
  'Rutinitas Harian Asrama',
  'Ekstrakurikuler & Pengembangan Diri',
];

export type CompletenessLevel = 'Lengkap' | 'Cukup Lengkap' | 'Parsial';

export type NavSection =
  | 'overview'
  | 'activities'
  | 'matrix'
  | 'taruna'
  | 'insights';

export interface SourceReference {
  label: string;
  url: string;
  accessNote?: string;
}

export interface BenchmarkActivity {
  id: string;
  institutionId: string;
  institution: string;
  program: string;
  programType: ProgramType;
  categories: BenchmarkCategory[];
  targetParticipants: string;
  description: string;
  activitiesAndMaterials: string;
  duration: string;
  schedule: string;
  frequency: string;
  deliveryMethod: string;
  objectives: string;
  evaluation: string;
  year: string;
  sourceUrl: string;
  sourceLabel: string;
  additionalSources?: SourceReference[];
  notes: string;
}

export interface InstitutionSummary {
  id: string;
  rank: number;
  name: string;
  shortName: string;
  institutionType: string;
  location: string;
  flagshipPrograms: string;
  coachingFocus: string;
  completeness: CompletenessLevel;
  completenessDetail: string;
  keyStrengths: string;
  dataLimitations: string;
  officialPortal: string;
}

export interface TarunaDailySlot {
  id: string;
  timeRange: string;
  durationLabel: string;
  activity: string;
  category: BenchmarkCategory;
  details: string;
  dayVariation: string;
  palmOilAdaptation: string;
  sourceUrl: string;
}

export interface InsightBlock {
  id: string;
  number: string;
  dimension: string;
  headline: string;
  summary: string;
  keyFindings: string[];
  evidenceInstitutions: string[];
}

export interface CorporateProgramPhase {
  phase: string;
  title: string;
  benchmarkSource: string;
  recommendedDuration: string;
  coreActivities: string;
  targetOutcome: string;
}

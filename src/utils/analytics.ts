import {
  ALL_CATEGORIES,
  BenchmarkActivity,
  BenchmarkCategory,
  InstitutionSummary,
  ProgramType,
} from '../types/benchmark';

export interface ActivityFilterState {
  search: string;
  institutionId: string;
  category: BenchmarkCategory | 'ALL';
  programType: ProgramType | 'ALL';
}

export interface CategoryCoverageRow {
  category: BenchmarkCategory;
  totalActivities: number;
  institutionCount: number;
  institutionsCovered: string[];
  byInstitution: Record<string, BenchmarkActivity[]>;
}

export interface DatasetMetrics {
  totalInstitutions: number;
  totalActivities: number;
  totalCategoriesCovered: number;
  verifiedDirectLinks: number;
  explicitDurationCount: number;
  missingDurationCount: number;
  completeInstitutionsCount: number;
}

export function filterActivities(
  activities: BenchmarkActivity[],
  filters: ActivityFilterState
): BenchmarkActivity[] {
  const query = filters.search.trim().toLowerCase();

  return activities.filter((item) => {
    if (filters.institutionId !== 'ALL' && item.institutionId !== filters.institutionId) {
      return false;
    }
    if (filters.category !== 'ALL' && !item.categories.includes(filters.category)) {
      return false;
    }
    if (filters.programType !== 'ALL' && item.programType !== filters.programType) {
      return false;
    }
    if (!query) {
      return true;
    }

    const searchable = [
      item.institution,
      item.program,
      item.programType,
      item.targetParticipants,
      item.description,
      item.activitiesAndMaterials,
      item.objectives,
      item.deliveryMethod,
      item.duration,
      item.notes,
      ...item.categories,
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(query);
  });
}

export function buildCategoryMatrix(
  activities: BenchmarkActivity[],
  institutions: InstitutionSummary[]
): CategoryCoverageRow[] {
  return ALL_CATEGORIES.map((category) => {
    const matching = activities.filter((act) => act.categories.includes(category));
    const byInstitution: Record<string, BenchmarkActivity[]> = {};
    const institutionsCovered: string[] = [];

    for (const inst of institutions) {
      const instMatches = matching.filter((act) => act.institutionId === inst.id);
      byInstitution[inst.id] = instMatches;
      if (instMatches.length > 0) {
        institutionsCovered.push(inst.shortName);
      }
    }

    return {
      category,
      totalActivities: matching.length,
      institutionCount: institutionsCovered.length,
      institutionsCovered,
      byInstitution,
    };
  });
}

export function computeDatasetMetrics(
  activities: BenchmarkActivity[],
  institutions: InstitutionSummary[]
): DatasetMetrics {
  const coveredCategories = new Set<BenchmarkCategory>();
  let verifiedDirectLinks = 0;
  let explicitDurationCount = 0;
  let missingDurationCount = 0;

  for (const act of activities) {
    for (const cat of act.categories) {
      coveredCategories.add(cat);
    }
    if (isDirectNonHomepageUrl(act.sourceUrl)) {
      verifiedDirectLinks += 1;
    }
    if (act.duration.toLowerCase().includes('tidak ditemukan pada sumber')) {
      missingDurationCount += 1;
    } else {
      explicitDurationCount += 1;
    }
  }

  return {
    totalInstitutions: institutions.length,
    totalActivities: activities.length,
    totalCategoriesCovered: coveredCategories.size,
    verifiedDirectLinks,
    explicitDurationCount,
    missingDurationCount,
    completeInstitutionsCount: institutions.filter((i) => i.completeness === 'Lengkap').length,
  };
}

export function isDirectNonHomepageUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return false;
    }
    const path = parsed.pathname.replace(/\/+$/, '');
    return path.length > 0 || parsed.search.length > 0;
  } catch {
    return false;
  }
}

export function countActivitiesByInstitution(
  activities: BenchmarkActivity[],
  institutionId: string
): number {
  return activities.filter((act) => act.institutionId === institutionId).length;
}

export function formatSourceHost(url: string): string {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export interface VerifiedSourceItem {
  url: string;
  label: string;
  host: string;
  institutionId: string;
  institution: string;
  year: string;
  accessNote?: string;
}

export function getInstitutionSources(
  activities: BenchmarkActivity[],
  institutionId: string
): VerifiedSourceItem[] {
  const seen = new Set<string>();
  const list: VerifiedSourceItem[] = [];

  for (const act of activities) {
    if (act.institutionId !== institutionId) continue;
    if (!seen.has(act.sourceUrl)) {
      seen.add(act.sourceUrl);
      list.push({
        url: act.sourceUrl,
        label: act.sourceLabel,
        host: formatSourceHost(act.sourceUrl),
        institutionId: act.institutionId,
        institution: act.institution,
        year: act.year,
      });
    }
    if (act.additionalSources) {
      for (const extra of act.additionalSources) {
        if (!seen.has(extra.url)) {
          seen.add(extra.url);
          list.push({
            url: extra.url,
            label: extra.label,
            host: formatSourceHost(extra.url),
            institutionId: act.institutionId,
            institution: act.institution,
            year: act.year,
            accessNote: extra.accessNote,
          });
        }
      }
    }
  }

  return list;
}

export function getAllVerifiedSources(
  activities: BenchmarkActivity[]
): VerifiedSourceItem[] {
  const seen = new Set<string>();
  const list: VerifiedSourceItem[] = [];

  for (const act of activities) {
    if (!seen.has(act.sourceUrl)) {
      seen.add(act.sourceUrl);
      list.push({
        url: act.sourceUrl,
        label: act.sourceLabel,
        host: formatSourceHost(act.sourceUrl),
        institutionId: act.institutionId,
        institution: act.institution,
        year: act.year,
      });
    }
    if (act.additionalSources) {
      for (const extra of act.additionalSources) {
        if (!seen.has(extra.url)) {
          seen.add(extra.url);
          list.push({
            url: extra.url,
            label: extra.label,
            host: formatSourceHost(extra.url),
            institutionId: act.institutionId,
            institution: act.institution,
            year: act.year,
            accessNote: extra.accessNote,
          });
        }
      }
    }
  }

  return list;
}

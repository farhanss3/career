import type { ProfileSchema, Project } from "../../schema/profile";
import type { ProjectFilter, TimelineItem, ValueProjectLink } from "./types";

const normalize = (value: string) => value.trim().toLowerCase();

const hasAnyMatch = (needles: string[] | undefined, haystack: string[]) => {
  if (!needles?.length) return true;
  const normalized = new Set(haystack.map(normalize));
  return needles.some((needle) => normalized.has(normalize(needle)));
};

/**
 * Feature #1: Day in my workflow interactive timeline.
 * Builds timeline rows from profile.workflow and resolves project names from profile.projects.
 */
export const buildWorkflowTimeline = (profile: ProfileSchema): TimelineItem[] => {
  const projectNameById = new Map(profile.projects.map((project) => [project.id, project.name]));

  return [...profile.workflow]
    .sort((a, b) => a.startMinute - b.startMinute)
    .map((step) => ({
      ...step,
      durationMinutes: Math.max(step.endMinute - step.startMinute, 0),
      projectNames: step.linkedProjectIds
        .map((projectId) => projectNameById.get(projectId))
        .filter((projectName): projectName is string => Boolean(projectName)),
    }));
};

/**
 * Feature #2: Project filter by role/tech/impact.
 * Filtering is fully driven by project fields from the profile schema.
 */
export const filterProjects = (projects: Project[], filters: ProjectFilter): Project[] => {
  const search = filters.search ? normalize(filters.search) : undefined;

  return projects.filter((project) => {
    const roleMatch = hasAnyMatch(filters.roles, project.roles);
    const techMatch = hasAnyMatch(filters.technologies, project.technologies);
    const impactMatch = hasAnyMatch(filters.impacts, project.impacts);

    const searchMatch =
      !search ||
      [project.name, project.summary, ...project.technologies, ...project.impacts]
        .map(normalize)
        .some((candidate) => candidate.includes(search));

    return roleMatch && techMatch && impactMatch && searchMatch;
  });
};

/**
 * Feature #3: Values-to-project mapping visualization.
 * Produces graph-friendly links from profile.values to project.valueSignals.
 */
export const buildValuesToProjectMap = (profile: ProfileSchema): ValueProjectLink[] => {
  return profile.values.map((value) => ({
    valueId: value.id,
    valueLabel: value.label,
    projects: profile.projects
      .flatMap((project) =>
        project.valueSignals
          .filter((signal) => signal.valueId === value.id)
          .map((signal) => ({
            projectId: project.id,
            projectName: project.name,
            evidence: signal.evidence,
            impact: signal.impact,
          })),
      )
      .sort((left, right) => {
        const impactWeight = { high: 3, medium: 2, low: 1 };
        return impactWeight[right.impact] - impactWeight[left.impact];
      }),
  }));
};

/**
 * Optional helper for UI state: selecting a timeline step returns linked projects.
 */
export const getProjectsForTimelineStep = (
  profile: ProfileSchema,
  stepId: string,
): Project[] => {
  const step = profile.workflow.find((candidate) => candidate.id === stepId);
  if (!step) return [];

  const linked = new Set(step.linkedProjectIds);
  return profile.projects.filter((project) => linked.has(project.id));
};

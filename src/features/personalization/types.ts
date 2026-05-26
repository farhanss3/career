import type { ProfileSchema, Project, WorkflowStep } from "../../schema/profile";

export interface TimelineItem extends WorkflowStep {
  projectNames: string[];
  durationMinutes: number;
}

export interface ProjectFilter {
  roles?: string[];
  technologies?: string[];
  impacts?: string[];
  search?: string;
}

export interface ValueProjectLink {
  valueId: string;
  valueLabel: string;
  projects: Array<{
    projectId: string;
    projectName: string;
    evidence: string;
    impact: "low" | "medium" | "high";
  }>;
}

export interface PersonalizationState {
  profile: ProfileSchema;
  projects: Project[];
  activeFilters: ProjectFilter;
  activeTimelineStepId?: string;
  activeValueId?: string;
}

export type Role = "engineer" | "leader" | "mentor" | "researcher";

export interface ValueSignal {
  valueId: string;
  evidence: string;
  impact: "low" | "medium" | "high";
}

export interface Project {
  id: string;
  name: string;
  summary: string;
  roles: Role[];
  technologies: string[];
  impacts: string[];
  valueSignals: ValueSignal[];
}

export interface WorkflowStep {
  id: string;
  title: string;
  startMinute: number;
  endMinute: number;
  linkedProjectIds: string[];
}

export interface ValueDefinition {
  id: string;
  label: string;
  description: string;
}

export interface ProfileSchema {
  projects: Project[];
  workflow: WorkflowStep[];
  values: ValueDefinition[];
}

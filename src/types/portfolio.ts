export interface SocialLinks {
  linkedin: string;
  github: string;
  emailWork: string;
  emailPersonal: string;
  bsidesUrl: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description?: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  impact?: string;
  category:
    | "Offensive Security"
    | "AI & LLM Security"
    | "Web Security"
    | "Tooling & Automation"
    | "Network Security"
    | "Cloud & Infrastructure"
    | "Security Engineering";
  technologies: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

export interface ProjectCaseStudy {
  overview: string;
  problem?: string;
  approach?: string;
  objectives: string[];
  technicalHighlights: string[];
  securityDetails?: string;
  findingsOrResults: string[];
  keyTakeaway: string;
}

export interface AttackSurfaceDomain {
  id: string;
  label: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  relatedProjectIds: string[];
  relatedResearchIds: string[];
  sectionLink: string;
  position: { x: number; y: number }; // Percentage coordinates for desktop SVG graph
}

export interface SecurityMethodologyStep {
  step: string;
  title: string;
  phase: string;
  summary: string;
  description: string;
  techniques: string[];
  deliverable: string;
  icon: "Radar" | "Network" | "Terminal" | "ShieldAlert" | "FileText" | "CheckCircle2";
}

export interface CurrentlyFocusItem {
  id: string;
  index: string;
  category: "RESEARCH" | "BUILDING" | "WORKING ON" | "EXPLORING";
  title: string;
  subtitle: string;
  description: string;
  status: string;
  tags: string[];
  linkHref: string;
  linkLabel: string;
  isExternal?: boolean;
}

export interface ResearchItem {
  id: string;
  title: string;
  scope: string;
  category: "Vulnerability Research" | "AI/LLM Threat Analysis" | "Web App Security" | "CTF / Methodology";
  date: string;
  summary: string;
  tags: string[];
  findingsHighlight: string;
  link?: string;
  reportDetails?: {
    targetType: string;
    vulnerabilityClass: string;
    severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFORMATIONAL";
    attackVector: string;
    remediation: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: "Community & Leadership" | "Security Research" | "Technical";
  websiteUrl?: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category:
    | "AI Security"
    | "Networking"
    | "Security Fundamentals"
    | "Software & Automation"
    | "Cloud Security"
    | "Cloud Fundamentals"
    | "Cloud"
    | "Offensive Security"
    | "Red Teaming";
  status: "Certified" | "Completed" | "In Progress" | "Active";
  verificationUrl?: string;
  badgeLabel?: string;
  focus?: string;
}

export interface PortfolioData {
  identity: {
    name: string;
    handle: string;
    role: string;
    subRole: string;
    tagline: string;
    location: string;
    status: string;
    uptimeDate: string;
    social: SocialLinks;
  };
  about: {
    headline: string;
    manifestoParagraphs: string[];
    stats: {
      label: string;
      value: string;
      subtext: string;
    }[];
  };
  skillCategories: SkillCategory[];
  currentlyFocus: CurrentlyFocusItem[];
  attackSurfaceDomains: AttackSurfaceDomain[];
  securityMethodology: SecurityMethodologyStep[];
  featuredProjects: ProjectItem[];
  researchAndWriteups: ResearchItem[];
  experience: ExperienceItem[];
  certifications: CertificationItem[];
  bsidesVadodara: {
    role: string;
    period: string;
    title: string;
    subtitle: string;
    url: string;
    overview: string;
    pillars: {
      number: string;
      title: string;
      description: string;
    }[];
    impactMetrics: {
      label: string;
      detail: string;
    }[];
  };
}

export type ISODate = string;

export interface RichMediaImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataUrl?: string;
  caption?: string;
}

export interface RichLink {
  href: string;
  label: string;
  ariaLabel?: string;
  icon?: string;
  isExternal?: boolean;
}

export interface CallToAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: string;
}

export interface Tag {
  id: string;
  label: string;
  color?: string;
}

export interface SocialLink extends RichLink {
  platform:
    | "github"
    | "linkedin"
    | "x"
    | "bluesky"
    | "youtube"
    | "dribbble"
    | "behance"
    | "other";
  username?: string;
}

export interface HeroSection {
  name: string;
  headline: string;
  subheadline?: string;
  location?: string;
  avatar?: RichMediaImage;
  backgroundImage?: RichMediaImage;
  socialLinks?: SocialLink[];
  ctas?: CallToAction[];
  tags?: Tag[];
}

export interface AboutSection {
  title?: string;
  summary: string;
  longFormMdxPath?: string;
  highlights?: string[];
  stats?: Array<{
    label: string;
    value: string;
    icon?: string;
  }>;
  images?: RichMediaImage[];
  tags?: Tag[];
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  description?: string;
  startDate: ISODate;
  endDate?: ISODate;
  current?: boolean;
  location?: string;
  links?: RichLink[];
  tags?: Tag[];
  media?: RichMediaImage[];
}

export interface ProjectItem {
  id: string;
  name: string;
  slug?: string;
  summary: string;
  descriptionMdxPath?: string;
  thumbnail?: RichMediaImage;
  gallery?: RichMediaImage[];
  tags?: Tag[];
  roles?: string[];
  status?: "planned" | "in-progress" | "shipped" | "archived";
  startDate?: ISODate;
  endDate?: ISODate;
  links?: Array<
    RichLink & {
      type?: "demo" | "repo" | "case-study" | "article" | "other";
    }
  >;
  ctas?: CallToAction[];
  featured?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category?: string;
  level?: number;
  years?: number;
  icon?: string;
  proofLinks?: RichLink[];
  tags?: Tag[];
}

export interface SkillsSection {
  title?: string;
  groups?: Array<{
    id: string;
    label: string;
    skills: SkillItem[];
  }>;
  cloud?: SkillItem[];
}

export interface TestimonialItem {
  id: string;
  personName: string;
  personRole?: string;
  company?: string;
  quote: string;
  avatar?: RichMediaImage;
  date?: ISODate;
  sourceLink?: RichLink;
  tags?: Tag[];
}

export interface ContactSection {
  title?: string;
  intro?: string;
  email?: string;
  phone?: string;
  location?: string;
  availability?: string;
  calendlyLink?: string;
  socialLinks?: SocialLink[];
  ctas?: CallToAction[];
}

export interface ProfileSchema {
  meta?: {
    locale?: string;
    theme?: "light" | "dark" | "system";
    seoTitle?: string;
    seoDescription?: string;
    keywords?: string[];
    ogImage?: RichMediaImage;
  };
  hero: HeroSection;
  about: AboutSection;
  timeline: TimelineEntry[];
  projects: ProjectItem[];
  skills: SkillsSection;
  testimonials?: TestimonialItem[];
  contact: ContactSection;
}

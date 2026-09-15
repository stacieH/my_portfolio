export type Stat = {
  value: string;
  label: string;
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type Profile = {
  name: string;
  shortName: string;
  title: string;
  summary: string;
  location: string;
  photo: { src: string; alt: string; width: number; height: number };
  stats: Stat[];
  links: { linkedin: string; github: string };
  education: Education;
};

export type Experience = {
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  bullets: string[];
};

export type WorkIcon = "cart" | "card" | "school" | "dashboard" | "receipt" | "phone" | "ticket" | "package";

export type WorkDomain = {
  title: string;
  description: string;
  stack: string[];
  icon: WorkIcon;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  features: string[];
  image: { src: string; alt: string; width: number; height: number };
  github: string;
};

export type Course = {
  title: string;
  date: string;
};

export type LearningPath = {
  title: string;
  provider: string;
  date: string;
  courses: Course[];
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
};

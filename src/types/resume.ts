export interface Experience {
  company: string;
  title: string;
  startDate: string;
  endDate: string | null;
  location: string;
  highlights: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  gitHubUrl: string | null;
  liveUrl: string | null;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  location: string;
}

export interface Resume {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  linkedIn: string;
  gitHub: string;
  summary: string;
  experience: Experience[];
  skills: Skill[];
  projects: Project[];
  education: Education[];
}

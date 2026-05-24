export interface Project {
  id: string;
  title: string;
  category: 'Dark Art Illustrations' | 'Graphic Design' | 'UI UX Design' | 'Posters' | 'Branding' | 'Experimental Art';
  image: string;
  description: string;
  year: string;
  client?: string;
  role?: string;
  tags: string[];
  palette: string[]; // hex codes for poster display
  concept: string;
  typographyShowcase: {
    fontName: string;
    sampleText: string;
    description: string;
  };
  mockups: string[];
}

export interface Illustration {
  id: string;
  title: string;
  category: 'poster' | 'illustration' | 'cyberpunk' | 'sketch';
  image: string;
  year: string;
  dimensions: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'design' | 'technical' | 'tools';
}

export interface TimelineEvent {
  year: string;
  role: string;
  company: string;
  description: string;
}

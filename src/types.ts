export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  tags: string[];
  category: 'hostel' | 'academic' | 'club' | 'transport' | 'general';
}

export interface ClubItem {
  name: string;
  category: 'coding' | 'technical' | 'cultural' | 'sports';
  description: string;
  recruits: string;
  status: string;
  tagline: string;
}

export interface RoadmapStep {
  month: number;
  title: string;
  subtitle: string;
  target: string;
  description: string;
  advice: string;
}

export interface PackingNeed {
  id: string;
  label: string;
  isVital: boolean;
}

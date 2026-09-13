export interface SubTopic {
  id: string;
  title: string;
  details: string[];
}

export interface TopicSection {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface CodeSnippet {
  title: string;
  code: string;
  description: string;
}

export interface CLevel {
  levelNumber: number;
  title: string;
  tagline: string;
  sections: TopicSection[];
  codeSnippet: CodeSnippet;
  keyHighlight?: string;
  estimatedTime: string;
  badgeColor: string;
}

export interface TimelineWeek {
  weeks: string;
  focusLevels: string;
  description: string;
  milestone: string;
  projectOrDrill?: string;
}

export interface ResourceItem {
  type: 'book' | 'practice';
  title: string;
  authorOrPlatform: string;
  description: string;
  url?: string;
  highlight?: string;
}

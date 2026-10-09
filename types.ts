import React from 'react';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  category?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface ExperienceItem {
  organization: string;
  role: string;
  period?: string;
  type: 'employment' | 'education';
  description?: string;
  highlights?: string[];
}

export interface PlaylistItem {
  id: number | string;
  title: string;
  description: string;
  tools: string[];
  thumbnailUrl?: string;
  videoUrl?: string;
  category: string;
  isFeatured?: boolean;
}

export interface Project {
  id: number | string;
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  tools: string[];
  videoUrl?: string;
  externalUrl?: string;
  playlist?: PlaylistItem[];
}

export interface QuoteBreakdownItem {
  item: string;
  cost: string;
}

export interface Quote {
  estimatedCostRange: string;
  breakdown: QuoteBreakdownItem[];
  timelineEstimate: string;
  assumptions: string;
}

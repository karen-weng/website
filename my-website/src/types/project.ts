/**
 * Shared Project Types
 * 
 * Purpose: Centralized type definitions for project-related components
 * This prevents code duplication and ensures consistency across components
 */

export type ProjectCategory = 'hardware' | 'software';

export interface Project {
  id: string;
  title: string;
  year: number;
  description: string;
  detailedDescription: string;
  techStack: string[];
  category: ProjectCategory[];
  links: { label: string; url: string }[];
  images: string[];
  files?: { name: string; url: string }[];
} 
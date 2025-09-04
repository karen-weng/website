/**
 * Shared Project Types
 * 
 * Purpose: Centralized type definitions for project-related components
 * This prevents code duplication and ensures consistency across components
 */

export type ProjectCategory = 'hardware' | 'software';

// Content Block System - Clean Component-Based Architecture
export interface ContentBlock {
  type: 'text' | 'image' | 'imageGrid' | 'heading' | 'code' | 'quote' | 'divider';
  content?: any;       // For text, heading, code, quote content
  src?: string;        // For images
  alt?: string;        // For images
  caption?: string;    // For images
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
  style?: 'line' | 'space' | 'dots'; // For dividers
  
  // Image-specific properties
  imageSize?: 'thumbnail' | 'extra-small' | 'small' | 'medium' | 'large' | 'full-width';
  images?: Array<{     // For imageGrid type
    src: string;
    alt: string;
    caption?: string;
  }>;
  gridColumns?: number; // How many images per row (for imageGrid)
}

export interface Project {
  id: string;
  title: string;
  year: number;
  previewImage: string;
  techStack: string[];
  category: ProjectCategory[];
  links: { label: string; url: string }[];
  
  // Content Blocks - Component-Based with Data Configuration
  contentBlocks: ContentBlock[];
} 
import type { ContentBlock } from '../types/project';

export const getFirstImageFromContentBlocks = (contentBlocks: ContentBlock[]): string | null => {
  const imageBlock = contentBlocks.find(block => block.type === 'image');
  return imageBlock?.src || imageBlock?.content?.src || null;
};

export const getAllImagesFromContentBlocks = (contentBlocks: ContentBlock[]): string[] => {
  return contentBlocks
    .filter(block => block.type === 'image')
    .map(block => block.src || block.content?.src)
    .filter(Boolean);
}; 
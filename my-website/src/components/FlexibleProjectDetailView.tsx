import type { Project, ContentBlock } from '../types/project';
import { TextBlock, ImageBlock, ImageGridBlock, HeadingBlock, CodeBlock, QuoteBlock, DividerBlock } from './contentBlocks';

interface FlexibleProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

/**
 * FlexibleProjectDetailView Component
 * 
 * Purpose: Ultimate flexibility for project detail pages using content blocks
 * 
 * Features:
 * - Content blocks can be arranged in ANY order
 * - Support for text, images, image grids, headings, code, quotes, dividers
 * - Image size control (thumbnail, small, medium, large, full-width)
 * - Grid layout control for multiple images per row
 * - Easy configuration through project data
 * - No fixed layout - you define exactly what appears where
 * - Clean header with title and year, immediate access to links
 */
const FlexibleProjectDetailView: React.FC<FlexibleProjectDetailViewProps> = ({
  project,
  onBack
}) => {
  
  const renderContentBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case 'text':
        return (
          <TextBlock 
            key={index}
            content={block.content}
            size={block.size}
            align={block.align}
          />
        );
      
      case 'heading':
        return (
          <HeadingBlock 
            key={index}
            content={block.content}
            size={block.size}
            align={block.align}
          />
        );
      
      case 'image':
        // Handle both old format (content.src) and new format (src)
        const imageSrc = block.src || block.content?.src;
        const imageAlt = block.alt || block.content?.alt;
        const imageCaption = block.caption || block.content?.caption;
        
        return (
          <ImageBlock 
            key={index}
            src={imageSrc}
            alt={imageAlt || ''}
            caption={imageCaption}
            align={block.align}
            imageSize={block.imageSize}
          />
        );
      
      case 'imageGrid':
        return (
          <ImageGridBlock 
            key={index}
            images={block.images || []}
            gridColumns={block.gridColumns}
            align={block.align}
            imageSize={block.imageSize}
          />
        );
      
      case 'code':
        return (
          <CodeBlock 
            key={index}
            content={block.content}
          />
        );
      
      case 'quote':
        return (
          <QuoteBlock 
            key={index}
            content={block.content}
            size={block.size}
          />
        );
      
      case 'divider':
        return (
          <DividerBlock 
            key={index}
            style={block.style}
          />
        );
      
      default:
        return null;
    }
  };



  return (
    <div>
      {/* Back Button */}
      <button
        onClick={onBack}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          backgroundColor: 'white',
          cursor: 'pointer'
        }}
      >
        ← Back to Grid
      </button>
      
      {/* Main Content */}
      <div style={{
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: 'white',
        border: '2px solid #e0e0e0'
      }}>
        {/* Header - Title (left) and Year (right), no subheading */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'baseline',
          marginBottom: '1.5rem',
          borderBottom: '2px solid #f0f0f0',
          paddingBottom: '1rem'
        }}>
          <h1 style={{ margin: 0, fontSize: '2rem', color: '#333' }}>
            {project.title}
          </h1>
          <span style={{ fontSize: '1.2rem', color: '#666', fontWeight: 'bold' }}>
            {project.year}
          </span>
        </div>

        {/* Links - Immediate access */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {project.links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.25rem',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Content Blocks Only - Ultimate Flexibility */}
        {project.contentBlocks && project.contentBlocks.map((block, index) => 
          renderContentBlock(block, index)
        )}
      </div>
    </div>
  );
};

export default FlexibleProjectDetailView; 
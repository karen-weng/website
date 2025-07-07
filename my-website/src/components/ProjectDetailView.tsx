import type { Project, ProjectImage, ImageLayout } from '../types/project';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

/**
 * Enhanced ProjectDetailView Component
 * 
 * Purpose: Displays comprehensive details for a selected project with flexible layouts
 * 
 * Implementation:
 * - Multiple layout templates (standard, showcase, technical, creative)
 * - Flexible image layouts (grid, carousel, showcase, gallery)
 * - Custom sections for unique project content
 * - Rich image support with captions
 * - Responsive design for all layout types
 */
const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack
}) => {
  // Render different image layouts based on project specification
  const renderImages = (images: ProjectImage[], layout: ImageLayout = 'grid') => {
    switch (layout) {
      case 'carousel':
        return renderCarousel(images);
      case 'showcase':
        return renderShowcase(images);
      case 'gallery':
        return renderGallery(images);
      default:
        return renderGrid(images);
    }
  };

  const renderGrid = (images: ProjectImage[]) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '1.5rem' 
    }}>
      {images.map((image, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              marginBottom: '0.5rem'
            }}
          />
          {image.caption && (
            <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );

  const renderCarousel = (images: ProjectImage[]) => (
    <div style={{ 
      display: 'flex', 
      overflowX: 'auto', 
      gap: '1rem',
      paddingBottom: '1rem',
      scrollSnapType: 'x mandatory'
    }}>
      {images.map((image, index) => (
        <div key={index} style={{ 
          minWidth: '300px', 
          textAlign: 'center',
          scrollSnapAlign: 'start'
        }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              marginBottom: '0.5rem'
            }}
          />
          {image.caption && (
            <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>{image.caption}</p>
          )}
        </div>
      ))}
    </div>
  );

  const renderShowcase = (images: ProjectImage[]) => {
    const featured = images.find(img => img.featured) || images[0];
    const others = images.filter(img => img !== featured);
    
    return (
      <div>
        {/* Featured Image */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <img
            src={featured.src}
            alt={featured.alt}
            style={{
              width: '100%',
              maxHeight: '400px',
              objectFit: 'contain',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              marginBottom: '0.5rem'
            }}
          />
          {featured.caption && (
            <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
              {featured.caption}
            </p>
          )}
        </div>
        
        {/* Other Images */}
        {others.length > 0 && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
            gap: '1rem' 
          }}>
            {others.map((image, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '120px',
                    objectFit: 'cover',
                    borderRadius: '0.25rem',
                    border: '1px solid #ccc',
                    marginBottom: '0.25rem'
                  }}
                />
                {image.caption && (
                  <p style={{ fontSize: '0.7rem', color: '#666', margin: 0 }}>
                    {image.caption}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderGallery = (images: ProjectImage[]) => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '0.5rem',
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      borderRadius: '0.5rem'
    }}>
      {images.map((image, index) => (
        <div key={index} style={{ 
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '0.25rem'
        }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
          {image.caption && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              padding: '0.25rem',
              fontSize: '0.7rem'
            }}>
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  // Render custom sections
  const renderCustomSection = (section: any) => {
    switch (section.type) {
      case 'text':
        return <p style={{ lineHeight: 1.6 }}>{section.content}</p>;
      case 'code':
        return (
          <pre style={{ 
            backgroundColor: '#f4f4f4', 
            padding: '1rem', 
            borderRadius: '0.25rem',
            overflow: 'auto',
            fontSize: '0.9rem'
          }}>
            <code>{section.content}</code>
          </pre>
        );
      case 'video':
        return (
          <div style={{ textAlign: 'center' }}>
            <iframe
              src={section.content}
              width="100%"
              height="315"
              style={{ borderRadius: '0.5rem', border: 'none' }}
              allowFullScreen
            />
          </div>
        );
      default:
        return <div>{section.content}</div>;
    }
  };

  // Choose layout template
  const getLayoutStyle = () => {
    switch (project.layoutTemplate) {
      case 'showcase':
        return { maxWidth: '1000px', margin: '0 auto' };
      case 'technical':
        return { 
          fontFamily: 'monospace', 
          backgroundColor: '#f8f9fa',
          border: '1px solid #e9ecef'
        };
      case 'creative':
        return { 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          border: 'none'
        };
      default:
        return {};
    }
  };

  // Prepare images for display
  const displayImages = project.detailImages || project.images.map(src => ({ 
    src, 
    alt: project.title 
  }));

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
      
      {/* Main Content Container with Dynamic Layout */}
      <div style={{
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: 'white',
        border: '2px solid #e0e0e0',
        ...getLayoutStyle()
      }}>
        {/* Project Header */}
        <h1 style={{ marginBottom: '0.5rem' }}>{project.title}</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
          {project.year} • {project.category.join(' & ').charAt(0).toUpperCase() + project.category.join(' & ').slice(1)}
        </p>
        
        {/* Custom Sections or Default Layout */}
        {project.customSections ? (
          // Render custom sections for unique layouts
          project.customSections.map((section, index) => (
            <div key={index} style={{ marginBottom: '2rem' }}>
              <h3>{section.title}</h3>
              {section.type === 'images' ? 
                renderImages(section.content, project.imageLayout) :
                renderCustomSection(section)
              }
            </div>
          ))
        ) : (
          // Default layout
          <>
            <div style={{ marginBottom: '2rem' }}>
              <h3>Description</h3>
              <p>{project.detailedDescription}</p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3>Tech Stack</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      borderRadius: '0.25rem',
                      fontSize: '0.8rem',
                      border: '1px solid #ccc'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3>Images</h3>
              {renderImages(displayImages, project.imageLayout)}
            </div>
          </>
        )}

        {/* Links Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Links</h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {project.links.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#333',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '0.25rem',
                  fontSize: '0.9rem'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Downloads Section */}
        {project.files && project.files.length > 0 && (
          <div>
            <h3>Downloads</h3>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {project.files.map(file => (
                <a
                  key={file.name}
                  href={file.url}
                  download
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '0.25rem',
                    fontSize: '0.9rem'
                  }}
                >
                  📁 {file.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailView; 
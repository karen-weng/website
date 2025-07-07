import type { Project } from '../types/project';

interface ProjectDetailViewProps {
  project: Project;
  onBack: () => void;
}

/**
 * ProjectDetailView Component
 * 
 * Purpose: Displays comprehensive details for a selected project
 * 
 * Implementation:
 * - Clean white background (no colored backgrounds)
 * - Structured sections: Description, Tech Stack, Images, Links, Downloads
 * - Responsive image grid for multiple project images
 * - Tech stack displayed as small pills/badges
 * - External links styled as buttons
 * - File downloads with file emoji indicators
 * - Back button to return to grid view
 * - Professional layout with proper spacing
 */
const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBack
}) => {
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
      
      {/* Main Content Container */}
      <div style={{
        padding: '2rem',
        borderRadius: '1rem',
        backgroundColor: 'white', // Clean white background
        border: '2px solid #e0e0e0'
      }}>
        {/* Project Header */}
        <h1 style={{ marginBottom: '0.5rem' }}>{project.title}</h1>
        <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
          {project.year} • {project.category.join(' & ').charAt(0).toUpperCase() + project.category.join(' & ').slice(1)}
        </p>
        
        {/* Description Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Description</h3>
          <p>{project.detailedDescription}</p>
        </div>

        {/* Tech Stack Section */}
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

        {/* Images Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h3>Images</h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1rem' 
          }}>
            {project.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} ${index + 1}`}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  border: '1px solid #ccc'
                }}
              />
            ))}
          </div>
        </div>

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

        {/* Downloads Section (conditional) */}
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
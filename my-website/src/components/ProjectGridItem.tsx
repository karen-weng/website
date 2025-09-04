import type { Project } from '../types/project';

interface ProjectGridItemProps {
  project: Project;
  onClick: () => void;
}

/**
 * ProjectGridItem Component
 * 
 * Purpose: Renders individual project cards in the grid view
 * 
 * Implementation:
 * - Displays project preview image with hover effects
 * - Color-coded underlines matching the navbar style
 * - Image darkens on hover and shows project title overlay
 * - Scales up slightly on hover for interactive feedback
 * - No text below image (clean grid appearance)
 * - Responsive grid layout support
 * - Uses previewImage field for customizable preview selection
 */
const ProjectGridItem: React.FC<ProjectGridItemProps> = ({
  project,
  onClick
}) => {
  // Generate underline styling (same logic as navbar)
  const getUnderlineStyle = () => {
    const hasHardware = project.category.includes('hardware');
    const hasSoftware = project.category.includes('software');
    const underlineThickness = '4px';
    
    if (hasHardware && hasSoftware) {
      return {
        backgroundImage: `linear-gradient(to right, #ADD8E6 50%, #FFB6C1 50%)`,
        backgroundPosition: `0 100%`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `100% ${underlineThickness}`
      };
    } else if (hasHardware) {
      return { boxShadow: `inset 0 -${underlineThickness} 0 #ADD8E6` };
    } else if (hasSoftware) {
      return { boxShadow: `inset 0 -${underlineThickness} 0 #FFB6C1` };
    }
    return {};
  };

  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        cursor: 'pointer',
        borderRadius: '1rem',
        overflow: 'hidden',
        transition: 'transform 0.2s ease',
        ...getUnderlineStyle()
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div style={{ position: 'relative' }}>
        {/* Project Preview Image */}
        <img
          src={project.previewImage}
          alt={project.title}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            transition: 'filter 0.3s ease',
            borderRadius: '1rem'
          }}
          onMouseEnter={(e) => {
            // Darken image and show title overlay
            e.currentTarget.style.filter = 'brightness(0.7)';
            const overlay = e.currentTarget.nextElementSibling as HTMLElement;
            if (overlay) overlay.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            // Restore image and hide title overlay
            e.currentTarget.style.filter = 'brightness(1)';
            const overlay = e.currentTarget.nextElementSibling as HTMLElement;
            if (overlay) overlay.style.opacity = '0';
          }}
        />
        {/* Title Overlay (hidden by default, shown on hover) */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            opacity: '0',
            transition: 'opacity 0.3s ease',
            textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
            pointerEvents: 'none' // Prevent interference with mouse events
          }}
        >
          {project.title}
        </div>
      </div>
    </div>
  );
};

export default ProjectGridItem; 
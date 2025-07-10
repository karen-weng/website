import type { Project } from '../types/project';

interface ProjectNavItemProps {
  project: Project;
  isSelected: boolean;
  onClick: () => void;
}

/**
 * ProjectNavItem Component
 * 
 * Purpose: Renders individual project items in the left navbar
 * 
 * Implementation:
 * - Displays project title and year in a flex layout (title left, year right)
 * - Color-coded underlines based on project category:
 *   - Hardware: Light blue underline
 *   - Software: Light pink underline  
 *   - Both: Gradient underline (half blue, half pink)
 * - Uses box-shadow for solid underlines, background gradient for mixed
 * - No colored backgrounds to keep interface clean
 * - Hover and selection states
 */
const ProjectNavItem: React.FC<ProjectNavItemProps> = ({
  project,
  isSelected,
  onClick
}) => {
  // Generate underline styling based on project categories
  const getUnderlineStyle = () => {
    const hasHardware = project.category.includes('hardware');
    const hasSoftware = project.category.includes('software');
    const underlineThickness = '4px';
    
    if (hasHardware && hasSoftware) {
      // Mixed project: gradient underline
      return {
        backgroundImage: `linear-gradient(to right, #ADD8E6 50%, #FFB6C1 50%)`,
        backgroundPosition: `0 100%`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `100% ${underlineThickness}`
      };
    } else if (hasHardware) {
      // Hardware only: blue underline using box-shadow
      return { boxShadow: `inset 0 -${underlineThickness} 0 #ADD8E6` };
    } else if (hasSoftware) {
      // Software only: pink underline using box-shadow
      return { boxShadow: `inset 0 -${underlineThickness} 0 #FFB6C1` };
    }
    return {};
  };

  return (
    <div
      onClick={onClick}
      style={{
        padding: '0.75rem',
        marginBottom: '0.5rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        border: '1px solid #e0e0e0',
        backgroundColor: 'white', // Always white, no selection background
        transition: 'all 0.2s ease',
        ...getUnderlineStyle()
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%'
      }}>
        {/* Project title - left aligned, bold */}
        <div style={{ 
          fontWeight: 'bold', 
          fontSize: '0.9rem',
          flex: 1,
          marginRight: '1rem'
        }}>
          {project.title}
        </div>
        {/* Project year - right aligned, lighter */}
        <div style={{ 
          fontSize: '0.8rem', 
          color: '#666',
          fontWeight: 'normal'
        }}>
          {project.year}
        </div>
      </div>
    </div>
  );
};

export default ProjectNavItem; 
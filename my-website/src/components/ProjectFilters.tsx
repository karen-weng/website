interface ProjectFiltersProps {
  showHardware: boolean;
  showSoftware: boolean;
  onToggleHardware: () => void;
  onToggleSoftware: () => void;
}

/**
 * ProjectFilters Component
 * 
 * Purpose: Renders toggle buttons for filtering projects by hardware/software categories
 * 
 * Implementation:
 * - Two side-by-side toggle buttons
 * - Visual feedback through background colors (active = colored, inactive = gray)
 * - Calls parent callback functions when toggled
 * - Responsive flexbox layout
 */
const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  showHardware,
  showSoftware,
  onToggleHardware,
  onToggleSoftware
}) => {
  return (
    <div style={{ marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
      <button
        onClick={onToggleHardware}
        style={{
          flex: 1,
          padding: '0.25rem 0.25rem',
          border: '1px solid #ADD8E6',
          borderRadius: '0.25rem',
          backgroundColor: showHardware ? '#ADD8E6' : '#f0f0f0',
          color: showHardware ? 'white' : '#666',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.7rem',
          transition: 'all 0.2s ease'
        }}
      >
        Hardware
      </button>
      <button
        onClick={onToggleSoftware}
        style={{
          flex: 1,
          padding: '0.25rem 0.25rem',
          border: '1px solid #FFB6C1',
          borderRadius: '0.25rem',
          backgroundColor: showSoftware ? '#FFB6C1' : '#f0f0f0',
          color: showSoftware ? 'white' : '#666',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '0.7rem',
          transition: 'all 0.2s ease'
        }}
      >
        Software
      </button>
    </div>
  );
};

export default ProjectFilters; 
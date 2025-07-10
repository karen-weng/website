interface DividerBlockProps {
  style?: 'line' | 'space' | 'dots';
}

const DividerBlock: React.FC<DividerBlockProps> = ({ style = 'line' }) => {
  if (style === 'space') {
    return <div style={{ height: '3rem' }} />;
  } else if (style === 'dots') {
    return (
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <span style={{ fontSize: '1.5rem', letterSpacing: '1rem', color: '#ccc' }}>
          • • •
        </span>
      </div>
    );
  } else {
    return (
      <hr 
        style={{ 
          border: 'none',
          borderTop: '2px solid #e0e0e0',
          margin: '2rem 0'
        }}
      />
    );
  }
};

export default DividerBlock; 
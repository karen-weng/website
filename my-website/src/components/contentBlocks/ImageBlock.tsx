interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  align?: 'left' | 'center' | 'right';
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt, caption, align = 'center' }) => {
  return (
    <div 
      style={{ 
        marginBottom: '2rem',
        textAlign: align
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
      {caption && (
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#666', 
          marginTop: '0.5rem',
          fontStyle: 'italic'
        }}>
          {caption}
        </p>
      )}
    </div>
  );
};

export default ImageBlock; 
interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  align?: 'left' | 'center' | 'right';
  imageSize?: 'thumbnail' | 'extra-small' | 'small' | 'medium' | 'large' | 'full-width';
}

const ImageBlock: React.FC<ImageBlockProps> = ({ 
  src, 
  alt, 
  caption, 
  align = 'center',
  imageSize = 'medium'
}) => {
  // 🎛️ CUSTOMIZE IMAGE SIZES HERE 🎛️
  // You can adjust these values to your preferred sizes
  // Now uses viewport width (vw) for responsive sizing
  const getSizeStyles = () => {
    switch (imageSize) {
      case 'thumbnail':
        return { maxWidth: '10vw', minWidth: '150px', height: 'auto', objectFit: 'cover' as const };
      case 'extra-small':
        return { maxWidth: '15vw', minWidth: '200px', height: 'auto' }; // 15% of viewport width
      case 'small':
        return { maxWidth: '25vw', minWidth: '250px', height: 'auto' }; // 25% of viewport width
      case 'medium':
        return { maxWidth: '45vw', minWidth: '400px', height: 'auto' }; // 45% of viewport width
      case 'large':
        return { maxWidth: '65vw', minWidth: '600px', height: 'auto' }; // 65% of viewport width
      case 'full-width':
        return { width: '100%', height: 'auto' }; // Full width
      default:
        return { maxWidth: '45vw', minWidth: '400px', height: 'auto' };
    }
  };

  return (
    <div 
      style={{ 
        marginBottom: '2rem',
        textAlign: align,
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          ...getSizeStyles(),
          borderRadius: '0.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
      {caption && (
        <p style={{ 
          fontSize: '0.9rem', 
          color: '#666', 
          marginTop: '0.5rem',
          fontStyle: 'italic',
          maxWidth: getSizeStyles().maxWidth || 'auto'
        }}>
          {caption}
        </p>
      )}
    </div>
  );
};

export default ImageBlock; 
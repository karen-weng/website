interface ImageGridBlockProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  gridColumns?: number;
  align?: 'left' | 'center' | 'right';
  imageSize?: 'thumbnail' | 'extra-small' | 'small' | 'medium' | 'large' | 'full-width';
}

const ImageGridBlock: React.FC<ImageGridBlockProps> = ({ 
  images, 
  gridColumns = 2, 
  align = 'center',
  imageSize = 'medium'
}) => {
  // 🎛️ CUSTOMIZE GRID IMAGE SIZES HERE 🎛️
  // You can adjust these values to your preferred sizes
  // Now uses viewport width (vw) for responsive sizing
  const getSizeStyles = () => {
    switch (imageSize) {
      case 'thumbnail':
        return { height: '15vw', minHeight: '120px', objectFit: 'contain' as const }; // 15% of viewport width
      case 'extra-small':
        return { height: '20vw', minHeight: '150px', objectFit: 'contain' as const }; // 20% of viewport width
      case 'small':
        return { height: '25vw', minHeight: '180px', objectFit: 'contain' as const }; // 25% of viewport width
      case 'medium':
        return { height: '30vw', minHeight: '200px', objectFit: 'contain' as const }; // 30% of viewport width
      case 'large':
        return { height: '40vw', minHeight: '280px', objectFit: 'contain' as const }; // 40% of viewport width
      case 'full-width':
        return { height: '35vw', minHeight: '250px', objectFit: 'contain' as const }; // 35% of viewport width
      default:
        return { height: '30vw', minHeight: '200px', objectFit: 'contain' as const };
    }
  };

  return (
    <div 
      style={{ 
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'
      }}
    >
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
          gap: '1rem',
          width: '100%',
          maxWidth: '1200px'
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                ...getSizeStyles(),
                borderRadius: '0.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            />
            {image.caption && (
              <p style={{ 
                fontSize: '0.8rem', 
                color: '#666', 
                marginTop: '0.5rem',
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGridBlock; 
interface HeadingBlockProps {
  content: string;
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ content, size = 'medium', align = 'left' }) => {
  const HeadingTag = size === 'large' ? 'h2' : size === 'small' ? 'h4' : 'h3';
  
  return (
    <HeadingTag 
      style={{ 
        marginBottom: '1rem',
        marginTop: '2rem',
        textAlign: align,
        color: '#333'
      }}
    >
      {content}
    </HeadingTag>
  );
};

export default HeadingBlock; 
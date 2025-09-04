interface TextBlockProps {
  content: string;
  size?: 'small' | 'medium' | 'large';
  align?: 'left' | 'center' | 'right';
}

const TextBlock: React.FC<TextBlockProps> = ({ content, size = 'medium', align = 'left' }) => {
  return (
    <div 
      style={{ 
        marginBottom: '1.5rem',
        textAlign: align,
        fontSize: size === 'large' ? '1.2rem' : size === 'small' ? '0.9rem' : '1rem',
        lineHeight: '1.6',
        whiteSpace: 'pre-line' // This preserves line breaks from \n characters
      }}
    >
      {content}
    </div>
  );
};

export default TextBlock; 
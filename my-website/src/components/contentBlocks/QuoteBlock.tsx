interface QuoteBlockProps {
  content: string;
  size?: 'small' | 'medium' | 'large';
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ content, size = 'medium' }) => {
  return (
    <blockquote 
      style={{
        borderLeft: '4px solid #007bff',
        paddingLeft: '1.5rem',
        margin: '2rem 0',
        fontStyle: 'italic',
        fontSize: size === 'large' ? '1.3rem' : '1.1rem',
        color: '#555',
        backgroundColor: '#f8f9fa',
        padding: '1.5rem',
        borderRadius: '0.5rem'
      }}
    >
      {content}
    </blockquote>
  );
};

export default QuoteBlock; 
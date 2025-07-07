interface CodeBlockProps {
  content: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ content }) => {
  return (
    <pre 
      style={{ 
        backgroundColor: '#f4f4f4',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        overflow: 'auto',
        fontSize: '0.9rem',
        lineHeight: '1.4',
        marginBottom: '2rem',
        border: '1px solid #e0e0e0'
      }}
    >
      <code>{content}</code>
    </pre>
  );
};

export default CodeBlock; 
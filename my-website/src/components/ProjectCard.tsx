type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  links: { label: string; url: string }[];
  image?: string;
};

const ProjectCard = ({ title, description, techStack, links, image }: ProjectCardProps) => (
  <div 
    style={{
      border: '1px solid #ddd',
      borderRadius: '12px',
      padding: '20px',
      width: '95%',              // Wider card
      maxWidth: '900px',         // Longer layout
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
      margin: '5px auto',       // Reduced vertical spacing
      backgroundColor: '#fff',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
    }}
  >
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap'
    }}>
      {image && (
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '180px', 
            height: '180px', 
            objectFit: 'cover', 
            borderRadius: '8px',
            flexShrink: 0 
          }} 
        />
      )}

      <div style={{ flex: 1 }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.5rem', color: '#222' }}>{title}</h3>
        <p style={{ color: '#555', lineHeight: '1.6' }}>{description}</p>
        <div style={{ marginTop: '12px' }}>
          {techStack.map(tech => (
            <span key={tech} style={{
              display: 'inline-block',
              backgroundColor: '#f0f0f0',  //  Neutral gray background
              color: '#333',
              borderRadius: '12px',
              padding: '6px 12px',
              margin: '4px',
              fontSize: '12px',
              fontWeight: '500'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div style={{ marginTop: '16px' }}>
          {links.map(link => (
            <a 
              key={link.label} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                margin: '0 12px 12px 0',
                padding: '8px 16px',
                backgroundColor: '#333',     //  Dark neutral buttons
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.target as HTMLAnchorElement;
                el.style.backgroundColor = '#000'; // Slightly darker on hover
                el.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                const el = e.target as HTMLAnchorElement;
                el.style.backgroundColor = '#333';
                el.style.transform = 'scale(1)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;

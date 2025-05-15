type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  links: { label: string; url: string }[];
  image?: string;
};

const ProjectCard = ({ title, description, techStack, links, image }: ProjectCardProps) => (
  <div style={{
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '16px auto'
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    }}>
      {image && (
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: '150px', 
            height: '150px', 
            objectFit: 'cover', 
            borderRadius: '8px',
            flexShrink: 0 
          }} 
        />
      )}

      <div style={{ flex: 1 }}>
        <h3 style={{ marginTop: 0 }}>{title}</h3>
        <p>{description}</p>
        <div>
          {techStack.map(tech => (
            <span key={tech} style={{
              display: 'inline-block',
              backgroundColor: '#eee',
              borderRadius: '8px',
              padding: '4px 8px',
              margin: '4px',
              fontSize: '12px'
            }}>
              {tech}
            </span>
          ))}
        </div>
        <div style={{ marginTop: '12px' }}>
            {links.map(link => (
            <a 
                key={link.label} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                display: 'inline-block',
                margin: '0 8px 8px 0',
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                cursor: 'pointer', // ✅ Shows pointer on hover
                transition: 'background-color 0.3s ease' // ✅ Smooth hover effect
                }}
                onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#0056b3'; // ✅ Darker on hover
                }}
                onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#007bff'; // ✅ Revert on leave
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

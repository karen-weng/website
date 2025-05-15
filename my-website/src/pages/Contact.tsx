

const Contact = () => (
  <div style={{
    padding: '4rem 1rem',
    backgroundColor: '#f5f5f5',
    textAlign: 'center'
  }}>
    <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#222' }}>Let's Connect!</h2>
    <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
      Feel free to reach out for collaborations, project discussions, or just to say hi!
    </p>
    <div>
      <a 
        href="mailto:karen.wengxt@gmail.com" 
        style={linkButtonStyle}>
        Email Me
      </a>
      <a 
        href="https://www.linkedin.com/in/karen-weng-402bab295/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkButtonStyle}>
        LinkedIn
      </a>
      <a 
        href="https://github.com/karen-weng" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkButtonStyle}>
        GitHub
      </a>
      <a 
        href="/karen_weng_resume.pdf"  // Assuming you place it in public/
        target="_blank" 
        rel="noopener noreferrer" 
        style={linkButtonStyle}
        download="Karen_Weng_Resume.pdf"
        >
        Download Resume
      </a>
    </div>
  </div>
);

const linkButtonStyle = {
  display: 'inline-block',
  margin: '8px',
  padding: '12px 24px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '8px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, background-color 0.3s ease',
  fontSize: '1rem'
};

export default Contact;

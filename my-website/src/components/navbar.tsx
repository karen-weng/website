// import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      padding: '1.5rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {['Projects', 'Personal', 'Contact'].map((text) => (
        <button
          key={text}
          onClick={() => scrollToSection(text.toLowerCase())}
          style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: '550',
            padding: '8px 20px',
            borderRadius: '8px',
            transition: 'background-color 0.3s',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          {text}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;

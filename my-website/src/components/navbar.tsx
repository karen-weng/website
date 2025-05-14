import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
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
    {['Home', 'Projects', 'Personal', 'Contact'].map((text) => (
      <Link
        key={text}
        to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
        style={{
          textDecoration: 'none',
          color: '#333',
          fontWeight: '550',
          padding: '8px 20px',
          borderRadius: '8px',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        {text}
      </Link>
    ))}
  </nav>
);

export default Navbar;

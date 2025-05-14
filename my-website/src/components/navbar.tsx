import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ 
    display: 'flex', 
    gap: '1rem', 
    padding: '1rem', 
    backgroundColor: '#f0f0f0',
    border: '2px solid red' // Debug border to verify visibility
  }}>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/personal">Personal</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
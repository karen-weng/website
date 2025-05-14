import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi, I'm Karen Weng 👋</h1>
        <p>Welcome to my personal website!</p>
        <nav>
          <a href="#about">About Me</a> | <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="App-section">
        <h2>About Me</h2>
        <p>
          I'm a Computer Engineering student passionate about machine learning,
          electronics, and the performing arts. I love combining creativity with
          technology to build exciting projects!
        </p>
      </section>

      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <p>Email: karen@example.com</p>
      </section>
    </div>
  );
}

export default App;



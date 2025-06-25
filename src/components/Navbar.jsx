import React from 'react';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <h2>Aman Kumar</h2>
      <div>
        <a href="#about" style={{ margin: '0 1rem' }}>About</a>
        <a href="#projects" style={{ margin: '0 1rem' }}>Projects</a>
        <a href="#contact" style={{ margin: '0 1rem' }}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;

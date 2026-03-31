import React from 'react';

function Header() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
      <h2>My practice app</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
        <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
        <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
        <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;

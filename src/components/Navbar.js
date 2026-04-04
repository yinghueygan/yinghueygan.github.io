import React, { useState, useEffect } from 'react';
import './Navbar.css';

const nav = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'projects', label: 'Projects', icon: '◈' },
  { id: 'experience', label: 'Experience', icon: '◉' },
  { id: 'education', label: 'Education', icon: '◎' },
  { id: 'awards', label: 'Awards', icon: '★' },
];

export default function Navbar({ activePage, navigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (id) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => handleNav('home')}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">GYH</span>
          <span className="logo-bracket">]</span>
          <span className="logo-cursor" />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {nav.map((item, i) => (
            <button
              key={item.id}
              className={`nav-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => handleNav(item.id)}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
              {activePage === item.id && <span className="nav-indicator" />}
            </button>
          ))}
        </div>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

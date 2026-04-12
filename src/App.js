import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Awards from './components/Awards';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (page) => {
    if (page === activePage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 300);
  };

  const pages = { home: Home, projects: Projects, experience: Experience, education: Education, awards: Awards };
  const PageComponent = pages[activePage];

  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="scan-line" />
      <Navbar activePage={activePage} navigate={navigate} />
      <main className={`page-content ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
        <PageComponent navigate={navigate} />
      </main>
      <footer className="footer">
        <span className="footer-text">© 2026 Gan Ying Huey — Built with React · Hosted on GitHub Pages</span>
      </footer>
    </div>
  );
}

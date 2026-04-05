import React, { useEffect, useState, useRef } from 'react';
import './Home.css';

const skills = [
  { cat: 'Languages', items: ['C#', 'SQL', 'JavaScript', 'Python', 'Java', 'C++'] },
  { cat: 'Frameworks', items: ['ASP.NET Core', 'ASP.NET MVC', 'Angular', 'Flask'] },
  { cat: 'Frontend', items: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery', 'AG Grid', 'DataTables'] },
  { cat: 'Backend', items: ['Web API', 'RESTful API', 'JSON'] },
  { cat: 'Databases', items: ['Microsoft SQL Server', 'Oracle SQL'] },
  { cat: 'DevOps & Cloud', items: ['Git', 'TFS', 'CI/CD', 'IIS Hosting', 'AWS'] },
  { cat: 'Testing', items: ['Unit Testing', 'Debugging', 'Troubleshooting'] },
];

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '50+', label: 'Issues Debugged' },
  { value: '3.99', label: 'CGPA' },
];

function TypeWriter({ texts, speed = 80 }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setIdx(i => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed]);

  return (
    <span className="typewriter">
      {displayed}
      <span className="tw-cursor">|</span>
    </span>
  );
}

export default function Home({ navigate }) {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setSkillsVisible(true); },
      { threshold: 0.1 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className={`hero-content ${visible ? 'visible' : ''}`}>
            <p className="hero-greeting">
              <span className="greeting-tag">Hello, World! 👋</span>
            </p>
            <h2 className="hero-name">
              Gan<br />
              <span className="name-accent">Ying Huey</span>
            </h2>
            <div className="hero-role">
              <span className="role-prefix">const role = </span>
              <TypeWriter texts={[
                '"Full Stack Developer"',
                '"ASP.NET Engineer"',
                '"Problem Solver"',
                '"Freelancer"',
                '"UI/UX Enthusiast"',
              ]} />
            </div>
            <p className="hero-bio">
              Building robust enterprise web applications with <span className="highlight">.NET</span>, 
              designing performant databases, and crafting clean frontends. 
              Open to opportunities.
            </p>
            <div className="hero-cta">
              <button className="btn-primary" onClick={() => navigate('projects')}>
                <span>View Projects</span>
                <span className="btn-arrow">→</span>
              </button>
              <a className="btn-secondary" href="https://github.com/yinghueygan" target="_blank" rel="noreferrer">
                GitHub
                <span className="github-icon">⌥</span>
              </a>
              <a className="btn-secondary" href="mailto:ganyinghuey@gmail.com">
                Contact ✉
              </a>
              <a className="btn-secondary" href="https://linkedin.com/in/gan-ying-huey-9512a8295" target="_blank" rel="noreferrer">
              LinkedIn ↗
              </a>
            </div>
          </div>

          <div className={`hero-visual ${visible ? 'visible' : ''}`}>
            <div className="avatar-wrap animate-float">
              <div className="avatar-ring" />
              <div className="avatar-ring ring2" />
              <div className="avatar-core">
                <span className="avatar-initials">Software Engineer</span>
              </div>
              <div className="orbit-dot" style={{ '--angle': '0deg' }} />
              <div className="orbit-dot" style={{ '--angle': '120deg' }} />
              <div className="orbit-dot" style={{ '--angle': '240deg' }} />
            </div>
            <div className="code-card">
              <div className="code-dots">
                <span /><span /><span />
              </div>
              <pre className="code-snippet">
                {`// Current stack
    const me = {
      name: "Gan Ying Huey",
      role: "Full Stack Dev",
      stack: ["C#", ".NET", "SQL"],
      cgpa: 3.99
    }
                `}
            </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section" ref={skillsRef}>
        <div className="section-wrap">
          <p className="section-label">Technical Stack</p>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="divider" />
          <div className={`skills-grid ${skillsVisible ? 'visible' : ''}`}>
            {skills.map((group, i) => (
              <div key={i} className="skill-group" style={{ animationDelay: `${i * 0.1}s` }}>
                <h3 className="skill-cat">{group.cat}</h3>
                <div className="skill-tags">
                  {group.items.map((item, j) => (
                    <span key={j} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section>
        <div className="section-wrap">
          <p className="section-label">Explore</p>
          <h2 className="section-title">What I've Built</h2>
          <div className="divider" />
          <div className="quick-cards">
            {[
              { page: 'projects', icon: '◈', title: 'Projects', desc: 'App Versioning System, Enterprise Modernization, AI Skin Type Reader' },
              { page: 'experience', icon: '◉', title: 'Experience', desc: 'Software Engineer at Public Mutual Berhad · Internship at Multimedia University' },
              { page: 'education', icon: '◎', title: 'Education', desc: 'B.IT Security Technology, Multimedia University · CGPA 3.99' },
              { page: 'awards', icon: '★', title: 'Awards', desc: 'First Class Honours · Dean\'s List Award · Merit Scholarship · CITIC & JIWE Publication' },
            ].map((item, i) => (
              <button key={i} className="quick-card" onClick={() => navigate(item.page)} style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="qc-icon">{item.icon}</span>
                <div>
                  <div className="qc-title">{item.title}</div>
                  <div className="qc-desc">{item.desc}</div>
                </div>
                <span className="qc-arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

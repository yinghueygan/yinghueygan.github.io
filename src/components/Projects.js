import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Application Versioning & Tracking System',
    category: 'Enterprise',
    status: 'Production',
    year: '2025',
    description: 'A centralized platform built from the ground up to manage software release cycles, project stages, and developer assignments within the IT Department.',
    highlights: [
      'Built centralized tracking for software release cycles & developer assignments',
      'Dynamic dashboards using AG Grid & DataTables for real-time version tracking',
      'RESTful APIs ensuring consistent frontend-backend data synchronization',
    ],
    tech: ['.NET 8', 'AG Grid', 'DataTables', 'Bootstrap 5', 'CSS3', 'Web API', 'JavaScript'],
    github: 'https://github.com/yinghueygan',
    color: '#00e5ff',
  },
  {
    id: 2,
    title: 'Enterprise System Modernization',
    category: 'Enterprise',
    status: 'Production',
    year: '2024 - 2025',
    description: 'Revamped legacy internal and external company systems into modern ASP.NET Core 8/10 architectures, significantly improving performance, security, and maintainability.',
    highlights: [
      'Migrated legacy systems to ASP.NET Core 8/10 architecture',
      'Responsive UI with Bootstrap 5 & CSS3 for cross-device accessibility',
      'Optimized complex SQL queries & stored procedures to reduce data latency',
    ],
    tech: ['ASP.NET Core 10', 'MVC', 'Oracle SQL', 'MS SQL', 'Bootstrap 5', 'CSS3'],
    github: 'https://github.com/yinghueygan',
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'Interior Designer Portfolio',
    category: 'Freelance',
    status: 'Production',
    year: '2024',
    description: 'yinjyegan portfolio',
    highlights: [
      'Migrated legacy systems to ASP.NET Core 8/10 architecture',
      'Responsive UI with Bootstrap 5 & CSS3 for cross-device accessibility',
      'Optimized complex SQL queries & stored procedures to reduce data latency',
    ],
    tech: ['HTML5', 'PHP', 'MSSQL', 'Bootstrap 5', 'CSS3'],
    github: 'https://github.com/yinghueygan',
    color: '#7c3aed',
  },
  {
    id: 4,
    title: 'Malaysian Skin Type Reader (FYP)',
    category: 'AI / ML',
    status: 'Completed',
    year: '2023',
    description: 'Final Year Project — an AI-powered tool using YOLOv5 to identify Malaysian skin types and conditions with 87.3% precision, providing personalized skincare recommendations.',
    highlights: [
      'YOLOv5-powered detection achieving 87.3% precision on Malaysian skin types',
      'Interactive web UI with real-time diagnostics & personalized recommendations',
      'NumPy, Pandas & Scikit-learn for dataset systematization and evaluation',
    ],
    tech: ['Python', 'Flask', 'TensorFlow', 'PyTorch', 'scikit-learn', 'YOLOv5', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/yinghueygan',
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'Food Ordering System',
    category: 'Web App',
    status: 'Internship',
    year: '2022',
    description: 'A full-stack food ordering web application developed during internship at Multimedia University, featuring menu browsing, order management, and database integration.',
    highlights: [
      'Full-stack implementation using PHP + MySQL backend',
      'Responsive frontend with HTML, CSS3, JavaScript',
      'Complete CRUD operations for menu and order management',
    ],
    tech: ['HTML', 'CSS3', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/yinghueygan',
    color: '#10b981',
  },
];

const categories = ['All', 'Enterprise', 'AI / ML', 'Web App', 'Freelance'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="projects-page">
      <div className="page-wrap">
        <div className="page-header">
          <p className="section-label">Portfolio</p>
          <h1 className="section-title">Projects</h1>
          <p className="page-subtitle">
            A collection of enterprise applications, AI tools, and web projects — click GitHub to explore the code.
          </p>
          <div className="divider" />
        </div>

        <div className="filter-row">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`project-card ${hovered === project.id ? 'hovered' : ''}`}
              style={{ '--card-color': project.color, animationDelay: `${i * 0.1}s` }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="card-top-bar" />
              <div className="card-header">
                <div className="card-meta">
                  <span className="card-category">{project.category}</span>
                  <span className={`card-status status-${project.status.toLowerCase()}`}>{project.status}</span>
                  <span className="card-year">{project.year}</span>
                </div>
                <h2 className="card-title">{project.title}</h2>
              </div>

              <p className="card-desc">{project.description}</p>

              <ul className="card-highlights">
                {project.highlights.map((h, i) => (
                  <li key={i}><span className="bullet">▸</span> {h}</li>
                ))}
              </ul>

              <div className="card-footer">
                <div className="tech-stack">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

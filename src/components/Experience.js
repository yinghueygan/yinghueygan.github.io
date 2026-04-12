import React, { useRef, useState, useEffect } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Public Mutual Berhad',
    type: 'Full-Time',
    period: 'March 2024 – Present',
    duration: 'Current',
    location: 'Malaysia',
    color: '#00e5ff',
    responsibilities: [
      {
        label: 'Full-Stack Feature Development',
        detail: 'Managed full-cycle development for enterprise web applications using MVC framework, integrating C# backend with responsive JavaScript/jQuery frontends.',
      },
      {
        label: 'Database & Performance Optimization',
        detail: 'Optimized complex SQL queries and stored procedures in Oracle and MS SQL, improving application performance and reducing response times.',
      },
      {
        label: 'System Reliability',
        detail: 'Proactively debugged 50+ critical issues and implemented unit testing for new features, maintaining 99.99% application uptime.',
      },
      {
        label: 'API Architecture & Visualization',
        detail: 'Designed and integrated RESTful web APIs connecting frontend with backend systems, utilizing AG Grid and DataTables for complex data visualization.',
      },
      {
        label: 'DevOps & Documentation',
        detail: 'Contributed to Agile workflows and streamlined delivery via CI/CD pipelines (Git/TFS). Created technical documentation and system diagrams for stakeholders.',
      },
    ],
    skills: ['C#', 'ASP.NET Core', 'MVC', 'RESTful Api', 'JavaScript', 'jQuery', 'Oracle SQL', 'MS SQL', 'AG Grid', 'DataTables', 'Bootstrap 5', 'Git', 'TFS', 'CI/CD', 'Unit Testing'],
  },
  {
    id: 2,
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    type: 'Freelance',
    period: 'Jan 2024 – Mar 2024',
    duration: '3 months',
    location: 'Malaysia (Remote)',
    color: '#f59e0b',
    responsibilities: [
      {
        label: 'Interior Designer Portfolio Website',
        detail: 'Designed and developed a full portfolio website for an interior designer client, showcasing her projects with photo galleries, descriptions, and project details.',
      },
      {
        label: 'Admin Dashboard',
        detail: 'Built a secure PHP admin panel with login/logout authentication, allowing the client to add, edit, and delete username/password credentials independently.',
      },
      {
        label: 'Multi-Page Website',
        detail: 'Developed 4 pages — Home, Portfolio (project photo gallery), About (experience & awards), and Contact — with responsive CSS layouts and smooth JavaScript interactions.',
      },
    ],
    skills: ['PHP', 'CSS3', 'JavaScript', 'HTML5', 'MySQL', 'Admin Panel', 'Authentication', 'Responsive Design'],
  },
  {
    id: 3,
    title: 'IT Researcher (Intern)',
    company: 'Multimedia University',
    type: 'Internship',
    period: 'May 2022 – July 2022',
    duration: '3 months',
    location: 'Malaysia',
    color: '#7c3aed',
    responsibilities: [
      {
        label: 'Food Ordering System Development',
        detail: 'Developed a full-stack Food Ordering System using HTML, CSS3, JavaScript, PHP and MySQL as the primary internship deliverable.',
      },
      {
        label: 'AI Research',
        detail: 'Researched fault diagnosis methodologies, Bayesian networks and fuzzy cognitive maps, contributing to ongoing academic research.',
      },
      {
        label: 'New Technology Learning',
        detail: 'Self-learned and applied Angular, TypeScript, and Python to broaden full-stack capabilities during the internship period.',
      },
      {
        label: 'Problem-Solving',
        detail: 'Developed strong research problem-solving skills by addressing technical challenges in academic research environments.',
      },
    ],
    skills: ['HTML', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Angular', 'TypeScript', 'Python'],
  },
];

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`exp-card ${visible ? 'visible' : ''}`}
      style={{ '--exp-color': exp.color, animationDelay: `${index * 0.15}s` }}
    >
      <div className="exp-timeline-dot" />
      <div className="exp-card-inner">
        <div className="exp-header">
          <div>
            <div className="exp-meta">
              <span className="exp-type">{exp.type}</span>
              <span className="exp-period">{exp.period}</span>
              <span className="exp-location">📍 {exp.location}</span>
            </div>
            <h2 className="exp-title">{exp.title}</h2>
            <p className="exp-company">{exp.company}</p>
          </div>
          <div className="exp-duration-badge">{exp.duration}</div>
        </div>

        <div className="exp-responsibilities">
          {exp.responsibilities.map((r, i) => (
            <div key={i} className="resp-item">
              <div className="resp-label">
                <span className="resp-icon" style={{ color: exp.color }}>▸</span>
                <strong>{r.label}</strong>
              </div>
              <p className="resp-detail">{r.detail}</p>
            </div>
          ))}
        </div>

        <div className="exp-skills">
          {exp.skills.map((s, i) => (
            <span key={i} className="exp-skill-tag">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <div className="experience-page">
      <div className="page-wrap">
        <div className="page-header">
          <p className="section-label">Career</p>
          <h1 className="section-title">Experience</h1>
          <p className="page-subtitle">
            Professional journey building enterprise-grade software, from internship research to production engineering.
          </p>
          <div className="divider" />
        </div>

        <div className="exp-timeline">
          <div className="timeline-line" />
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

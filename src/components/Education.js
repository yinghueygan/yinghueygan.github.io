import React, { useRef, useState, useEffect } from 'react';
import './Education.css';

const education = [
  {
    degree: 'Bachelor of Information Technology (Honours)',
    major: 'Security Technology',
    university: 'Multimedia University (MMU)',
    period: 'July 2020 – October 2023',
    cgpa: '3.99',
    honor: 'First Class Honour',
    color: '#00e5ff',
    highlights: [
      'Final Year Project: Malaysian Skin Type Reader using YOLOv5 AI (87.3% precision)',
      'Active position in IT Society English Language Club',
      'Dean\'s List holder from 2020 – 2023',
      'Merit Scholarship holder throughout entire programme',
      'CITIC 2023 research publication',
    ],
    courses: ['Data Structures & Algorithms', 'Cybersecurity Principles', 'Machine Learning', 'Database Systems', 'Web Development', 'Software Engineering', 'Network Security', 'Operating Systems'],
  },
  {
    degree: 'Foundation in Information Technology',
    major: 'Information Technology',
    university: 'Multimedia University (MMU)',
    period: 'July 2019 – June 2020',
    cgpa: '3.92',
    honor: 'Dean\'s List',
    color: '#7c3aed',
    highlights: [
      'ECA MMU Chapter Award for Security Technology',
      'Dean\'s List Award recipient',
      'Merit Scholarship holder',
      'Strong foundation in IT fundamentals and programming',
    ],
    courses: ['Programming Fundamentals', 'Mathematics', 'English for IT', 'Computer Organisation', 'Discrete Mathematics'],
  },
];

function EducationCard({ edu, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('highlights');

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
      className={`edu-card ${visible ? 'visible' : ''}`}
      style={{ '--edu-color': edu.color, animationDelay: `${index * 0.2}s` }}
    >
      <div className="edu-glow-bar" />
      <div className="edu-header">
        <div className="edu-badge">
          <span className="edu-cgpa">{edu.cgpa}</span>
          <span className="cgpa-label">CGPA</span>
        </div>
        <div className="edu-info">
          <div className="edu-meta">
            <span className="edu-period">{edu.period}</span>
            <span className={`edu-honor`}>{edu.honor}</span>
          </div>
          <h2 className="edu-degree">{edu.degree}</h2>
          <p className="edu-major">
            <span className="major-prefix">Major: </span>{edu.major}
          </p>
          <p className="edu-university">{edu.university}</p>
        </div>
      </div>

      <div className="edu-tabs">
        <button
          className={`edu-tab ${activeTab === 'highlights' ? 'active' : ''}`}
          onClick={() => setActiveTab('highlights')}
        >Highlights</button>
        <button
          className={`edu-tab ${activeTab === 'courses' ? 'active' : ''}`}
          onClick={() => setActiveTab('courses')}
        >Key Courses</button>
      </div>

      <div className="edu-tab-content">
        {activeTab === 'highlights' && (
          <ul className="edu-highlights">
            {edu.highlights.map((h, i) => (
              <li key={i}>
                <span className="hl-dot" style={{ background: edu.color }} />
                {h}
              </li>
            ))}
          </ul>
        )}
        {activeTab === 'courses' && (
          <div className="edu-courses">
            {edu.courses.map((c, i) => (
              <span key={i} className="course-tag">{c}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <div className="education-page">
      <div className="page-wrap">
        <div className="page-header">
          <p className="section-label">Academic</p>
          <h1 className="section-title">Education</h1>
          <p className="page-subtitle">
            Graduated with First Class Honours in IT Security Technology from Multimedia University — a consistent Dean's List achiever.
          </p>
          <div className="divider" />
        </div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <EducationCard key={i} edu={edu} index={i} />
          ))}
        </div>

        {/* Qualifications */}
        <div className="qualifications">
          <p className="section-label" style={{ marginTop: '3rem' }}>Qualifications</p>
          <div className="qual-grid">
            {[
              { label: 'MUET Band', value: '4.5', desc: 'Malaysian University English Test' },
              { label: 'Nationality', value: '🇲🇾', desc: 'Malaysian' },
              { label: 'Languages', value: '3', desc: 'English · Bahasa Malaysia · Chinese' },
              { label: 'Publications', value: '3', desc: 'CITIC 2023 · JIWE Journal' },
            ].map((q, i) => (
              <div key={i} className="qual-card">
                <div className="qual-value">{q.value}</div>
                <div className="qual-label">{q.label}</div>
                <div className="qual-desc">{q.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useRef, useState, useEffect } from 'react';
import './Awards.css';

const awards = [
  {
    id: 1,
    title: 'First Class Honours',
    org: 'Multimedia University',
    year: '2020 - 2023',
    category: 'Academic',
    icon: '🎓',
    color: '#00e5ff',
    description: 'Graduated with First Class Honours in Bachelor of Information Technology (Security Technology) with a CGPA of 3.99 — the highest distinction awarded by the university.',
    detail: 'Achieved consistent academic excellence throughout all 4 years of the programme, placing in the top tier of graduates.',
  },
  {
    id: 2,
    title: "Dean's List Award",
    org: 'Multimedia University',
    year: '2019 – 2023',
    category: 'Academic',
    icon: '📋',
    color: '#7c3aed',
    description: "Recipient of the Dean's List Award from 2019 through 2023, recognizing outstanding academic performance across both Foundation and Bachelor's programmes.",
    detail: 'Sustained across 4+ consecutive years of study, spanning Foundation and Degree programmes.',
  },
  {
    id: 3,
    title: 'Merit Scholarship',
    org: 'Multimedia University',
    year: '2019 – 2023',
    category: 'Scholarship',
    icon: '💰',
    color: '#f59e0b',
    description: 'Awarded a Merit Scholarship by Multimedia University for academic excellence, held continuously from 2019 to 2023 throughout the Foundation and Bachelor programmes.',
    detail: '30% scholarship covering tuition based on maintained CGPA performance each academic year.',
  },
  {
    id: 4,
    title: 'ECA MMU Chapter Award',
    org: 'Multimedia University',
    year: '2023',
    category: 'Achievement',
    icon: '🏆',
    color: '#10b981',
    description: 'Received the ECA (Extra-Curricular Activity) MMU Chapter Award for Security Technology, recognizing contributions to the faculty and co-curricular involvement.',
    detail: 'Awarded at faculty level for outstanding participation and contributions to Security Technology activities.',
  },
  {
    id: 5,
    title: 'CITIC 2023 Publication',
    org: 'Conference on IT Innovation & Computing',
    year: '2023',
    category: 'Research',
    icon: '📄',
    color: '#ec4899',
    description: '3 research papers submitted and accepted at CITIC 2023, representing academic research contributions in the field of Information Technology.',
    detail: 'Published research at an international computing conference as part of final-year academic work.',
  },
  {
    id: 6,
    title: 'International Journal on Advanced Science, Engineering and Information Technology (IJASEIT) Publication',
    org: 'Journal of IT in Western Economies',
    year: 'Dec 6, 2023',
    category: 'Research',
    icon: '📰',
    color: '#6366f1',
    description: 'Peer-reviewed, open-access academic journal focused on high-quality research in science, engineering, and IT.',
    detail: 'Facial Skin Type Analysis Using Few-shot Learning with Prototypical Networks',
    link: 'https://doi.org/10.18517/ijaseit.13.6.19040',
  },
  {
    id: 7,
    title: 'MMU Press JIWE Journal Publication',
    org: 'Journal of IT in Western Economies',
    year: 'Sep 13, 2023',
    category: 'Research',
    icon: '📰',
    color: '#6366f1',
    description: 'Peer-reviewed journal publication in JIWE (Journal of IT in Western Economies) for research in Information Technology and engineering.',
    detail: 'Ensuring Privacy and Security on Banking Websites in Malaysia: A Cookies Scanner Solution',
    link: 'https://doi.org/10.33093/jiwe.2023.2.2.12',
  },
  {
    id: 8,
    title: 'iNVENTX 2023 Competition',
    org: 'Multimedia University',
    year: '2023',
    category: 'Competition',
    icon: '⚡',
    color: '#f97316',
    description: 'Participated in the iNVENTX 2023 innovation competition, showcasing a technological project to judges and peers in a competitive environment.',
    detail: 'Represented the Faculty of Computing and Informatics with an innovative IT project.',
  },
  {
    id: 9,
    title: 'Nexagate Capture The Flag (CTF) 2022',
    org: 'Nexagate',
    year: '2022',
    category: 'Competition',
    icon: '🔐',
    color: '#14b8a6',
    description: 'Competed in the Nexagate CTF 2022 cybersecurity competition, applying hands-on security skills in a real-world challenge format.',
    detail: 'Applied network security, cryptography, and forensics skills in a timed competitive environment.',
  },
];

const categories = ['All', 'Academic', 'Scholarship', 'Research', 'Competition', 'Achievement'];

function AwardCard({ award, index }) {
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
      className={`award-card ${visible ? 'visible' : ''}`}
      style={{ '--aw-color': award.color, animationDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="award-icon-wrap">
        <span className="award-icon">{award.icon}</span>
      </div>
      <div className="award-body">
        <div className="award-meta">
          <span className="award-category">{award.category}</span>
          <span className="award-year">{award.year}</span>
        </div>
        <h3 className="award-title">{award.title}</h3>
        <p className="award-org">{award.org}</p>
        <p className="award-desc">{award.description}</p>
        <p className="award-detail">{award.detail}</p>
        {award.link && (
          <a href={award.link} target="_blank" rel="noreferrer" className="award-link">
            Read Publication ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default function Awards() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? awards : awards.filter(a => a.category === filter);

  return (
    <div className="awards-page">
      <div className="page-wrap">
        <div className="page-header">
          <p className="section-label">Recognition</p>
          <h1 className="section-title">Awards & Achievements</h1>
          <p className="page-subtitle">
            A record of academic excellence, research publications, and competitive achievements throughout my academic journey.
          </p>
          <div className="divider" />
        </div>

        {/* Summary banner */}
        <div className="awards-banner">
          {[
            { n: '3.99', label: 'CGPA' },
            { n: '4+', label: 'Years Dean\'s List' },
            { n: '3', label: 'Publications' },
            { n: '2', label: 'Competitions' },
          ].map((item, i) => (
            <div key={i} className="banner-item">
              <span className="banner-num">{item.n}</span>
              <span className="banner-label">{item.label}</span>
            </div>
          ))}
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

        <div className="awards-grid">
          {filtered.map((award, i) => (
            <AwardCard key={award.id} award={award} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const TECHS = [
  { name: 'HTML5', iconClass: 'fab fa-html5', color: '#e34f26' },
  { name: 'CSS3', iconClass: 'fab fa-css3-alt', color: '#1572b6' },
  { name: 'JavaScript', iconClass: 'fab fa-js-square', color: '#f7df1e' },
  { name: 'React', iconClass: 'fab fa-react', color: '#61dafb' },
  { name: 'Node.js', iconClass: 'fab fa-node-js', color: '#339933' },
  { name: 'Express', iconClass: 'fas fa-server', color: '#ffffff' },
  { name: 'MongoDB', iconClass: 'fas fa-database', color: '#47a248' },
  { name: 'PostgreSQL', iconClass: 'fas fa-database', color: '#336791' },
  { name: 'Git', iconClass: 'fab fa-git-alt', color: '#f05032' },
  { name: 'Cisco', iconClass: 'fas fa-network-wired', color: '#1ba0d7' },
  { name: 'Python', iconClass: 'fab fa-python', color: '#3776ab' },
];

function TechCard({ tech }) {
  return (
    <div className="glow-card" style={{
      padding: '1.25rem 1rem', textAlign: 'center',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
      cursor: 'default',
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.03)', border: `1px solid ${tech.color}40`, boxShadow: `0 0 8px ${tech.color}20`
      }}>
        <i className={tech.iconClass} style={{ color: tech.color, fontSize: '1.6rem' }} aria-hidden="true" />
      </div>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
        color: 'var(--text-muted)', letterSpacing: '0.05em',
      }}>{tech.name}</span>
      <div style={{ width: 24, height: 2, borderRadius: 1, background: tech.color, opacity: 0.6, boxShadow: `0 0 8px ${tech.color}` }} />
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,18,36,0.5) 50%, transparent)' }}>
      <div className="container">
        <p className="section-label">// 04 TECH_STACK</p>
        <h2 className="section-heading">What I Use</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))', gap: '1rem' }}>
          {TECHS.map((t, i) => <TechCard key={i} tech={t} />)}
        </div>
      </div>
    </section>
  );
}

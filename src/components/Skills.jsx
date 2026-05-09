import React, { useEffect, useRef, useState } from 'react';

const WEB_SKILLS = [
  { name: 'HTML / CSS', pct: 90, color: 'var(--cyan)' },
  { name: 'JavaScript', pct: 85, color: 'var(--cyan)' },
  { name: 'React', pct: 80, color: 'var(--purple)' },
  { name: 'Node.js', pct: 60, color: 'var(--purple)' },
  { name: 'Database (SQL/MongoDB)', pct: 70, color: 'var(--green)' },
];

const NET_SKILLS = [
  { name: 'Networking Fundamentals', pct: 70, color: 'var(--cyan)' },
  { name: 'Network Security', pct: 50, color: 'var(--purple)' },
  { name: 'Cisco IOS', pct: 50, color: 'var(--purple)' },
  { name: 'Subnetting', pct: 57, color: 'var(--cyan)' },
  
];

function SkillBar({ name, pct, color, animate }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text)' }}>{name}</span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color }}>
          {animate ? `${pct}%` : '0%'}
        </span>
      </div>
      <div style={{ height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden', position: 'relative' }}>
        <div style={{
          height: '100%', width: animate ? `${pct}%` : '0%', borderRadius: 3,
          background: `linear-gradient(90deg, ${color}, ${color === 'var(--cyan)' ? 'var(--purple)' : 'var(--cyan)'})`,
          transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 12px ${color === 'var(--cyan)' ? 'rgba(0,212,255,0.6)' : color === 'var(--purple)' ? 'rgba(124,58,237,0.6)' : 'rgba(16,185,129,0.6)'}`,
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', right: 0, top: -2, width: 10, height: 10, borderRadius: '50%', background: color, boxShadow: `0 0 8px ${color}`, opacity: animate ? 1 : 0, transition: 'opacity 0.3s 1s' }} />
        </div>
      </div>
    </div>
  );
}

function SkillColumn({ title, icon, skills }) {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="glow-card" style={{ padding: '2rem' }} ref={ref}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>{icon}</span>
        <span style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)' }}>{title}</span>
      </div>
      {skills.map((s, i) => <SkillBar key={i} {...s} animate={animate} />)}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,18,36,0.5) 50%, transparent)' }}>
      <div className="container">
        <p className="section-label">// 02 SKILLS</p>
        <h2 className="section-heading">What I Know</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <SkillColumn title="Web Development" icon="💻" skills={WEB_SKILLS} />
          <SkillColumn title="Networking" icon="🌐" skills={NET_SKILLS} />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

import React from 'react';

const PROJECTS = [
  {
    num: '01',
    title: 'Personal Portfolio',
    github:["https://my-portfolio-rho-ten-93.vercel.app/","https://github.com/abirhamdagnnet-ab/my_Portfolio"],
    description: 'This very portfolio — dark tech aesthetic, smooth animations, typed hero, skill bars, and a terminal-meets-creative vibe. Built with React.',
    stack: ['React', 'CSS3', 'JavaScript'],
    color: 'var(--purple)',
    icon: <i className="fa-solid fa-palette" />,
  },
  {
    num: '03',
    title: 'Basic of Networking Tutorial Website',
    github:["https://abirhamdagnnet-ab.github.io/Networking_Basic/","https://github.com/abirhamdagnnet-ab/Networking_Basic"],
    description: 'A tutorial website that covers the basics of networking, including topics such as networking devices, OSI model, and configuration basics, and how to find subnetting.',
    stack: ['HTML', 'CSS', 'JS'],
    color: 'var(--purple)',
    icon:  <i className="fa-solid fa-network-wired" />,
  },
  {
    num: '02',
    title: 'A Full Stack Car-Rental Website',
    github:["https://abirhamdagnnet-ab.github.io/Car-rental/","https://github.com/abirhamdagnnet-ab/Car-Rental"],
    description: 'A full stack car rental website that allows users to browse available cars, make reservations, and manage their bookings, built with React for frontend and Node.js for backend.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    color: 'var(--cyan)',
    icon:  <i className="fa-solid fa-car" />,
  },
  {
    num: '04',
    title: 'Subnet Calculator Tool',
    github:["https://abirhamdagnnet-ab.github.io/Networking_Basic/","https://github.com/abirhamdagnnet-ab/Subnet-Calculator"],
    description: 'Browser-based tool to calculate subnets, CIDR notation, host ranges, and wildcard masks. Built for networking students and professionals.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    color: 'var(--green)',
    icon: <i className="fa-solid fa-calculator" />,
  },
];

const FUTURE_PROJECTS = [
  {
    num: '01',
    title: 'WealthBridge',
    description: 'An AI-powered personal finance assistant that helps everyday people manage budgets, set savings goals, and get smart financial advice — free and accessible to anyone.',
    stack: ['React', 'Node.js', 'Claude API', 'Firebase'],
    color: 'var(--purple)',
    icon: <i className="fa-solid fa-wallet" />,
  },
  {
    num: '02',
    title: 'SkillForge',
    description: 'An AI-powered personalized learning platform that gives every user a custom study plan, an AI tutor, and progress tracking — making quality education free for everyone everywhere.',
    stack: ['React', 'Node.js', 'Claude API', 'Firebase'],
    color: 'var(--cyan)',
    icon: <i className="fa-solid fa-graduation-cap" />,
  },
  {
    num: '03',
    title: 'CropIQ',
    description: 'An AI-powered smart farming assistant for smallholder farmers. Upload a crop photo and get instant disease detection, pest alerts, weather-based advice, and yield predictions.',
    stack: ['React', 'Claude API', 'Vision API', 'Firebase'],
    color: 'var(--green)',
    icon: <i className="fa-solid fa-seedling" />,
  },
  {
    num: '04',
    title: 'ShieldScan',
    description: 'An AI-powered mobile app threat detector. Enter any app name and instantly see dangerous permissions, malware risks, data leaks, and a full security report in plain simple language.',
    stack: ['React', 'Node.js', 'Claude API', 'VirusTotal API'],
    color: 'var(--red, #ef4444)',
    icon:  <i className="fa-solid fa-shield-halved" />,
  },
];

function ProjectCard({ project, index }) {
  return (
    <div className="glow-card" style={{
      padding: '1.75rem', position: 'relative', overflow: 'hidden',
      animationDelay: `${index * 0.1}s`,
    }}>
      {/* Top accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }} />

      {/* Number */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: project.color, marginBottom: '0.75rem', opacity: 0.7, letterSpacing: '0.1em' }}>
        // PROJECT_{project.num}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.5rem' ,color: project.color, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '0.5rem' }}>{project.icon}</span>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.3 , }}>
          {project.title}
        </h3>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {project.stack.map(t => (
          <span key={t} style={{
            padding: '0.2rem 0.6rem', borderRadius: 4,
            background: `rgba(${project.color === 'var(--cyan)' ? '0,212,255' : project.color === 'var(--purple)' ? '124,58,237' : project.color === 'var(--green)' ? '16,185,129' : '239,68,68'},0.1)`,
            border: `1px solid rgba(${project.color === 'var(--cyan)' ? '0,212,255' : project.color === 'var(--purple)' ? '124,58,237' : project.color === 'var(--green)' ? '16,185,129' : '239,68,68'},0.25)`,
            color: project.color, fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem' }}>
        <a href={project.github[0]} target="_blank" rel="noopener noreferrer" className="btn" style={{
          padding: '0.5rem 1rem', fontSize: '0.75rem',
          background: `linear-gradient(135deg, ${project.color === 'var(--cyan)' ? 'rgba(0,212,255,0.2)' : project.color === 'var(--purple)' ? 'rgba(124,58,237,0.2)' : project.color === 'var(--green)' ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)'}, transparent)`,
          border: `1px solid ${project.color}`, color: project.color,
        }}>
          ↗ Live Demo
        </a>
        <a href={project.github[1]} target="_blank" rel="noopener noreferrer"  className="btn" style={{
          padding: '0.5rem 1rem', fontSize: '0.75rem',
          background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)',
          hover: { borderColor: 'var(--text)', color: 'var(--text)' },
        }}>
          ⌥ GitHub
        </a>
      </div>
    </div>
  );
}

function FutureProjectCard({ project, index }) {
  return (
    <div className="glow-card" style={{
      padding: '1.75rem', position: 'relative', overflow: 'hidden',
      animationDelay: `${index * 0.1}s`,
      opacity: 0.85,
    }}>
      {/* Top accent — dashed style to signal "coming soon" */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`, opacity: 0.5 }} />

      {/* Number */}
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: project.color, marginBottom: '0.75rem', opacity: 0.7, letterSpacing: '0.1em' }}>
        // FUTURE_{project.num}
      </div>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.5rem' ,color: project.color, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: '0.5rem' }}>{project.icon}</span>
        <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text)', lineHeight: 1.3 }}>
          {project.title}
        </h3>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
        {project.description}
      </p>

      {/* Tech stack tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
        {project.stack.map(t => (
          <span key={t} style={{
            padding: '0.2rem 0.6rem', borderRadius: 4,
            background: `rgba(${project.color === 'var(--cyan)' ? '0,212,255' : project.color === 'var(--purple)' ? '124,58,237' : project.color === 'var(--green)' ? '16,185,129' : '239,68,68'},0.1)`,
            border: `1px solid rgba(${project.color === 'var(--cyan)' ? '0,212,255' : project.color === 'var(--purple)' ? '124,58,237' : project.color === 'var(--green)' ? '16,185,129' : '239,68,68'},0.25)`,
            color: project.color, fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* In Planning badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{
          display: 'inline-block', width: 8, height: 8, borderRadius: '50%',
          background: '#f59e0b', boxShadow: '0 0 6px #f59e0b',
        }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: '#f59e0b', letterSpacing: '0.05em' }}>
          In development
        </span>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">

        {/* ── Built Projects ── */}
        <p className="section-label">// 03 PROJECTS</p>
        <h2 className="section-heading">Things I've Built</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem', marginBottom: '4rem' }}>
          {PROJECTS.map((p, i) => <ProjectCard key={i} project={p} index={i} />)}
        </div>

        {/* ── Future Projects ── */}
        <p className="section-label">// 04 FUTURE PROJECTS</p>
        <h2 className="section-heading">What's Coming Next</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '2rem', maxWidth: 520 }}>
          Ideas I'm actively planning and excited to build — powered by AI and designed to make a real difference.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
          {FUTURE_PROJECTS.map((p, i) => <FutureProjectCard key={i} project={p} index={i} />)}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #projects .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

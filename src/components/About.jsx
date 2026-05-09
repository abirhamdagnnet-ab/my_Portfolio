import React from 'react';
import { useFadeUp } from '../hooks/useFadeUp';


export default function About() {
  const ref = useFadeUp();

  return (
    <section id="about">
      <div className="container" ref={ref}>
        <p className="section-label">// 01 ABOUT_ME</p>
        <h2 className="section-heading">Who Am I?</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Left column: bio and badges */}
          <div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              I’m a 3rd-year Information Technology student passionate about building web applications and learning how systems work behind the scenes. I focus on full-stack web development using React and Node.js, while also exploring networking fundamentals and system architecture. I’m currently seeking an internship in either web development or networking to grow my real-world experience
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.9rem', marginBottom: '1.5rem' }}>
              I believe in building things that actually work — clean code, solid architecture, and a network that never goes down. I'm passionate about bridging the gap between software and infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span className="vibecoder-badge"><span>⚡</span> #vibecoder</span>
              <span className="vibecoder-badge" style={{ borderColor: 'rgba(0,212,255,0.4)', color: 'var(--cyan)' }}><span>🌐</span> Full-Stack</span>
              <span className="vibecoder-badge" style={{ borderColor: 'rgba(16,185,129,0.4)', color: 'var(--green)' }}><span>🔌</span> Networking</span>
            </div>
          </div>

          {/* Right column: large profile image (replacing small stat boxes) */}
          <div className="glow-card" style={{ 
                                      overflow: 'hidden', 
                                       borderRadius: 12, 
                                       height: 500, 
                                        minHeight: 300, 
                                        display: 'flex', 
                                      alignItems: 'center', 
                                  justifyContent: 'center', 
                               background: 'rgba(255,255,255,0.02)' 
                                  }}>
              <img
                src={process.env.PUBLIC_URL + '/profile.png'}
                alt="Profile large"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                }}
              />
          </div>
                 </div>
                 </div>

              <style>{`
        @media (max-width: 768px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}

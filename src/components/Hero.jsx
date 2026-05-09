import React, { useEffect, useState, useRef } from 'react';

const TYPED_WORDS = ['Fullstack Developer', 'Vibecoder', 'Networking Intern', 'IT Student'];

const CODE_SNIPPETS = [
  'const dev = () => ship()',
  'git commit -m "vibe ✓"',
  'npm run build --prod',
  'sudo systemctl start dreams',
  'ping 192.168.1.1 --vibe',
  'SELECT * FROM skills;',
  'docker run --rm vibes',
  'ssh root@career.dev',
  'while(true) { learn(); }',
  'ip route add 0.0.0.0/0',
];

function FloatingSnippet({ snippet, style }) {
  return (
    <div style={{
      position: 'absolute',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      color: 'rgba(0,212,255,0.18)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      animation: `float ${8 + Math.random() * 6}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 4}s`,
      ...style,
    }}>
      {snippet}
    </div>
  );
}

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`;
        ctx.fill();
      });
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7 }} />;
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];
    let timeout;
    if (!deleting) {
      if (charIndex < word.length) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        }, 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(word.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        }, 45);
      } else {
        setDeleting(false);
        setWordIndex(i => (i + 1) % TYPED_WORDS.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  const snippetPositions = [
    { top: '12%', left: '3%' }, { top: '20%', right: '5%' },
    { top: '35%', left: '1%' }, { top: '60%', right: '3%' },
    { bottom: '30%', left: '4%' }, { bottom: '15%', right: '6%' },
    { top: '50%', left: '2%' }, { top: '70%', right: '8%' },
    { bottom: '40%', left: '5%' }, { top: '80%', left: '40%' },
  ];

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <ParticleCanvas />

      {CODE_SNIPPETS.map((s, i) => (
        <FloatingSnippet key={i} snippet={s} style={snippetPositions[i % snippetPositions.length]} />
      ))}

      {/* Glowing orbs */}
      <div style={{ position: 'absolute', top: '20%', right: '15%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '10%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Vibecoder badge */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span className="vibecoder-badge">
            <span style={{ color: 'var(--green)' }}>●</span>
            #vibecoder mode: ON
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-head)', fontWeight: 800,
          fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
          lineHeight: 1.1, marginBottom: '0.75rem',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #7c3aed 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          ABIRHAM DAGNNET<span style={{ WebkitTextFillColor: 'var(--cyan)' }}>.</span>
        </h1>

        {/* Typed animation */}
        <div style={{ marginBottom: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'clamp(1rem, 3vw, 1.5rem)', color: 'var(--cyan)' }}>
            &gt;_ {displayed}
            <span style={{ animation: 'blink 1s step-end infinite', opacity: 1 }}>|</span>
          </span>
        </div>

        {/* Bio */}
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: 550, marginBottom: '2.5rem', lineHeight: 1.8 }}>
          Hi i am Abirham , a 3rd year IT student building fullstack apps by day, exploring networks by night. I turn coffee into code and chaos into systems.
        </p>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">
            <span>⚡</span> See My Work
          </a>
          <a href="#" className="btn btn-secondary" onClick={e => e.preventDefault()}>
            <span>↓</span> Download CV
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, var(--cyan))', animation: 'pulse 2s infinite' }} />
          scroll_to_explore()
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
      `}</style>
    </section>
  );
}

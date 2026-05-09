import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Certs', href: '#certs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map(n => n.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1rem 1.5rem',
      background: scrolled ? 'rgba(10,14,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(0,212,255,0.08)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--cyan)', fontSize: '1.1rem' }}>
          &lt;abir.dev/&gt;
        </span>
      </a>

      {/* Desktop Nav */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }} className="desktop-nav">
        {NAV_ITEMS.map(item => (
          <li key={item.label}>
            <a href={item.href} style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textDecoration: 'none',
              color: active === item.href.slice(1) ? 'var(--cyan)' : 'var(--text)',
              transition: 'color 0.3s',
              letterSpacing: '0.05em',
              borderBottom: active === item.href.slice(1) ? '1px solid var(--cyan)' : '1px solid transparent',
              paddingBottom: '2px',
            }}
            onMouseOver={e => e.target.style.color = 'var(--cyan)'}
            onMouseOut={e => e.target.style.color = active === item.href.slice(1) ? 'var(--cyan)' : 'var(--text)'}
            >{item.label}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--cyan)', display: 'none', fontSize: '1.5rem' }}
        className="hamburger"
      >☰</button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(10,14,26,0.98)', zIndex: 200,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem',
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: 'var(--cyan)', fontSize: '2rem', cursor: 'pointer' }}>✕</button>
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'var(--font-mono)', fontSize: '1.25rem', textDecoration: 'none',
              color: active === item.href.slice(1) ? 'var(--cyan)' : 'var(--text)',
            }}>{item.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

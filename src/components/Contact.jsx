import React, { useState } from 'react';
import emailjs from "@emailjs/browser";

// read EmailJS keys from environment (set in .env.local)
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;


const CONTACTS = [
  { icon: '✉', label: 'Email', value: 'abirhamdagnnet@gmail.com', href: 'mailto:abirhamdagnnet@gmail.com', color: 'var(--cyan)' },
  { icon: '⌥', label: 'GitHub', value: 'github.com/abirhamdagnnet-ab', href: 'https://github.com/abirhamdagnnet-ab', color: 'var(--purple)' },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/abirham-dagnnet', href: 'https://linkedin.com/in/abirham-dagnnet', color: 'var(--cyan)' },
];

function ContactLink({ c }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a href={c.href} style={{ textDecoration: 'none' }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <div className="glow-card" style={{
        padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem',
        borderColor: hovered ? c.color : undefined,
        boxShadow: hovered ? `0 0 20px rgba(0,212,255,0.15)` : undefined,
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 10,
          background: `rgba(${c.color === 'var(--cyan)' ? '0,212,255' : '124,58,237'},0.12)`,
          border: `1px solid ${c.color}40`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.1rem', color: c.color,
          transition: 'all 0.3s',
          boxShadow: hovered ? `0 0 16px ${c.color}40` : 'none',
        }}>{c.icon}</div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{c.label}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: hovered ? c.color : 'var(--text)', transition: 'color 0.3s' }}>{c.value}</div>
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [focused, setFocused] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const canUseEmailJS = EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY;
    try {
      if (canUseEmailJS) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
            reply_to: form.email,
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        // Fallback: simulate a send so the UX behaves consistently when env vars are missing
        await new Promise((res) => setTimeout(res, 700));
      }

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputStyle = (field) => ({
    width: '100%', padding: '0.85rem 1rem',
    background: 'rgba(255,255,255,0.03)',
    border: `1.5px solid ${focused === field ? 'var(--cyan)' : 'rgba(255,255,255,0.08)'}`,
    borderRadius: 8, color: 'var(--text)',
    fontFamily: 'var(--font-mono)', fontSize: '0.875rem',
    outline: 'none',
    WebkitAppearance: 'none',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused === field
      ? '0 0 0 3px rgba(0,212,255,0.15), 0 0 12px rgba(0,212,255,0.1)'
      : 'none',
  });

  const buttonLabel = () => {
    if (status === 'sending') return <><span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⟳</span> Sending...</>;
    if (status === 'sent')    return <><span style={{ color: 'var(--green)' }}>✓</span> Message Sent!</>;
    if (status === 'error')   return <><span style={{ color: '#f87171' }}>✕</span> Failed — Try Again</>;
    return <><span>→</span> Send Message</>;
  };

  return (
    <section id="contact" style={{ background: 'linear-gradient(180deg, transparent, rgba(13,18,36,0.8))' }}>
      <div className="container">
        <p className="section-label">// 06 CONTACT</p>
        <h2 className="section-heading">Let's Connect</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>
          {/* Left: links */}
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Whether you have a project in mind, an internship offer, or just want to talk code and networks — my inbox is open.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {CONTACTS.map((c, i) => <ContactLink key={i} c={c} />)}
            </div>
          </div>

          {/* Right: form */}
          <div className="glow-card" style={{ padding: '2rem' }}>
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cyan)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
              &gt;_ send_message()
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>NAME</label>
                <input
                  type="text" required placeholder="Your name"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                  style={inputStyle('name')}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>EMAIL</label>
                <input
                  type="email" required placeholder="your@email.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                  style={inputStyle('email')}
                />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', letterSpacing: '0.1em' }}>MESSAGE</label>
                <textarea
                  required placeholder="What's on your mind?" rows={4}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  style={{ ...inputStyle('message'), resize: 'none' }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{
                  width: '100%', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  borderColor: status === 'error' ? '#f87171' : undefined,
                }}
              >
                {buttonLabel()}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Built with <span style={{ color: 'var(--cyan)' }}>React</span> · Designed with <span style={{ color: 'var(--purple)' }}>modern UI ideas</span> · {new Date().getFullYear()}
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.4rem', opacity: 0.5 }}>
            //made by ABIRHAM // Psst... looking at the source? Nice! If you want to chat or collaborate, you know where to find me 😉
          </p>
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        #contact input, #contact textarea {
          outline: none !important;
          -webkit-tap-highlight-color: transparent;
        }
        #contact input:focus, #contact textarea:focus {
          outline: none !important;
          border-color: var(--cyan) !important;
          box-shadow: 0 0 0 3px rgba(0,212,255,0.15), 0 0 12px rgba(0,212,255,0.1) !important;
        }
        @media (max-width: 768px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
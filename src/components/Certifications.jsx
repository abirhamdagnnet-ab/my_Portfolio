import React from 'react';

const CERTS = [
  {
    name: 'CCNA',
    org: 'Cisco Certified Network Associate',
    status: 'In Progress',
    statusColor: 'var(--cyan)',
    icon: '📡',
    year: '2025',
    description: 'Covering routing, switching, VLANs, STP, OSPF, and network security fundamentals.',
  },
  {
    name: 'CompTIA Network+',
    org: 'CompTIA',
    status: 'Planned',
    statusColor: 'var(--purple)',
    icon: '🌐',
    year: '2025',
    description: 'Vendor-neutral certification covering networking concepts, infrastructure, operations, and security.',
  },
  {
    name: 'Google IT Support',
    org: 'Google / Coursera',
    status: 'Completed',
    statusColor: 'var(--green)',
    icon: '✅',
    year: '2024',
    description: 'Covering IT support fundamentals, networking, operating systems, system administration, and security.',
  },
  {
    name: 'Responsive Web Design',
    org: 'freeCodeCamp',
    status: 'Completed',
    statusColor: 'var(--green)',
    icon: '💻',
    year: '2023',
    description: 'HTML, CSS, Flexbox, Grid, responsive design principles and accessibility best practices.',
  },
];

function CertCard({ cert }) {
  const statusBg = cert.statusColor === 'var(--green)'
    ? 'rgba(16,185,129,0.12)' : cert.statusColor === 'var(--cyan)'
    ? 'rgba(0,212,255,0.12)' : 'rgba(124,58,237,0.12)';

  return (
    <div className="glow-card" style={{ padding: '1.75rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${cert.statusColor}, transparent)` }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.75rem' }}>{cert.icon}</span>
        <span style={{
          padding: '0.25rem 0.75rem', borderRadius: 20, fontSize: '0.65rem',
          fontFamily: 'var(--font-mono)', letterSpacing: '0.05em',
          background: statusBg, color: cert.statusColor,
          border: `1px solid ${cert.statusColor}40`,
        }}>
          {cert.status}
        </span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text)', marginBottom: '0.25rem' }}>
        {cert.name}
      </h3>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: cert.statusColor, marginBottom: '0.75rem', opacity: 0.8 }}>
        {cert.org} · {cert.year}
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.7 }}>{cert.description}</p>
    </div>
  );
}

export default function Certifications() {
  return (
    <section id="certs">
      <div className="container">
        <p className="section-label">// 05 CERTIFICATIONS</p>
        <h2 className="section-heading">Credentials</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {CERTS.map((c, i) => <CertCard key={i} cert={c} />)}
        </div>
      </div>
    </section>
  );
}

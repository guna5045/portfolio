import React from 'react';
import { UserCheck, GraduationCap, Server, Cloud, Layers, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const About = () => {
  const { title, bio, highlights } = PORTFOLIO_DATA.about;
  const { education } = PORTFOLIO_DATA.personal;

  const coreInterests = [
    { icon: Layers, title: "Web Development", desc: "Building responsive full-stack applications with React.js and Node.js." },
    { icon: Server, title: "Backend Systems", desc: "Designing RESTful APIs and working with relational PostgreSQL databases." },
    { icon: Cloud, title: "Cloud & DevOps", desc: "Exploring containerization with Docker and cloud services on AWS." },
    { icon: Cpu, title: "CS Fundamentals", desc: "Applying Data Structures, Algorithms, OOP, and Core CS principles." }
  ];

  return (
    <section id="about" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <UserCheck size={14} />
          About Me
        </div>
        <h2 className="section-title">Background & Experience</h2>
        <p className="section-subtitle">
          Computer Science and Engineering undergraduate passionate about full-stack web development and software engineering.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--accent-primary)' }}>
              {title}
            </h3>

            {bio.map((paragraph, index) => (
              <p key={index} style={{ color: 'var(--text-muted)', marginBottom: '1.2rem', lineHeight: 1.7, fontSize: '1.02rem' }}>
                {paragraph}
              </p>
            ))}

            <div style={{
              marginTop: '2rem',
              padding: '1.2rem',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'rgba(0, 161, 224, 0.08)',
              border: '1px solid rgba(0, 161, 224, 0.25)',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <GraduationCap size={32} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
              <div>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 700 }}>
                  {education.degree}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                  {education.institution} • <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>Graduating in {education.graduationYear}</span>
                </p>
              </div>
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <div key={i} className="highlight-box">
                  <h4>{h.label}</h4>
                  <p>{h.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Primary Technical Focus</h3>
            {coreInterests.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.4rem',
                    display: 'flex',
                    gap: '1.2rem',
                    alignItems: 'flex-start',
                    transition: 'var(--transition-normal)'
                  }}
                  className="about-focus-card"
                >
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--accent-primary-transparent)',
                    color: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <IconComp size={22} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '0.3rem' }}>
                      {item.title}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Target, Code2, Database, Server, Cloud, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap = [Code2, Database, Server, Database, Cloud, ShieldCheck];

export const InterviewPrepSection = () => {
  const { interviewPrepData } = PORTFOLIO_DATA;

  return (
    <section id="interview-prep" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Target size={14} />
          Interview Readiness
        </div>
        <h2 className="section-title">{interviewPrepData.title}</h2>
        <p className="section-subtitle">
          {interviewPrepData.subtitle}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {interviewPrepData.pillars.map((pillar, idx) => {
            const IconComp = iconMap[idx % iconMap.length];

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  transition: 'var(--transition-normal)'
                }}
                className="about-card"
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-primary-transparent)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.2rem'
                }}>
                  <IconComp size={22} />
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.6rem' }}>
                  {pillar.topic}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {pillar.focus}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

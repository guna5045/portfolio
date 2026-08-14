import React, { useState, useEffect } from 'react';
import { Activity, FolderGit2, Trophy, Presentation, Code2, Calendar } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap = [FolderGit2, Trophy, Presentation, Code2, Activity, Calendar];

export const StatsDashboard = () => {
  const { engineeringStats } = PORTFOLIO_DATA;
  const [counts, setCounts] = useState(engineeringStats.map(() => 0));

  useEffect(() => {
    const duration = 1500;
    const steps = 30;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts(engineeringStats.map((item) => Math.floor(item.value * Math.min(progress, 1))));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [engineeringStats]);

  return (
    <section id="stats" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Activity size={14} />
          Metrics Dashboard
        </div>
        <h2 className="section-title">Engineering Telemetry & Statistics</h2>
        <p className="section-subtitle">
          Configurable quantitative breakdown of practical project outputs, verified competitive hackathon wins, research talks, and codebase metrics.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1.25rem'
        }}>
          {engineeringStats.map((stat, idx) => {
            const IconComp = iconMap[idx % iconMap.length];
            return (
              <div
                key={stat.label}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 1.25rem',
                  textAlign: 'center',
                  transition: 'var(--transition-normal)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="about-card"
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
                  margin: '0 auto 1rem auto'
                }}>
                  <IconComp size={22} />
                </div>

                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-main)',
                  letterSpacing: '-0.03em',
                  marginBottom: '0.2rem'
                }}>
                  {counts[idx]}
                  <span style={{ color: 'var(--accent-primary)' }}>{stat.suffix}</span>
                </div>

                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

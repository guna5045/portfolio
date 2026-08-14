import React from 'react';
import { Sparkles, Cpu, Layers, Cloud, Brain, Layout, Users } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Layers: Layers,
  Cloud: Cloud,
  Brain: Brain,
  Layout: Layout,
  Users: Users
};

export const Highlights = () => {
  const { highlights } = PORTFOLIO_DATA;

  return (
    <section id="highlights" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Sparkles size={14} />
          Key Pillars
        </div>
        <h2 className="section-title">Highlights</h2>
        <p className="section-subtitle">
          Core engineering strengths, technical leadership pillars, and software design capabilities.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {highlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  transition: 'var(--transition-normal)'
                }}
                className="about-card"
              >
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--accent-primary-transparent)',
                  color: 'var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <IconComponent size={24} />
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

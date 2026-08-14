import React from 'react';
import { Lightbulb, Code, Users, Brain, Zap, Cloud, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap = {
  Code: Code,
  Users: Users,
  Brain: Brain,
  Zap: Zap,
  Cloud: Cloud,
  BookOpen: BookOpen
};

export const Philosophy = () => {
  const { philosophy } = PORTFOLIO_DATA;

  return (
    <section id="philosophy" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Lightbulb size={14} />
          Development Principles
        </div>
        <h2 className="section-title">How I Build Software</h2>
        <p className="section-subtitle">
          Core principles and practices that guide my software development process and learning journey.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}>
          {philosophy.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Lightbulb;

            return (
              <div
                key={index}
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
                  <IconComponent size={22} />
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

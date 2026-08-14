import React from 'react';
import { Calendar, GraduationCap, Award, Code, Server, Rocket, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const getTimelineIcon = (index) => {
  const icons = [GraduationCap, Code, Sparkles, Rocket, Award, Award, Server, Server, Sparkles];
  return icons[index % icons.length];
};

export const Timeline = () => {
  const { timeline } = PORTFOLIO_DATA;

  return (
    <section id="timeline" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Calendar size={14} />
          Milestones
        </div>
        <h2 className="section-title">Engineering Journey</h2>
        <p className="section-subtitle">
          Academic growth, technical projects, leadership experiences, and engineering achievements.
        </p>

        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '2rem 0'
        }}>
          {/* Central Vertical Connector Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, rgba(0, 161, 224, 0.6) 0%, rgba(79, 140, 255, 0.4) 50%, rgba(0, 161, 224, 0.1) 100%)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }} className="timeline-connector-line" />

          {timeline.map((item, index) => {
            const IconComponent = getTimelineIcon(index);
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-end' : 'flex-start',
                  paddingLeft: isLeft ? 0 : 'calc(50% + 2rem)',
                  paddingRight: isLeft ? 'calc(50% + 2rem)' : 0,
                  marginBottom: '2.5rem',
                  position: 'relative'
                }}
                className="timeline-item-container"
              >
                {/* Connector Badge Node */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '1.2rem',
                  transform: 'translate(-50%, -50%)',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  border: '2px solid var(--accent-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  zIndex: 2,
                  boxShadow: '0 0 15px rgba(0, 161, 224, 0.4)'
                }}>
                  <IconComponent size={18} />
                </div>

                {/* Milestone Card */}
                <div
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.5rem',
                    width: '100%',
                    maxWidth: '420px',
                    transition: 'var(--transition-normal)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                  className="about-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--accent-primary-transparent)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid rgba(0, 161, 224, 0.3)'
                    }}>
                      {item.year}
                    </span>

                    <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                      Milestone #{index + 1}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ color: 'var(--accent-secondary)', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.6rem' }}>
                    {item.institution}
                  </p>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                    {item.description}
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

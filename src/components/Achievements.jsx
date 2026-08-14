import React from 'react';
import { Award, Trophy, Presentation, Flag, Users, Lightbulb } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap = {
  Award: Award,
  Trophy: Trophy,
  Presentation: Presentation,
  Flag: Flag,
  Users: Users,
  Lightbulb: Lightbulb
};

export const Achievements = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Award size={14} />
          Recognition
        </div>
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">
          Hackathon recognitions, conference presentations, and campus club leadership roles.
        </p>

        <div className="achievements-grid">
          {achievements.map((item) => {
            const IconComponent = iconMap[item.icon] || Award;

            return (
              <div key={item.id} className="achievement-card">
                <div className="achievement-icon-wrapper">
                  <IconComponent size={24} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {item.category}
                    </span>
                    <span style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-primary)',
                      backgroundColor: 'var(--accent-primary-transparent)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 600
                    }}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.6rem' }}>
                    {item.organization}
                  </p>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
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

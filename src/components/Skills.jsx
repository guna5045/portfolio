import React from 'react';
import { Code2, Layout, Server, Database, Cloud, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Cloud: Cloud,
  Wrench: Wrench,
  Cpu: Cpu
};

export const Skills = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Cpu size={14} />
          Technology Ecosystem
        </div>
        <h2 className="section-title">Tech Stack Visualization</h2>
        <p className="section-subtitle">
          Grouped engineering stack breakdown spanning core languages, frontend state architecture, RESTful backend microservices, PostgreSQL databases, Docker containerization, AWS cloud, and Computer Science fundamentals.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, index) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const isCoreCS = cat.category === "Core Computer Science";

            return (
              <div
                key={index}
                className="skill-category-card"
                style={isCoreCS ? { gridColumn: '1 / -1', borderColor: 'rgba(0, 161, 224, 0.4)', background: 'linear-gradient(180deg, #121826 0%, #161F33 100%)' } : {}}
              >
                <div className="skill-card-header">
                  <div className="skill-card-icon">
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{cat.category}</h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{cat.description}</p>
                  </div>
                </div>

                <div className="skills-tags">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-pill"
                      style={{
                        padding: '0.45rem 0.95rem',
                        fontSize: '0.92rem',
                        fontWeight: 600
                      }}
                    >
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-primary)', marginRight: '0.4rem', display: 'inline' }} />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

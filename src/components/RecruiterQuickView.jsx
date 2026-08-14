import React from 'react';
import { Zap, Download, ExternalLink, Mail, Linkedin, Github, GraduationCap, Code2, Award, FolderGit2, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const RecruiterQuickView = () => {
  const { recruiterQuickView } = PORTFOLIO_DATA;

  return (
    <section id="recruiter-quick-view" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag" style={{ borderColor: 'rgba(0, 161, 224, 0.5)', backgroundColor: 'rgba(0, 161, 224, 0.2)' }}>
          <Zap size={14} />
          Executive Summary for Hiring Managers
        </div>
        <h2 className="section-title">Recruiter Quick View</h2>
        <p className="section-subtitle">
          Designed for technical recruiters and engineering managers to evaluate candidate metrics, primary language stack, and project highlights in under 10 seconds.
        </p>

        <div style={{
          backgroundColor: 'linear-gradient(135deg, rgba(18, 24, 38, 0.95) 0%, rgba(14, 19, 30, 0.98) 100%)',
          border: '1px solid var(--border-color-hover)',
          borderRadius: 'var(--radius-xl)',
          padding: '2.5rem',
          boxShadow: 'var(--shadow-lg)',
          position: 'relative'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {/* Column 1: Core Profile & Education */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                <GraduationCap size={20} />
                <span>Education & Candidate Status</span>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.2rem' }}>
                  {recruiterQuickView.candidateName}
                </h3>
                <p style={{ color: 'var(--accent-primary)', fontWeight: 600, fontSize: '0.92rem' }}>
                  {recruiterQuickView.targetRole}
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <div><strong>Degree:</strong> <span style={{ color: 'var(--text-main)' }}>{recruiterQuickView.degree}</span></div>
                <div><strong>University:</strong> <span style={{ color: 'var(--text-main)' }}>{recruiterQuickView.institution}</span></div>
                <div><strong>Graduation Year:</strong> <span style={{ color: '#10B981', fontWeight: 700 }}>{recruiterQuickView.graduationYear}</span></div>
                <div><strong>Primary Language:</strong> <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>{recruiterQuickView.primaryLanguage}</span></div>
              </div>
            </div>

            {/* Column 2: Core Stack & Top Projects */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: 'var(--accent-secondary)', fontWeight: 700 }}>
                <Code2 size={20} />
                <span>Core Competencies & Top Projects</span>
              </div>

              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  Core Tech Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {recruiterQuickView.coreSkills.map((sk) => (
                    <span key={sk} style={{
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--text-main)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      border: '1px solid var(--border-color)'
                    }}>
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-subtle)', textTransform: 'uppercase', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                  Featured SaaS Projects
                </div>
                {recruiterQuickView.topProjects.map((p) => (
                  <div key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-main)', fontSize: '0.88rem', marginBottom: '0.3rem' }}>
                    <FolderGit2 size={14} style={{ color: 'var(--accent-primary)' }} />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Achievements & Quick Actions */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem', color: '#F59E0B', fontWeight: 700 }}>
                <Award size={20} />
                <span>Verified Achievements & Actions</span>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                {recruiterQuickView.topAchievements.map((ach) => (
                  <div key={ach} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                    <CheckCircle2 size={15} style={{ color: '#F59E0B' }} />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <a
                  href={recruiterQuickView.links.resume}
                  download="Gunashekhar_Resume.pdf"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.65rem' }}
                >
                  <Download size={16} /> Download Resume PDF
                </a>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <a
                    href={recruiterQuickView.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    <Linkedin size={15} /> LinkedIn
                  </a>
                  <a
                    href={recruiterQuickView.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '0.55rem', fontSize: '0.85rem' }}
                  >
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

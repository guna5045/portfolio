import React from 'react';
import { ClipboardCheck, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const RecruiterChecklist = () => {
  const { recruiterChecklist, personal } = PORTFOLIO_DATA;

  return (
    <section id="recruiter-checklist" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag" style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
          <ClipboardCheck size={14} />
          Hiring Committee Review
        </div>
        <h2 className="section-title">Recruiter Hiring Evaluation Checklist</h2>
        <p className="section-subtitle">
          Internal hiring evaluation report verifying candidate technical readiness, portfolio completeness, and alignment with {personal.targetRole}.
        </p>

        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color-hover)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-color)', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck size={28} style={{ color: '#10B981' }} />
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>Candidate Evaluation Audit</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Status: 10 / 10 Dimensions Verified</p>
              </div>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#10B981',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 700,
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(16, 185, 129, 0.3)'
            }}>
              <Award size={16} /> PASSED FOR INTERVIEW SHORTLIST
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.25rem'
          }}>
            {recruiterChecklist.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(11, 15, 25, 0.6)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.1rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.85rem'
                }}
              >
                <CheckCircle2 size={20} style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <span style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.92rem' }}>
                      {item.metric}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#10B981',
                      backgroundColor: 'rgba(16, 185, 129, 0.2)',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 700
                    }}>
                      {item.status}
                    </span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

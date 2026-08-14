import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Cpu, Database, Server, Zap, ShieldCheck } from 'lucide-react';

export const InterviewPrepPanel = ({ interviewData, projectTitle }) => {
  if (!interviewData || !interviewData.questions) return null;

  const [openIndex, setOpenIndex] = useState(0);

  const toggleQuestion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{
      backgroundColor: '#090D16',
      border: '1px solid var(--border-color-hover)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem 1.5rem',
      marginBottom: '2.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <HelpCircle size={22} style={{ color: '#F59E0B' }} />
          <h4 style={{ color: 'var(--text-main)', fontSize: '1.15rem', fontWeight: 700 }}>
            Hiring Manager & Candidate Technical Discussion Panel
          </h4>
        </div>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          color: '#F59E0B',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          padding: '0.25rem 0.65rem',
          borderRadius: 'var(--radius-full)',
          border: '1px solid rgba(245, 158, 11, 0.3)'
        }}>
          Interview Preparation Mode
        </span>
      </div>

      <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
        Targeted system design, query optimization, and architectural trade-off discussion points generated for Salesforce and FAANG engineering evaluations of {projectTitle}.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {interviewData.questions.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid',
                borderColor: isOpen ? 'var(--accent-primary)' : 'var(--border-color)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'var(--transition-fast)'
              }}
            >
              <button
                onClick={() => toggleQuestion(idx)}
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem',
                  backgroundColor: isOpen ? 'var(--accent-primary-transparent)' : 'transparent',
                  border: 'none',
                  color: 'var(--text-main)',
                  textAlign: 'left',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>Q{idx + 1}:</span>
                  {item.q}
                </span>

                {isOpen ? <ChevronUp size={18} style={{ color: 'var(--accent-primary)' }} /> : <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} />}
              </button>

              {isOpen && (
                <div style={{
                  padding: '1.25rem',
                  borderTop: '1px solid var(--border-subtle)',
                  backgroundColor: 'rgba(11, 15, 25, 0.6)',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6
                }}>
                  <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    Architectural & Technical Rationale:
                  </div>
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

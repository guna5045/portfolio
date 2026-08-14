import React, { useState } from 'react';
import { Download, FileText, Eye } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ResumeViewerModal } from './ResumeViewerModal';

export const ResumeSection = () => {
  const { resumeUrl } = PORTFOLIO_DATA.personal;
  const [showViewer, setShowViewer] = useState(false);

  return (
    <section id="resume" className="section reveal-on-scroll">
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="section-tag" style={{ margin: '0 auto 1rem auto' }}>
          <FileText size={14} />
          Document
        </div>
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle" style={{ margin: '0 auto 2.5rem auto' }}>
          Download my latest resume.
        </p>

        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem 2rem',
          maxWidth: '650px',
          margin: '0 auto',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-primary-transparent)',
            color: 'var(--accent-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto',
            border: '1px solid rgba(0, 161, 224, 0.3)'
          }}>
            <FileText size={32} />
          </div>

          <h3 style={{ fontSize: '1.5rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>
            Gunashekhar Ammajigari - Resume
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
            PDF document containing education, technical skills, projects, and achievements.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={resumeUrl}
              download="Gunashekhar_Resume.pdf"
              className="btn btn-primary btn-lg"
              style={{
                padding: '0.9rem 2.2rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: 'var(--radius-md)',
                boxShadow: '0 6px 20px rgba(0, 161, 224, 0.35)'
              }}
            >
              <Download size={18} />
              Download Resume
            </a>

            <button
              onClick={() => setShowViewer(true)}
              className="btn btn-secondary btn-lg"
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
            >
              <Eye size={18} />
              Preview Resume
            </button>
          </div>
        </div>
      </div>

      {showViewer && (
        <ResumeViewerModal
          resumeUrl={resumeUrl}
          onClose={() => setShowViewer(false)}
        />
      )}
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { Download, Linkedin, Github } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { trackResumeDownload, trackSocialClick } from '../utils/analytics';

export const RecruiterFloatingBar = () => {
  const [visible, setVisible] = useState(false);
  const { resumeUrl, socials } = PORTFOLIO_DATA.personal;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Quick Action Navigation Bar"
      className="recruiter-floating-bar desktop-only-floating-bar"
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 1100,
        alignItems: 'center',
        gap: '0.6rem',
        backgroundColor: 'rgba(18, 24, 38, 0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--border-color-hover)',
        borderRadius: 'var(--radius-full)',
        padding: '0.45rem 0.8rem',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
        animation: 'fadeIn 0.25s ease'
      }}
    >
      <a
        href={resumeUrl}
        download="Gunashekhar_Resume.pdf"
        className="btn btn-primary"
        style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}
        onClick={() => trackResumeDownload('floating_bar')}
      >
        <Download size={15} /> Resume PDF
      </a>

      <a
        href={socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        style={{ width: '34px', height: '34px', borderRadius: '50%' }}
        aria-label="LinkedIn Profile"
        onClick={() => trackSocialClick('LinkedIn', socials.linkedin)}
      >
        <Linkedin size={16} />
      </a>

      <a
        href={socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        style={{ width: '34px', height: '34px', borderRadius: '50%' }}
        aria-label="GitHub Profile"
        onClick={() => trackSocialClick('GitHub', socials.github)}
      >
        <Github size={16} />
      </a>
    </aside>
  );
};

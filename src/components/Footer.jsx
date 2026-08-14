import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Footer = () => {
  const { socials, resumeUrl } = PORTFOLIO_DATA.personal;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          textAlign: 'left',
          marginBottom: '3rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--border-color)'
        }}>
          {/* Col 1: Logo & Statement */}
          <div>
            <a href="#hero" className="logo-brand" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <span style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-main)' }}>
                Gunashekhar Ammajigari
              </span>
            </a>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              Computer Science Student and Full Stack Developer passionate about building useful applications and continuously learning new technologies.
            </p>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1rem' }}>Navigation</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.86rem', transition: 'var(--transition-fast)' }}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Connect & Download */}
          <div>
            <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', marginBottom: '1rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub Profile">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn Profile">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${socials.email}`} className="social-icon-btn" aria-label="Email Contact">
                <Mail size={18} />
              </a>
            </div>

            <a
              href={resumeUrl}
              download="Gunashekhar_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
            >
              <Download size={15} /> Download Resume
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-subtle)', fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
            © {currentYear} Gunashekhar Ammajigari. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.8rem' }}
            aria-label="Scroll back to top"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

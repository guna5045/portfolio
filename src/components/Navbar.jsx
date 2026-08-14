import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resumeUrl, socials } = PORTFOLIO_DATA.personal;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container" style={{ maxWidth: '1140px' }}>
        <a href="#hero" className="logo-brand" aria-label="Gunashekhar Ammajigari Portfolio" style={{ gap: '0.5rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--text-main)', letterSpacing: '-0.01em' }}>
            Gunashekhar Ammajigari
          </span>
        </a>

        <ul className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`} style={{ gap: '1.8rem' }}>
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          <li style={{ marginTop: mobileOpen ? '0.5rem' : 0 }}>
            <a
              href={resumeUrl}
              download="Gunashekhar_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
              onClick={() => setMobileOpen(false)}
            >
              <FileText size={15} />
              Resume PDF
            </a>
          </li>

          {mobileOpen && (
            <li className="mobile-social-menu-row" style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', justifyContent: 'center' }}>
              <a href={socials.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="GitHub Profile">
                <Github size={18} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="LinkedIn Profile">
                <Linkedin size={18} />
              </a>
              <a href={`mailto:${socials.email}`} className="social-icon-btn" aria-label="Email Contact">
                <Mail size={18} />
              </a>
            </li>
          )}
        </ul>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

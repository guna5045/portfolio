import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Download, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero = () => {
  const { name, title, subtitle, description, profileImage, resumeUrl, socials } = PORTFOLIO_DATA.personal;
  const [imgError, setImgError] = useState(false);

  return (
    <section id="hero" className="section section-full">
      <div className="container hero-content">
        <div>
          <div className="section-tag">
            <Code2 size={14} />
            {subtitle}
          </div>

          <h1 style={{ marginBottom: '0.75rem' }}>
            Hi, I'm <span className="text-gradient">{name}</span>
          </h1>

          <p className="hero-tagline" style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '620px' }}>
            {description}
          </p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary btn-lg">
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href={resumeUrl}
              download="Gunashekhar_Resume.pdf"
              className="btn btn-secondary btn-lg"
            >
              <Download size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline btn-lg">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${socials.email}`}
              className="social-icon-btn"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero-profile-container">
          <div className="hero-profile-ring">
            {!imgError ? (
              <img
                src={profileImage}
                alt={name}
                className="hero-profile-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div
                className="hero-profile-img"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-card)',
                  color: 'var(--accent-primary)',
                  textAlign: 'center',
                  padding: '1rem'
                }}
              >
                <Code2 size={48} />
                <span style={{ fontSize: '0.85rem', marginTop: '0.5rem', fontWeight: 600, color: 'var(--text-main)' }}>
                  Gunashekhar A.
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  B.Tech CSE Student
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

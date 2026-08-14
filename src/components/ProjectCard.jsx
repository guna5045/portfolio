import React, { useState } from 'react';
import { Github, ExternalLink, BookOpen, Server, ShieldCheck, Cpu, Clock } from 'lucide-react';

export const ProjectCard = ({ project, onOpenModal }) => {
  const [primaryErr, setPrimaryErr] = useState(false);

  return (
    <div className="project-card" style={{ marginBottom: '1rem' }}>
      <div className="project-visual">
        <div className="project-img-wrapper">
          {!primaryErr ? (
            <img
              src={project.images.primary}
              alt={`${project.title} Case Study Architecture Screenshot`}
              className="project-img"
              onError={() => setPrimaryErr(true)}
            />
          ) : (
            <div className="project-fallback-visual">
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary-transparent)',
                color: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: '1px solid rgba(0, 161, 224, 0.4)'
              }}>
                <Server size={30} />
              </div>
              <h3 style={{ color: 'var(--text-main)', fontSize: '1.4rem', marginBottom: '0.4rem' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', maxWidth: '280px' }}>
                {project.subtitle}
              </p>
              <div style={{
                marginTop: '1.2rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-primary)',
                padding: '0.3rem 0.8rem',
                background: 'rgba(0, 161, 224, 0.1)',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(0, 161, 224, 0.3)'
              }}>
                Full Engineering Case Study
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="project-info">
        <div className="project-header">
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <span className="project-tech-badge">Engineering Case Study</span>
          </div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.tagline}</p>
        </div>

        <div className="project-section-block">
          <div className="project-block-title" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <ShieldCheck size={14} /> Problem Statement
          </div>
          <p className="project-block-text" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {project.problemStatement.summary}
          </p>
        </div>

        <div className="project-section-block">
          <div className="project-block-title" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Cpu size={14} /> Solution Rationale
          </div>
          <p className="project-block-text" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            {project.solutionOverview.summary}
          </p>
        </div>

        <div style={{ marginTop: '0.5rem', marginBottom: '1.5rem' }}>
          <div className="project-block-title">Core Technology Stack</div>
          <div className="project-tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <button
            onClick={() => onOpenModal(project)}
            className="btn btn-primary"
            style={{ padding: '0.7rem 1.2rem', fontSize: '0.9rem', fontWeight: 700 }}
          >
            <BookOpen size={17} /> Read Full Case Study
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            style={{ padding: '0.7rem 1.1rem', fontSize: '0.88rem' }}
          >
            <Github size={16} /> GitHub Source
          </a>

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ padding: '0.7rem 1.1rem', fontSize: '0.88rem' }}
            >
              <ExternalLink size={16} /> Live Website
            </a>
          ) : (
            <button
              disabled
              className="btn btn-outline"
              style={{
                padding: '0.7rem 1.1rem',
                fontSize: '0.88rem',
                opacity: 0.65,
                cursor: 'not-allowed',
                borderColor: 'var(--border-subtle)',
                color: 'var(--text-muted)'
              }}
            >
              <Clock size={16} /> Coming Soon
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

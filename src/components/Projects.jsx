import React, { useState, useMemo } from 'react';
import { Layers, Search, Filter, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectDetails';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { trackProjectView } from '../utils/analytics';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');

  const techFilters = ['All', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      // Tech filter check
      const matchesTech = selectedTech === 'All' || project.technologies.includes(selectedTech);

      // Search query check
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q)) ||
        project.problemStatement.summary.toLowerCase().includes(q);

      return matchesTech && matchesQuery;
    });
  }, [searchQuery, selectedTech]);

  const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    trackProjectView(proj.id);
  };

  return (
    <section id="projects" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Layers size={14} />
          Software Engineering Case Studies
        </div>
        <h2 className="section-title">Production System Architecture</h2>
        <p className="section-subtitle">
          In-depth technical breakdown of enterprise SaaS platforms, real-time observability telemetry engines, and resilient backend database architectures.
        </p>

        {/* Search & Technology Filters Bar */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
          marginBottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem'
        }}>
          {/* Search Input */}
          <div style={{ position: 'relative', width: '100%' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search case studies by keyword, algorithm, or architecture (e.g. 'Redis', 'Geospatial', 'PostgreSQL', 'Docker')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ paddingLeft: '2.8rem', paddingRight: searchQuery ? '2.5rem' : '1rem' }}
              aria-label="Search Engineering Case Studies"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                aria-label="Clear search query"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Technology Filter Pills */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginRight: '0.4rem' }}>
              <Filter size={14} /> Filter by Stack:
            </span>

            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                style={{
                  backgroundColor: selectedTech === tech ? 'var(--accent-primary-transparent)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedTech === tech ? 'var(--accent-primary)' : 'var(--text-muted)',
                  border: '1px solid',
                  borderColor: selectedTech === tech ? 'var(--accent-primary)' : 'var(--border-color)',
                  borderRadius: 'var(--radius-full)',
                  padding: '0.3rem 0.85rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        {filteredProjects.length > 0 ? (
          <div className="projects-container">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={handleOpenModal}
              />
            ))}
          </div>
        ) : (
          <div style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            padding: '3rem',
            textAlign: 'center',
            color: 'var(--text-muted)'
          }}>
            <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>No case studies matched your search query: "{searchQuery}"</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedTech('All'); }}
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

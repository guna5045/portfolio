import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, ExternalLink, FolderGit2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const GitHubSection = () => {
  const { socials } = PORTFOLIO_DATA.personal;
  const username = "guna5045";

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Clean fallback repository cards with actual URLs
  const authenticRepos = [
    {
      id: 1,
      name: "civic-resolve",
      displayName: "Civic Resolve",
      description: "Crowdsourced civic issue reporting and resolution platform built with React, Node.js, Express, and PostgreSQL.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/guna5045/civic-resolve",
      updated_at: "2026-08-10T12:00:00Z"
    },
    {
      id: 2,
      name: "Apex-Pulse",
      displayName: "Apex Pulse",
      description: "Real-time API observability & telemetry monitoring engine leveraging Redis streams, Docker, PostgreSQL, and AWS.",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      html_url: "https://github.com/guna5045/Apex-Pulse",
      updated_at: "2026-08-12T14:30:00Z"
    }
  ];

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        if (!res.ok) throw new Error('GitHub API rate limit');
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          // Filter strictly to civic-resolve and Apex-Pulse
          const targetRepos = data.filter((r) =>
            r.name.toLowerCase().includes('civic-resolve') ||
            r.name.toLowerCase().includes('civicresolve') ||
            r.name.toLowerCase().includes('apex-pulse') ||
            r.name.toLowerCase().includes('apexpulse')
          );

          if (targetRepos.length > 0) {
            setRepos(targetRepos.map(r => ({
              ...r,
              displayName: r.name.toLowerCase().includes('civic') ? 'Civic Resolve' : 'Apex Pulse'
            })));
          } else {
            setRepos(authenticRepos);
          }
        } else {
          setRepos(authenticRepos);
        }
      } catch (err) {
        console.warn('Using fallback GitHub repository cards:', err.message);
        setRepos(authenticRepos);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Recently';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section id="github" className="section reveal-on-scroll">
      <div className="container">
        <div className="section-tag">
          <Github size={14} />
          Open Source Repositories
        </div>
        <h2 className="section-title">GitHub Codebases</h2>
        <p className="section-subtitle">
          Explore the source code repositories for my featured software engineering projects.
        </p>

        {/* GitHub Header Analytics */}
        <div style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-xl)',
          padding: '2rem',
          marginBottom: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-primary-transparent)',
              color: 'var(--accent-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid var(--border-color-hover)'
            }}>
              <Github size={28} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)' }}>@{username}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Open Source Projects & Architecture Codebases
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <Github size={16} /> View GitHub Profile
            </a>
          </div>
        </div>

        {/* Repositories List */}
        {loading ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {[1, 2].map((n) => (
              <div key={n} style={{ backgroundColor: 'var(--bg-card)', height: '180px', borderRadius: 'var(--radius-lg)', padding: '1.5rem', opacity: 0.6 }}>
                <div style={{ height: '20px', width: '60%', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginBottom: '1rem' }} />
                <div style={{ height: '14px', width: '90%', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '4px' }} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {repos.map((repo) => (
              <div
                key={repo.id}
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'var(--transition-normal)'
                }}
                className="about-card"
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FolderGit2 size={20} style={{ color: 'var(--accent-primary)' }} />
                      {repo.displayName || repo.name}
                    </h4>

                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--text-muted)' }}
                      aria-label={`Open repository ${repo.name}`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {repo.description || 'Full stack software engineering project repository.'}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#F7DF1E'
                    }} />
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-main)' }}>{repo.language || 'JavaScript'}</span>
                  </div>

                  <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>
                    Updated {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

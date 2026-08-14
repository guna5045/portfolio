import React, { useState, useEffect, useRef } from 'react';
import { X, Github, ExternalLink, Cpu, Database, Server, Terminal, Activity, ShieldCheck, CheckCircle2, Cloud, Layers, Lightbulb, Rocket, ArrowRight } from 'lucide-react';
import { ArchitectureDiagramCard } from './case-study/ArchitectureDiagramCard';
import { DatabaseERDCard } from './case-study/DatabaseERDCard';
import { CloudInfrastructureCard } from './case-study/CloudInfrastructureCard';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState('overview');
  const modalContentRef = useRef(null);

  const isApexPulse = project.id === 'apexpulse';

  // Automatically scroll modal to top when project or activeTab changes & lock body scroll
  useEffect(() => {
    setActiveTab('overview');
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [project]);

  useEffect(() => {
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  }, [activeTab]);

  const tabs = [
    { id: 'overview', label: '1. Overview & Features' },
    { id: 'architecture', label: '2. System Architecture' },
    { id: 'database-api', label: '3. Database & APIs' },
    ...(isApexPulse ? [{ id: 'cloud', label: '4. Redis / Docker / AWS' }] : []),
    { id: 'challenges', label: `${isApexPulse ? '5' : '4'}. Engineering Challenges` },
    { id: 'roadmap', label: `${isApexPulse ? '6' : '5'}. Design & Roadmap` }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={modalContentRef}
        className="modal-content"
        style={{
          maxWidth: '1050px',
          maxHeight: '88vh',
          overflowY: 'auto',
          position: 'relative',
          padding: 0
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar containing Title, Subtitle, Tabs, and Pinned Close Button */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          backgroundColor: 'var(--bg-card)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1.5rem 1.75rem 0.75rem 1.75rem',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)'
        }}>
          {/* Always Visible Close Button Pinned at Top Right */}
          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'var(--transition-fast)',
              zIndex: 40
            }}
          >
            <X size={18} />
          </button>

          <div style={{ paddingRight: '2.5rem', marginBottom: '1rem' }}>
            <span className="section-tag" style={{ fontSize: '0.75rem', marginBottom: '0.4rem', display: 'inline-flex' }}>
              Full Engineering Case Study
            </span>
            <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)', margin: '0.2rem 0 0.3rem 0' }}>
              {project.title}
            </h2>
            <p style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', fontWeight: 600 }}>
              {project.subtitle}
            </p>
          </div>

          {/* Navigation Tab Bar */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '0.5rem'
          }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'var(--accent-primary-transparent)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--accent-primary)' : 'var(--text-muted)',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--accent-primary)' : 'transparent',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'var(--transition-fast)'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '1.75rem' }}>
          {/* Tab 1: Overview & Features */}
          {activeTab === 'overview' && (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                {/* Problem Statement Card */}
                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ color: 'var(--accent-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                    <ShieldCheck size={20} /> 1. Problem Statement
                  </h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.5 }}>
                    {project.problemStatement.summary}
                  </p>
                  <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {project.problemStatement.points.map((pt, i) => (
                      <li key={i} style={{ marginBottom: '0.4rem' }}>{pt}</li>
                    ))}
                  </ul>
                </div>

                {/* Solution Overview Card */}
                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                  <h4 style={{ color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', fontSize: '1.05rem' }}>
                    <Cpu size={20} /> 2. Solution Overview
                  </h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.75rem', lineHeight: 1.5 }}>
                    {project.solutionOverview.summary}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
                    {project.solutionOverview.details}
                  </p>
                </div>
              </div>

              {/* Key Features Matrix */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Layers size={18} style={{ color: 'var(--accent-primary)' }} /> 3. Key Platform Features
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} style={{ background: 'var(--bg-card)', padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                      <div style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <CheckCircle2 size={16} /> {feat.name}
                      </div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '0.75rem' }}>Technology Stack</h4>
                <div className="project-tech-stack">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-badge" style={{ fontSize: '0.82rem', padding: '0.3rem 0.8rem' }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: System Architecture */}
          {activeTab === 'architecture' && (
            <div>
              <ArchitectureDiagramCard
                flow={project.architectureFlow}
                title={`4. ${project.title} End-to-End System Architecture Flow`}
              />

              <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                <h4 style={{ color: 'var(--text-main)', fontSize: '1.05rem', marginBottom: '0.8rem' }}>
                  Architectural Rationale & Scalability Highlights
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  The architecture is designed to decouple API request handling from heavy background computations. By passing incoming payloads through validated controllers into buffered message queues before persistence, the platform guarantees sub-50ms API response latency even during peak concurrent traffic surges.
                </p>
              </div>
            </div>
          )}

          {/* Tab 3: Database & APIs */}
          {activeTab === 'database-api' && (
            <div>
              <DatabaseERDCard schema={project.databaseSchema} />

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Terminal size={18} style={{ color: 'var(--accent-secondary)' }} /> 6. REST API Architecture Contracts
                </h4>
                <div style={{ background: '#090D16', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                  {project.apiArchitecture?.map((ep, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.9rem 1.2rem', borderBottom: i === project.apiArchitecture.length - 1 ? 'none' : '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '0.84rem', flexWrap: 'wrap' }}>
                      <span style={{
                        padding: '0.25rem 0.6rem',
                        borderRadius: '4px',
                        fontWeight: 'bold',
                        fontSize: '0.78rem',
                        backgroundColor: ep.method === 'POST' ? 'rgba(16, 185, 129, 0.2)' : ep.method === 'GET' ? 'rgba(0, 161, 224, 0.2)' : 'rgba(245, 158, 11, 0.2)',
                        color: ep.method === 'POST' ? '#10B981' : ep.method === 'GET' ? '#00A1E0' : '#F59E0B'
                      }}>
                        {ep.method}
                      </span>
                      <span style={{ color: 'var(--text-main)', fontWeight: 600, minWidth: '180px' }}>{ep.path}</span>
                      <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-sans)', flexGrow: 1 }}>{ep.desc}</span>
                      <span style={{ color: 'var(--accent-secondary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{ep.auth}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Redis / Docker / AWS (Apex Pulse only) */}
          {activeTab === 'cloud' && isApexPulse && (
            <div>
              <CloudInfrastructureCard
                redisData={project.redisArchitecture}
                dockerData={project.dockerArchitecture}
                awsData={project.awsArchitecture}
              />
            </div>
          )}

          {/* Tab 5: Engineering Challenges */}
          {activeTab === 'challenges' && (
            <div>
              <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Activity size={18} style={{ color: 'var(--accent-primary)' }} />
                {isApexPulse ? '9' : '7'}. Key Engineering Challenges & Technical Solutions
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                {project.engineeringChallenges.map((ec, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-card)', padding: '1.4rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                    <div style={{ color: 'var(--accent-primary)', fontSize: '1.02rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                      Challenge #{idx + 1}: {ec.challenge}
                    </div>
                    <div style={{ color: '#F59E0B', fontSize: '0.88rem', marginBottom: '0.6rem', lineHeight: 1.5 }}>
                      <strong>Problem:</strong> {ec.problem}
                    </div>
                    <div style={{ color: 'var(--text-main)', fontSize: '0.88rem', lineHeight: 1.6, backgroundColor: 'rgba(16, 185, 129, 0.08)', padding: '0.8rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                      <strong style={{ color: '#10B981' }}>Engineering Solution:</strong> {ec.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 6: Design Thinking & Roadmap */}
          {activeTab === 'roadmap' && (
            <div>
              {project.designThinking && (
                <div style={{ marginBottom: '2.5rem' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Lightbulb size={18} style={{ color: '#F59E0B' }} /> 8. Design Thinking Process
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    {project.designThinking.map((dt, i) => (
                      <div key={i} style={{ background: 'var(--bg-card)', padding: '1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                        <span style={{ color: '#F59E0B', fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '0.84rem', display: 'block', marginBottom: '0.4rem' }}>
                          Stage {i + 1}: {dt.stage}
                        </span>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                          {dt.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Rocket size={18} style={{ color: 'var(--accent-secondary)' }} />
                  {isApexPulse ? '10' : '9'}. Future Improvements & Roadmap
                </h4>

                <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.futureImprovements.map((imp, idx) => (
                      <li key={idx} style={{ color: 'var(--text-main)', fontSize: '0.9rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <ArrowRight size={16} style={{ color: 'var(--accent-primary)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer Actions */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', flexWrap: 'wrap' }}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={16} /> View Code on GitHub
            </a>

            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={16} /> Open Live Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

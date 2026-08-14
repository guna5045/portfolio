import React from 'react';
import { ArrowRight, Server, Database, Layers, ShieldCheck, Activity, Cpu, Cloud, Globe } from 'lucide-react';

export const ArchitectureDiagramCard = ({ flow, title = "System Architecture & Data Flow" }) => {
  if (!flow || flow.length === 0) return null;

  return (
    <div style={{
      backgroundColor: '#090D16',
      border: '1px solid var(--border-color-hover)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem 1.5rem',
      marginBottom: '2.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
        <Cpu size={20} style={{ color: 'var(--accent-primary)' }} />
        <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>
          {title}
        </h4>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.25rem',
        alignItems: 'stretch'
      }}>
        {flow.map((node, index) => (
          <div
            key={node.step}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              transition: 'var(--transition-normal)'
            }}
          >
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.8rem'
              }}>
                <span style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary-transparent)',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0, 161, 224, 0.3)'
                }}>
                  {node.step}
                </span>

                {index < flow.length - 1 && (
                  <ArrowRight size={16} style={{ color: 'var(--accent-secondary)', opacity: 0.7 }} />
                )}
              </div>

              <h5 style={{ color: 'var(--text-main)', fontSize: '0.98rem', marginBottom: '0.4rem', fontWeight: 600 }}>
                {node.name}
              </h5>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>
                {node.desc}
              </p>
            </div>

            <div style={{
              marginTop: '1rem',
              height: '3px',
              width: '100%',
              backgroundColor: index % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)',
              borderRadius: '2px',
              opacity: 0.6
            }} />
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Cloud, Box, Server, Zap } from 'lucide-react';

export const CloudInfrastructureCard = ({ redisData, dockerData, awsData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginBottom: '2.5rem' }}>
      {/* Redis Architecture */}
      {redisData && (
        <div style={{
          backgroundColor: '#090D16',
          border: '1px solid var(--border-color-hover)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Zap size={20} style={{ color: '#F59E0B' }} />
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>
              Redis In-Memory Data Pipeline & Caching Architecture
            </h4>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {redisData.map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: '#F59E0B',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '0.4rem'
                }}>
                  {item.role}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Docker Architecture */}
      {dockerData && (
        <div style={{
          backgroundColor: '#090D16',
          border: '1px solid var(--border-color-hover)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Box size={20} style={{ color: 'var(--accent-primary)' }} />
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>
              Docker Container Isolation & Microservice Topology
            </h4>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {dockerData.map((cont, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 700 }}>
                    {cont.container}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                    {cont.image}
                  </span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {cont.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AWS Cloud Architecture */}
      {awsData && (
        <div style={{
          backgroundColor: '#090D16',
          border: '1px solid var(--border-color-hover)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem 1.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Cloud size={20} style={{ color: 'var(--accent-secondary)' }} />
            <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>
              AWS Enterprise Cloud Deployment Architecture
            </h4>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {awsData.map((aws, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-md)',
                padding: '1.2rem'
              }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: 'var(--accent-secondary)',
                  fontWeight: 700,
                  display: 'block',
                  marginBottom: '0.4rem'
                }}>
                  {aws.component}
                </span>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                  {aws.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

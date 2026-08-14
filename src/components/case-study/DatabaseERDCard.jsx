import React from 'react';
import { Database, Key, Table } from 'lucide-react';

export const DatabaseERDCard = ({ schema }) => {
  if (!schema || !schema.tables) return null;

  return (
    <div style={{
      backgroundColor: '#090D16',
      border: '1px solid var(--border-color-hover)',
      borderRadius: 'var(--radius-lg)',
      padding: '2rem 1.5rem',
      marginBottom: '2.5rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.5rem' }}>
        <Database size={20} style={{ color: 'var(--accent-primary)' }} />
        <h4 style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700 }}>
          Relational Database Design & Entity-Relationship Schema (PostgreSQL)
        </h4>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.25rem'
      }}>
        {schema.tables.map((table) => (
          <div
            key={table.name}
            style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden'
            }}
          >
            <div style={{
              backgroundColor: 'rgba(0, 161, 224, 0.12)',
              borderBottom: '1px solid var(--border-color)',
              padding: '0.75rem 1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.95rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Table size={16} style={{ color: 'var(--accent-primary)' }} />
                {table.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                TABLE
              </span>
            </div>

            <div style={{ padding: '0.75rem 1rem' }}>
              {table.columns.map((col) => (
                <div
                  key={col.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.35rem 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    fontSize: '0.83rem'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    {col.type.includes('PK') ? (
                      <Key size={13} style={{ color: '#F59E0B' }} />
                    ) : col.type.includes('FK') ? (
                      <Key size={13} style={{ color: 'var(--accent-secondary)' }} />
                    ) : (
                      <span style={{ width: 13 }} />
                    )}
                    <span style={{ color: 'var(--text-main)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                      {col.name}
                    </span>
                  </div>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.76rem' }}>
                    {col.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

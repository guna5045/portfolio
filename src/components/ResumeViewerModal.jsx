import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2, Download, ShieldCheck, FileText } from 'lucide-react';

export const ResumeViewerModal = ({ resumeUrl, onClose }) => {
  const [zoom, setZoom] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 25, 75));
  const handleReset = () => setZoom(100);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{
          width: isFullscreen ? '98vw' : '90%',
          maxWidth: isFullscreen ? '100vw' : '1000px',
          height: isFullscreen ? '96vh' : '88vh',
          maxHeight: '96vh',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: '1rem',
          marginBottom: '1rem',
          borderBottom: '1px solid var(--border-color)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <FileText size={22} style={{ color: 'var(--accent-primary)' }} />
            <div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>Gunashekhar_Resume.pdf</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Salesforce AMTS Candidate Document Viewer</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Zoom Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.2rem 0.5rem'
            }}>
              <button
                onClick={handleZoomOut}
                className="btn btn-secondary"
                style={{ padding: '0.3rem 0.6rem', border: 'none', background: 'none' }}
                title="Zoom Out"
              >
                <ZoomOut size={16} />
              </button>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-main)', padding: '0 0.5rem' }}>
                {zoom}%
              </span>
              <button
                onClick={handleZoomIn}
                className="btn btn-secondary"
                style={{ padding: '0.3rem 0.6rem', border: 'none', background: 'none' }}
                title="Zoom In"
              >
                <ZoomIn size={16} />
              </button>
              <button
                onClick={handleReset}
                className="btn btn-secondary"
                style={{ padding: '0.3rem 0.6rem', border: 'none', background: 'none', marginLeft: '0.2rem' }}
                title="Reset Zoom"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button
              onClick={() => setIsFullscreen(!isFullscreen)}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 0.8rem', fontSize: '0.85rem' }}
            >
              <Maximize2 size={16} />
              {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
            </button>

            {/* Direct Download */}
            <a
              href={resumeUrl}
              download="Gunashekhar_Resume.pdf"
              className="btn btn-primary"
              style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={16} /> Download
            </a>

            <button
              className="modal-close-btn"
              style={{ position: 'static' }}
              onClick={onClose}
              aria-label="Close Resume Viewer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Embedded Document Frame */}
        <div style={{
          flexGrow: 1,
          backgroundColor: '#070A11',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-color)',
          overflow: 'auto',
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem'
        }}>
          <iframe
            src={`${resumeUrl}#toolbar=0&navpanes=0`}
            title="Gunashekhar Ammajigari Resume Document"
            style={{
              width: `${zoom}%`,
              height: '100%',
              minHeight: '600px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#FFFFFF',
              transition: 'var(--transition-fast)'
            }}
          />
        </div>
      </div>
    </div>
  );
};

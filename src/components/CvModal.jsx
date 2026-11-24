import React from 'react';
import { X, Download, FileText, CheckCircle, GraduationCap, Building2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const CvModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a printable CV or prompt print/download
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close CV modal">
          <X size={20} />
        </button>

        <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <FileText size={22} color="var(--primary)" />
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-heading)' }}>Curriculum Vitae</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {personalInfo.name} · {personalInfo.title}
          </p>
        </div>

        {/* CV Summary Card */}
        <div style={{ backgroundColor: '#F8FAFC', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '18px' }}>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Education</span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-heading)' }}>{personalInfo.university}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>{personalInfo.faculty} (2023 - 2026)</p>
            </div>
            <div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Specialization</span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-heading)' }}>Full-Stack Engineering & QA</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)' }}>React, Spring Boot, MySQL, Postman</p>
            </div>
          </div>

          <div style={{ marginBottom: '16px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Profile Summary</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.6', marginTop: '4px' }}>
              {personalInfo.bio}
            </p>
          </div>

          <div>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Contact Information</span>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-heading)', marginTop: '4px' }}>
              Email: <strong>{personalInfo.email}</strong> · Location: <strong>{personalInfo.location}</strong>
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
          <a
            href={`mailto:${personalInfo.email}?subject=CV%20Request%20-%20${encodeURIComponent(personalInfo.name)}`}
            className="btn btn-secondary"
          >
            Request Official PDF via Email
          </a>
          <button className="btn btn-primary" onClick={handleDownload}>
            <Download size={16} />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvModal;

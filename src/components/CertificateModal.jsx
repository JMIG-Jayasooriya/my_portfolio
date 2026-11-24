import React from 'react';
import { X, Award, ExternalLink } from 'lucide-react';

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
          <div className="cert-icon-box">
            <Award size={24} />
          </div>
          <div>
            <span className="badge" style={{ marginBottom: '4px' }}>Verified Credential</span>
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-heading)' }}>{cert.title}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>Issued by: {cert.issuer} ({cert.date})</p>
          </div>
        </div>

        {/* Certificate Visual Image */}
        {cert.image && (
          <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden', marginBottom: '20px', border: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card-subtle)', boxShadow: 'var(--shadow-md)' }}>
            <img
              src={cert.image}
              alt={cert.title}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        )}

        {/* Credential ID Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', padding: '14px 18px', backgroundColor: 'var(--bg-card-subtle)', borderRadius: '10px', border: '1px solid var(--border-color)', marginBottom: '20px' }}>
          <div>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px' }}>COURSERA CREDENTIAL ID</p>
            <p style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--primary-light)', fontFamily: 'monospace' }}>{cert.idCode}</p>
          </div>
          <span className="badge" style={{ fontSize: '0.75rem' }}>
            Authenticity Verified
          </span>
        </div>

        {/* Skills Validated */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
            Competencies & Skills Validated:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {cert.skills.map((skill) => (
              <span key={skill} className="tag-chip" style={{ backgroundColor: 'var(--primary-soft)', borderColor: 'var(--primary-border)', color: 'var(--primary-light)', fontWeight: 600 }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            title="Open official certificate page on Coursera"
          >
            <ExternalLink size={16} />
            <span>Open Certificate on Coursera</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

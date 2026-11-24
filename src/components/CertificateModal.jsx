import React from 'react';
import { X, Award, ExternalLink, CheckCircle } from 'lucide-react';

const CertificateModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
          <div className="cert-icon-box">
            <Award size={24} />
          </div>
          <div>
            <span className="badge" style={{ marginBottom: '4px' }}>Verified Credential</span>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-heading)' }}>{cert.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Issued by: {cert.issuer} ({cert.date})</p>
          </div>
        </div>

        <div style={{ padding: '16px', backgroundColor: '#F8FAFC', borderRadius: '10px', border: '1px solid var(--border-color)', marginBottom: '24px' }}>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>CREDENTIAL ID</p>
          <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', fontFamily: 'monospace' }}>{cert.idCode}</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
            Competencies & Skills Validated:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {cert.skills.map((skill) => (
              <span key={skill} className="tag-chip" style={{ backgroundColor: 'var(--primary-soft)', borderColor: 'var(--primary-border)', color: 'var(--primary)', fontWeight: 600 }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <ExternalLink size={16} />
            <span>Verify on Issuer Platform</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;

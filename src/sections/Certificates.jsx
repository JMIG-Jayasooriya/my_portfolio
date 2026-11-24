import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import CertificateModal from '../components/CertificateModal';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionTitle
          subtitle="CREDENTIALS & COURSES"
          title="Certifications"
          description="Verified certifications covering full-stack development, Java, software testing, and database architecture."
        />

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-header">
                <div className="cert-icon-box">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>

              <div className="cert-meta">
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </span>
                <span className="badge" style={{ fontSize: '0.72rem' }}>
                  Verified
                </span>
              </div>

              <div className="cert-skills">
                {cert.skills.map((skill) => (
                  <span key={skill} className="tag-chip">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="cert-footer">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  <ExternalLink size={14} />
                  <span>View Certificate Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
};

export default Certificates;

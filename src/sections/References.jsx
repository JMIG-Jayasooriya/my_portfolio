import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { references } from '../data/portfolioData';
import { UserCheck, Mail, Phone, Building, Briefcase, CheckCircle2 } from 'lucide-react';

const References = () => {
  return (
    <section id="references" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="ACADEMIC & PROFESSIONAL RECOMMENDATIONS"
          title="References"
          description="Verified academic and industry references available for professional background inquiries."
        />

        <div className="references-grid">
          {references.map((ref) => (
            <div key={ref.id} className="reference-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <div className="ref-avatar-box">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '4px' }}>
                    {ref.name}
                  </h3>
                  <span className="badge" style={{ fontSize: '0.74rem', gap: '4px' }}>
                    <CheckCircle2 size={12} />
                    <span>{ref.company ? 'Industry Referee' : 'Academic Referee'}</span>
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '22px', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                  <Briefcase size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.94rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    {ref.role}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Building size={16} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-body)' }}>
                    {ref.department ? `${ref.department}, ${ref.institution}` : ref.company}
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a
                  href={`mailto:${ref.email}`}
                  className="ref-contact-link"
                  title={`Email ${ref.name}`}
                >
                  <Mail size={15} color="var(--primary-light)" />
                  <span>{ref.email}</span>
                </a>
                <a
                  href={`tel:${ref.phone}`}
                  className="ref-contact-link"
                  title={`Call ${ref.name}`}
                >
                  <Phone size={15} color="var(--primary-light)" />
                  <span>{ref.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default References;

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { references } from '../data/portfolioData';
import { UserCheck, Mail, Phone, Building, Briefcase } from 'lucide-react';

const References = () => {
  return (
    <section id="references" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="ACADEMIC & PROFESSIONAL RECOMMENDATIONS"
          title="References"
          description="Verified academic and industry references available for professional background inquiries."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', maxWidth: '900px', margin: '0 auto' }}>
          {references.map((ref) => (
            <div key={ref.id} className="card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--primary-soft)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-heading)' }}>{ref.name}</h3>
                  <span className="badge" style={{ fontSize: '0.74rem', marginTop: '4px' }}>
                    {ref.company ? 'Industry Referee' : 'Academic Referee'}
                  </span>
                </div>
              </div>

              <div style={{ marginBottom: '18px', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                  <Briefcase size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-heading)' }}>
                    {ref.role}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Building size={16} color="var(--text-muted)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-body)' }}>
                    {ref.department ? `${ref.department}, ${ref.institution}` : ref.company}
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={`mailto:${ref.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--primary)', fontWeight: 600 }}
                >
                  <Mail size={15} />
                  <span>{ref.email}</span>
                </a>
                <a
                  href={`tel:${ref.phone}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-muted)' }}
                >
                  <Phone size={15} />
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

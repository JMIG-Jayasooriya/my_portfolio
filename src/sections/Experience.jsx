import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../data/portfolioData';
import { Briefcase, Building2, Calendar, CheckCircle, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          subtitle="PRACTICAL EXPOSURE"
          title="Experience & Activities"
          description="Professional training, university engagements, and collaborative activities."
        />

        <div className="timeline">
          {experience.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <span className="badge" style={{ marginBottom: '6px' }}>{item.type}</span>
                    <h3 className="timeline-title">{item.role}</h3>
                  </div>
                  <span className="timeline-period">{item.period}</span>
                </div>

                <div className="timeline-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-heading)' }}>
                    <Building2 size={16} color="var(--primary)" />
                    {item.organization}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={15} color="var(--text-muted)" />
                    {item.location}
                  </span>
                </div>

                <p className="timeline-body">{item.description}</p>

                <div className="timeline-list">
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} className="timeline-list-item">
                      <CheckCircle size={16} className="timeline-list-item-icon" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

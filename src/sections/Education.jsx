import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, Check } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="ACADEMIC BACKGROUND"
          title="Education"
          description="My university degree programme and foundational academic education."
        />

        <div className="timeline">
          {education.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <span className="badge" style={{ marginBottom: '6px' }}>{edu.status}</span>
                    <h3 className="timeline-title">{edu.degree}</h3>
                  </div>
                  <span className="timeline-period">{edu.period}</span>
                </div>

                <div className="timeline-subtitle" style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: 'var(--text-heading)' }}>
                    <GraduationCap size={18} color="var(--primary)" />
                    {edu.institution}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {edu.faculty}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.88rem' }}>
                    <MapPin size={15} color="var(--text-muted)" />
                    {edu.location}
                  </span>
                </div>

                <p className="timeline-body">{edu.description}</p>

                {edu.keyModules && (
                  <div>
                    <h5 style={{ fontSize: '0.9rem', color: 'var(--text-heading)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <BookOpen size={16} color="var(--primary)" />
                      <span>Key Academic Modules & Coursework:</span>
                    </h5>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {edu.keyModules.map((module) => (
                        <span key={module} className="tag-chip">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { education } from '../data/portfolioData';
import { GraduationCap, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="ACADEMIC BACKGROUND"
          title="Education"
          description="My university degree programme and foundational academic education."
        />

        {/* 2-Column Responsive Education Grid */}
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              {/* Top Details */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span className="badge">
                    {edu.status}
                  </span>
                  <span className="timeline-period" style={{ fontSize: '0.8rem' }}>
                    {edu.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '12px', lineHeight: 1.35 }}>
                  {edu.degree}
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: 'var(--text-heading)', fontSize: '0.92rem' }}>
                    <GraduationCap size={18} color="var(--primary-light)" style={{ flexShrink: 0 }} />
                    <span>{edu.institution}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', paddingLeft: '26px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                    {edu.faculty && <span>{edu.faculty}</span>}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={13} color="var(--text-muted)" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {edu.description}
                </p>
              </div>

              {/* Bottom Coursework Pills */}
              {edu.keyModules && (
                <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)', marginTop: 'auto' }}>
                  <h5 style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BookOpen size={14} color="var(--primary-light)" />
                    <span>Key Subjects & Coursework:</span>
                  </h5>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {edu.keyModules.map((module) => (
                      <span key={module} className="tag-chip" style={{ fontSize: '0.78rem' }}>
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

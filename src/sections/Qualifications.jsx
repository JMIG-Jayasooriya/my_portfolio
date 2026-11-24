import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/SectionTitle';
import CertificateModal from '../components/CertificateModal';
import { education, experience, certifications, achievements } from '../data/portfolioData';
import {
  GraduationCap,
  Briefcase,
  Award,
  Trophy,
  MapPin,
  BookOpen,
  Building2,
  CheckCircle,
  Calendar,
  ExternalLink,
  Users,
  Compass
} from 'lucide-react';

const iconByCategory = {
  'Leadership & Community': Users,
  'Extracurricular & Athletics': Trophy,
  'Extracurricular & Outdoor': Compass
};

const tabs = [
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'activities', label: 'Activities', icon: Trophy },
];

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['education', 'experience', 'certifications', 'activities'].includes(hash)) {
        setActiveTab(hash);
      } else if (hash === 'achievements') {
        setActiveTab('activities');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <section id="qualifications" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="BACKGROUND & CREDENTIALS"
          title="Experience & Qualifications"
          description="Explore my academic foundations, practical training, verified course certifications, and leadership activities."
        />

        {/* Interactive Tab Navigation (Pill Selector) */}
        <div className="qualifications-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`qual-tab-btn ${isActive ? 'active' : ''}`}
                aria-selected={isActive}
                role="tab"
              >
                <Icon size={17} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: Education (2-Column Grid) */}
        {activeTab === 'education' && (
          <div className="education-grid">
            {education.map((edu) => (
              <div key={edu.id} className="education-card">
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
        )}

        {/* Tab 2: Experience */}
        {activeTab === 'experience' && (
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            {experience.map((item) => (
              <div key={item.id} className="experience-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span className="badge">
                    {item.type}
                  </span>
                  <span className="timeline-period" style={{ fontSize: '0.82rem' }}>
                    {item.period}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '8px' }}>
                  {item.role}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '16px', fontSize: '0.92rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: 'var(--text-heading)' }}>
                    <Building2 size={16} color="var(--primary-light)" />
                    {item.organization}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                    <MapPin size={15} color="var(--text-muted)" />
                    {item.location}
                  </span>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '20px' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                  <h5 style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    Key Professional Responsibilities:
                  </h5>
                  {item.responsibilities.map((resp, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: 'var(--text-body)' }}>
                      <CheckCircle size={16} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Certifications */}
        {activeTab === 'certifications' && (
          <div>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <div key={cert.id} className="cert-card" style={{ padding: 0, overflow: 'hidden' }}>
                  {cert.image && (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      title="Click to view full certificate"
                      style={{ width: '100%', height: '185px', overflow: 'hidden', position: 'relative', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-card-subtle)', cursor: 'pointer' }}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="cert-preview-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'transform 0.4s ease' }}
                      />
                      <span className="badge" style={{ position: 'absolute', top: '12px', right: '12px', fontSize: '0.72rem', backgroundColor: 'rgba(11, 15, 25, 0.88)', backdropFilter: 'blur(8px)', borderColor: 'rgba(99, 102, 241, 0.4)' }}>
                        Verified
                      </span>
                    </div>
                  )}

                  <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <div className="cert-header" style={{ marginBottom: '12px' }}>
                      <div className="cert-icon-box" style={{ width: '40px', height: '40px', borderRadius: '10px' }}>
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="cert-title" style={{ fontSize: '1.05rem' }}>{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                      </div>
                    </div>

                    <div className="cert-skills" style={{ marginBottom: '18px' }}>
                      {cert.skills.map((skill) => (
                        <span key={skill} className="tag-chip">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="cert-footer" style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--border-light)' }}>
                      <button
                        onClick={() => setSelectedCert(cert)}
                        className="btn btn-secondary btn-sm"
                        style={{ flex: 1 }}
                      >
                        <Award size={14} />
                        <span>View Certificate</span>
                      </button>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1 }}
                        title="View official certificate on Coursera"
                      >
                        <ExternalLink size={14} />
                        <span>Coursera</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <CertificateModal
              cert={selectedCert}
              onClose={() => setSelectedCert(null)}
            />
          </div>
        )}

        {/* Tab 4: Activities (Leadership & Extracurriculars) */}
        {activeTab === 'activities' && (
          <div className="achievements-grid">
            {achievements.map((item) => {
              const Icon = iconByCategory[item.category] || Trophy;
              return (
                <div key={item.id} className="achievement-card">
                  <div className="achievement-icon">
                    <Icon size={22} />
                  </div>
                  <div className="achievement-badge">{item.category}</div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    {item.date}
                  </span>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Qualifications;

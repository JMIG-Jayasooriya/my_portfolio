import React from 'react';
import { X, Download, FileText, CheckCircle, GraduationCap, Building2, Briefcase, Award, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, education, experience, certifications, achievements, references, projects } from '../data/portfolioData';

const CvModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '850px' }}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close CV modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src={personalInfo.profileImage || "/images/profile.jpg"}
              alt={personalInfo.name}
              style={{ width: '58px', height: '58px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '2px solid var(--primary-border)', flexShrink: 0 }}
            />
            <div>
              <span className="badge" style={{ marginBottom: '4px' }}>Curriculum Vitae</span>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-heading)' }}>{personalInfo.name}</h2>
              <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>{personalInfo.title}</p>
            </div>
          </div>
          <button className="btn btn-primary btn-sm" onClick={handleDownload}>
            <Download size={15} />
            <span>Print / Save PDF</span>
          </button>
        </div>

        {/* CV Document Container */}
        <div style={{ maxHeight: '68vh', overflowY: 'auto', paddingRight: '8px' }}>
          {/* Contact Details Bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '12px 16px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-color)', marginBottom: '20px', fontSize: '0.88rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Phone size={14} color="var(--primary)" /> {personalInfo.phone}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mail size={14} color="var(--primary)" /> {personalInfo.email}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} color="var(--primary)" /> {personalInfo.location}</span>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '10px' }}>
              Professional Summary
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: '1.65' }}>
              {personalInfo.bio}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '10px' }}>
              Education
            </h4>
            {education.map((edu) => (
              <div key={edu.id} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>{edu.degree}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{edu.period}</span>
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{edu.institution}</div>
              </div>
            ))}
          </div>

          {/* Core Projects */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '10px' }}>
              Key Projects
            </h4>
            {projects.slice(0, 3).map((proj) => (
              <div key={proj.id} style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>{proj.title}</strong>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{proj.badge}</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600, margin: '2px 0 6px 0' }}>
                  Technologies: {proj.technologies.join(', ')}
                </div>
                <ul style={{ paddingLeft: '18px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-body)' }}>
                  {proj.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} style={{ marginBottom: '3px' }}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '10px' }}>
              Experience
            </h4>
            {experience.map((exp) => (
              <div key={exp.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--text-heading)' }}>{exp.role} – {exp.organization}</strong>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>{exp.period}</span>
                </div>
                <ul style={{ paddingLeft: '18px', listStyleType: 'disc', fontSize: '0.88rem', color: 'var(--text-body)', marginTop: '6px' }}>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} style={{ marginBottom: '3px' }}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '10px' }}>
              Certifications
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {certifications.map((c) => (
                <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                  <div>
                    <strong>{c.title}</strong> – <span style={{ color: 'var(--text-muted)' }}>{c.issuer}</span>
                  </div>
                  <span className="tag-chip" style={{ fontSize: '0.75rem' }}>Verified</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Extracurricular Activities */}
          <div style={{ marginBottom: '22px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '10px' }}>
              Leadership & Extracurricular Activities
            </h4>
            <ul style={{ paddingLeft: '18px', listStyleType: 'disc', fontSize: '0.9rem', color: 'var(--text-body)' }}>
              {achievements.map((ach) => (
                <li key={ach.id} style={{ marginBottom: '4px' }}>
                  <strong>{ach.title}</strong>
                </li>
              ))}
            </ul>
          </div>

          {/* References */}
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '2px solid var(--primary)', paddingBottom: '4px', marginBottom: '12px' }}>
              References
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
              {references.map((ref) => (
                <div key={ref.id} style={{ padding: '12px 14px', backgroundColor: '#F8FAFC', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading)', fontSize: '0.92rem' }}>{ref.name}</div>
                  <div style={{ color: 'var(--primary)', fontWeight: 600 }}>{ref.role}</div>
                  <div style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>
                    {ref.department ? `${ref.department}, ${ref.institution}` : ref.company}
                  </div>
                  <div style={{ color: 'var(--text-heading)' }}>Mobile: {ref.phone}</div>
                  <div style={{ color: 'var(--text-heading)' }}>Email: {ref.email}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
          <button className="btn btn-outline" onClick={onClose}>
            Close
          </button>
          <a
            href={`mailto:${personalInfo.email}?subject=Interview%20Inquiry%20-%20${encodeURIComponent(personalInfo.name)}`}
            className="btn btn-secondary"
          >
            Email Isumi Directly
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

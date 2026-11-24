import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ marginBottom: '16px' }}>
          <span className="badge" style={{ marginBottom: '8px' }}>
            {project.category}
          </span>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', marginTop: '4px' }}>
            {project.title}
          </h2>
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: '1.7', marginBottom: '24px' }}>
          {project.fullDescription || project.shortDescription}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-heading)', marginBottom: '12px' }}>
              Key Features & Architectural Highlights:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.highlights.map((highlight, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-body)' }}>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginBottom: '28px' }}>
          <h4 style={{ fontSize: '0.95rem', color: 'var(--text-heading)', marginBottom: '10px' }}>
            Technologies & Tools Applied:
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {project.technologies.map((tech) => (
              <span key={tech} className="tag-chip" style={{ backgroundColor: 'var(--primary-soft)', borderColor: 'var(--primary-border)', color: 'var(--primary)', fontWeight: 600 }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={18} />
              <span>View Source on GitHub</span>
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={18} />
              <span>Live Demonstration</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

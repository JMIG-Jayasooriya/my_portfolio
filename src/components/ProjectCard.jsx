import React from 'react';
import { ExternalLink, Github, Layers, Eye } from 'lucide-react';

const ProjectCard = ({ project, onSelectProject }) => {
  return (
    <div className="project-card">
      <div className="project-banner">
        {project.image ? (
          <img src={project.image} alt={project.title} className="project-banner-img" />
        ) : (
          <>
            <div className="project-banner-pattern" />
            <div className="project-banner-content">
              <div className="project-banner-icon">
                <Layers size={28} />
              </div>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em', opacity: 0.9 }}>
                {project.category}
              </span>
            </div>
          </>
        )}
        <span className="project-badge-tag">{project.badge || project.category}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.shortDescription}</p>

        <div className="project-tech-stack">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag-chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <button
            onClick={() => onSelectProject(project)}
            className="btn btn-secondary btn-sm"
            style={{ flex: 1 }}
          >
            <Eye size={15} />
            <span>View Details</span>
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              title="View GitHub Repository"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

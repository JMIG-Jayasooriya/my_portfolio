import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, GraduationCap, Award, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Home = ({ onOpenCvModal }) => {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Hero Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              <span>HELLO, I'M ISUMI</span>
            </div>

            <h1 className="hero-title">
              Building my journey in <span className="gradient-text">technology.</span>
            </h1>

            <p className="hero-subtitle">
              {personalInfo.title}
            </p>

            <p className="hero-description">
              {personalInfo.bio}
            </p>

            <div className="hero-actions">
              <button
                onClick={() => handleScrollTo('projects')}
                className="btn btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={onOpenCvModal}
                className="btn btn-secondary"
              >
                <Download size={17} />
                <span>View / Download CV</span>
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="btn btn-outline"
              >
                <span>Contact Me</span>
              </button>
            </div>

            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                title="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hero-social-link"
                title="Send an Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="hero-visual">
            <div className="hero-card-frame">
              <div className="hero-image-box">
                <div className="hero-avatar-circle">
                  <span className="hero-avatar-initials">IG</span>
                </div>
                <h3 className="hero-visual-name">{personalInfo.name}</h3>
                <p className="hero-visual-role">{personalInfo.tagline}</p>
                <span style={{ fontSize: '0.8rem', color: '#93C5FD', marginTop: '4px' }}>
                  {personalInfo.university}
                </span>
                <span style={{ fontSize: '0.74rem', color: '#CBD5E1', marginTop: '2px' }}>
                  Expected Graduation: {personalInfo.expectedGraduation}
                </span>
              </div>

              {/* Floating Badge 1 - Academic Degree */}
              <div className="floating-pill floating-pill-1">
                <div className="floating-pill-icon">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Degree</div>
                  <div>BSc (Hons) Info Systems</div>
                </div>
              </div>

              {/* Floating Badge 2 - University Institution */}
              <div className="floating-pill floating-pill-2">
                <div className="floating-pill-icon">
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>University</div>
                  <div>Sabaragamuwa Univ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="stats-ribbon">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

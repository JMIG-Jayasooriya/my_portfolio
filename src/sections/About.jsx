import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Code2, Database, Sparkles, MapPin, Building2, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="GET TO KNOW ME"
          title="About Me"
          description="A brief look into my academic background, technical focus, and interests."
        />

        <div className="about-grid">
          {/* Left: Concise Bio */}
          <div className="about-text">
            <p style={{ fontSize: '1.08rem', lineHeight: '1.7', color: 'var(--text-heading)', marginBottom: '16px' }}>
              I am an <strong>Information Systems undergraduate</strong> reading for my <strong>{personalInfo.degree}</strong> at <strong>{personalInfo.university}</strong>.
            </p>
            <p style={{ fontSize: '0.96rem', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: '24px' }}>
              Passionate about software engineering, database design, and creating practical web solutions. I enjoy learning modern technologies, writing clean code, and solving real-world problems through hands-on projects.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.88rem', padding: '6px 14px', backgroundColor: 'var(--bg-card-subtle)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <MapPin size={16} color="var(--primary-light)" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.88rem', padding: '6px 14px', backgroundColor: 'var(--bg-card-subtle)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <Building2 size={16} color="var(--primary-light)" />
                <span>Sabaragamuwa University</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.88rem', padding: '6px 14px', backgroundColor: 'var(--bg-card-subtle)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                <Calendar size={16} color="var(--primary-light)" />
                <span>Class of {personalInfo.expectedGraduation}</span>
              </div>
            </div>
          </div>

          {/* Right: 4 Concise Essential Pillars */}
          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <GraduationCap size={20} />
              </div>
              <h4 className="about-feature-title">Information Systems</h4>
              <p className="about-feature-desc">
                Foundations in systems analysis, software engineering, and enterprise architecture.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Code2 size={20} />
              </div>
              <h4 className="about-feature-title">Web Development</h4>
              <p className="about-feature-desc">
                Hands-on experience building full-stack applications with React, Java, and modern tools.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Database size={20} />
              </div>
              <h4 className="about-feature-title">Database Design</h4>
              <p className="about-feature-desc">
                Designing structured relational schemas and working with MySQL and PostgreSQL.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Sparkles size={20} />
              </div>
              <h4 className="about-feature-title">Problem Solving</h4>
              <p className="about-feature-desc">
                Strong attention to detail, adaptability, and active teamwork on collaborative projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
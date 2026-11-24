import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Code, CheckCircle, Compass, Sparkles, MapPin, Building, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="PROFESSIONAL SUMMARY & BACKGROUND"
          title="About Me"
          description="Information Systems undergraduate passionate about technology, digital solutions, and continuous learning."
        />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an Information Systems undergraduate reading for my <strong>{personalInfo.degree}</strong> at <strong>{personalInfo.university}</strong> (Expected Graduation – {personalInfo.expectedGraduation}). I completed my secondary education in the Physical Science Stream at <strong>{personalInfo.school}</strong>.
            </p>
            <p>
              My journey in technology stems from a passion for understanding how modern digital systems operate and how technology can be applied to solve real-world problems. Through academic and personal projects, I enjoy learning new tools, designing structured databases, and building clean, responsive interfaces.
            </p>
            <p>
              I possess strong analytical thinking, problem-solving skills, and meticulous attention to detail, complemented by banking operations exposure at <strong>People's Bank, Kekirawa</strong>. My goal is to collaborate with multidisciplinary teams, continuously grow professionally, and contribute to meaningful digital projects.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.92rem' }}>
                <MapPin size={18} color="var(--primary)" />
                <span>{personalInfo.location}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.92rem' }}>
                <Building size={18} color="var(--primary)" />
                <span>{personalInfo.university}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-heading)', fontWeight: 600, fontSize: '0.92rem' }}>
                <Sparkles size={18} color="var(--primary)" />
                <span>Class of {personalInfo.expectedGraduation}</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <GraduationCap size={22} />
              </div>
              <h4 className="about-feature-title">Information Systems</h4>
              <p className="about-feature-desc">
                Honours degree foundation covering database architecture, systems analysis, and enterprise software principles.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Code size={22} />
              </div>
              <h4 className="about-feature-title">Practical Projects</h4>
              <p className="about-feature-desc">
                Hands-on experience building web applications, designing relational schemas, and deploying cloud services.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <CheckCircle size={22} />
              </div>
              <h4 className="about-feature-title">Attention to Detail</h4>
              <p className="about-feature-desc">
                Meticulous focus on accuracy, system reliability, and delivering user-friendly, high-quality digital experiences.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <ShieldCheck size={22} />
              </div>
              <h4 className="about-feature-title">Problem Solving & Teamwork</h4>
              <p className="about-feature-desc">
                Analytical mindset, adaptability, and effective communication gained through multi-member team projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

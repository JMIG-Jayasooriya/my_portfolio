import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Code, CheckCircle, Compass, Sparkles, MapPin, Building } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="GET TO KNOW ME"
          title="About Me"
          description="A short introduction, education, learning journey, and professional interests."
        />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an undergraduate student reading for my degree in Computing at <strong>{personalInfo.university}</strong>, within the <strong>{personalInfo.faculty}</strong>. Prior to university, I completed my secondary education at <strong>{personalInfo.school}</strong>.
            </p>
            <p>
              My journey in technology stems from a passion for understanding how robust digital systems operate behind the scenes. Whether designing intuitive user interfaces with <strong>React</strong>, architecting structured backends with <strong>Spring Boot</strong>, or rigorously validating APIs and system integrity via <strong>Postman and manual testing</strong>, I strive to write clear, maintainable, and dependable code.
            </p>
            <p>
              I enjoy turning theoretical software principles into practical applications. My goal is to collaborate with engineering teams, gain real-world industry experience through internships, and contribute to products that make a genuine positive impact.
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
                <span>{personalInfo.status}</span>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="about-feature-card">
              <div className="about-feature-icon">
                <GraduationCap size={22} />
              </div>
              <h4 className="about-feature-title">Academic Foundation</h4>
              <p className="about-feature-desc">
                Rigorous grounding in algorithms, databases, data structures, and software architecture at Sabaragamuwa University.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Code size={22} />
              </div>
              <h4 className="about-feature-title">Full-Stack Development</h4>
              <p className="about-feature-desc">
                Building responsive SPAs with React, paired with scalable RESTful services developed in Java and Spring Boot.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <CheckCircle size={22} />
              </div>
              <h4 className="about-feature-title">Quality Assurance</h4>
              <p className="about-feature-desc">
                Committed to quality software via comprehensive test scenario design, defect reporting, and Postman API automation.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Compass size={22} />
              </div>
              <h4 className="about-feature-title">Continuous Growth</h4>
              <p className="about-feature-desc">
                Continuously exploring new tools, software engineering practices, and contributing to open practical projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

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
          description="Information Systems undergraduate passionate about software engineering, quality assurance, and building impactful digital solutions."
        />

        <div className="about-grid">
          <div className="about-text">
            <p>
              I am an Information Systems undergraduate reading for my <strong>{personalInfo.degree}</strong> at <strong>{personalInfo.university}</strong> (Expected Graduation – {personalInfo.expectedGraduation}). I completed my secondary education in the Physical Science Stream at <strong>{personalInfo.school}</strong>.
            </p>
            <p>
              My journey in technology combines a passion for <strong>software development</strong> with a dedicated focus on <strong>Quality Assurance and software testing</strong>. Having hands-on engineering experience across full-stack academic and personal projects, I understand both how to build complex systems from scratch and how to test, inspect, and validate software to ensure high reliability, performance, and seamless user experiences.
            </p>
            <p>
              I possess strong analytical thinking, problem-solving skills, and meticulous attention to detail, complemented by banking operations exposure at <strong>People's Bank, Kekirawa</strong>. My goal is to collaborate with engineering and quality teams to contribute to reliable, scalable, and user-centric digital products.
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
                <CheckCircle size={22} />
              </div>
              <h4 className="about-feature-title">Quality Assurance & Testing</h4>
              <p className="about-feature-desc">
                Dedicated to test case design, defect tracking, Postman API testing, and maintaining high software reliability standards.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <GraduationCap size={22} />
              </div>
              <h4 className="about-feature-title">Information Systems</h4>
              <p className="about-feature-desc">
                Honours degree foundation covering database architecture, systems analysis, and enterprise software engineering.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <Code size={22} />
              </div>
              <h4 className="about-feature-title">Full-Stack Development</h4>
              <p className="about-feature-desc">
                Hands-on development with React.js, Spring Boot, MySQL, and AWS cloud database deployments.
              </p>
            </div>

            <div className="about-feature-card">
              <div className="about-feature-icon">
                <ShieldCheck size={22} />
              </div>
              <h4 className="about-feature-title">Analytical Problem Solving</h4>
              <p className="about-feature-desc">
                Proven attention to detail, adaptability, and effective cross-functional team communication in group software projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

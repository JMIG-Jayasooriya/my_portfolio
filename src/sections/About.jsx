import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { personalInfo } from '../data/portfolioData';
import {
  GraduationCap,
  Building2,
  School,
  Briefcase,
  MapPin,
  Sparkles
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="BACKGROUND & PROFILE"
          title="About Me"
          description="A comprehensive look into my academic foundations, technical journey, and hands-on professional experiences."
        />

        {/* Centered Profile Card */}
        <div className="about-card-container">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', backgroundColor: 'var(--primary-soft)', border: '1px solid var(--primary-border)', color: 'var(--primary-light)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '18px' }}>
            <Sparkles size={14} />
            <span>Personal Profile & Journey</span>
          </div>

          <h3 style={{ fontSize: '1.45rem', fontWeight: 700, color: 'var(--text-heading)', marginBottom: '18px', lineHeight: 1.35 }}>
            Information Systems Undergraduate & Software Enthusiast based in Colombo, Sri Lanka.
          </h3>

          <div className="about-text">
            <p>
              I am currently reading for a <strong>Bachelor of Honours in Information Systems</strong> at the <strong>Faculty of Computing, Sabaragamuwa University of Sri Lanka</strong> (Expected Graduation – {personalInfo.expectedGraduation}). My academic background began in the Physical Science Stream at <strong>Dharmasoka College Ambalangoda</strong>, which cultivated a strong foundation in mathematics, analytical thinking, and logical problem solving.
            </p>

            <p>
              My passion lies in designing and developing reliable digital systems that bridge human needs with efficient technology. Through academic coursework and personal projects, I develop modern full-stack web applications using <strong>React.js, Spring Boot, Java, and MySQL</strong>, with hands-on practice in relational database design, REST APIs, and software testing.
            </p>

            <p>
              Beyond the classroom, my practical exposure at <strong>People's Bank, Kekirawa</strong> instilled high precision, accountability with transactions, and effective communication skills. I am actively involved in university life as a member of the <strong>Rotaract Club of SUSL</strong>, university sports teams, and the outdoor hiking club. My ambition is to contribute to dynamic software engineering teams and continuously learn modern technologies.
            </p>
          </div>

          {/* Structured Quick Facts Grid: 3 Columns x 2 Rows */}
          <div className="about-quick-facts">
            <div className="about-fact-item">
              <GraduationCap size={18} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Degree Programme</div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>BSc (Hons) Info Systems (2024–2028)</div>
              </div>
            </div>

            <div className="about-fact-item">
              <Building2 size={18} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>University</div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Sabaragamuwa University of Sri Lanka</div>
              </div>
            </div>

            <div className="about-fact-item">
              <School size={18} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Secondary Education</div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Dharmasoka College Ambalangoda</div>
              </div>
            </div>

            <div className="about-fact-item">
              <Briefcase size={18} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Practical Experience</div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Operations Trainee (People's Bank)</div>
              </div>
            </div>

            <div className="about-fact-item">
              <MapPin size={18} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>{personalInfo.location}</div>
              </div>
            </div>

            <div className="about-fact-item">
              <Sparkles size={18} color="var(--primary-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Core Focus</div>
                <div style={{ fontWeight: 600, color: 'var(--text-heading)' }}>Full Stack Web & Software QA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
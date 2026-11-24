import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Database,
  CheckSquare,
  Laptop,
  Layers,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  CheckSquare,
  Laptop
};

// Continuous Infinite Rotating Marquee Stream Items
const marqueeRow1 = [
  { name: 'React.js', color: '#38BDF8', tag: 'Frontend' },
  { name: 'Java (OOP)', color: '#F97316', tag: 'Language' },
  { name: 'Spring Boot', color: '#22C55E', tag: 'Backend' },
  { name: 'MySQL', color: '#0EA5E9', tag: 'Database' },
  { name: 'JavaScript (ES6+)', color: '#FACC15', tag: 'Language' },
  { name: 'Tailwind CSS', color: '#06B6D4', tag: 'Frontend' },
  { name: 'PostgreSQL', color: '#6366F1', tag: 'Database' },
  { name: 'Python', color: '#3B82F6', tag: 'Language' },
  { name: 'AWS Cloud', color: '#F59E0B', tag: 'Cloud' },
  { name: 'REST APIs', color: '#818CF8', tag: 'Architecture' }
];

const marqueeRow2 = [
  { name: 'Node.js', color: '#22C55E', tag: 'Backend' },
  { name: 'HTML5 & CSS3', color: '#EC4899', tag: 'Frontend' },
  { name: 'Software Testing', color: '#38BDF8', tag: 'QA' },
  { name: 'Git & GitHub', color: '#EF4444', tag: 'VCS' },
  { name: 'Vite', color: '#A855F7', tag: 'Tool' },
  { name: 'Postman', color: '#FB923C', tag: 'Testing' },
  { name: 'SQL Indexing', color: '#0EA5E9', tag: 'Database' },
  { name: 'Figma', color: '#C084FC', tag: 'Design' },
  { name: 'JWT & RBAC Security', color: '#10B981', tag: 'Security' },
  { name: 'VS Code & IntelliJ', color: '#6366F1', tag: 'IDE' }
];

// Color mapping for skill dots in cards
const skillColors = {
  'Java': '#F97316',
  'JavaScript': '#FACC15',
  'Python': '#3B82F6',
  'SQL': '#0EA5E9',
  'React.js': '#38BDF8',
  'HTML5': '#EA580C',
  'CSS3': '#2563EB',
  'Vite': '#A855F7',
  'Tailwind CSS': '#06B6D4',
  'Spring Boot': '#22C55E',
  'Node.js': '#16A34A',
  'REST APIs': '#818CF8',
  'JWT': '#E11D48',
  'Role-Based Access Control': '#10B981',
  'MySQL': '#0284C7',
  'PostgreSQL': '#6366F1',
  'AWS (RDS / S3)': '#F59E0B',
  'Vercel': '#FFFFFF',
  'Software Testing': '#38BDF8',
  'Test Case Design': '#A855F7',
  'Postman': '#FB923C',
  'Defect Tracking': '#F43F5E',
  'Git': '#F05032',
  'GitHub': '#E2E8F0',
  'VS Code': '#007ACC',
  'IntelliJ IDEA': '#FE315D',
  'Figma': '#A259FF',
  'Canva': '#00C4CC',
  'draw.io': '#F08705'
};

const filterTabs = [
  { id: 'all', label: 'All Technologies' },
  { id: 'Programming Languages', label: 'Languages' },
  { id: 'Frontend Development', label: 'Frontend' },
  { id: 'Backend & Architecture', label: 'Backend' },
  { id: 'Databases & Cloud', label: 'Cloud & DB' },
  { id: 'Software Testing & QA', label: 'Testing & QA' },
  { id: 'Tools & Design', label: 'Tools' }
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === activeFilter);

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          subtitle="CORE COMPETENCIES & TECH STACK"
          title="Skills & Technologies"
          description="Interactive showcase of modern programming languages, frameworks, cloud services, and tools."
        />

        {/* 1. Dynamic Rotating Infinite Marquee Streams */}
        <div className="skills-marquee-wrapper" title="Hover to pause conveyor">
          {/* Row 1: Flowing Left */}
          <div className="skills-marquee-row marquee-left">
            {[...marqueeRow1, ...marqueeRow1].map((item, idx) => (
              <div key={`m1-${idx}`} className="marquee-chip">
                <span
                  className="marquee-chip-dot"
                  style={{ backgroundColor: item.color, color: item.color }}
                />
                <span>{item.name}</span>
                <span className="marquee-chip-tag">{item.tag}</span>
              </div>
            ))}
          </div>

          {/* Row 2: Flowing Right (Reverse) */}
          <div className="skills-marquee-row marquee-right">
            {[...marqueeRow2, ...marqueeRow2].map((item, idx) => (
              <div key={`m2-${idx}`} className="marquee-chip">
                <span
                  className="marquee-chip-dot"
                  style={{ backgroundColor: item.color, color: item.color }}
                />
                <span>{item.name}</span>
                <span className="marquee-chip-tag">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Interactive Category Filter Bar */}
        <div className="skills-filter-container">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`skills-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
            >
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 3. Modern 3-Column Glass Cards with 360° Rotating Icons on Hover */}
        <div className="modern-skills-grid">
          {filteredCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <div key={cat.category} className="modern-skill-card">
                <div className="modern-skill-header">
                  <div className="modern-skill-header-left">
                    <div className="modern-skill-icon-box" title="Hover to spin">
                      <Icon size={20} />
                    </div>
                    <h3 className="modern-skill-title">{cat.category}</h3>
                  </div>
                  <span className="modern-skill-count-badge">
                    {cat.skills.length} Skills
                  </span>
                </div>

                <div className="modern-skill-pills">
                  {cat.skills.map((skill) => {
                    const dotColor = skillColors[skill] || 'var(--primary-light)';
                    return (
                      <span key={skill} className="modern-skill-pill">
                        <span
                          className="modern-skill-pill-dot"
                          style={{ backgroundColor: dotColor, boxShadow: `0 0 6px ${dotColor}` }}
                        />
                        <span>{skill}</span>
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
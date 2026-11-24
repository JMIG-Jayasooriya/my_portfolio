import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  FileCode,
  Terminal,
  Database,
  Layout,
  Palette,
  Smartphone,
  Server,
  Network,
  Boxes,
  Layers,
  CheckSquare,
  FileSpreadsheet,
  Send,
  Bug,
  GitBranch,
  Github,
  Laptop,
  Binary,
  Figma
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Database,
  Layout,
  Palette,
  Smartphone,
  Server,
  Network,
  Boxes,
  Layers,
  CheckSquare,
  FileSpreadsheet,
  Send,
  Bug,
  GitBranch,
  Github,
  Laptop,
  Binary,
  Figma,
  Atom: Code2 // fallback
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = [
    'All',
    'Programming',
    'Frontend Development',
    'Backend Development',
    'Database Management',
    'Quality Assurance & Testing',
    'Tools & Platforms'
  ];

  const filteredCategories = selectedFilter === 'All'
    ? skillCategories
    : skillCategories.filter(cat => cat.category.toLowerCase().includes(selectedFilter.toLowerCase().replace(' development', '').replace(' management', '')));

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          subtitle="CORE COMPETENCIES"
          title="Technical Skills"
          description="Organized by specialization areas. Focused on practical skills applied across projects and coursework."
        />

        {/* Category Filter Pills */}
        <div className="skills-tabs">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setSelectedFilter(opt)}
              className={`skill-tab-btn ${selectedFilter === opt ? 'active' : ''}`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.category} className="skill-category-card">
              <div className="skill-cat-header">
                <h3 className="skill-cat-title">{cat.category}</h3>
                <span className="badge" style={{ fontSize: '0.74rem' }}>
                  {cat.skills.length} Skills
                </span>
              </div>
              <p className="skill-cat-desc">{cat.description}</p>

              <div className="skill-items-list">
                {cat.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="skill-item-row">
                      <div className="skill-item-left">
                        <div className="skill-item-icon">
                          <IconComponent size={18} />
                        </div>
                        <div>
                          <div className="skill-item-name">{skill.name}</div>
                          {skill.tag && (
                            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="skill-item-level">{skill.level}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

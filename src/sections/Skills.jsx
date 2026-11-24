import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Database,
  CheckSquare,
  Laptop
} from 'lucide-react';

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  CheckSquare,
  Laptop
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle
          subtitle="CORE COMPETENCIES"
          title="Skills & Technologies"
          description="Technical skills, frameworks, databases, and development tools."
        />

        <div className="simple-skills-grid">
          {skillCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Code2;
            return (
              <div key={cat.category} className="simple-skill-card">
                <div className="simple-skill-header">
                  <div className="simple-skill-icon-box">
                    <Icon size={20} />
                  </div>
                  <h3 className="simple-skill-title">{cat.category}</h3>
                </div>

                <div className="simple-skill-pills">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="simple-skill-pill">
                      {skill}
                    </span>
                  ))}
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

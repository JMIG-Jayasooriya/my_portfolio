import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = ['All', 'Full Stack', 'Testing & QA'];

  const displayedProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="PRACTICAL WORK"
          title="Featured Projects"
          description="A selection of software systems and quality assurance suites I have engineered and documented."
        />

        {/* Category Filters */}
        <div className="projects-filter">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`skill-tab-btn ${selectedCategory === tab ? 'active' : ''}`}
            >
              {tab === 'All' ? 'All Projects' : tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Detailed Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = ['All', 'Full Stack', 'Frontend'];

  const displayedProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <SectionTitle
          subtitle="PRACTICAL WORK & SOFTWARE PROJECTS"
          title="Featured Projects"
          description="A showcase of group capstone systems and individual web applications developed using modern technologies."
        />

        {/* Category Filters */}
        <div className="projects-filter">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedCategory(tab)}
              className={`projects-filter-btn ${selectedCategory === tab ? 'active' : ''}`}
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

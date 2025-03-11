
import React from 'react';
import ProjectCard from './ProjectCard';
import TransitionEffect from './TransitionEffect';

const projectsData = [
  {
    title: "Web App Redesign",
    description: "Complete UX overhaul of a financial dashboard with improved information architecture and accessibility.",
    category: "UX Design",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "E-commerce Mobile App",
    description: "User-centered shopping experience with intuitive navigation and seamless checkout flow.",
    category: "App Design",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Brand Identity System",
    description: "Cohesive visual language and component system for a tech startup's digital presence.",
    category: "Brand Design",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Healthcare Platform",
    description: "Accessible interface designed to simplify complex medical information for patients.",
    category: "UX Research",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <TransitionEffect delay={0.1}>
          <div className="mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/5 rounded-full mb-3">
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Recent Projects</h2>
          </div>
        </TransitionEffect>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <TransitionEffect key={index} delay={0.1 + index * 0.1} threshold={0.2}>
              <ProjectCard
                title={project.title}
                description={project.description}
                category={project.category}
                imageUrl={project.imageUrl}
              />
            </TransitionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

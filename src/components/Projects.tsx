
import React from 'react';
import ProjectCard from './ProjectCard';
import TransitionEffect from './TransitionEffect';

const projectsData = [
  {
    title: "Citizen Services Portal",
    description: "A streamlined digital platform that transforms how citizens access government services, with improved accessibility and usability.",
    category: "UX Research & Design",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    title: "Municipal App Redesign",
    description: "Complete redesign of a city's mobile application, focusing on intuitive navigation and simplified service requests.",
    category: "App Design",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  },
  {
    title: "Public Health Campaign",
    description: "Visual system and digital strategy for a nationwide public health initiative, resulting in 40% increased engagement.",
    category: "Brand & Digital",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Government Intranet System",
    description: "Internal platform redesign that improved workflow efficiency by 35% while enhancing information accessibility for staff.",
    category: "UX/UI & Systems",
    imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
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


import React from 'react';
import ProjectCard from './ProjectCard';
import TransitionEffect from './TransitionEffect';

const projectsData = [
  {
    title: "Establishing Design Culture for Waste Traceability",
    description: "How we helped Veriflux transform their product experience to drive user adoption and create a sustainable impact in food waste management.",
    category: "UX Research & Design",
    imageUrl: "/lovable-uploads/ae63cad8-87c0-4daa-94fe-d989f8711460.png",
    url: "/case-study/veriflux",
  },
  {
    title: "Digital Banking Experience Redesign",
    description: "Creating an intuitive and accessible mobile banking platform that increased user engagement by 45% and reduced support tickets by 30%.",
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    url: "#",
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
                url={project.url}
              />
            </TransitionEffect>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

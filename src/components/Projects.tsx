
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
    title: "Jigsaw: Modern AR Management System",
    description: "Redesigning a complex air resource management tool to enhance user experience and operational efficiency for military and aviation personnel.",
    category: "UI/UX Design & System Architecture",
    imageUrl: "/lovable-uploads/79bb2514-9999-4ae2-9062-38abff3365fa.png",
    url: "/case-study/jigsaw",
  },
  {
    title: "Revolutionizing Logistics and Readiness for the USAF",
    description: "Creating an intuitive and accessible mobile banking platform that increased user engagement by 45% and reduced support tickets by 30%.",
    category: "UI/UX Design",
    imageUrl: "/lovable-uploads/f0075149-b5c6-43b0-9085-723a84367eb7.png",
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

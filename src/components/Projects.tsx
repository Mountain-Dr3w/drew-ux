import React from 'react';
import ProjectCard from './ProjectCard';
import TransitionEffect from './TransitionEffect';

const projectsData = [
  {
    title: "Revolutionizing Logistics and Readiness for the USAF",
    description: "Empowering military decision-makers to use all of the data at their disposal to make choices that optimize readiness",
    imageUrl: "/lovable-uploads/f0075149-b5c6-43b0-9085-723a84367eb7.png",
    url: "/case-study/deftech",
  },
  {
    title: "Design Thinking Meets Waste Traceability",
    description: "How I helped Veriflux transform their product experience to drive user adoption and create a sustainable impact in food waste management.",
    imageUrl: "/lovable-uploads/e0e3973c-7205-4722-a4aa-d618d7144397.png",
    url: "/case-study/veriflux",
  },
  {
    title: "Modernizing an Air-to-Air Refueling System",
    description: "Redesigning a complex air refueling management tool to maximize user adoption and operational efficiency for military planning personnel.",
    imageUrl: "/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png",
    url: "/case-study/jigsaw",
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding relative z-0">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <TransitionEffect key={index} delay={0.1 + index * 0.1} threshold={0.2}>
              <ProjectCard
                title={project.title}
                description={project.description}
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

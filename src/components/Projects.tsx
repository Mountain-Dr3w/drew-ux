
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
    title: "Debrief: Streamlining Post-Flight Analysis",
    description: "How a human-centered UX approach improved flight safety and operational efficiency for aviation professionals",
    imageUrl: "/lovable-uploads/4c672ff6-c950-4435-afb3-f29ba004a6a3.png",
    url: "/case-study/debrief",
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
    <section id="projects" className="py-24 md:py-32 relative z-0">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <TransitionEffect delay={0.1}>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">FEATURED PROJECTS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mt-2 mb-4 text-black dark:text-white">
              My Design Work
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              A collection of my most impactful UX design projects across various industries
            </p>
          </TransitionEffect>
        </div>

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

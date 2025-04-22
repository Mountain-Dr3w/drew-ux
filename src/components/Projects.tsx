
import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "Military Readiness Platform",
    description: "Empowering military decision-makers with intuitive logistics and readiness tools.",
    imageUrl: "/lovable-uploads/f0075149-b5c6-43b0-9085-723a84367eb7.png",
    url: "/case-study/deftech",
    category: "UX/UI Design",
    year: "2023"
  },
  {
    title: "Debrief: Post-Flight Analysis",
    description: "A human-centered approach to flight safety and operational efficiency for aviation professionals.",
    imageUrl: "/lovable-uploads/4c672ff6-c950-4435-afb3-f29ba004a6a3.png",
    url: "/case-study/debrief",
    category: "Product Design",
    year: "2022"
  },
  {
    title: "Veriflux: Waste Traceability",
    description: "Transforming food waste management with an intuitive user experience.",
    imageUrl: "/lovable-uploads/e0e3973c-7205-4722-a4aa-d618d7144397.png",
    url: "/case-study/veriflux",
    category: "UX Research",
    year: "2022"
  },
  {
    title: "Air Refueling Management System",
    description: "Modernizing complex air operations planning with a user-focused approach.",
    imageUrl: "/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png",
    url: "/case-study/jigsaw",
    category: "Enterprise UX",
    year: "2021"
  }
];

const Projects: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-blue-500 mb-2 block">Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Selected Projects</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A collection of projects where I've applied user-centered design to solve complex problems.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              url={project.url}
              category={project.category}
              year={project.year}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

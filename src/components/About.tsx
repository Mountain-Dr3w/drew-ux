
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "UX Research & Strategy", 
    "UI Design & Prototyping",
    "Interaction Design",
    "Design Systems",
    "Usability Testing",
    "Human Factors",
    "Accessibility (WCAG)",
    "Product Strategy"
  ];
  
  const experience = [
    {
      role: "Senior UX Designer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description: "Leading UX design for enterprise software products, focusing on complex workflows and user-centered design."
    },
    {
      role: "Product Designer",
      company: "AeroTech Systems",
      period: "2017 - 2020",
      description: "Designed flight operations software, conducted user research, and created prototypes for aviation professionals."
    },
    {
      role: "UX Consultant",
      company: "Design Agency",
      period: "2015 - 2017",
      description: "Worked with multiple clients across industries to improve digital experiences and product strategies."
    }
  ];
  
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-blue-500 mb-2 block">About</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">My Background</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            I'm a product designer who combines human factors expertise with design thinking to create impactful digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Approach</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              With over 8 years of experience in UX/UI design, I've developed a deep understanding of how to create digital products that are both beautiful and functional. I believe in a user-centered approach that balances business goals with user needs.
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              My background in human factors gives me unique insight into cognitive processes, accessibility considerations, and creating systems that work intuitively for all users. I'm passionate about creating products that make complex tasks feel simple.
            </p>
            
            <h4 className="font-bold text-xl mb-4">My Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 size={16} className="text-blue-500 mr-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-neutral-200 dark:border-neutral-800">
                  <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-blue-500" />
                  <div className="mb-1 flex justify-between">
                    <h4 className="font-bold">{job.role}</h4>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">{job.period}</span>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">{job.company}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{job.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-xl mb-4">Education</h3>
              <div className="mb-4">
                <p className="font-bold">Masters in Human-Computer Interaction</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Carnegie Mellon University, 2015</p>
              </div>
              <div>
                <p className="font-bold">Bachelor of Science in Psychology</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">University of Michigan, 2013</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <p className="text-xl font-bold">Ready to discuss your project?</p>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

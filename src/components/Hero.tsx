
import React from 'react';
import { motion } from 'framer-motion';
import ThemeSwitchingLogo from './ThemeSwitchingLogo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 py-24 overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-neutral-100 dark:bg-neutral-800/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <ThemeSwitchingLogo />
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tighter mt-12 mb-6 max-w-4xl mx-auto">
              Crafting Digital Products That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">Drive Results</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Strategic UX design for mission-critical operations
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-neutral-300 dark:border-neutral-700 rounded-full font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

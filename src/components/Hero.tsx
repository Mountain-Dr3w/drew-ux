
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 z-0 mb-16 md:mb-0">
      {/* Background gradient removed as it's now applied at the page level */}
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full relative">
        {/* Subtle tag line above heading */}
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-4 flex flex-wrap justify-center gap-2">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-200/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 shadow-sm">
              Human Factors Advocate
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-200/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 shadow-sm">
              End-to-End Designer
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-200/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 shadow-sm">
              Product Strategist
            </span>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-10 text-balance">
              Designing usable, accessible, and scalable software isn't easy.<br />
              <span className="font-bold animate-gradient-shift bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-300% bg-clip-text text-transparent" style={{ animationDuration: '6s' }}>Let me do it for you.</span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col w-full items-center gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600/70 via-blue-500/70 to-blue-400/70 backdrop-blur-xl px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 w-full sm:w-40 h-12 whitespace-nowrap z-10 shadow-xl border border-white/30 dark:border-white/20 hover:shadow-blue-500/20 hover:scale-[1.02]"
              >
                <span className="font-medium text-sm text-white">Work With Me</span>
                <ArrowRight 
                  size={16} 
                  className="text-white transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 bg-white/20 dark:bg-gray-800/30 backdrop-blur-xl text-gray-700 dark:text-gray-200 px-6 py-3 rounded-full hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300 w-full sm:w-40 h-12 whitespace-nowrap z-10 border border-white/30 dark:border-white/10 shadow-xl hover:shadow-gray-500/10 hover:scale-[1.02]"
              >
                <span className="font-medium text-sm">View Projects</span>
              </a>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

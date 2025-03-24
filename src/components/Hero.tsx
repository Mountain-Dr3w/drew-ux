
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center pt-24 md:pt-32 z-0 mb-16 md:mb-0">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden z-[-2]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 animate-gradient-shift" style={{ animationDuration: '20s' }}></div>
      </div>
      
      {/* Background elements with subtle gradients */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        {/* Lofi sketch elements with reduced opacity */}
        <div className="absolute top-20 right-[5%] w-24 h-24 border-2 border-dashed border-gray-300/20 dark:border-gray-700/20 rounded-md rotate-12 opacity-30"></div>
        <div className="absolute top-40 left-[10%] w-16 h-16 border border-gray-300/20 dark:border-gray-700/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-8 bg-gray-100/5 dark:bg-gray-800/5 rounded-sm transform -rotate-6"></div>
        <div className="absolute top-[25%] left-[20%] w-12 h-12 border-2 border-gray-300/10 dark:border-gray-700/10 transform rotate-45 opacity-30"></div>
      </div>
      
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
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600/60 via-blue-500/60 to-blue-400/60 backdrop-blur-md dark:from-blue-700/40 dark:via-blue-600/40 dark:to-blue-500/40 px-6 py-3 rounded-full hover:opacity-95 transition-all duration-300 w-full sm:w-36 h-12 whitespace-nowrap z-10 shadow-lg border border-white/20 bg-white/10"
              >
                <span className="font-medium text-sm text-white">Work With Me</span>
                <ArrowRight 
                  size={16} 
                  className="text-white transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 bg-blue-gray-500/20 backdrop-blur-md text-gray-700 dark:text-gray-200 px-6 py-3 rounded-full hover:bg-blue-gray-500/30 dark:hover:bg-blue-gray-400/30 transition-all duration-300 w-full sm:w-36 h-12 whitespace-nowrap z-10 border border-white/20 dark:border-white/10 shadow-lg"
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


import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] relative flex items-center justify-center pt-24 md:pt-32">
      {/* Background elements for personality */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-32 rounded-[50%] bg-gradient-to-r from-black/2 via-black/1 to-muted blur-3xl -z-10 transform translate-y-[-45%] dark:from-white/2 dark:via-white/1 dark:to-muted" />
        
        {/* Decorative dots pattern */}
        <div className="absolute -left-10 top-20 w-80 h-80 opacity-10 dark:opacity-5">
          <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-10 top-10"></div>
          <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-20 top-40"></div>
          <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-40 top-20"></div>
          <div className="absolute w-1 h-1 rounded-full bg-black dark:bg-white left-60 top-30"></div>
          <div className="absolute w-1 h-1 rounded-full bg-black dark:bg-white left-70 top-60"></div>
        </div>
        
        {/* Accent shape */}
        <div className="absolute right-10 md:right-20 top-40 w-20 h-20 md:w-40 md:h-40 rounded-full border border-black/10 dark:border-white/10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full relative">
        {/* Subtle tag line above heading */}
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-4 flex flex-wrap justify-center gap-2">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-700/40 text-gray-700 dark:text-gray-300">
              Accessibility Compliance
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-700/40 text-gray-700 dark:text-gray-300">
              End-to-End Design
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-700/40 text-gray-700 dark:text-gray-300">
              Product Strategy
            </span>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-10 text-balance">
              Designing usable, accessible, and scalable software isn't easy. <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Let us do it for you.</span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-300 w-full sm:w-36 h-12 whitespace-nowrap"
              >
                <span className="font-medium text-sm">Work With Us</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 w-full sm:w-36 h-12 whitespace-nowrap"
              >
                <span className="font-medium text-sm">View Projects</span>
              </a>
            </div>
          </TransitionEffect>
          
          {/* Client logos section */}
          <TransitionEffect direction="up" delay={0.5}>
            <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 text-center">
              <p className="text-xs uppercase tracking-wider text-black/50 dark:text-white/50 mb-5">Trusted by innovative teams</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                <div className="w-24 h-8 bg-black/10 dark:bg-white/10 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-8 bg-black/10 dark:bg-white/10 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-8 bg-black/10 dark:bg-white/10 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

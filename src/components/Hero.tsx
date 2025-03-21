
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight, Pencil, PenTool, Paintbrush } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] relative flex items-center justify-center pt-24 md:pt-32">
      {/* Background elements with improved gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-40 rounded-[50%] bg-gradient-to-r from-purple-600/20 via-blue-400/10 to-muted blur-3xl -z-10 transform translate-y-[-45%] dark:from-purple-600/20 dark:via-blue-400/10 dark:to-muted" />
        
        {/* Additional gradient shape */}
        <div className="absolute bottom-0 -left-20 -right-20 h-80 rounded-[50%] bg-gradient-to-r from-blue-400/10 via-purple-500/5 to-transparent blur-3xl -z-10 dark:from-blue-400/10 dark:via-purple-500/5 dark:to-transparent" />
        
        {/* Lofi sketch elements */}
        <div className="absolute top-20 right-[5%] w-24 h-24 border-2 border-dashed border-gray-300/40 dark:border-gray-700/40 rounded-md rotate-12 opacity-60"></div>
        <div className="absolute top-40 left-[10%] w-16 h-16 border border-gray-300/40 dark:border-gray-700/40 rounded-full"></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-8 bg-gray-100/20 dark:bg-gray-800/20 rounded-sm transform -rotate-6"></div>
        <div className="absolute top-[25%] left-[20%] w-12 h-12 border-2 border-gray-300/30 dark:border-gray-700/30 transform rotate-45"></div>
        
        {/* Artsy pencil elements */}
        <div className="absolute top-[15%] right-[25%] opacity-40 transform rotate-[-30deg]">
          <Pencil size={48} className="text-purple-500 dark:text-purple-400" strokeWidth={1.5} />
        </div>
        
        <div className="absolute bottom-[25%] left-[18%] opacity-30 transform rotate-[15deg]">
          <PenTool size={42} className="text-blue-500 dark:text-blue-400" strokeWidth={1.5} />
        </div>
        
        <div className="absolute top-[40%] left-[30%] opacity-20 transform rotate-[-15deg]">
          <Paintbrush size={36} className="text-orange-500 dark:text-orange-400" strokeWidth={1.5} />
        </div>
        
        {/* Accent shape */}
        <div className="absolute right-10 md:right-20 top-40 w-20 h-20 md:w-40 md:h-40 rounded-full border border-black/10 dark:border-white/10"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full relative">
        {/* Subtle tag line above heading */}
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-4 flex flex-wrap justify-center gap-2">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-purple-50 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
              Accessibility Compliance
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
              End-to-End Design
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
              Product Strategy
            </span>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-10 text-balance">
              Designing usable, accessible, and scalable software isn't easy. <span className="font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-500 bg-clip-text text-transparent">Let me do it for you.</span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-purple-600 text-white dark:bg-purple-600 dark:text-white px-6 py-3 rounded-full hover:bg-purple-700 dark:hover:bg-purple-700 transition-all duration-300 w-full sm:w-36 h-12 whitespace-nowrap"
              >
                <span className="font-medium text-sm">Work With Me</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-sm text-black dark:text-white px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 w-full sm:w-36 h-12 whitespace-nowrap"
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
                <div className="w-24 h-8 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-8 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-8 bg-gradient-to-r from-black/10 to-black/5 dark:from-white/10 dark:to-white/5 rounded opacity-60 hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

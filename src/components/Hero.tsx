
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight, Circle, Square, Triangle } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 z-0 mb-16 md:mb-0">
      {/* Minimal design elements */}
      <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        {/* Large semi-transparent design element */}
        <div className="absolute right-[-5%] top-[10%] w-[300px] h-[300px] opacity-25 dark:opacity-15">
          <AspectRatio ratio={1/1}>
            <img 
              src="/lovable-uploads/Asset 3.svg" 
              alt="" 
              className="w-full h-full object-contain"
            />
          </AspectRatio>
        </div>
        
        {/* Abstract minimal shapes */}
        <Circle 
          className="absolute left-[10%] top-[15%] text-blue-200/30 dark:text-blue-500/20" 
          size={120} 
          strokeWidth={0.5}
        />
        <Square 
          className="absolute right-[15%] bottom-[15%] text-purple-200/30 dark:text-purple-500/20" 
          size={80} 
          strokeWidth={0.5}
        />
        <Triangle 
          className="absolute left-[20%] bottom-[10%] text-indigo-200/30 dark:text-indigo-500/20" 
          size={100} 
          strokeWidth={0.5}
        />
        
        {/* Dotted pattern */}
        <div className={cn(
          "absolute top-1/4 left-0 w-[200px] h-[200px]",
          "bg-gradient-to-r from-transparent to-transparent",
          "opacity-20 dark:opacity-10",
          "bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)]",
          "bg-[size:12px_12px]"
        )}></div>
        
        {/* Subtle diagonal line */}
        <div className="absolute bottom-0 right-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent to-blue-300/20 dark:to-blue-600/30 rotate-45 origin-bottom-left"></div>
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
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 mb-10">
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

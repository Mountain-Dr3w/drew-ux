
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 lg:pt-20 z-0 mb-16 md:mb-0">
      {/* Minimal design elements */}
      <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        {/* Dotted pattern */}
        <div className={cn("absolute top-1/4 left-0 w-[200px] h-[200px]", "bg-gradient-to-r from-transparent to-transparent", "opacity-20 dark:opacity-10", "bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)]", "bg-[size:12px_12px]")}></div>
        
        {/* Subtle diagonal line */}
        <div className="absolute bottom-0 right-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent to-blue-300/20 dark:to-blue-600/30 rotate-45 origin-bottom-left"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 w-full relative">
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-6 md:mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
            <span className="inline-block text-xs md:text-sm font-medium px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-200/60 dark:bg-gray-600/40 text-gray-700 dark:text-gray-200 shadow-sm">
              Human Factors Advocate
            </span>
            <span className="inline-block text-xs md:text-sm font-medium px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-200/60 dark:bg-gray-600/40 text-gray-700 dark:text-gray-200 shadow-sm">
              End-to-End Designer
            </span>
            <span className="inline-block text-xs md:text-sm font-medium px-2 py-1 md:px-3 md:py-1 rounded-full bg-gray-200/60 dark:bg-gray-600/40 text-gray-700 dark:text-gray-200 shadow-sm">
              Product Strategist
            </span>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-12 md:mb-14 lg:mb-16 text-balance max-w-4xl mx-auto font-normal">
              <div className="mb-8">Designing usable, accessible, and scalable software isn't easy.</div>
              <span
                className={cn(
                  "font-marker", // creative marker font
                  "text-[2.4rem] md:text-[3rem] lg:text-[3.7rem]",
                  "inline-block",
                  "text-[#f25f92] dark:text-[#fa6dac]", // bright "marker" pink shades - adjust for dark mode as well
                  "drop-shadow-[0_2px_2px_rgba(0,0,0,0.10)]",
                  "leading-[1.1]",
                  "z-10"
                )}
                style={{
                  // A little transform for wobble/playfulness
                  transform: "rotate(-3deg) skew(-1.5deg, 0.5deg)",
                  letterSpacing: "0.01em",
                  transition: "color 0.25s",
                }}
              >
                let me do it for you.
              </span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 md:gap-6 mb-10">
              <a href="#contact" className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 dark:from-blue-600/80 dark:to-blue-800/80 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-blue-700 dark:hover:opacity-90 transition-all duration-300 w-full sm:w-auto min-w-[160px] h-12 md:h-14 whitespace-nowrap z-10 dark:border dark:border-white/10 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.02]">
                <span className="font-medium text-sm md:text-base text-white">Connect With Me</span>
              </a>
              
              <a href="#projects" className="group inline-flex items-center justify-center space-x-2 bg-gray-200/80 dark:bg-gray-800/20 backdrop-blur-xl text-gray-700 dark:text-gray-200 px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700/30 transition-all duration-300 w-full sm:w-auto min-w-[160px] h-12 md:h-14 whitespace-nowrap z-10 border border-gray-300 dark:border-white/10 shadow-xl hover:shadow-gray-500/10 hover:scale-[1.02]">
                <span className="font-medium text-sm md:text-base">View My Work</span>
              </a>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>;
};
export default Hero;


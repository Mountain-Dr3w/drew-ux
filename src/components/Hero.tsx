
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 lg:pt-20 z-0 mb-16 md:mb-0">
      {/* Subtle, nearly-solid background for less gradient effect */}
      <div className="absolute inset-0 z-[-1] pointer-events-none bg-[#F1F0FB] dark:bg-[#1a1733]" />

      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10 w-full relative">
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-5 md:mb-7 flex flex-wrap justify-center gap-2 md:gap-3">
            <Badge className="badge-blue">Human Factors Advocate</Badge>
            <Badge className="badge-blue">Product Strategist</Badge>
            <Badge className="badge-blue">End-to-End Designer</Badge>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="font-display mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto tracking-tight text-4xl md:text-5xl lg:text-6xl font-medium">
              Designing usable, accessible, and scalable software isn't easy.
              <span className="block mt-4 hero-emphasis">
                Let me do it for you.
              </span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            {/* Reduced button padding/height for a sleeker style */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3 md:gap-4 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-blue-500 dark:bg-blue-600 px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto min-w-[140px] text-white font-medium text-sm md:text-base"
              >
                <span>Connect With Me</span>
              </a>
              <a
                href="#projects"
                className="group inline-flex items-center justify-center border border-blue-500 dark:border-blue-600 bg-white/80 dark:bg-white/10 backdrop-blur-sm text-blue-500 dark:text-blue-300 px-5 py-2.5 md:px-6 md:py-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all duration-300 w-full sm:w-auto min-w-[140px] font-medium text-sm md:text-base"
              >
                <span>View My Work</span>
              </a>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

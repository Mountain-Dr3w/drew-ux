
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 lg:pt-20 z-0 mb-16 md:mb-0">
      <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 dark:from-blue-900/10 dark:to-purple-900/10 blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 dark:from-purple-900/10 dark:to-pink-900/10 blur-3xl opacity-60"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10 w-full relative">
        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <div className="flex justify-center mb-6 space-x-2">
              <Badge variant="default">UI/UX Design</Badge>
              <Badge variant="secondary">Web Development</Badge>
            </div>
            <h1 className="font-display mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto tracking-tight text-4xl md:text-5xl lg:text-6xl font-medium">
              Designing usable, accessible, and scalable software isn't easy.
              <span className="block mt-4 text-black dark:text-white font-semibold">
                Let me do it for you.
              </span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 md:gap-5 mb-10">
              <a href="#contact" className="group inline-flex items-center justify-center bg-blue-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-blue-600 transition-all duration-300 w-full sm:w-auto min-w-[160px] font-medium">
                <span className="text-sm md:text-base">Connect With Me</span>
              </a>
              
              <a href="#projects" className="group inline-flex items-center justify-center bg-white/70 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 w-full sm:w-auto min-w-[160px] border border-gray-200/50 dark:border-white/10">
                <span className="text-sm md:text-base font-medium">View My Work</span>
              </a>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>;
};

export default Hero;


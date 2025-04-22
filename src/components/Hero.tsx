
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 lg:pt-20 z-0 mb-16 md:mb-0">
      <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-black/60 dark:bg-black/80 blur-3xl opacity-70 transition-all duration-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-black/40 dark:bg-black/70 blur-3xl opacity-60 transition-all duration-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-10 w-full relative">
        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <div className="flex justify-center mb-6 space-x-2">
              <Badge 
                className="bg-black/10 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 border-none shadow-none font-normal"
                variant={undefined }
              >
                UI/UX Design
              </Badge>
              <Badge
                className="bg-black/10 dark:bg-white/5 text-neutral-500 dark:text-neutral-400 border-none shadow-none font-normal"
                variant={undefined}
              >
                Web Development
              </Badge>
            </div>
            <h1 className="font-display mb-8 md:mb-10 lg:mb-12 max-w-3xl mx-auto tracking-tight text-4xl md:text-5xl lg:text-6xl font-medium">
              Designing usable, accessible, and scalable software isn't easy.
              <span
                className={cn(
                  "block mt-6 md:mt-8 text-black dark:text-white font-extrabold",
                  "text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight",
                  "gradient-text bg-gradient-to-r from-purple-500 via-blue-500 to-fuchsia-400 dark:from-purple-300 dark:via-blue-200 dark:to-fuchsia-200",
                  "px-3 py-1 rounded-lg shadow-sm",
                )}
                style={{
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  letterSpacing: '-0.01em',
                  lineHeight: 1.08,
                }}
              >
                Let me do it for you.
              </span>
            </h1>
          </TransitionEffect>
          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 md:gap-5 mb-10">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center bg-blue-500 text-white px-6 py-2 md:px-8 md:py-2 rounded-full hover:bg-blue-600 transition-all duration-300 w-full sm:w-auto min-w-[140px] font-medium text-sm md:text-base shadow-none"
              >
                <span className="">Connect With Me</span>
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-sm text-black dark:text-white px-6 py-2 md:px-8 md:py-2 rounded-full hover:bg-white/90 dark:hover:bg-white/20 transition-all duration-300 w-full sm:w-auto min-w-[140px] border border-gray-200/40 dark:border-white/10 text-sm md:text-base font-medium shadow-none"
              >
                <span className="">View My Work</span>
              </a>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

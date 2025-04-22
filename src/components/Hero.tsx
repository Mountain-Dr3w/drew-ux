
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const appleButton =
  'apple-btn relative bg-white/60 dark:bg-white/10 backdrop-blur-lg border border-zinc-200/80 dark:border-white/10 text-black dark:text-white font-semibold shadow-lg hover:bg-white/80 hover:dark:bg-white/20 hover:shadow-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/50 active:scale-95';
const appleButtonOutline =
  'apple-btn relative bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-zinc-300/60 dark:border-white/15 text-black dark:text-white font-semibold shadow-sm hover:bg-white/20 hover:dark:bg-white/10 hover:shadow-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/30 active:scale-95';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 lg:pt-20 z-0 mb-16 md:mb-0">
      <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        <div
          className={cn(
            "absolute top-1/4 left-0 w-[200px] h-[200px]",
            "bg-gradient-to-r from-transparent to-transparent",
            "opacity-20 dark:opacity-10",
            "bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)]",
            "bg-[size:12px_12px]"
          )}
        ></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent to-blue-300/20 dark:to-blue-600/30 rotate-45 origin-bottom-left"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 w-full relative">
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-4 md:mb-6 flex flex-wrap justify-center gap-2 md:gap-3">
            <Badge
              className="bg-[#e9f0fb] text-[#2d2e30] dark:bg-[#233042] dark:text-white"
            >
              Human Factors Advocate
            </Badge>
            <Badge
              className="bg-[#ede8fb] text-[#2d2e30] dark:bg-[#342759] dark:text-white"
            >
              End-to-End Designer
            </Badge>
            <Badge
              className="bg-[#e8fbe9] text-[#2d2e30] dark:bg-[#1B3520] dark:text-white"
            >
              Product Strategist
            </Badge>
          </div>
        </TransitionEffect>
        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-10 md:mb-12 lg:mb-14 text-balance max-w-4xl mx-auto font-normal">
              Designing usable, accessible, and scalable software isn't easy.
              <br />
              <span
                className="font-bold animate-gradient-shift bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-300% bg-clip-text text-transparent"
                style={{
                  animationDuration: '4s'
                }}
              >
                Let me do it for you.
              </span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-4 md:gap-6 mb-10">
              <Button
                asChild
                className={cn(
                  "w-full sm:w-auto min-w-[160px] h-12 rounded-full px-8 py-3 text-base",
                  appleButton
                )}
              >
                <a href="#contact">Connect With Me</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className={cn(
                  "w-full sm:w-auto min-w-[160px] h-12 rounded-full px-8 py-3 text-base border-2",
                  appleButtonOutline
                )}
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

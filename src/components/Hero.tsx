
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Define a nice bright blue gradient for primary call-to-action
const blueButton =
  'bg-gradient-to-b from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:brightness-110 hover:shadow-xl transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/50 active:scale-97';

// Soft, glassy secondary button with blue border/text
const secondaryButton =
  'bg-white/60 dark:bg-zinc-900/40 backdrop-blur-lg border border-blue-400/60 dark:border-blue-500/40 text-blue-700 dark:text-blue-200 font-semibold shadow-md hover:bg-white/80 hover:dark:bg-zinc-800/70 hover:border-blue-500/80 hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/40 active:scale-97';

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
            <Badge variant="subtle">
              Human Factors Advocate
            </Badge>
            <Badge variant="subtle">
              End-to-End Designer
            </Badge>
            <Badge variant="subtle">
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
                  blueButton
                )}
              >
                <a href="#contact">Connect With Me</a>
              </Button>
              <Button
                asChild
                className={cn(
                  "w-full sm:w-auto min-w-[160px] h-12 rounded-full px-8 py-3 text-base",
                  secondaryButton
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

import React from 'react';
import TransitionEffect from './TransitionEffect';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

// Apple-inspired blue: strong but understated, no harsh gradient
const appleBlueButton = 'bg-gradient-to-b from-[#4086EC] to-[#1B6FF6] text-white font-semibold shadow-md hover:brightness-110 hover:shadow-lg transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93beff]/40 active:scale-97';

// Modern, soft glass secondary with blue border/text. Simple, subtle Apple style.
const appleSecondaryButton = 'bg-white/80 dark:bg-zinc-900/50 backdrop-blur-lg border border-[#B1C8F9] text-[#2562B7] dark:text-[#B3C9E2] font-semibold shadow-sm hover:bg-white hover:dark:bg-zinc-900/70 hover:border-blue-400 hover:shadow-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93beff]/30 active:scale-97';
const Hero: React.FC = () => {
  return <section className="min-h-[90vh] relative flex items-center justify-center pt-12 md:pt-16 lg:pt-20 z-0 mb-16 md:mb-0">
      <div className="absolute inset-0 overflow-hidden z-[-1] pointer-events-none">
        <div className={cn("absolute top-1/4 left-0 w-[200px] h-[200px]", "bg-gradient-to-r from-transparent to-transparent", "opacity-20 dark:opacity-10", "bg-[radial-gradient(circle,_rgba(0,0,0,0.2)_1px,_transparent_1px)]", "bg-[size:12px_12px]")}></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-[1px] bg-gradient-to-r from-transparent to-blue-300/20 dark:to-blue-600/30 rotate-45 origin-bottom-left"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-10 w-full relative">
        <TransitionEffect direction="up" delay={0.2}>
          <h1 className="shiftnudge-heading mb-10 md:mb-12 lg:mb-14 text-balance max-w-4xl mx-auto font-normal">
            Designing usable, accessible, and scalable software isn't easy.
            <br className="mb-8 md:mb-10" />
            <span className="block mt-8 md:mt-10 font-bold animate-gradient-shift bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-300% bg-clip-text text-transparent" style={{
            animationDuration: '4s'
          }}>
              Let me do it for you.
            </span>
          </h1>
        </TransitionEffect>

        <TransitionEffect direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-left justify-center gap-4 md:gap-6 mb-10">
            {/* Primary Apple blue call-to-action */}
            <Button asChild className={cn("w-full sm:w-auto min-w-[160px] h-12 rounded-full px-8 py-3 text-base", appleBlueButton)}>
              <a href="#contact">Connect With Me</a>
            </Button>
            {/* Secondary subtle Apple-style button */}
            <Button asChild className={cn("w-full sm:w-auto min-w-[160px] h-12 rounded-full px-8 py-3 text-base", appleSecondaryButton)}>
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </TransitionEffect>
      </div>
    </section>;
};
export default Hero;
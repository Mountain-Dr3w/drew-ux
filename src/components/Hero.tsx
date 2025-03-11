
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] relative flex items-center justify-center pt-24 md:pt-32">
      {/* Background elements for personality */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-32 rounded-[50%] bg-gradient-to-r from-black/2 via-black/1 to-muted blur-3xl -z-10 transform translate-y-[-45%] dark:from-white/2 dark:via-white/1 dark:to-muted" />
        
        {/* Decorative dots pattern with animation */}
        <div className="absolute -left-10 top-20 w-80 h-80 opacity-10 dark:opacity-5">
          <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-10 top-10 animate-pulse-slow"></div>
          <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-20 top-40 animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute w-2 h-2 rounded-full bg-black dark:bg-white left-40 top-20 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-1 h-1 rounded-full bg-black dark:bg-white left-60 top-30 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute w-1 h-1 rounded-full bg-black dark:bg-white left-70 top-60 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Accent shape with animation */}
        <div className="absolute right-10 md:right-20 top-40 w-20 h-20 md:w-40 md:h-40 rounded-full border border-black/10 dark:border-white/10 animate-float"></div>
        
        {/* Additional floating element */}
        <div className="absolute left-1/4 bottom-1/4 w-16 h-16 rounded-md border border-black/5 dark:border-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full relative">
        {/* Subtle tag line above heading */}
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-4">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
              Design Collective
            </span>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-7 text-balance">
              Bringing <span className="text-black dark:text-white relative group">
                Transformational
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black/20 dark:bg-white/20 transform origin-left transition-all duration-500 group-hover:scale-x-110"></span>
              </span> Design to <span className="text-black dark:text-white relative group">
                CivTech
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black/20 dark:bg-white/20 transform origin-left transition-all duration-500 group-hover:scale-x-110"></span>
              </span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.3}>
            <p className="shiftnudge-subheading max-w-2xl mb-10 text-pretty">
              Designing usable, accessible, and scalable software isn't easy. Let us do it for you.
            </p>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="font-medium text-sm">Work With Us</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 hover:scale-105 transform"
              >
                <span className="font-medium text-sm">View Projects</span>
              </a>
            </div>
          </TransitionEffect>
          
          {/* Client logos section with animations */}
          <TransitionEffect direction="up" delay={0.5}>
            <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10 text-center">
              <p className="text-xs uppercase tracking-wider text-black/50 dark:text-white/50 mb-5">Trusted by innovative teams</p>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                <div className="w-24 h-8 bg-black/10 dark:bg-white/10 rounded opacity-60 hover:opacity-100 transition-opacity transform hover:scale-105 duration-300"></div>
                <div className="w-24 h-8 bg-black/10 dark:bg-white/10 rounded opacity-60 hover:opacity-100 transition-opacity transform hover:scale-105 duration-300" style={{ transitionDelay: '0.1s' }}></div>
                <div className="w-24 h-8 bg-black/10 dark:bg-white/10 rounded opacity-60 hover:opacity-100 transition-opacity transform hover:scale-105 duration-300" style={{ transitionDelay: '0.2s' }}></div>
              </div>
            </div>
          </TransitionEffect>
        </div>
      </div>

      {/* Dynamic background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-radial from-transparent to-background opacity-40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;

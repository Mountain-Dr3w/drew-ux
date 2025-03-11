
import React from 'react';
import TransitionEffect from './TransitionEffect';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[85vh] relative flex items-center justify-center pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-32 rounded-[50%] bg-gradient-to-r from-black/2 via-black/1 to-muted blur-3xl -z-10 transform translate-y-[-45%] dark:from-white/2 dark:via-white/1 dark:to-muted" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="shiftnudge-heading mb-8 text-balance">
              Bringing <span className="text-black dark:text-white">Transformational</span> Design to <span className="text-black dark:text-white">CivTech</span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.3}>
            <p className="shiftnudge-subheading max-w-2xl mb-12 text-pretty">
              Designing usable, accessible, and scalable software isn't easy. Let us do it for you.
            </p>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 rounded hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-300"
            >
              <span className="font-medium text-sm">Work With Us</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

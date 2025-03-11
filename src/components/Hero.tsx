
import React from 'react';
import TransitionEffect from './TransitionEffect';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-72 rounded-[50%] bg-gradient-to-r from-accent/5 via-accent/3 to-muted blur-3xl -z-10 transform translate-y-[-45%]" />
        <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-gradient-to-r from-muted via-accent/3 to-accent/5 blur-3xl -z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col items-center text-center mt-20">
          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mb-6 text-balance">
              Creating <span className="gradient-text">transformative</span> digital services for <span className="gradient-text">government</span> and <span className="gradient-text">citizens</span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty">
              We're a specialized design consultancy helping public sector organizations improve citizen experiences through intuitive, accessible, and human-centered design.
            </p>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-7 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 shadow-sm"
            >
              <span>View our work</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </TransitionEffect>

          <div className="absolute top-40 right-10 md:right-40 w-12 h-12 rounded-full bg-accent/10 animate-float hidden md:block"></div>
          <div className="absolute top-60 left-10 md:left-40 w-8 h-8 rounded-full bg-accent/10 animate-float animation-delay-1000 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

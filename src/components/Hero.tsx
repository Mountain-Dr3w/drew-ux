
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-72 rounded-[50%] bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl -z-10 transform translate-y-[-45%]" />
        <div className="absolute bottom-0 -right-20 h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl -z-10" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col items-center text-center mt-20">
          <TransitionEffect direction="up" delay={0.1}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-500/10 dark:bg-blue-500/20 rounded-full mb-6 text-blue-800 dark:text-blue-300">
              UX/UI Designer
            </span>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mb-6 text-balance">
              Creating <span className="gradient-text">beautiful</span> digital experiences that <span className="gradient-text">connect</span> and <span className="gradient-text">inspire</span>
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10 text-pretty">
              I'm a designer focused on creating intuitive, seamless experiences that help brands connect with their audiences in meaningful ways.
            </p>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <a
              href="#projects"
              className="group flex items-center justify-center space-x-2 bg-blue-500 text-white px-7 py-3 rounded-full hover:bg-blue-600 transition-colors duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
            >
              <span>View projects</span>
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

          <div className="absolute top-40 right-10 md:right-40 w-12 h-12 rounded-full bg-blue-500/20 animate-float hidden md:block"></div>
          <div className="absolute top-60 left-10 md:left-40 w-8 h-8 rounded-full bg-cyan-500/20 animate-float animation-delay-1000 hidden md:block"></div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center justify-center text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

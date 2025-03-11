
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-72 rounded-[50%] bg-gradient-to-r from-gray-100 to-gray-50 blur-3xl -z-10 transform translate-y-[-45%]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="flex flex-col items-center text-center mt-20">
          <TransitionEffect direction="up" delay={0.1}>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/5 rounded-full mb-6">
              UX/UI Designer
            </span>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight max-w-4xl mb-6 text-balance">
              Creating beautiful digital experiences that connect and inspire
            </h1>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 text-pretty">
              I'm a designer focused on creating intuitive, seamless experiences that help brands connect with their audiences in meaningful ways.
            </p>
          </TransitionEffect>

          <TransitionEffect direction="up" delay={0.4}>
            <a
              href="#projects"
              className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-full hover:bg-black/90 transition-colors duration-300"
            >
              <span>View projects</span>
            </a>
          </TransitionEffect>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="flex flex-col items-center justify-center text-gray-400 hover:text-gray-800 transition-colors">
          <span className="text-sm mb-2">Scroll</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

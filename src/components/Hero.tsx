
import React, { useEffect, useRef } from 'react';
import TransitionEffect from './TransitionEffect';
import { ArrowRight } from 'lucide-react';

const SplitText: React.FC<{ text: string; baseDelay?: number }> = ({ text, baseDelay = 0 }) => {
  return (
    <span className="inline-block overflow-hidden">
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-2">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="inline-block animate-character-reveal"
              style={{
                animationDelay: `${baseDelay + (wordIndex * 0.05) + (charIndex * 0.015)}s`,
                animationFillMode: 'forwards',
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // This ensures the animation only plays once after initial load
    if (headingRef.current) {
      headingRef.current.style.opacity = '1';
    }
  }, []);

  return (
    <section className="min-h-[85vh] relative flex items-center justify-center pt-24 md:pt-32 z-0">
      {/* Background elements with subtle gradients */}
      <div className="absolute inset-0 overflow-hidden z-[-1]">
        {/* Lofi sketch elements with reduced opacity */}
        <div className="absolute top-20 right-[5%] w-24 h-24 border-2 border-dashed border-gray-300/20 dark:border-gray-700/20 rounded-md rotate-12 opacity-30 animate-float"></div>
        <div className="absolute top-40 left-[10%] w-16 h-16 border border-gray-300/20 dark:border-gray-700/20 rounded-full opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-8 bg-gray-100/5 dark:bg-gray-800/5 rounded-sm transform -rotate-6 animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[25%] left-[20%] w-12 h-12 border-2 border-gray-300/10 dark:border-gray-700/10 transform rotate-45 opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 w-full relative">
        {/* Subtle tag line above heading */}
        <TransitionEffect direction="up" delay={0.1}>
          <div className="text-center mb-4 flex flex-wrap justify-center gap-2">
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-200/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 shadow-sm">
              Human Factors Advocate
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-200/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 shadow-sm">
              End-to-End Designer
            </span>
            <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gray-200/80 dark:bg-gray-600/60 text-gray-700 dark:text-gray-200 shadow-sm">
              Product Strategist
            </span>
          </div>
        </TransitionEffect>

        <div className="flex flex-col items-center text-center">
          <h1 
            ref={headingRef}
            className="shiftnudge-heading mb-10 text-balance opacity-0"
          >
            <SplitText text="Designing usable, accessible, and scalable software isn't easy." baseDelay={0.3} />
            {' '}
            <span className="font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              <SplitText text="Let me do it for you." baseDelay={1.2} />
            </span>
          </h1>

          <TransitionEffect direction="up" delay={1.8}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-300 w-full sm:w-36 h-12 whitespace-nowrap z-10 shadow-md"
              >
                <span className="font-medium text-sm">Work With Me</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </a>
              
              <a
                href="#projects"
                className="group inline-flex items-center justify-center space-x-2 border border-black/10 dark:border-white/10 bg-transparent text-black dark:text-white px-6 py-3 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300 w-full sm:w-36 h-12 whitespace-nowrap z-10"
              >
                <span className="font-medium text-sm">View Projects</span>
              </a>
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default Hero;

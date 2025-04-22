
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      {/* Updated background with a dark, sophisticated off-black */}
      <div className="fixed inset-0 z-[-10] overflow-hidden">
        <div className="absolute inset-0 bg-[#1A1F2C] dark:bg-[#221F26]"></div>
      </div>
      
      {/* Subtle background elements */}
      <div className="fixed inset-0 overflow-hidden z-[-5]">
        {/* Large, soft gradient circles */}
        <div className="absolute top-1/4 left-[15%] w-[800px] h-[800px] rounded-full bg-blue-900/10 dark:bg-blue-900/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-[10%] w-[600px] h-[600px] rounded-full bg-purple-900/10 dark:bg-purple-900/5 blur-3xl"></div>
        
        {/* Dots pattern - very subtle */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>
      </div>
      
      <Navbar />
      <main className="relative z-0">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

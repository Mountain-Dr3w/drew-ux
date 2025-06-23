
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
    <div className="relative w-full min-h-screen">
      {/* More subtle gradient background applied to a fixed position div */}
      <div className="fixed inset-0 z-[-10] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/15 dark:via-purple-900/15 dark:to-pink-900/15 animate-gradient-shift" style={{ animationDuration: '30s' }}></div>
      </div>
      
      {/* Enhanced background elements with additional design elements */}
      <div className="fixed inset-0 overflow-hidden z-[-5]">
        {/* Blurred circles - made larger and more visible */}
        <div className="absolute top-1/4 left-[15%] w-96 h-96 rounded-full bg-blue-300/15 dark:bg-blue-500/15 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-[10%] w-96 h-96 rounded-full bg-purple-300/15 dark:bg-purple-500/15 blur-3xl"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 right-[5%] w-32 h-32 border-4 border-dashed border-gray-300/30 dark:border-gray-700/30 rounded-md rotate-12 opacity-40 animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-40 left-[10%] w-24 h-24 border-2 border-gray-300/30 dark:border-gray-700/30 rounded-circle opacity-40 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-[30%] right-[15%] w-40 h-12 bg-gray-100/10 dark:bg-gray-800/10 rounded-sm transform -rotate-6 animate-float" style={{ animationDuration: '12s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-[25%] left-[20%] w-20 h-20 border-4 border-gray-300/20 dark:border-gray-700/20 transform rotate-45 opacity-40 animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
        
        {/* Dots grid pattern - increased opacity to 15% */}
        <div className="absolute inset-0 opacity-15 dark:opacity-15" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 2px, transparent 2px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>
      
      <Navbar />
      <main className="relative z-0 flex flex-col items-center w-full max-w-[2200px] lg:px-16 xl:px-32 2xl:px-64 mx-auto">
        {/* 
          Use max-w-[2200px] to allow very wide screens, and responsive px for horizontal padding.
          This makes layout scale up for 4k but keeps content from getting too wide to be usable.
        */}
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

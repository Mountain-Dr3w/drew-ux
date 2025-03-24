
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
    <div className="relative overflow-hidden">
      {/* Animated gradient background now applied to the entire page */}
      <div className="fixed inset-0 overflow-hidden z-[-2]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 animate-gradient-shift" style={{ animationDuration: '20s' }}></div>
      </div>
      
      {/* Enhanced background elements with additional design elements */}
      <div className="fixed inset-0 overflow-hidden z-[-1]">
        {/* Blurred circles */}
        <div className="absolute top-1/4 left-[15%] w-64 h-64 rounded-full bg-blue-300/10 dark:bg-blue-500/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-[10%] w-80 h-80 rounded-full bg-purple-300/10 dark:bg-purple-500/10 blur-3xl"></div>
        
        {/* Floating geometric elements */}
        <div className="absolute top-20 right-[5%] w-24 h-24 border-2 border-dashed border-gray-300/20 dark:border-gray-700/20 rounded-md rotate-12 opacity-30 animate-float" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-40 left-[10%] w-16 h-16 border border-gray-300/20 dark:border-gray-700/20 rounded-full opacity-30 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-8 bg-gray-100/5 dark:bg-gray-800/5 rounded-sm transform -rotate-6 animate-float" style={{ animationDuration: '12s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-[25%] left-[20%] w-12 h-12 border-2 border-gray-300/10 dark:border-gray-700/10 transform rotate-45 opacity-30 animate-float" style={{ animationDuration: '9s', animationDelay: '2s' }}></div>
        
        {/* Add subtle patterns */}
        <div className="absolute top-1/2 left-[30%] w-40 h-40 opacity-5 dark:opacity-5">
          <img src="/lovable-uploads/Asset 3.svg" alt="" className="w-full h-full" />
        </div>
        <div className="absolute bottom-[20%] left-[5%] w-20 h-20 opacity-5 dark:opacity-5">
          <img src="/lovable-uploads/Asset 3.svg" alt="" className="w-full h-full" />
        </div>
        
        {/* Dots grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-5" 
             style={{ 
               backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}>
        </div>
      </div>
      
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Index;


import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import CustomCursor from '@/components/CustomCursor';

const Index: React.FC = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // Handle standard on-scroll animations
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

    // Handle section reveals with staggered timing
    if (sectionsRef.current.length > 0) {
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          // Add staggered animation classes
          section.style.opacity = '0';
          section.style.transform = 'translateY(30px)';
          section.style.transition = `opacity 0.8s ease, transform 0.8s ease`;
          section.style.transitionDelay = `${index * 0.2}s`;
          
          // Force browser reflow
          void section.offsetWidth;
          
          // Add animation
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Collect section refs
  const setSectionRef = (el: HTMLElement | null, index: number) => {
    sectionsRef.current[index] = el;
  };

  return (
    <div className="relative overflow-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <section ref={(el) => setSectionRef(el, 0)}>
          <Hero />
        </section>
        
        <section 
          ref={(el) => setSectionRef(el, 1)} 
          className="will-change-transform"
        >
          <Projects />
        </section>
        
        <section 
          ref={(el) => setSectionRef(el, 2)}
          className="will-change-transform"
        >
          <About />
        </section>
        
        <section 
          ref={(el) => setSectionRef(el, 3)}
          className="will-change-transform"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;

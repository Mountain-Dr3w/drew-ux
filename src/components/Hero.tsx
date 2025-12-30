import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = containerRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24 pt-20"
    >
      {/* Main content */}
      <div className="max-w-7xl">
        <div className="reveal mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">
            Product / Service Designer
          </span>
          <span className="text-sm text-muted-foreground tracking-wide">
            <span className="font-serif">Based in</span> Nashville, TN
          </span>
        </div>

        <h1 className="reveal reveal-delay-1 heading-xl mb-8">
          <span className="block">I design</span>
          <span className="block">
            <span className="font-serif">experiences</span> that
          </span>
          <span className="block">
            people{' '}
            <span className="text-accent">actually</span>
          </span>
          <span className="block">want to use.</span>
        </h1>

        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 sm:gap-8 mt-12">
          <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed">
            Human factors advocate crafting usable, accessible, and scalable software for defense & enterprise.
          </p>
        </div>

        <div className="reveal reveal-delay-3 flex flex-wrap gap-4 mt-12">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-6 py-4 bg-foreground text-background rounded-full text-sm font-medium transition-all hover:gap-5"
          >
            View my work
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-4 border border-foreground/20 rounded-full text-sm font-medium transition-all hover:border-foreground/40 hover:bg-foreground/5"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Floating accent shape */}
      <div className="absolute -right-20 top-1/3 w-40 h-40 md:w-64 md:h-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 bottom-1/4 w-32 h-32 md:w-48 md:h-48 rounded-full bg-accent/5 blur-2xl pointer-events-none" />
    </section>
  );
};

export default Hero;

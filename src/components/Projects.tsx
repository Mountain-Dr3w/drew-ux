import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
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
      id="work"
      ref={containerRef}
      className="section-padding px-6 md:px-12 lg:px-24"
    >
      {/* Section Header */}
      <div className="mb-12">
        <span className="reveal text-sm text-muted-foreground tracking-widest uppercase block mb-4">
          Featured Work
        </span>
        <h2 className="reveal reveal-delay-1 heading-lg">
          Projects that{' '}
          <span className="font-serif">matter</span>
        </h2>
      </div>

      {/* Featured Project Card */}
      <Link
        to="/case-study/forge"
        className="reveal reveal-delay-2 project-card group block rounded-2xl overflow-hidden mb-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
            <img
              src="/lovable-uploads/Service-bluepint.png"
              alt="FORGE Platform"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 flex flex-col justify-between">
            <div>
              {/* Label & Arrow */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm text-muted-foreground tracking-widest uppercase">
                  Service Design
                </span>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="heading-md mb-2">FORGE</h3>
              <p className="text-muted-foreground font-serif text-lg mb-4">
                Space Force DevSecOps Platform
              </p>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                Transformed developer onboarding from months to days through service blueprinting and friction logging. Created a self-service portal that reduced support burden and made blockers visible.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Service Design', 'DevOps', 'Space Force'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>

      {/* View All Link */}
      <div className="reveal reveal-delay-3 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-lg link-hover"
        >
          View all case studies
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;

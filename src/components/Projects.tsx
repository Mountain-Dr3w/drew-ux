import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    number: '01',
    title: 'Forward Edge',
    subtitle: 'Defense Logistics Intelligence',
    description:
      'Empowering military decision-makers to optimize readiness through data-driven insights.',
    tags: ['Product Strategy', 'Complex Data', 'Enterprise'],
    imageUrl: '/lovable-uploads/f0075149-b5c6-43b0-9085-723a84367eb7.png',
    url: '/case-study/deftech',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    number: '02',
    title: 'Debrief',
    subtitle: 'Post-Flight Analysis',
    description:
      'Streamlining flight safety workflows for aviation professionals through human-centered design.',
    tags: ['UX Research', 'Aviation', 'Safety Critical'],
    imageUrl: '/lovable-uploads/4c672ff6-c950-4435-afb3-f29ba004a6a3.png',
    url: '/case-study/debrief',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    number: '03',
    title: 'Veriflux',
    subtitle: 'Waste Traceability Platform',
    description:
      'Transforming food waste management through design thinking and sustainable tech.',
    tags: ['Design Systems', 'Sustainability', 'B2B'],
    imageUrl: '/lovable-uploads/e0e3973c-7205-4722-a4aa-d618d7144397.png',
    url: '/case-study/veriflux',
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    number: '04',
    title: 'Jigsaw',
    subtitle: 'Air Refueling Systems',
    description:
      'Modernizing complex military planning tools for maximum operational efficiency.',
    tags: ['Interaction Design', 'Defense', 'Legacy Systems'],
    imageUrl: '/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png',
    url: '/case-study/jigsaw',
    color: 'from-rose-500/20 to-pink-500/20',
  },
];

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
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
        <div>
          <span className="reveal text-sm text-muted-foreground tracking-widest uppercase block mb-4">
            Selected Work
          </span>
          <h2 className="reveal reveal-delay-1 heading-lg">
            Projects that{' '}
            <span className="font-serif">matter</span>
          </h2>
        </div>
        <p className="reveal reveal-delay-2 text-muted-foreground max-w-md">
          A collection of case studies from defense, enterprise, and consumer
          products—each solving complex challenges through user-centered design.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8 md:space-y-12">
        {projectsData.map((project, index) => (
          <Link
            key={project.number}
            to={project.url}
            className={`reveal project-card group block rounded-2xl overflow-hidden`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div
                className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden bg-gradient-to-br ${project.color}`}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  {/* Number & Arrow */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl md:text-6xl font-medium number-outline">
                      {project.number}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="heading-md mb-2">{project.title}</h3>
                  <p className="text-muted-foreground font-serif text-lg mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
        ))}
      </div>

      {/* View All Link */}
      <div className="reveal mt-16 md:mt-24 text-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-lg link-hover"
        >
          View all projects
          <ArrowUpRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const productDesignProjects = [
  {
    title: 'Jigsaw',
    subtitle: 'Air Refueling Systems',
    description:
      'Reduced daily planning time from 8+ hours to 1.5 hours. New planner onboarding dropped from 4 weeks to 3 days.',
    tags: ['Interaction Design', 'Defense', 'Legacy Systems'],
    imageUrl: '/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png',
    url: '/case-study/jigsaw',
  },
  {
    title: 'Debrief',
    subtitle: 'Post-Flight Analysis',
    description:
      'Saved a failing project. Increased debrief completion from 23% to 87%. Became a model for military software design.',
    tags: ['UX Research', 'Aviation', 'Safety Critical'],
    imageUrl: '/lovable-uploads/4c672ff6-c950-4435-afb3-f29ba004a6a3.png',
    url: '/case-study/debrief',
  },
  {
    title: 'Veriflux',
    subtitle: 'Waste Traceability Platform',
    description:
      '52% increase in daily active users. 78% drop in support tickets. Helped close Series A funding.',
    tags: ['Design Systems', 'Sustainability', 'B2B'],
    imageUrl: '/lovable-uploads/e0e3973c-7205-4722-a4aa-d618d7144397.png',
    url: '/case-study/veriflux',
  },
];

const serviceDesignProjects = [
  {
    title: 'FORGE',
    subtitle: 'Space Force DevSecOps Platform',
    description:
      'Transformed developer onboarding from months to days through service blueprinting and friction logging.',
    tags: ['Service Design', 'DevOps', 'Space Force'],
    imageUrl: '/lovable-uploads/portal-services.png',
    url: '/case-study/forge',
  },
];

interface Project {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageUrl: string;
  url: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <Link
    to={project.url}
    className="reveal project-card group block rounded-2xl overflow-hidden"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    {/* Image */}
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
    </div>

    {/* Content */}
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-medium mb-1">{project.title}</h3>
          <p className="text-muted-foreground font-serif">
            {project.subtitle}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300 flex-shrink-0">
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

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
  </Link>
);

const Portfolio: React.FC = () => {
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
    <div className="relative w-full min-h-screen noise">
      <CustomCursor />
      <Navbar />

      <main ref={containerRef} className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <span className="reveal text-sm text-muted-foreground tracking-widest uppercase block mb-4">
            Case Studies
          </span>
          <h1 className="reveal reveal-delay-1 heading-xl mb-6">
            Work <span className="font-serif">archive</span>
          </h1>
          <p className="reveal reveal-delay-2 text-xl text-muted-foreground leading-relaxed">
            A collection of case studies showcasing my approach to solving complex design challenges across defense, enterprise, and consumer products.
          </p>
        </div>

        {/* Service Design Section */}
        <section className="mb-20">
          <h2 className="reveal text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Service Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceDesignProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Product Design Section */}
        <section>
          <h2 className="reveal text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Product Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productDesignProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

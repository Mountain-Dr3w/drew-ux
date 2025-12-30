import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Linkedin, FileText } from 'lucide-react';

const Contact: React.FC = () => {
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
      id="contact"
      ref={containerRef}
      className="section-padding px-6 md:px-12 lg:px-24 border-t border-border"
    >
      <div className="max-w-5xl">
        {/* Section Label */}
        <div className="reveal mb-8">
          <span className="text-sm text-muted-foreground tracking-widest uppercase">
            Get in Touch
          </span>
        </div>

        {/* Main CTA */}
        <h2 className="reveal reveal-delay-1 heading-xl mb-8">
          Let's build{' '}
          <span className="font-serif">something</span>{' '}
          <span className="text-accent">great</span>.
        </h2>

        <p className="reveal reveal-delay-2 text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          I'm always interested in hearing about new projects, especially those
          tackling complex problems in defense, healthcare, or enterprise software.
        </p>

        {/* Email CTA */}
        <a
          href="mailto:drew@drewux.design"
          className="reveal reveal-delay-3 group inline-flex items-center gap-4 mb-16"
        >
          <span className="text-2xl md:text-3xl font-medium link-hover">
            drew@drewux.design
          </span>
          <div className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all duration-300">
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
          </div>
        </a>

        {/* Links */}
        <div className="reveal reveal-delay-4 flex flex-wrap gap-6">
          <a
            href="https://linkedin.com/in/drewjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Resume</span>
          </a>
          <a
            href="mailto:drew@drewux.design"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 md:mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & built by Drew McFarland
        </p>
        <p className="text-sm text-muted-foreground">
          Nashville, TN | {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
};

export default Contact;

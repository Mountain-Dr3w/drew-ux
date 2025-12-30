import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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

  const skills = [
    'Product Strategy',
    'User Research',
    'Interaction Design',
    'Design Systems',
    'Prototyping',
    'Usability Testing',
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="section-padding px-6 md:px-12 lg:px-24 relative"
    >
      {/* Section Label */}
      <div className="reveal mb-16 md:mb-24">
        <span className="text-sm text-muted-foreground tracking-widest uppercase">
          About
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Bio */}
        <div>
          <h2 className="reveal heading-lg mb-8">
            I believe great design is{' '}
            <span className="font-serif">invisible.</span> It just{' '}
            <span className="text-accent">works</span>.
          </h2>

          <div className="reveal reveal-delay-1 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              With over 8 years in product design, I specialize in transforming
              complex problems into intuitive solutions. My work spans defense
              technology, enterprise SaaS, and consumer products.
            </p>
            <p>
              I'm passionate about human factors and accessibility; designing
              software that works for everyone, not just the ideal user. Every
              interaction should feel effortless.
            </p>
            <p>
              When I'm not designing, you'll find me with my family, on the
              basketball court, or playing piano. These passions fuel my
              creativity and remind me why human-centered design matters.
            </p>
          </div>

          {/* Testimonial */}
          <div className="reveal reveal-delay-2 mt-12 p-8 border border-border rounded-2xl bg-card">
            <blockquote className="text-lg mb-4 leading-relaxed">
              "Drew's ability to understand users and deliver valuable outcomes
              has been instrumental. We wouldn't have operational adoption without him."
            </blockquote>
            <cite className="text-sm text-muted-foreground not-italic">
              Portfolio Product Lead
            </cite>
          </div>
        </div>

        {/* Right Column - Skills & Experience */}
        <div className="space-y-16">
          {/* Skills */}
          <div>
            <h3 className="reveal text-sm text-muted-foreground tracking-widest uppercase mb-6">
              Expertise
            </h3>
            <div className="reveal reveal-delay-1 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm border border-border rounded-full hover:border-foreground/30 hover:bg-foreground/5 transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="reveal text-sm text-muted-foreground tracking-widest uppercase mb-6">
              Experience
            </h3>
            <div className="reveal reveal-delay-2 space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start pb-6 border-b border-border last:border-0"
                >
                  <div>
                    <p className="font-medium">{exp.role}</p>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fun Facts */}
          <div>
            <h3 className="reveal text-sm text-muted-foreground tracking-widest uppercase mb-6">
              Outside Work
            </h3>
            <div className="reveal reveal-delay-3 grid grid-cols-2 gap-4">
              <div className="p-4 border border-border rounded-xl">
                <span className="text-2xl mb-2 block">👨‍👩‍👧</span>
                <p className="text-sm font-medium">Family First</p>
                <p className="text-xs text-muted-foreground">Young dad life</p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <span className="text-2xl mb-2 block">🏀</span>
                <p className="text-sm font-medium">Hoops Nerd</p>
                <p className="text-xs text-muted-foreground">Celtics fan</p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <span className="text-2xl mb-2 block">🎹</span>
                <p className="text-sm font-medium">Musician</p>
                <p className="text-xs text-muted-foreground">Piano & drums</p>
              </div>
              <div className="p-4 border border-border rounded-xl">
                <span className="text-2xl mb-2 block">📚</span>
                <p className="text-sm font-medium">Always Learning</p>
                <p className="text-xs text-muted-foreground">Design craft</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

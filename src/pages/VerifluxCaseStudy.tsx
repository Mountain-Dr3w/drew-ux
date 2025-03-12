
import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TransitionEffect from '@/components/TransitionEffect';

const VerifluxCaseStudy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    <div className="min-h-screen bg-background">
      {/* Header with navigation back to home */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2 group">
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container py-12 md:py-16 lg:py-24">
        {/* Hero Section */}
        <section className="mb-16 md:mb-24">
          <TransitionEffect direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-8">
              Veriflux Case Study
            </h1>
          </TransitionEffect>
          <TransitionEffect direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              How we helped Veriflux transform their security verification platform with a complete UX overhaul
            </p>
          </TransitionEffect>
          
          <div className="mt-10 grid place-items-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Veriflux platform dashboard interface" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Project Overview</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <p className="text-muted-foreground mb-4">
                  Veriflux approached our team with a challenge: their industry-leading identity verification platform had powerful capabilities but suffered from poor user experience and an outdated interface that was limiting adoption.
                </p>
                <p className="text-muted-foreground mb-4">
                  They needed a complete redesign that would simplify complex workflows, improve accessibility, and present a more modern, trustworthy appearance to enterprise clients in the financial sector.
                </p>
                <div className="mt-8 grid gap-6 md:grid-cols-3">
                  <div>
                    <h3 className="font-medium mb-2">Timeline</h3>
                    <p className="text-muted-foreground">12 weeks</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Services</h3>
                    <p className="text-muted-foreground">UX Research, UI Design, Development</p>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Industry</h3>
                    <p className="text-muted-foreground">Cybersecurity, FinTech</p>
                  </div>
                </div>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">The Challenge</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <p className="text-muted-foreground mb-4">
                  Veriflux's existing dashboard was built incrementally over years without a consistent design system. Users reported confusion with navigation, difficulty understanding verification status, and frustration with completing common tasks.
                </p>
                <p className="text-muted-foreground mb-8">
                  Customer support was handling an increasing volume of calls for basic platform usage questions, and user testing revealed that new users were taking too long to become proficient with the system.
                </p>
              </TransitionEffect>

              <TransitionEffect direction="up" delay={0.3}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Our Approach</h2>
                <p className="text-muted-foreground mb-4">
                  We began with comprehensive user research, conducting interviews with both administrators and end-users across different client organizations. This research informed a complete information architecture overhaul.
                </p>
                <p className="text-muted-foreground mb-4">
                  Working closely with Veriflux's security team, we designed a new dashboard that maintained all security requirements while dramatically simplifying workflows and improving visual hierarchy.
                </p>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">The Results</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <div className="grid gap-8 md:grid-cols-2 mb-8">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-2xl font-bold mb-2">+42%</h3>
                    <p className="text-muted-foreground">Increase in user satisfaction score</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-2xl font-bold mb-2">-35%</h3>
                    <p className="text-muted-foreground">Reduction in support tickets</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-2xl font-bold mb-2">28%</h3>
                    <p className="text-muted-foreground">Faster onboarding completion</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-2xl font-bold mb-2">3</h3>
                    <p className="text-muted-foreground">Major enterprise clients added</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  The redesigned platform launched to overwhelming positive feedback. The new interface not only improved usability metrics across all user types but also helped Veriflux secure three major enterprise clients who had previously expressed concerns about the platform's ease of use.
                </p>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Next Case Study */}
        <section className="mt-24 pt-10 border-t border-border">
          <div className="flex flex-col items-center text-center">
            <TransitionEffect direction="up" delay={0.1}>
              <p className="text-muted-foreground mb-4">Next Case Study</p>
              <h2 className="text-3xl font-medium tracking-tight mb-6">FreshStart Mobile App</h2>
            </TransitionEffect>
            <TransitionEffect direction="up" delay={0.2}>
              <Link 
                to="#" 
                className="group inline-flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-300"
              >
                <span className="font-medium">View Case Study</span>
                <ArrowRight 
                  size={16} 
                  className="transition-transform duration-300 group-hover:translate-x-1" 
                />
              </Link>
            </TransitionEffect>
          </div>
        </section>
      </main>
    </div>
  );
};

export default VerifluxCaseStudy;


import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, BarChart2, Users, Activity } from 'lucide-react';
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
            <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900/30 dark:text-green-400">
              Case Study #1
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-8">
              Establishing Design Culture and Facilitating User Adoption for a Waste Traceability Startup
            </h1>
          </TransitionEffect>
          <TransitionEffect direction="up" delay={0.2}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
              How Veriflux transformed its product experience to drive user adoption and create a sustainable impact in the food waste management industry.
            </p>
          </TransitionEffect>
          
          <div className="mt-10 grid place-items-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1616443580100-3155fefe2ff3" 
                alt="Garbage truck for the Veriflux waste traceability platform" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Background */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Background</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <p className="text-muted-foreground mb-6">
                  Veriflux is a waste traceability platform designed to help food service operations track and divert their waste streams. Their mission is to empower organizations to adopt sustainable practices by providing them with data-driven insights.
                </p>
                <p className="text-muted-foreground mb-6">
                  After successfully securing funding, the team recognized that their existing platform needed significant UX improvements to drive user adoption. As the company scaled, they needed to establish design processes and a cohesive visual language.
                </p>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Challenges</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                    </div>
                    <p>User feedback indicated that the existing platform was difficult to navigate and comprehend, leading to user frustration and low engagement.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                    </div>
                    <p>The startup lacked a cohesive design system, resulting in inconsistent UI elements and confusing user interactions across the platform.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                    </div>
                    <p>Data visualization features were not effectively communicating key insights, diminishing the platform's value proposition.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                    </div>
                    <p>The company needed to scale quickly while maintaining quality and implementing a sustainable design process.</p>
                  </li>
                </ul>
                
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Old dashboard design showing usability issues"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground italic">The original dashboard had usability issues and lacked clear information hierarchy.</p>
                  </div>
                </div>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Approach</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <h3 className="text-xl font-medium mb-4">Process</h3>
                <p className="text-muted-foreground mb-6">
                  We began with a comprehensive audit of the existing platform, conducting user interviews and usability testing to identify pain points. This led to a complete redesign that prioritized user needs while maintaining the platform's core functionality.
                </p>
                
                <h3 className="text-xl font-medium mb-4">Method</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>User Research & Interviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Design Audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Design System Creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Iterative Prototyping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Usability Testing</span>
                  </li>
                </ul>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* User Research */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">User Research</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <h3 className="text-xl font-medium mb-4">Research Objectives</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                    <span>Understand user workflows and pain points within the current platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                    <span>Identify key metrics and data points most valuable to users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                    <span>Discover opportunities for improving engagement and retention</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-medium mb-4">Methods</h3>
                <p className="text-muted-foreground mb-4">
                  We conducted 15 in-depth interviews with current and potential users, performed usability tests on the existing platform, and analyzed usage data to identify patterns.
                </p>
                
                <h3 className="text-xl font-medium mb-4">Results</h3>
                <p className="text-muted-foreground mb-4">
                  Our research revealed several key insights that informed our redesign:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                    <span>Users wanted clearer visualization of waste diversion metrics and progress over time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                    <span>The platform needed to support different user roles more effectively (facility managers vs. sustainability teams)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                    <span>Onboarding and education were critical to help users understand the value of waste tracking</span>
                  </li>
                </ul>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Problem Statement</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <div className="bg-card p-8 rounded-lg border border-border">
                  <p className="text-lg italic mb-4">
                    "Veriflux has a tool focused on design for function rather than design for adoption. While the system can track waste effectively, it lacks visual appeal and intuitive workflows, requiring a lot of manual training to maintain. How might we create an intuitive platform that drives user adoption while maintaining powerful functionality?"
                  </p>
                </div>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Solutions</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <h3 className="text-xl font-medium mb-4">Design System Creation</h3>
                <p className="text-muted-foreground mb-6">
                  We developed a comprehensive design system including component libraries, typography guidelines, and color systems. This established a foundation for consistent UX across all platform touchpoints.
                </p>
                
                <h3 className="text-xl font-medium mb-4">Information Architecture Overhaul</h3>
                <p className="text-muted-foreground mb-6">
                  We restructured the platform's navigation and content hierarchy based on user needs, creating intuitive pathways for different user types and common tasks.
                </p>
                
                <h3 className="text-xl font-medium mb-4">Data Visualization Enhancements</h3>
                <p className="text-muted-foreground mb-6">
                  We redesigned dashboards and reports to communicate insights more effectively, using appropriate chart types and visual hierarchies to highlight key metrics and trends.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Design system components"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground">The new design system created consistency across all platform elements.</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Information architecture diagrams"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground">Restructured navigation and content hierarchy for intuitive user flows.</p>
                  </div>
                </div>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">The Start - Design Audits</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <p className="text-muted-foreground mb-6">
                  We began by conducting thorough design audits of the existing platform, identifying inconsistencies, usability issues, and areas for improvement.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Original dashboard design"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-xs text-muted-foreground">Original dashboard with inconsistent UI elements</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Design audit process"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-xs text-muted-foreground">Audit process highlighting key issues</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="User journey mapping"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-xs text-muted-foreground">User journey maps revealing pain points</p>
                  </div>
                </div>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Design Improvements */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Design Improvements</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Before redesign"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground">Before: Cluttered interface with poor information hierarchy</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="After redesign"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground">After: Clean, accessible interface with clear hierarchy</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  The redesign focused on creating a clean, intuitive interface that prioritizes the most important information and actions for users. We implemented a consistent color system, typography hierarchy, and component library to ensure visual coherence across the platform.
                </p>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* New Features */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">New Features</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Enhanced dashboard"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground">Enhanced dashboard with customizable widgets and improved data visualization</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                      alt="Reporting features"
                      className="rounded-md w-full h-auto mb-3"
                    />
                    <p className="text-sm text-muted-foreground">New reporting features with interactive charts and export capabilities</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  We introduced several key features to enhance the platform's usability and value:
                </p>
                <ul className="space-y-4 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <BarChart2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Enhanced Data Visualization</h4>
                      <p>Interactive charts and graphs that make waste metrics more understandable and actionable</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Role-Based Dashboards</h4>
                      <p>Customized views for different user roles, ensuring each user sees the most relevant information</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Activity size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Progress Tracking</h4>
                      <p>Visual indicators of waste diversion progress and environmental impact achievements</p>
                    </div>
                  </li>
                </ul>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="mb-16 md:mb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <TransitionEffect direction="up" delay={0.1}>
                <h2 className="text-2xl font-medium tracking-tight mb-4">Results</h2>
              </TransitionEffect>
            </div>
            <div>
              <TransitionEffect direction="up" delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-3xl font-bold mb-2 text-green-500">200%</h3>
                    <p className="text-muted-foreground">Increase in platform engagement</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-3xl font-bold mb-2 text-green-500">+52%</h3>
                    <p className="text-muted-foreground">Improvement in user satisfaction scores</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h3 className="text-3xl font-bold mb-2 text-green-500">68%</h3>
                    <p className="text-muted-foreground">Reduction in training and onboarding time</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  The redesigned platform transformed how Veriflux's clients interact with waste data, resulting in significant improvements in user engagement and satisfaction. The new design system also enabled the Veriflux team to develop new features more efficiently while maintaining consistency.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Most importantly, the improved user experience led to higher adoption rates among client organizations, ultimately helping more businesses effectively track and reduce their food waste - furthering Veriflux's mission of environmental sustainability.
                </p>
                
                <div className="mt-8 bg-card p-6 rounded-lg border border-border overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Final platform interface"
                    className="rounded-md w-full h-auto mb-4"
                  />
                  <p className="text-sm text-muted-foreground text-center">The final Veriflux platform interface - helping businesses track and reduce food waste with an intuitive, data-driven approach.</p>
                </div>
              </TransitionEffect>
            </div>
          </div>
        </section>

        {/* Next Case Study */}
        <section className="mt-24 pt-10 border-t border-border">
          <div className="flex flex-col items-center text-center">
            <TransitionEffect direction="up" delay={0.1}>
              <p className="text-muted-foreground mb-4">Next Case Study</p>
              <h2 className="text-3xl font-medium tracking-tight mb-6">Municipal App Redesign</h2>
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

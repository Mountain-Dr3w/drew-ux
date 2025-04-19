
import React, { useEffect } from 'react';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import NextCaseStudySection from '@/components/case-study/NextCaseStudySection';
import DefTechIntroSection from '@/components/deftech/DefTechIntroSection';
import DefTechChallengesSection from '@/components/deftech/DefTechChallengesSection';
import DefTechApproachSection from '@/components/deftech/DefTechApproachSection';
import DefTechResearchSection from '@/components/deftech/DefTechResearchSection';
import DefTechSolutionSection from '@/components/deftech/DefTechSolutionSection';
import DefTechPrototypesSection from '@/components/deftech/DefTechPrototypesSection';
import DefTechResultsSection from '@/components/deftech/DefTechResultsSection';

const DefTechCaseStudy: React.FC = () => {
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
      <CaseStudyHeader />

      <main className="container py-12 md:py-16 lg:py-24">
        <CaseStudyHero 
          caseNumber="Case Study"
          title="Forward Edge: Empowering Defense Leaders with Strategic Logistics Intelligence"
          description="How we transformed complex logistics data into an intuitive decision support platform for defense leadership"
        />

        <DefTechIntroSection />
        <DefTechChallengesSection />
        <DefTechApproachSection />
        <DefTechResearchSection />
        <DefTechSolutionSection />
        <DefTechPrototypesSection />
        <DefTechResultsSection />
        
        <NextCaseStudySection 
          title="Modernizing Air Resource Management" 
          link="/case-study/jigsaw" 
        />
      </main>
    </div>
  );
};

export default DefTechCaseStudy;


import React, { useEffect } from 'react';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import ProblemStatementSection from '@/components/case-study/ProblemStatementSection';
import { Card } from '@/components/ui/card';
import JigsawIntroSection from '@/components/jigsaw/JigsawIntroSection';
import JigsawChallengesSection from '@/components/jigsaw/JigsawChallengesSection';
import JigsawApproachSection from '@/components/jigsaw/JigsawApproachSection';
import JigsawScreenshotsSection from '@/components/jigsaw/JigsawScreenshotsSection';
import JigsawResultsSection from '@/components/jigsaw/JigsawResultsSection';
import NextCaseStudySection from '@/components/case-study/NextCaseStudySection';

const JigsawCaseStudy: React.FC = () => {
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

  const jigsawProblemStatement = "The existing Jigsaw platform provides critical air resource management functionality but suffers from a cluttered interface and complex workflows that require extensive training. How might we redesign the system to maintain its powerful capabilities while dramatically improving usability, reducing training time, and enhancing operational efficiency?";

  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHeader />

      <main className="container py-12 md:py-16 lg:py-24">
        <CaseStudyHero 
          caseNumber="Case Study"
          title="Jigsaw: Modernizing Air Resource Management"
          description="How we redesigned a critical aerospace management platform to improve operational efficiency and user experience for military and aviation personnel."
        />

        <JigsawIntroSection />
        <JigsawChallengesSection />
        <ProblemStatementSection customStatement={jigsawProblemStatement} />
        <JigsawApproachSection />
        <JigsawScreenshotsSection />
        <JigsawResultsSection />
        
        <NextCaseStudySection 
          title="Establishing Design Culture for Waste Traceability" 
          link="/case-study/veriflux" 
        />
      </main>
    </div>
  );
};

export default JigsawCaseStudy;

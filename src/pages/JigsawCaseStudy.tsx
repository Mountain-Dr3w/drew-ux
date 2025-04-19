import React, { useEffect } from 'react';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import ProblemStatementSection from '@/components/case-study/ProblemStatementSection';
import JigsawIntroSection from '@/components/jigsaw/JigsawIntroSection';
import JigsawChallengesSection from '@/components/jigsaw/JigsawChallengesSection';
import JigsawApproachSection from '@/components/jigsaw/JigsawApproachSection';
import JigsawScreenshotsSection from '@/components/jigsaw/JigsawScreenshotsSection';
import JigsawMapPlanningSection from '@/components/jigsaw/JigsawMapPlanningSection';
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

  const jigsawProblemStatement = "Air Force tanker planners spend hours manually scheduling aerial refueling missions using legacy systems that don't effectively visualize complex resource dependencies. How might we redesign the planning interface to give planners a clear picture of tanker availability, receiver requirements, and potential conflicts while reducing planning time by at least 50%?";

  return (
    <div className="min-h-screen bg-background">
      <CaseStudyHeader />

      <main className="container py-12 md:py-16 lg:py-24">
        <CaseStudyHero 
          caseNumber="Case Study"
          title="Jigsaw: Reinventing Air Force Tanker Planning"
          description="How we redesigned the mission planning interface for Kessel Run's aerial refueling platform, dramatically reducing scheduling time and improving resource utilization for the Air Force."
        />

        <JigsawIntroSection />
        <JigsawChallengesSection />
        <ProblemStatementSection customStatement={jigsawProblemStatement} />
        <JigsawApproachSection />
        <JigsawScreenshotsSection />
        <JigsawMapPlanningSection />
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

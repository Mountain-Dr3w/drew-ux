import React, { useEffect } from 'react';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import BackgroundSection from '@/components/case-study/BackgroundSection';
import ChallengesSection from '@/components/case-study/ChallengesSection';
import ApproachSection from '@/components/case-study/ApproachSection';
import UserResearchSection from '@/components/case-study/UserResearchSection';
import ProblemStatementSection from '@/components/case-study/ProblemStatementSection';
import SolutionsSection from '@/components/case-study/SolutionsSection';
import DesignImplementationSection from '@/components/case-study/DesignImplementationSection';
import RouteTrackingSection from '@/components/case-study/RouteTrackingSection';
import AnalyticsDashboardSection from '@/components/case-study/AnalyticsDashboardSection';
import ResultsSection from '@/components/case-study/ResultsSection';
import NextCaseStudySection from '@/components/case-study/NextCaseStudySection';

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
      <CaseStudyHeader />

      <main className="container py-12 md:py-16 lg:py-24">
        <CaseStudyHero 
          caseNumber="Case Study"
          title="From Food Waste to Impact: A Design Transformation Story"
          description="How strategic UX drove adoption for a waste management and traceability startup"
        />

        <BackgroundSection />
        <ChallengesSection />
        <ProblemStatementSection />
        <ApproachSection />
        <UserResearchSection />
        <SolutionsSection />
        <DesignImplementationSection />
        <RouteTrackingSection />
        <AnalyticsDashboardSection />
        <ResultsSection />
        
        <NextCaseStudySection 
          title="Streamlining Post-Flight Analysis for Pilots"
          link="/case-study/debrief"
        />
      </main>
    </div>
  );
};

export default VerifluxCaseStudy;

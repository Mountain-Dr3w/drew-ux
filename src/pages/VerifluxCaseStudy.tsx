import React, { useEffect } from 'react';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import BackgroundSection from '@/components/case-study/BackgroundSection';
import ChallengesSection from '@/components/case-study/ChallengesSection';
import ApproachSection from '@/components/case-study/ApproachSection';
import UserResearchSection from '@/components/case-study/UserResearchSection';
import ProblemStatementSection from '@/components/case-study/ProblemStatementSection';
import SolutionsSection from '@/components/case-study/SolutionsSection';
import DesignAuditSection from '@/components/case-study/DesignAuditSection';
import DesignImprovementsSection from '@/components/case-study/DesignImprovementsSection';
import NewFeaturesSection from '@/components/case-study/NewFeaturesSection';
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
          caseNumber="Case Study #1"
          title="Establishing Design Culture and Facilitating User Adoption for a Waste Traceability Startup"
          description="How Veriflux transformed its product experience to drive user adoption and create a sustainable impact in the food waste management industry."
        />

        <BackgroundSection />
        <ChallengesSection />
        <ApproachSection />
        <UserResearchSection />
        <ProblemStatementSection />
        <SolutionsSection />
        <DesignAuditSection />
        <DesignImprovementsSection />
        <NewFeaturesSection />
        <ResultsSection />
        
        <NextCaseStudySection 
          title="Municipal App Redesign"
          link="#"
        />
      </main>
    </div>
  );
};

export default VerifluxCaseStudy;

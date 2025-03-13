
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
    
    // Set dark mode and store in localStorage
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
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
          title="Transforming a Food Waste Platform through Strategic UX Design"
          description="How Veriflux evolved from a functional tool to an intuitive platform that drives user adoption and creates sustainable impact in the food waste management industry."
        />

        <BackgroundSection />
        <ChallengesSection />
        <ProblemStatementSection />
        <ApproachSection />
        <UserResearchSection />
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

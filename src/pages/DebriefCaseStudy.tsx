import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import NextCaseStudySection from '@/components/case-study/NextCaseStudySection';
import DebriefIntroSection from '@/components/debrief/DebriefIntroSection';
import DebriefChallengesSection from '@/components/debrief/DebriefChallengesSection';
import DebriefApproachSection from '@/components/debrief/DebriefApproachSection';
import DebriefResearchSection from '@/components/debrief/DebriefResearchSection';
import DebriefPrototypesSection from '@/components/debrief/DebriefPrototypesSection';
import DebriefSolutionSection from '@/components/debrief/DebriefSolutionSection';
import DebriefResultsSection from '@/components/debrief/DebriefResultsSection';

const DebriefCaseStudy: React.FC = () => {
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
    <div className="min-h-screen bg-background noise">
      <CustomCursor />
      <CaseStudyHeader />

      <main className="container py-12 md:py-16 lg:py-24">
        <CaseStudyHero 
          caseNumber="Case Study"
          title="Debrief: Streamlining Post-Flight Analysis for Pilots"
          description="How a human-centered UX approach improved flight safety and operational efficiency for aviation professionals"
        />

        <DebriefIntroSection />
        <DebriefChallengesSection />
        <CaseStudySection title="Problem Statement">
          <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
            <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
              "Pilots and flight crews lacked an efficient, standardized system for post-flight debriefing, leading to inconsistent reporting, missed safety insights, and inefficient operational improvements."
            </p>
          </div>
        </CaseStudySection>
        <DebriefApproachSection />
        <DebriefResearchSection />
        <DebriefSolutionSection />
        <DebriefPrototypesSection />
        <DebriefResultsSection />
        <NextCaseStudySection
          title="Revolutionizing Logistics and Readiness for the USAF"
          link="/case-study/deftech"
        />
      </main>
    </div>
  );
};

export default DebriefCaseStudy;

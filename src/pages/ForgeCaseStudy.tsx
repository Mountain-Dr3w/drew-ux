import React, { useEffect } from 'react';
import CustomCursor from '@/components/CustomCursor';
import CaseStudyHeader from '@/components/case-study/CaseStudyHeader';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import ForgeIntroSection from '@/components/forge/ForgeIntroSection';
import ForgeDiscoverySection from '@/components/forge/ForgeDiscoverySection';
import ForgeFrictionSection from '@/components/forge/ForgeFrictionSection';
import ForgeSynthesisSection from '@/components/forge/ForgeSynthesisSection';
import ForgeSolutionSection from '@/components/forge/ForgeSolutionSection';
import ForgeResultsSection from '@/components/forge/ForgeResultsSection';

const ForgeCaseStudy: React.FC = () => {
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
          title="Transforming Developer Onboarding for Space Force's FORGE Platform"
          description="How service design reduced onboarding time from months to days for a mission-critical cloud platform"
        />

        <ForgeIntroSection />
        <ForgeDiscoverySection />
        <ForgeFrictionSection />
        <ForgeSynthesisSection />
        <ForgeSolutionSection />
        <ForgeResultsSection />
      </main>
    </div>
  );
};

export default ForgeCaseStudy;

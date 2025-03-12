
import React, { ReactNode } from 'react';
import TransitionEffect from '@/components/TransitionEffect';

interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
}

const CaseStudySection: React.FC<CaseStudySectionProps> = ({ title, children }) => {
  return (
    <section className="mb-16 md:mb-24">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <TransitionEffect direction="up" delay={0.1}>
            <h2 className="text-2xl font-medium tracking-tight mb-4">{title}</h2>
          </TransitionEffect>
        </div>
        <div>
          <TransitionEffect direction="up" delay={0.2}>
            {children}
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;

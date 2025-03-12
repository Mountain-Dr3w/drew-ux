
import React from 'react';
import CaseStudySection from './CaseStudySection';

const ChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="Challenges">
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
    </CaseStudySection>
  );
};

export default ChallengesSection;

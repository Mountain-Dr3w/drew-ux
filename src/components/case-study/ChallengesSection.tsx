
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
      
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Old dashboard design showing usability issues"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground italic">The original dashboard had usability issues and lacked clear information hierarchy.</p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ChallengesSection;

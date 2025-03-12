
import React from 'react';
import CaseStudySection from './CaseStudySection';
import { AlertTriangle } from 'lucide-react';

const ChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="Challenges">
      <div className="mb-8 bg-card p-6 rounded-lg border border-border">
        <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-amber-500" />
          <span>Key Challenges Identified</span>
        </h3>
        <ul className="space-y-6 text-muted-foreground">
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Poor User Experience</h4>
              <p className="text-muted-foreground">User feedback indicated that the existing platform was difficult to navigate and comprehend, leading to user frustration and low engagement.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Inconsistent Design System</h4>
              <p className="text-muted-foreground">The startup lacked a cohesive design system, resulting in inconsistent UI elements and confusing user interactions across the platform.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Ineffective Data Visualization</h4>
              <p className="text-muted-foreground">Data visualization features were not effectively communicating key insights, diminishing the platform's value proposition.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Scaling Design Processes</h4>
              <p className="text-muted-foreground">The company needed to scale quickly while maintaining quality and implementing a sustainable design process.</p>
            </div>
          </li>
        </ul>
      </div>
    </CaseStudySection>
  );
};

export default ChallengesSection;

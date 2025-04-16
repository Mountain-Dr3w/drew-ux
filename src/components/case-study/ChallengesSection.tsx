
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
              <h4 className="font-medium text-foreground mb-1">Poor Usability and Accessibility</h4>
              <p className="text-muted-foreground">As a small company, Veriflux did not have the resources to hire a full-time designer. Because of this, design was managed by the developers that were building the product. To be candid, it wasn't user-friendly.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Lack of User Empathy</h4>
              <p className="text-muted-foreground">Because of the lack of design support, user research was non-existent. As a result, the team was building something that they thought was valuable, but weren't gaining user adoption.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Racing the Clock</h4>
              <p className="text-muted-foreground">At Veriflux's current rate of adoption, funding was going to run out before their vision was fully realized.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Lack of Design Culture</h4>
              <p className="text-muted-foreground">Due to some bad experiences in the past and the lack of a full-time designer, the team struggled to grasp the value of design. Because of this, I had to fight to get ideas implemented by ensuring that I was clearly communicating the value of each decision that was made.</p>
            </div>
          </li>
        </ul>
      </div>
    </CaseStudySection>
  );
};

export default ChallengesSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { AlertTriangle } from 'lucide-react';

const JigsawChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="Challenges">
      <div className="mb-8 bg-card p-6 rounded-lg border border-border">
        <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
          <AlertTriangle size={20} className="text-amber-500" />
          <span>Planning Interface Pain Points</span>
        </h3>
        <ul className="space-y-6 text-muted-foreground">
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Complex Timeline Visualization</h4>
              <p className="text-muted-foreground">Tanker planners struggled to visualize hundreds of sorties, refueling operations, and aircraft maintenance windows simultaneously. The existing gantt interface was cluttered, making it difficult to spot conflicts and optimization opportunities.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Dependency Management</h4>
              <p className="text-muted-foreground">Aerial refueling operations involve complex dependencies between receiver aircraft, tankers, airspace, and crew availability. The original system lacked intuitive visual indicators for these relationships, forcing planners to maintain mental models of these connections.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Resource Conflicts</h4>
              <p className="text-muted-foreground">When planning aerial refueling missions, identifying and resolving resource conflicts (like double-booked tankers or airspace) was a manual process prone to errors. The system didn't automatically highlight these conflicts, requiring time-consuming review processes.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Learning Curve</h4>
              <p className="text-muted-foreground">The previous Jigsaw planning interface had a steep learning curve requiring weeks of training. This created operational challenges during personnel rotations and limited the ability to quickly onboard new planners during surge operations.</p>
            </div>
          </li>
        </ul>
      </div>
    </CaseStudySection>
  );
};

export default JigsawChallengesSection;

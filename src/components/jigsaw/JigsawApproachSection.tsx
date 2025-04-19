
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Users, Calendar, MoveHorizontal, ChartGantt } from 'lucide-react';

const JigsawApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <div className="space-y-8">
        <p className="text-muted-foreground">
          Working directly with tanker planners at the 609th Air Operations Center, I took a user-centered approach to redesigning the Jigsaw planning interface. The goal was to maintain the powerful functionality needed for complex aerial refueling operations while dramatically improving usability and visual clarity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                <Users className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-medium">User Research</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Conducted 12 contextual interviews with tanker planners during active planning sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Observed current planning workflows using both legacy systems and manual processes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created journey maps to identify pain points in the current gantt-based planning process</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                <ChartGantt className="text-purple-600 dark:text-purple-400" size={20} />
              </div>
              <h3 className="text-lg font-medium">Information Architecture</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Reorganized timeline data visualization hierarchy for mission-critical operations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created visual taxonomy for mission types, resource categories, and dependency types</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Designed progressive disclosure patterns for complex planning information</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-100 dark:bg-amber-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                <Calendar className="text-amber-600 dark:text-amber-400" size={20} />
              </div>
              <h3 className="text-lg font-medium">Prototyping</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created lo-fi wireframes of the gantt interface focused on planning workflows</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Developed interactive prototypes of key planning interactions like conflict resolution</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Used real mission data to test visualization effectiveness with actual scenarios</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center">
                <MoveHorizontal className="text-green-600 dark:text-green-400" size={20} />
              </div>
              <h3 className="text-lg font-medium">Iterative Testing</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Conducted usability testing with tanker planners using task-based scenarios</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Measured task completion time against baseline metrics from the legacy system</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Refined designs based on direct feedback from operational users</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawApproachSection;

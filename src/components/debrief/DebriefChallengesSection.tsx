
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { AlertOctagon } from 'lucide-react';

const DebriefChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="Challenges">
      <div className="mb-8 bg-card p-6 rounded-lg border border-border">
        <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
          <AlertOctagon size={20} className="text-amber-500" />
          <span>Key Challenges Identified</span>
        </h3>
        <ul className="space-y-6 text-muted-foreground">
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Inefficient Documentation</h4>
              <p className="text-muted-foreground">Pilots were spending excessive time on manual paperwork rather than focusing on critical flight analysis.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Inconsistent Reporting</h4>
              <p className="text-muted-foreground">Lack of standardization in reporting led to variable data quality and difficulty in identifying trends across flights.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Data Silos</h4>
              <p className="text-muted-foreground">Critical flight information was isolated between departments, preventing comprehensive analysis and learning.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Limited Insight Generation</h4>
              <p className="text-muted-foreground">Existing tools provided minimal data visualization and analysis capabilities to derive meaningful insights from flight data.</p>
            </div>
          </li>
        </ul>
      </div>
    </CaseStudySection>
  );
};

export default DebriefChallengesSection;

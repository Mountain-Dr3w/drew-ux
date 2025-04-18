
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { AlertOctagon, Timer, Database, Network } from 'lucide-react';

const DefTechChallengesSection: React.FC = () => {
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
              <h4 className="font-medium text-foreground mb-1">Data Fragmentation</h4>
              <p className="text-muted-foreground">Critical logistics data was scattered across multiple systems, making it difficult to get a comprehensive view of operations.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Delayed Decision Making</h4>
              <p className="text-muted-foreground">Leaders lacked real-time visibility into resource availability and operational status, leading to slower strategic decisions.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Complex Dependencies</h4>
              <p className="text-muted-foreground">Understanding the impact of logistics decisions across different operational areas was challenging due to complex interdependencies.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Limited Forecasting</h4>
              <p className="text-muted-foreground">Existing tools provided limited ability to predict future resource needs and potential bottlenecks in the supply chain.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
          "Defense logistics leaders need a unified platform that provides real-time operational visibility and predictive insights to make faster, more informed strategic decisions."
        </p>
      </div>
    </CaseStudySection>
  );
};

export default DefTechChallengesSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { FlightTakeoff, FlightLand, Clock } from 'lucide-react';

const DebriefIntroSection: React.FC = () => {
  return (
    <CaseStudySection title="Background">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Debrief is a comprehensive post-flight analysis platform designed for commercial and military flight crews. The application streamlines the critical process of documenting, analyzing, and learning from completed flights to enhance safety, efficiency, and operational excellence in aviation.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
            <div className="relative z-10 bg-transparent">
              <h3 className="text-xl font-medium mb-2">Standardized Reporting</h3>
              <p className="text-muted-foreground">Structured process for consistent documentation of flight events and anomalies</p>
            </div>
          </div>
          
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
            <div className="relative z-10 bg-transparent">
              <h3 className="text-xl font-medium mb-2">Safety Analysis</h3>
              <p className="text-muted-foreground">Identification of patterns, trends, and potential hazards across flight operations</p>
            </div>
          </div>
          
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
            <div className="relative z-10 bg-transparent">
              <h3 className="text-xl font-medium mb-2">Performance Tracking</h3>
              <p className="text-muted-foreground">Monitoring of crew performance metrics to identify training needs and improvements</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 border-l-4 border-blue-500 rounded-r-md mt-8">
          <p className="italic text-muted-foreground text-lg">
            In simplest terms: Debrief helps pilots and airlines transform flight experience into actionable insights that improve safety, efficiency, and training protocols.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefIntroSection;

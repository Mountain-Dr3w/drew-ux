
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Lightbulb, Target, LineChart, Users } from 'lucide-react';

const DebriefResearchSection: React.FC = () => {
  return (
    <CaseStudySection title="User Research">
      <div className="flex flex-col gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <Target className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Research Objectives</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Understand the current post-flight debriefing workflow across different aviation contexts</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Identify critical data points that pilots need to document and analyze</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Evaluate how flight data influences training, safety improvements, and operational efficiency</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <LineChart className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Key Findings</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Pilots spent an average of 45 minutes on post-flight paperwork, with only 15 minutes of actual analytical thinking</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>78% of surveyed pilots reported frustration with the inconsistency of debriefing tools across different airports</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Critical flight anomalies were often documented inconsistently, making trend analysis difficult</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Safety officers lacked tools to effectively identify patterns across multiple flights and crews</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <Lightbulb className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Opportunity Areas</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Streamline data entry with aviation-specific templates and standardized taxonomies</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Create a consistent cross-platform experience accessible from any location</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Develop analytical tools for identifying trends across flights, pilots, and routes</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Integrate with existing flight data systems to reduce manual data entry</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h4 className="text-lg font-medium mb-4">Persona: Commercial Airline Pilot</h4>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            "I need to efficiently document flight anomalies and ensure safety concerns are properly communicated to the next crew."
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Flies multiple routes with different aircraft types</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Limited time between flights for thorough documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Highly concerned with safety protocol adherence</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h4 className="text-lg font-medium mb-4">Persona: Flight Safety Officer</h4>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            "I need to identify patterns across flights to improve safety protocols and training programs."
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Responsible for analyzing flight data across the fleet</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Needs to correlate incidents across different flights</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Creates training recommendations based on data</span>
            </li>
          </ul>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefResearchSection;

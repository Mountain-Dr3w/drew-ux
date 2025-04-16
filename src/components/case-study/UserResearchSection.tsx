
import React from 'react';
import CaseStudySection from './CaseStudySection';
import { Lightbulb, Target, LineChart } from 'lucide-react';

const UserResearchSection: React.FC = () => {
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
              <span>Understand user workflows and pain points</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Identify key metrics most valuable to users</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Discover opportunities for improving engagement</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <LineChart className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Methods</h3>
          </div>
          <p className="text-muted-foreground mb-3 pl-[50px]">
            I employed a mixed-methods approach including:
          </p>
          <ul className="space-y-2 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>15 in-depth user interviews</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Usability testing with 8 participants</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Competitive analysis of 5 similar platforms</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <Lightbulb className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Key Insights</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Users wanted clearer visualization of waste metrics over time</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Different user roles needed role-specific views</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Onboarding was critical for understanding waste tracking value</span>
            </li>
          </ul>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default UserResearchSection;

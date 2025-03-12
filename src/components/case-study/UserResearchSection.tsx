
import React from 'react';
import CaseStudySection from './CaseStudySection';

const UserResearchSection: React.FC = () => {
  return (
    <CaseStudySection title="User Research">
      <h3 className="text-xl font-medium mb-4">Research Objectives</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
          <span>Understand user workflows and pain points within the current platform</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
          <span>Identify key metrics and data points most valuable to users</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
          <span>Discover opportunities for improving engagement and retention</span>
        </li>
      </ul>
      
      <h3 className="text-xl font-medium mb-4">Methods</h3>
      <p className="text-muted-foreground mb-4">
        We conducted 15 in-depth interviews with current and potential users, performed usability tests on the existing platform, and analyzed usage data to identify patterns.
      </p>
      
      <h3 className="text-xl font-medium mb-4">Results</h3>
      <p className="text-muted-foreground mb-4">
        Our research revealed several key insights that informed our redesign:
      </p>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
          <span>Users wanted clearer visualization of waste diversion metrics and progress over time</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
          <span>The platform needed to support different user roles more effectively (facility managers vs. sustainability teams)</span>
        </li>
        <li className="flex items-start gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
          <span>Onboarding and education were critical to help users understand the value of waste tracking</span>
        </li>
      </ul>
    </CaseStudySection>
  );
};

export default UserResearchSection;

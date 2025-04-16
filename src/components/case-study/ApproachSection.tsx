
import React from 'react';
import CaseStudySection from './CaseStudySection';

const ApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <div>
        <h3 className="text-xl font-medium mb-4">Process</h3>
        <p className="text-muted-foreground mb-4">
          I began my engagement with Veriflux with two phases:
        </p>
        <ol className="list-decimal list-inside space-y-4 text-muted-foreground mb-6 pl-4">
          <li className="pl-2">Developing a user research plan and recruiting participants that could help us answer our research questions</li>
          <li className="pl-2">Conducting comprehensive usability and accessibility audit of the existing tool to spot and fix existing heuristic issues</li>
        </ol>
      </div>
      
      <div>
        <p className="text-md font-medium mb-4 text-muted-foreground">Accessibility Audit Example</p>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/22025065-0466-45b1-ad87-e1c51db5aea0.png" 
            alt="Accessibility audit showing missing alt text for a Routes menu item" 
            className="w-full"
          />
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ApproachSection;

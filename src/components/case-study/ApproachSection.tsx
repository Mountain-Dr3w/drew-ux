
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
            src="/lovable-uploads/6e46e0b3-dbda-4749-bfae-96f938ead96e.png" 
            alt="Accessibility audit highlighting missing alt text for 'Routes' menu item" 
            className="w-full"
          />
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ApproachSection;

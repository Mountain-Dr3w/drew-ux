
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
      
      <div className="rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/lovable-uploads/46ce5b83-fce6-4daf-95e0-db5a0aec5fb4.png" 
          alt="Accessibility audit showing contrast issues in the navigation menu" 
          className="w-full"
        />
      </div>
    </CaseStudySection>
  );
};

export default ApproachSection;

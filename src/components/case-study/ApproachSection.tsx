
import React from 'react';
import { CheckCircle } from 'lucide-react';
import CaseStudySection from './CaseStudySection';

const ApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <h3 className="text-xl font-medium mb-4">Process</h3>
      <p className="text-muted-foreground mb-4">
        I began my engagement with Veriflux with two phases:
      </p>
      <ol className="list-decimal list-inside space-y-4 text-muted-foreground mb-6 pl-4">
        <li className="pl-2">Developing a user research plan and recruiting participants that could help us answer our research questions</li>
        <li className="pl-2">Conducting comprehensive usability and accessibility audit of the existing tool to spot and fix existing heuristic issues</li>
      </ol>
      
      <h3 className="text-xl font-medium mb-4">Method</h3>
      <ul className="space-y-2 text-muted-foreground mb-6">
        <li className="flex items-start gap-2">
          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>User Research & Interviews</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>Design Audits</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>Design System Creation</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>Iterative Prototyping</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>Usability Testing</span>
        </li>
      </ul>
    </CaseStudySection>
  );
};

export default ApproachSection;


import React from 'react';
import { CheckCircle } from 'lucide-react';
import CaseStudySection from './CaseStudySection';

const ApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <h3 className="text-xl font-medium mb-4">Process</h3>
      <p className="text-muted-foreground mb-6">
        I began with a comprehensive audit of the existing platform, conducting user interviews and usability testing to identify pain points. This led to a complete redesign that prioritized user needs while maintaining the platform's core functionality.
      </p>
      
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

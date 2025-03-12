
import React from 'react';
import CaseStudySection from './CaseStudySection';

const ProblemStatementSection: React.FC = () => {
  return (
    <CaseStudySection title="Problem Statement">
      <div className="bg-card p-8 rounded-lg border border-border">
        <p className="text-lg italic mb-4">
          "Veriflux has a tool focused on design for function rather than design for adoption. While the system can track waste effectively, it lacks visual appeal and intuitive workflows, requiring a lot of manual training to maintain. How might we create an intuitive platform that drives user adoption while maintaining powerful functionality?"
        </p>
      </div>
    </CaseStudySection>
  );
};

export default ProblemStatementSection;

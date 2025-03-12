
import React from 'react';
import CaseStudySection from './CaseStudySection';

const BackgroundSection: React.FC = () => {
  return (
    <CaseStudySection title="Background">
      <p className="text-muted-foreground mb-6">
        Veriflux is a waste traceability platform designed to help food service operations track and divert their waste streams. Their mission is to empower organizations to adopt sustainable practices by providing them with data-driven insights.
      </p>
      <p className="text-muted-foreground mb-6">
        After successfully securing funding, the team recognized that their existing platform needed significant UX improvements to drive user adoption. As the company scaled, they needed to establish design processes and a cohesive visual language.
      </p>
    </CaseStudySection>
  );
};

export default BackgroundSection;

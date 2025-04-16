
import React from 'react';
import CaseStudySection from './CaseStudySection';

const BackgroundSection: React.FC = () => {
  return (
    <CaseStudySection title="Background">
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        Veriflux is a waste traceability platform designed to help food service operations track and divert their waste streams. Their mission is to empower organizations to adopt sustainable practices by providing them with data-driven insights.
      </p>
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        After successfully securing seed funding, the team recognized that their existing platform needed significant UX improvements to drive user adoption. As the company scaled from early adopters to mainstream clients, they needed to establish design processes and a cohesive visual language that would support their growth.
      </p>

      <div className="bg-muted/30 p-6 border-l-4 border-green-500 rounded-r-md">
        <p className="italic text-muted-foreground text-lg">
          English Translation: Veriflux is a web app that allows waste management companies to track requests for used food stock pickups, dispatch drivers, and track inventory in transit to dropoff points (typically landfills or recycling plants)
        </p>
      </div>
    </CaseStudySection>
  );
};

export default BackgroundSection;

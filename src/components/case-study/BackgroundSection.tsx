
import React from 'react';
import CaseStudySection from './CaseStudySection';

const BackgroundSection: React.FC = () => {
  return (
    <CaseStudySection title="Background">
      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
        Veriflux is a waste-to-energy platform that provides traceability across complex renewable fuel supply chains. Veriflux's immutable data framework, state-of-the-art web platform, and integration-centric APIs help renewable fuel producers meet Federal and State traceability requirements.
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

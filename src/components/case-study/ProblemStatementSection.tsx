
import React from 'react';
import CaseStudySection from './CaseStudySection';

interface ProblemStatementSectionProps {
  customStatement?: string;
}

const ProblemStatementSection: React.FC<ProblemStatementSectionProps> = ({ 
  customStatement 
}) => {
  const defaultStatement = "Potential users were hesitant to adopt Veriflux because of perceived administrative burden, unusable UI, and a lack of added value over existing processes.";
  
  const statement = customStatement || defaultStatement;
  
  return (
    <CaseStudySection title="Problem Statement">
      <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
          "{statement}"
        </p>
      </div>
    </CaseStudySection>
  );
};

export default ProblemStatementSection;

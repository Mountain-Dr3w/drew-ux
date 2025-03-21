
import React from 'react';
import CaseStudySection from './CaseStudySection';

interface ProblemStatementSectionProps {
  customStatement?: string;
}

const ProblemStatementSection: React.FC<ProblemStatementSectionProps> = ({ 
  customStatement 
}) => {
  const defaultStatement = "Veriflux has a tool focused on design for function rather than design for adoption. While the system can track waste effectively, it lacks visual appeal and intuitive workflows, requiring a lot of manual training to maintain. How might we create an intuitive platform that drives user adoption while maintaining powerful functionality?";
  
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

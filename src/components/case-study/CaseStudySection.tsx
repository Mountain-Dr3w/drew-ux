import React, { ReactNode } from 'react';
import TransitionEffect from '@/components/TransitionEffect';
interface CaseStudySectionProps {
  title: string;
  children: ReactNode;
}
const CaseStudySection: React.FC<CaseStudySectionProps> = ({
  title,
  children
}) => {
  return <section className="mb-20 md:mb-28">
      
    </section>;
};
export default CaseStudySection;
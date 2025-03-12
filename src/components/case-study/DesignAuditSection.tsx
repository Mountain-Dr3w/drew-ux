
import React from 'react';
import CaseStudySection from './CaseStudySection';

const DesignAuditSection: React.FC = () => {
  return (
    <CaseStudySection title="The Start - Design Audits">
      <p className="text-muted-foreground mb-6">
        We began by conducting thorough design audits of the existing platform, identifying inconsistencies, usability issues, and areas for improvement.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Original dashboard design"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-xs text-muted-foreground">Original dashboard with inconsistent UI elements</p>
        </div>
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Design audit process"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-xs text-muted-foreground">Audit process highlighting key issues</p>
        </div>
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="User journey mapping"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-xs text-muted-foreground">User journey maps revealing pain points</p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DesignAuditSection;

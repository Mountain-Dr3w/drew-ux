
import React from 'react';
import CaseStudySection from './CaseStudySection';

const DesignImprovementsSection: React.FC = () => {
  return (
    <CaseStudySection title="Design Improvements">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Before redesign"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground">Before: Cluttered interface with poor information hierarchy</p>
        </div>
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="After redesign"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground">After: Clean, accessible interface with clear hierarchy</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">
        The redesign focused on creating a clean, intuitive interface that prioritizes the most important information and actions for users. We implemented a consistent color system, typography hierarchy, and component library to ensure visual coherence across the platform.
      </p>
    </CaseStudySection>
  );
};

export default DesignImprovementsSection;

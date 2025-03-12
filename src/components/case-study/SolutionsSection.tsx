
import React from 'react';
import CaseStudySection from './CaseStudySection';

const SolutionsSection: React.FC = () => {
  return (
    <CaseStudySection title="Solutions">
      <h3 className="text-xl font-medium mb-4">Design System Creation</h3>
      <p className="text-muted-foreground mb-6">
        We developed a comprehensive design system including component libraries, typography guidelines, and color systems. This established a foundation for consistent UX across all platform touchpoints.
      </p>
      
      <h3 className="text-xl font-medium mb-4">Information Architecture Overhaul</h3>
      <p className="text-muted-foreground mb-6">
        We restructured the platform's navigation and content hierarchy based on user needs, creating intuitive pathways for different user types and common tasks.
      </p>
      
      <h3 className="text-xl font-medium mb-4">Data Visualization Enhancements</h3>
      <p className="text-muted-foreground mb-6">
        We redesigned dashboards and reports to communicate insights more effectively, using appropriate chart types and visual hierarchies to highlight key metrics and trends.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Design system components"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground">The new design system created consistency across all platform elements.</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Information architecture diagrams"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground">Restructured navigation and content hierarchy for intuitive user flows.</p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default SolutionsSection;

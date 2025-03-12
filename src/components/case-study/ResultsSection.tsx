
import React from 'react';
import CaseStudySection from './CaseStudySection';

const ResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-3xl font-bold mb-2 text-green-500">200%</h3>
          <p className="text-muted-foreground">Increase in platform engagement</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-3xl font-bold mb-2 text-green-500">+52%</h3>
          <p className="text-muted-foreground">Improvement in user satisfaction scores</p>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-3xl font-bold mb-2 text-green-500">68%</h3>
          <p className="text-muted-foreground">Reduction in training and onboarding time</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-4">
        The redesigned platform transformed how Veriflux's clients interact with waste data, resulting in significant improvements in user engagement and satisfaction. The new design system also enabled the Veriflux team to develop new features more efficiently while maintaining consistency.
      </p>
      
      <p className="text-muted-foreground mb-4">
        Most importantly, the improved user experience led to higher adoption rates among client organizations, ultimately helping more businesses effectively track and reduce their food waste - furthering Veriflux's mission of environmental sustainability.
      </p>
      
      <div className="mt-8 bg-card p-6 rounded-lg border border-border overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
          alt="Final platform interface"
          className="rounded-md w-full h-auto mb-4"
        />
        <p className="text-sm text-muted-foreground text-center">The final Veriflux platform interface - helping businesses track and reduce food waste with an intuitive, data-driven approach.</p>
      </div>
    </CaseStudySection>
  );
};

export default ResultsSection;

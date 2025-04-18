
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { PenTool, Users, LineChart } from 'lucide-react';

const DefTechApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <div>
        <h3 className="text-xl font-medium mb-4">Our Process</h3>
        <p className="text-muted-foreground mb-4">
          I led the UX design effort for CyberShield using a four-phase approach:
        </p>
        
        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="relative pl-12 pb-10">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Discovery & Research (6 weeks)</h4>
              <p className="text-muted-foreground mb-2">Conducted contextual inquiries with 24 security analysts and stakeholders across 5 defense contractors to understand workflows, pain points, and information needs.</p>
            </div>
            
            <div className="relative pl-12 pb-10">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Design Exploration (4 weeks)</h4>
              <p className="text-muted-foreground mb-2">Created information architecture, user flows, and wireframes based on research insights, focusing on simplifying complex data visualization while maintaining depth of information.</p>
            </div>
            
            <div className="relative pl-12 pb-10">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Prototype & Testing (5 weeks)</h4>
              <p className="text-muted-foreground mb-2">Developed interactive prototypes and conducted usability testing with security teams from three major defense contractors, iterating based on feedback.</p>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Implementation & Validation (8 weeks)</h4>
              <p className="text-muted-foreground">Collaborated closely with engineering teams to implement the design system, created documentation for complex components, and conducted post-launch validation studies.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-md font-medium mb-4 text-muted-foreground">UX Research Methods</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center bg-card p-6 rounded-lg border border-border">
            <Users className="h-10 w-10 text-blue-500 mb-3" />
            <h4 className="text-lg font-medium mb-2">Contextual Inquiry</h4>
            <p className="text-muted-foreground text-center">Observed security teams in their natural environment to understand real-world workflows</p>
          </div>
          <div className="flex flex-col items-center bg-card p-6 rounded-lg border border-border">
            <LineChart className="h-10 w-10 text-purple-500 mb-3" />
            <h4 className="text-lg font-medium mb-2">Task Analysis</h4>
            <p className="text-muted-foreground text-center">Documented detailed steps in threat identification and response processes</p>
          </div>
          <div className="flex flex-col items-center bg-card p-6 rounded-lg border border-border">
            <PenTool className="h-10 w-10 text-green-500 mb-3" />
            <h4 className="text-lg font-medium mb-2">Collaborative Design</h4>
            <p className="text-muted-foreground text-center">Conducted workshops with security teams to co-create visualization concepts</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechApproachSection;

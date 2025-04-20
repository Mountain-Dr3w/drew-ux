
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { PenTool, Users, LineChart } from 'lucide-react';

const DebriefApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <div>
        <h3 className="text-xl font-medium mb-4">My Process</h3>
        <p className="text-muted-foreground mb-4">
          I led the UX design effort for Debrief using a comprehensive approach focused on aviation-specific needs:
        </p>
        
        <div className="bg-card p-8 rounded-lg border border-border mb-8">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="relative pl-12 pb-10">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Immersive Research</h4>
              <p className="text-muted-foreground mb-2">Conducted in-depth interviews with 32 pilots from commercial and military backgrounds, observed 15 actual post-flight debriefing sessions, and analyzed existing documentation processes.</p>
            </div>
            
            <div className="relative pl-12 pb-10">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Workflow Optimization</h4>
              <p className="text-muted-foreground mb-2">Mapped the ideal post-flight analysis process through collaborative sessions with flight safety officers, operations managers, and pilots to identify critical information needs and pain points.</p>
            </div>
            
            <div className="relative pl-12 pb-10">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Iterative Prototyping</h4>
              <p className="text-muted-foreground mb-2">Developed multiple iterations of the interface with a focus on minimizing cognitive load during the debriefing process while ensuring comprehensive data capture.</p>
            </div>
            
            <div className="relative pl-12">
              <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-background"></div>
              <h4 className="font-medium text-lg mb-2">Field Validation</h4>
              <p className="text-muted-foreground">Tested prototypes in actual operational environments across three major airlines and two military bases, gathering quantitative and qualitative feedback under realistic conditions.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <p className="text-md font-medium mb-4 text-muted-foreground">Key Design Principles</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Pilot-Centered Interface</h4>
            <p className="text-muted-foreground text-center">Designed to match pilots' mental models with aviation-specific terminology and workflows</p>
          </div>
          <div className="flex flex-col items-center bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Minimal Interaction Design</h4>
            <p className="text-muted-foreground text-center">Streamlined data entry requiring fewer clicks and less typing than traditional methods</p>
          </div>
          <div className="flex flex-col items-center bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Progressive Disclosure</h4>
            <p className="text-muted-foreground text-center">Information complexity increases as users progress through the workflow, reducing cognitive load</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefApproachSection;

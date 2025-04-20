
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { LineChart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const DebriefPrototypesSection: React.FC = () => {
  return (
    <CaseStudySection title="Prototypes & Testing">
      <div className="space-y-10">
        <p className="text-base text-muted-foreground mb-6">
          Throughout the design process, we created and tested multiple iterations of the Debrief interface, refining our approach based on continuous feedback from pilots, safety officers, and airline management.
        </p>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Flight Dashboard Iteration</h3>
          <div className="bg-card p-3 rounded-lg border border-border overflow-hidden">
            <AspectRatio ratio={16/9} className="bg-[#F6F6F7] rounded-lg mb-3">
              <img 
                src="/lovable-uploads/4e5fccb9-43f2-4e92-bbaf-e78eb58e3d02.png" 
                alt="Debrief application dashboard showing scheduled sorties with flight numbers and times"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-base font-medium mb-1 text-white">Main Dashboard</h3>
                <p className="text-white/80 text-xs">
                  Sortie overview with flight schedule and debriefing status
                </p>
              </div>
            </AspectRatio>
            <div className="bg-muted/30 p-2 rounded-md">
              <h4 className="text-base font-medium mb-1">Usability Findings</h4>
              <p className="text-sm text-muted-foreground">
                Initial testing showed pilots needed easier access to scheduled flights and clearer visual indicators for completed vs. pending debriefs.
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-muted/30 p-4 rounded-lg">
            <h4 className="text-xl font-medium mb-2 flex items-center gap-2">
              <LineChart className="h-5 w-5 text-blue-500" />
              Testing Insights
            </h4>
            <ul className="space-y-2 text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                <span>Pilots wanted a clear status overview of all flights requiring debriefing</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                <span>Time-based visual organization proved most intuitive for flight scheduling</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                <span>Quick-action buttons for starting new debriefs significantly improved workflow</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Flight Details Interface</h3>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/1bb1faec-b5ba-4e58-861c-4c1a9b7e7d5f.png" 
                alt="Debrief flight detail screen showing mission details, takeoff and landing information"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                <div className="bg-background/90 p-2 rounded-md inline-block">
                  <p className="text-sm text-muted-foreground">Flight details interface with critical mission parameters</p>
                </div>
              </div>
            </AspectRatio>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3">Key Design Decisions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span className="text-base text-muted-foreground">Implemented sidebar navigation for quick access to different sections of the debrief</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span className="text-base text-muted-foreground">Used progressive disclosure to focus pilot attention on one section at a time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span className="text-base text-muted-foreground">Integrated contextual help and standardized input options for critical flight parameters</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Usability Testing Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">88%</div>
              <h4 className="text-xl font-medium mb-1">Task Completion</h4>
              <p className="text-base text-muted-foreground">
                Success rate for completing a full flight debrief
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">62%</div>
              <h4 className="text-xl font-medium mb-1">Time Savings</h4>
              <p className="text-base text-muted-foreground">
                Reduction in time required to complete debriefing
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">93%</div>
              <h4 className="text-xl font-medium mb-1">User Satisfaction</h4>
              <p className="text-base text-muted-foreground">
                Positive feedback on the intuitive interface design
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefPrototypesSection;

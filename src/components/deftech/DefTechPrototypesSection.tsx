import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { LineChart } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const DefTechPrototypesSection: React.FC = () => {
  return (
    <CaseStudySection title="Prototypes & Testing">
      <div className="space-y-10">
        <p className="text-base text-muted-foreground mb-6">
          Throughout the design process, we created and tested multiple iterations of key interface components, refining our approach based on continuous feedback from logistics managers and supply chain experts.
        </p>
        
        <div>
          <h3 className="text-xl font-medium mb-4">Supply Chain Visualization</h3>
          <div className="bg-card p-3 rounded-lg border border-border overflow-hidden">
            <div className="relative bg-[#F6F6F7] rounded-lg h-52 mb-3">
              <WireframeImage />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-base font-medium mb-1">Early Wireframe</h3>
                <p className="text-white/80 text-xs">
                  Initial lo-fi wireframe with basic data visualization elements
                </p>
              </div>
            </div>
            <div className="bg-muted/30 p-2 rounded-md">
              <h4 className="text-base font-medium mb-1">Early Iteration</h4>
              <p className="text-sm text-muted-foreground">
                Initial concept focused on displaying raw logistics data. Testing revealed the need for more intuitive, actionable insights.
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
                <span>Users preferred real-time visualization of fleet and inventory status</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                <span>Interactive filtering for resource allocation was crucial</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                <span>Predictive analytics helped in proactive decision-making</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Resource Management Dashboard</h3>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img 
                src="/lovable-uploads/8c53e158-8a65-4d2b-a58f-1003b557be43.png" 
                alt="Forward Edge logistics dashboard showing metrics, inventory optimization, and predictive analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                <div className="bg-background/90 p-2 rounded-md inline-block">
                  <p className="text-sm text-muted-foreground">High-fidelity mockup of the logistics dashboard</p>
                </div>
              </div>
            </AspectRatio>
            <div className="p-6">
              <h4 className="text-xl font-medium mb-3">Key Design Decisions</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span className="text-base text-muted-foreground">Created simplified resource allocation scoring for easy decision-making</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span className="text-base text-muted-foreground">Implemented drill-down capabilities for detailed inventory and fleet management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span className="text-base text-muted-foreground">Added comparative metrics to show efficiency improvements over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Usability Testing Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">91%</div>
              <h4 className="text-xl font-medium mb-1">Task Completion</h4>
              <p className="text-base text-muted-foreground">
                High success rate for critical logistics management tasks
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">65%</div>
              <h4 className="text-xl font-medium mb-1">Time Reduction</h4>
              <p className="text-base text-muted-foreground">
                Significant decrease in time required for resource allocation
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">89%</div>
              <h4 className="text-xl font-medium mb-1">User Satisfaction</h4>
              <p className="text-base text-muted-foreground">
                Positive feedback on the intuitive logistics management interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechPrototypesSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { LineChart, Network, Layers } from 'lucide-react';

const DefTechPrototypesSection: React.FC = () => {
  return (
    <CaseStudySection title="Prototypes & Testing">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground mb-8">
          Throughout the design process, we created and tested multiple iterations of key interface components, refining our approach based on continuous feedback from security analysts and stakeholders.
        </p>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Threat Network Visualization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
              <div className="relative bg-muted/50 rounded-lg h-64 mb-4 flex items-center justify-center">
                <Network className="w-32 h-32 text-blue-200" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                  <div className="bg-background/90 p-2 rounded-md inline-block">
                    <p className="text-xs text-muted-foreground">Early wireframe prototype</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <h4 className="text-base font-medium mb-2">Early Iteration</h4>
                <p className="text-sm text-muted-foreground">
                  Initial concept focused on showing all connections. Testing revealed this was overwhelming for users and prioritization was needed.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
              <div className="relative bg-muted/50 rounded-lg h-64 mb-4 flex items-center justify-center">
                <Network className="w-32 h-32 text-blue-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                  <div className="bg-background/90 p-2 rounded-md inline-block">
                    <p className="text-xs text-muted-foreground">Final interactive prototype</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <h4 className="text-base font-medium mb-2">Final Design</h4>
                <p className="text-sm text-muted-foreground">
                  Refined visualization with severity-based highlighting, interactive filtering, and progressive disclosure of relationship details.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-muted/30 p-4 rounded-lg">
            <h4 className="text-base font-medium mb-2 flex items-center">
              <LineChart className="mr-2 h-4 w-4 text-blue-500" />
              Testing Insights
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
                <span>Users consistently preferred visualizations that highlighted critical threats first</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
                <span>Interactive filtering was essential for focusing on relevant threat clusters</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
                <span>Analysts needed to quickly switch between network and timeline views</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Executive Dashboard</h3>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="relative bg-muted/50 h-80 flex items-center justify-center">
              <Layers className="w-32 h-32 text-purple-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                <div className="bg-background/90 p-2 rounded-md inline-block">
                  <p className="text-xs text-muted-foreground">High-fidelity mockup of the executive dashboard</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium mb-3">Key Design Decisions</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span>Created simplified risk scoring that translates technical details into business impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span>Implemented drill-down capabilities for executives who need additional context</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span>Added comparative metrics to show security posture improvements over time</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Usability Testing Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-green-500 mb-2">93%</div>
              <h4 className="text-lg font-medium mb-1">Task Completion</h4>
              <p className="text-sm text-muted-foreground">
                High success rate for critical security analysis tasks with the new interface
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-blue-500 mb-2">68%</div>
              <h4 className="text-lg font-medium mb-1">Time Reduction</h4>
              <p className="text-sm text-muted-foreground">
                Significant decrease in time required to identify related threats
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-purple-500 mb-2">87%</div>
              <h4 className="text-lg font-medium mb-1">User Satisfaction</h4>
              <p className="text-sm text-muted-foreground">
                Positive feedback on the intuitive nature of the new visualization tools
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechPrototypesSection;

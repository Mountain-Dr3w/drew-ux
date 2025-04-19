
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { LineChart, Truck, Layers } from 'lucide-react';

const DefTechPrototypesSection: React.FC = () => {
  return <CaseStudySection title="Prototypes & Testing">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground mb-8">
          Throughout the design process, we created and tested multiple iterations of key interface components, refining our approach based on continuous feedback from logistics managers and supply chain experts.
        </p>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Supply Chain Visualization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
              <div className="relative bg-[#F6F6F7] rounded-lg h-64 mb-4">
                <div className="absolute inset-0 p-4">
                  <div className="h-full border border-[#8E9196]/20 rounded bg-white p-3">
                    <div className="flex items-center justify-between mb-4 border-b pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-20 h-4 bg-[#8E9196]/20 rounded text-xs flex items-center justify-center text-[#8E9196]">Supply Chain</div>
                        <div className="w-14 h-4 bg-[#8E9196]/20 rounded text-xs flex items-center justify-center text-[#8E9196]">Filters</div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#8E9196]/10 flex items-center justify-center text-xs text-[#8E9196]">⚙️</div>
                        <div className="w-6 h-6 rounded-full bg-[#8E9196]/10 flex items-center justify-center text-xs text-[#8E9196]">?</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="col-span-2 h-24 bg-[#8E9196]/10 rounded p-2">
                        <div className="h-full flex items-end justify-between gap-2">
                          <div className="w-6 h-[40%] bg-[#8E9196]/20 rounded"></div>
                          <div className="w-6 h-[60%] bg-[#8E9196]/20 rounded"></div>
                          <div className="w-6 h-[30%] bg-[#8E9196]/20 rounded"></div>
                          <div className="w-6 h-[80%] bg-[#8E9196]/20 rounded"></div>
                          <div className="w-6 h-[45%] bg-[#8E9196]/20 rounded"></div>
                          <div className="w-6 h-[65%] bg-[#8E9196]/20 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-5 w-full bg-[#8E9196]/20 rounded text-xs flex items-center px-2 text-[#8E9196]">Resource Status</div>
                        <div className="h-5 w-full bg-[#8E9196]/20 rounded text-xs flex items-center px-2 text-[#8E9196]">Fleet Overview</div>
                        <div className="h-5 w-full bg-[#8E9196]/20 rounded text-xs flex items-center px-2 text-[#8E9196]">Inventory</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      <div className="h-12 bg-[#8E9196]/10 rounded p-1 text-[#8E9196] text-xs">
                        <div className="text-center mb-1 text-[10px]">Fleet A</div>
                        <div className="text-center font-medium text-[10px]">86%</div>
                      </div>
                      <div className="h-12 bg-[#8E9196]/10 rounded p-1 text-[#8E9196] text-xs">
                        <div className="text-center mb-1 text-[10px]">Fleet B</div>
                        <div className="text-center font-medium text-[10px]">73%</div>
                      </div>
                      <div className="h-12 bg-[#8E9196]/10 rounded p-1 text-[#8E9196] text-xs">
                        <div className="text-center mb-1 text-[10px]">Fleet C</div>
                        <div className="text-center font-medium text-[10px]">92%</div>
                      </div>
                      <div className="h-12 bg-[#8E9196]/10 rounded p-1 text-[#8E9196] text-xs">
                        <div className="text-center mb-1 text-[10px]">Fleet D</div>
                        <div className="text-center font-medium text-[10px]">65%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-base font-medium mb-1">Early Wireframe</h3>
                  <p className="text-white/80 text-xs">
                    Initial lo-fi wireframe with basic data visualization elements
                  </p>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <h4 className="text-base font-medium mb-2">Early Iteration</h4>
                <p className="text-sm text-muted-foreground">
                  Initial concept focused on displaying raw logistics data. Testing revealed the need for more intuitive, actionable insights.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
              <div className="relative bg-muted/50 rounded-lg h-64 mb-4 flex items-center justify-center">
                <Truck className="w-32 h-32 text-blue-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                  <div className="bg-background/90 p-2 rounded-md inline-block">
                    <p className="text-xs text-muted-foreground">Final interactive prototype</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 p-3 rounded-md">
                <h4 className="text-base font-medium mb-2">Final Design</h4>
                <p className="text-sm text-muted-foreground">
                  Refined visualization with real-time tracking, resource allocation insights, and predictive analytics for supply chain optimization.
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
                <span>Users preferred real-time visualization of fleet and inventory status</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
                <span>Interactive filtering for resource allocation was crucial</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
                <span>Predictive analytics helped in proactive decision-making</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6">Resource Management Dashboard</h3>
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            <div className="relative bg-muted/50 h-80 flex items-center justify-center">
              <Layers className="w-32 h-32 text-purple-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-background/80 flex items-end justify-center p-4">
                <div className="bg-background/90 p-2 rounded-md inline-block">
                  <p className="text-xs text-muted-foreground">High-fidelity mockup of the logistics dashboard</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-medium mb-3">Key Design Decisions</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span>Created simplified resource allocation scoring for easy decision-making</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span>Implemented drill-down capabilities for detailed inventory and fleet management</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
                  <span>Added comparative metrics to show efficiency improvements over time</span>
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
              <h4 className="text-lg font-medium mb-1">Task Completion</h4>
              <p className="text-sm text-muted-foreground">
                High success rate for critical logistics management tasks
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">65%</div>
              <h4 className="text-lg font-medium mb-1">Time Reduction</h4>
              <p className="text-sm text-muted-foreground">
                Significant decrease in time required for resource allocation
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-4xl font-bold text-primary-500 mb-2">89%</div>
              <h4 className="text-lg font-medium mb-1">User Satisfaction</h4>
              <p className="text-sm text-muted-foreground">
                Positive feedback on the intuitive logistics management interface
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>;
};

export default DefTechPrototypesSection;

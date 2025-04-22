
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';

const DebriefSolutionSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          Our solution was to create the Debrief platform — a comprehensive post-flight analysis system built specifically for aviation professionals. The platform addresses the core challenges through several key features:
        </p>

        <Tabs defaultValue="interface" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="interface">Streamlined Interface</TabsTrigger>
            <TabsTrigger value="standardization">Data Standardization</TabsTrigger>
            <TabsTrigger value="analytics">Analytics & Insights</TabsTrigger>
          </TabsList>
          <TabsContent value="interface" className="mt-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Pilot-Centric User Experience</h3>
              <p className="text-muted-foreground mb-6">
                We designed the interface around the natural workflow of pilots, minimizing cognitive load during the critical post-flight period while ensuring comprehensive data capture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Interactive flight timeline with visual anomaly markers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Quick-select templates for common events and discrepancies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Contextual guidance for regulatory compliance</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3">Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Reduced debriefing time by 62%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">91% lower error rate in documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Increased satisfaction scores among pilots</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="standardization" className="mt-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Structured Data Collection</h3>
              <p className="text-muted-foreground mb-6">
                We implemented a standardized taxonomy for flight events, anomalies, and observations that ensures consistency while maintaining flexibility for unique situations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Industry-standard event classification system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Intelligent form fields with contextual suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Cross-reference with historical flight data</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3">Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">85% improvement in data consistency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Enabled cross-fleet pattern identification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Reduced training time for new pilots</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-4">Actionable Intelligence</h3>
              <p className="text-muted-foreground mb-6">
                We developed powerful analytics tools that transform individual flight reports into strategic insights, helping airlines improve safety protocols and operational efficiency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Pattern detection across routes, aircraft, and crews</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Customizable dashboards for different stakeholders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Predictive safety alerts based on trend analysis</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3">Benefits</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">43% increase in identified safety improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">More targeted training programs based on data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Reduced operational costs through optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-4">Strategic Impact</h3>
          <p className="text-muted-foreground">
            By reimagining the post-flight debriefing process as a strategic data collection opportunity rather than an administrative burden, Debrief has transformed how airlines approach safety management and operational excellence. The platform bridges the gap between individual flight experiences and organizational learning, creating a continuous improvement cycle that benefits all stakeholders.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefSolutionSection;

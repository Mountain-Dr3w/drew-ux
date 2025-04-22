
import React from 'react';
import CaseStudySection from './CaseStudySection';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Map, LayoutGrid, LineChart } from 'lucide-react';

const DesignImplementationSection: React.FC = () => {
  return (
    <CaseStudySection title="Design Implementation">
      <div className="space-y-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-4">Design System Components</h3>
          <p className="text-muted-foreground mb-6">
            We developed a cohesive design system to ensure consistency across the application while enabling quick iteration. This system included reusable components tailored specifically for waste management workflows.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-muted/30 p-4 rounded-md">
              <div className="h-24 bg-gradient-to-r from-green-900 to-emerald-700 rounded-md mb-3 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 7L17 17M17 7L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4 className="font-medium mb-1">Color System</h4>
              <p className="text-sm text-muted-foreground">Accessible color palette optimized for data visualization and status indicators</p>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-md">
              <div className="h-24 bg-white dark:bg-slate-800 rounded-md mb-3 flex flex-col items-start justify-center p-3 gap-2">
                <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-3/4 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                <div className="w-1/2 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
              </div>
              <h4 className="font-medium mb-1">Typography</h4>
              <p className="text-sm text-muted-foreground">Clear hierarchical type system for improved readability and scanning</p>
            </div>
            
            <div className="bg-muted/30 p-4 rounded-md">
              <div className="h-24 bg-white dark:bg-slate-800 rounded-md mb-3 flex items-center justify-center gap-2">
                <div className="w-10 h-10 bg-green-500 rounded-md flex items-center justify-center text-white font-bold">B</div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">T</div>
                <div className="w-10 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 font-bold">I</div>
              </div>
              <h4 className="font-medium mb-1">UI Elements</h4>
              <p className="text-sm text-muted-foreground">Standardized interactive elements with clear affordances</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-medium mb-4">Design Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-medium text-lg mb-2">Clarity First</h4>
                <p className="text-muted-foreground text-sm">
                  Information hierarchy and visual design prioritize quick understanding of waste data and required actions.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Contextual Intelligence</h4>
                <p className="text-muted-foreground text-sm">
                  Interfaces adapt to provide the most relevant information based on the user's role and current task.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-lg mb-2">Meaningful Metrics</h4>
                <p className="text-muted-foreground text-sm">
                  Visualizations focus on actionable insights rather than raw data, making waste reduction more attainable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="wireframes" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="wireframes">Wireframes</TabsTrigger>
            <TabsTrigger value="mockups">Mockups</TabsTrigger>
            <TabsTrigger value="prototypes">Prototypes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="wireframes" className="space-y-4">
            <div className="border border-border rounded-lg overflow-hidden p-2">
              <div className="bg-muted/30 aspect-video rounded-md flex items-center justify-center">
                <div className="text-sm text-muted-foreground">Low-fidelity wireframes focused on information architecture</div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mockups" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg overflow-hidden p-2">
                <div className="bg-muted/30 aspect-video rounded-md flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Dashboard mockup with improved data visualization</div>
                </div>
              </div>
              <div className="border border-border rounded-lg overflow-hidden p-2">
                <div className="bg-muted/30 aspect-video rounded-md flex items-center justify-center">
                  <div className="text-sm text-muted-foreground">Route planning interface with logistics optimization</div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="prototypes" className="space-y-4">
            <div className="border border-border rounded-lg overflow-hidden p-2">
              <div className="bg-muted/30 aspect-video rounded-md flex items-center justify-center">
                <div className="text-sm text-muted-foreground">Interactive prototypes for usability testing</div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </CaseStudySection>
  );
};

export default DesignImplementationSection;

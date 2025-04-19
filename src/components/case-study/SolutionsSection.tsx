import React from 'react';
import CaseStudySection from './CaseStudySection';
import { Palette, LayoutGrid, BarChart2 } from 'lucide-react';
const SolutionsSection: React.FC = () => {
  return <CaseStudySection title="Solutions">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Palette className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Design System Creation</h3>
            <p className="text-muted-foreground">
              I developed a comprehensive design system including component libraries, typography guidelines, and color systems.
            </p>
          </div>
          
        </div>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border py-[24px]">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <LayoutGrid className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Information Architecture</h3>
            <p className="text-muted-foreground">
              I restructured the platform's navigation and content hierarchy based on user needs and common tasks.
            </p>
          </div>
          
        </div>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <BarChart2 className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Data Visualization</h3>
            <p className="text-muted-foreground">
              I redesigned dashboards and reports to communicate insights more effectively and highlight key metrics.
            </p>
          </div>
          
        </div>
      </div>
      
      <div className="bg-card p-8 rounded-lg border border-border mb-8">
        <h3 className="text-xl font-medium mb-4">Design Process</h3>
        
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="relative pl-12 pb-10">
            <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-background"></div>
            <h4 className="font-medium text-lg mb-2">Discovery & Research</h4>
            <p className="text-muted-foreground mb-2">I began with extensive user research to understand pain points and opportunities.</p>
          </div>
          
          <div className="relative pl-12 pb-10">
            <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-background"></div>
            <h4 className="font-medium text-lg mb-2">Design & Prototyping</h4>
            <p className="text-muted-foreground mb-2">I created wireframes, developed the design system, and built interactive prototypes.</p>
          </div>
          
          <div className="relative pl-12 pb-10">
            <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-amber-500 border-4 border-background"></div>
            <h4 className="font-medium text-lg mb-2">Testing & Iteration</h4>
            <p className="text-muted-foreground mb-2">I conducted usability testing with actual users and refined my designs based on feedback.</p>
          </div>
          
          <div className="relative pl-12">
            <div className="absolute left-2 top-0 w-6 h-6 rounded-full bg-green-500 border-4 border-background"></div>
            <h4 className="font-medium text-lg mb-2">Implementation & Handoff</h4>
            <p className="text-muted-foreground">I collaborated with developers to implement the design system and ensure design fidelity.</p>
          </div>
        </div>
      </div>
    </CaseStudySection>;
};
export default SolutionsSection;
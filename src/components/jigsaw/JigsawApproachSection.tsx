
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Users, Search, Lightbulb, Edit } from 'lucide-react';

const JigsawApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Approach">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Search className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Discovery & User Research</h3>
            <p className="text-muted-foreground">
              We conducted extensive user interviews with operators, analysts, and commanders to understand their workflows, pain points, and priorities.
            </p>
          </div>
          <div className="px-6 py-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Created detailed user personas and task flows to guide design decisions.
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Lightbulb className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Design Strategy</h3>
            <p className="text-muted-foreground">
              We developed a comprehensive design system focused on clarity, hierarchy, and task efficiency for time-critical operations.
            </p>
          </div>
          <div className="px-6 py-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Created visual language that accommodates information density while maintaining usability.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Edit className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Iterative Prototyping</h3>
            <p className="text-muted-foreground">
              We developed and tested multiple iterations of the interface with actual users, refining based on feedback and usability findings.
            </p>
          </div>
          <div className="px-6 py-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Conducted usability testing in simulated operational environments to validate designs.
            </p>
          </div>
        </div>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="p-6 border-b border-border">
            <div className="bg-amber-100 dark:bg-amber-900/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Users className="text-amber-600 dark:text-amber-400" size={24} />
            </div>
            <h3 className="text-xl font-medium mb-2">Collaborative Implementation</h3>
            <p className="text-muted-foreground">
              We worked closely with engineering teams to ensure the design vision was implemented faithfully while respecting technical constraints.
            </p>
          </div>
          <div className="px-6 py-4 bg-muted/30">
            <p className="text-sm text-muted-foreground">
              Created detailed specifications and documentation to guide development.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
        <h3 className="text-xl font-medium mb-4">Key Design Principles</h3>
        <ul className="space-y-3">
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">Clarity over decoration:</span> Every visual element serves a functional purpose</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">Progressive disclosure:</span> Show the right information at the right time</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">Consistent patterns:</span> Maintain familiar interactions across different modules</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span className="text-muted-foreground"><span className="font-medium text-foreground">Visual hierarchy:</span> Guide users to the most important information first</span>
          </li>
        </ul>
      </div>
    </CaseStudySection>
  );
};

export default JigsawApproachSection;

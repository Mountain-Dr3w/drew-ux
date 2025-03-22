
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { ArrowRight } from 'lucide-react';

const JigsawScreenshotsSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution">
      <div className="space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Modernized Interface Design</h3>
          <p className="text-muted-foreground mb-6">
            We completely redesigned the Jigsaw interface to enhance visual clarity, improve information hierarchy, and provide a more intuitive user experience while preserving the complex functionality needed for mission-critical operations.
          </p>
          
          <div className="relative group overflow-hidden rounded-lg border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <img 
              src="/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png"
              alt="Jigsaw timeline interface showing aircraft resource scheduling"
              className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <p className="text-white text-lg font-medium">Advanced Timeline View</p>
              <p className="text-white/80 text-sm">Interactive Gantt chart visualization for resource scheduling and tracking</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h4 className="text-lg font-medium mb-3">Key Interface Improvements</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Redesigned timeline visualization with clear visual indicators for different event types</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Enhanced information panels with contextual data that appears only when relevant</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Color-coded status indicators that provide immediate visual cues</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Cleaner layout with improved spacing and typography for readability</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h4 className="text-lg font-medium mb-3">Workflow Enhancements</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Streamlined command patterns for faster data entry and manipulation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Contextual tools that appear based on selected elements and current task</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Dual view support with synchronized map and timeline interfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Intelligent filtering system to reduce visual complexity when needed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg border border-border mt-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <img 
            src="/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png"
            alt="Jigsaw map view showing geospatial resource tracking"
            className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
            <p className="text-white text-lg font-medium">Integrated Map View</p>
            <p className="text-white/80 text-sm">Geospatial visualization with real-time resource tracking and route planning</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawScreenshotsSection;

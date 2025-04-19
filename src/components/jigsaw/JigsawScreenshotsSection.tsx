
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { ArrowRight, CalendarDays } from 'lucide-react';

const JigsawScreenshotsSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution">
      <div className="space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Advanced Gantt Planning Interface</h3>
          <p className="text-muted-foreground mb-6">
            We completely redesigned the Jigsaw planning interface to enhance visual clarity, improve resource conflict detection, and provide an intuitive timeline-based view for aerial refueling operations management.
          </p>
          
          <div className="relative group overflow-hidden rounded-lg border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <img 
              src="/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png"
              alt="Jigsaw gantt interface showing aerial refueling mission scheduling"
              className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <p className="text-white text-lg font-medium">Multi-level Mission Timeline</p>
              <p className="text-white/80 text-sm">Interactive gantt visualization for tanker scheduling and resource management</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={20} className="text-blue-500" />
                <h4 className="text-lg font-medium">Planning View Improvements</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Color-coded timeline bars showing mission types, statuses, and resource allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Visual indicators for dependencies between receiver aircraft and tankers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Automated conflict detection with prominent visual alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Multi-level timeline zooming for both strategic and tactical views</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDays size={20} className="text-blue-500" />
                <h4 className="text-lg font-medium">Planning Workflow Enhancements</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Drag-and-drop interface for rapid mission scheduling and resource allocation</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Context-aware panels that display relevant mission details based on selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Smart constraint management that suggests optimal scheduling options</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight size={18} className="text-blue-500 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Keyboard shortcuts for power users to rapidly manipulate the timeline</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="relative group overflow-hidden rounded-lg border border-border mt-8">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <img 
            src="/lovable-uploads/424622bd-bc00-4f6e-9a37-6678fbb643ab.png"
            alt="Jigsaw resource allocation view showing tanker and receiver aircraft assignments"
            className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
            <p className="text-white text-lg font-medium">Resource Allocation View</p>
            <p className="text-white/80 text-sm">Optimized visualization showing tanker assets matched with receiver requirements</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawScreenshotsSection;

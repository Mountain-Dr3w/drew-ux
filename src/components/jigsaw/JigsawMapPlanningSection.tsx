
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Map } from 'lucide-react';

const JigsawMapPlanningSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution">
      <div className="space-y-10">
        <div className="space-y-4">
          <h3 className="text-2xl font-medium">Integrated Map Planning View</h3>
          <p className="text-muted-foreground mb-6">
            To enhance spatial awareness during mission planning, we developed a split-view interface that combines the Gantt timeline with an interactive map visualization, allowing planners to simultaneously manage temporal and geographic aspects of aerial refueling operations.
          </p>
          
          <div className="relative group overflow-hidden rounded-lg border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <img src="/lovable-uploads/33b41f76-0c7d-459e-83a4-1523b835b647.png" alt="Jigsaw split view showing timeline and map interface" className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pointer-events-none">
              <p className="text-white text-lg font-medium">Split-View Mission Planning Interface</p>
              <p className="text-white/80 text-sm">Combined timeline and map visualization for enhanced spatial awareness</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Map size={20} className="text-blue-500" />
                <h4 className="text-lg font-medium">Spatial Planning Features</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Interactive map view showing airspace boundaries and refueling tracks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Real-time visualization of mission routes and waypoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Dynamic airspace conflict detection and resolution tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Synchronized timeline and map selections for seamless planning</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <Map size={20} className="text-blue-500" />
                <h4 className="text-lg font-medium">Planning Efficiency Gains</h4>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Reduced mission planning time through integrated spatial awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Improved airspace utilization with visual conflict detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Enhanced coordination between planners and airspace controllers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="text-muted-foreground">Optimized route planning with real-time distance calculations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawMapPlanningSection;

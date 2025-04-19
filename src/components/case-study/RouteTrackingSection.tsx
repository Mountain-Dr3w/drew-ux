
import React from 'react';
import CaseStudySection from './CaseStudySection';
import { Map, Route, Calendar, TrendingUp } from 'lucide-react';

const RouteTrackingSection: React.FC = () => {
  return (
    <CaseStudySection title="Route Optimization & Tracking">
      <div className="space-y-8">
        <p className="text-muted-foreground text-lg">
          A key innovation in our design was the development of an integrated route planning and tracking system that provides real-time visibility into waste collection operations, significantly improving logistics efficiency.
        </p>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img 
              src="/lovable-uploads/3a4e4845-c784-4528-985d-a680d196e41b.png" 
              alt="Veriflux route tracking interface showing active routes on a map" 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-medium mb-2">Active Routes Interface</h3>
              <p className="text-white/80 text-sm">
                Real-time visualization of collection routes with detailed metrics and spatial context
              </p>
            </div>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Key Features</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Map className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Interactive map with real-time route visualization</span>
                </li>
                <li className="flex items-start gap-2">
                  <Route className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Optimized routing algorithm to minimize distance and fuel consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Time-based metrics to track estimated vs. actual completion times</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Load tracking for accurate waste collection measurements</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg">User Benefits</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">32%</div>
                  <p className="text-sm text-muted-foreground">Reduction in route planning time</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">18%</div>
                  <p className="text-sm text-muted-foreground">Decrease in fuel consumption</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">24%</div>
                  <p className="text-sm text-muted-foreground">Increase in daily stops per vehicle</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">93%</div>
                  <p className="text-sm text-muted-foreground">User satisfaction with route visibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <blockquote className="text-lg italic mb-4">
            "The route optimization system has completely transformed our operations. We're able to collect more waste with fewer vehicles while providing better visibility to all stakeholders."
          </blockquote>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <span className="text-green-600 dark:text-green-400 font-medium">JD</span>
            </div>
            <div>
              <p className="font-medium">Jake Donovan</p>
              <p className="text-sm text-muted-foreground">Operations Director, GreenWaste Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default RouteTrackingSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { TrendingUp, ThumbsUp, Clock } from 'lucide-react';

const JigsawResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-blue-500" size={24} />
              <h3 className="text-xl font-medium">Planning Speed</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-blue-500">85%</p>
            <p className="text-muted-foreground">Faster mission planning process</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="text-cyan-500" size={24} />
              <h3 className="text-xl font-medium">Resource Utilization</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-cyan-500">23%</p>
            <p className="text-muted-foreground">Improved tanker utilization rate</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-purple-500" size={24} />
              <h3 className="text-xl font-medium">Training</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-purple-500">-78%</p>
            <p className="text-muted-foreground">Reduction in planner training time</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/30 p-8 rounded-lg border border-border mb-10">
        <h3 className="text-2xl font-medium mb-6 text-center">Operational Impact</h3>
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The redesigned Jigsaw planning interface has transformed how the Air Force manages aerial refueling operations. Planners who previously spent 8+ hours creating daily schedules can now complete the same work in approximately 1-2 hours, with greater accuracy and fewer conflicts.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            By making tanker resource allocation more efficient, Jigsaw has enabled Air Mobility Command to support more missions with the same number of aircraft. The intuitive gantt visualization has also improved coordination between planners and operators, reducing miscommunications and ensuring smoother execution of complex refueling operations.
          </p>
        </div>
      </div>
      
      <div className="p-1 bg-gradient-to-r from-blue-200 via-cyan-400 to-blue-600 rounded-lg">
        <div className="bg-card p-8 rounded-md">
          <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            "Before the new Jigsaw planning interface, we were spending up to 10 hours daily just building tanker plans. Now we can create better schedules in a fraction of the time, allowing us to respond to changing mission requirements much more effectively."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-muted rounded-full"></div>
            <div>
              <p className="font-medium">Maj. Sarah Johnson</p>
              <p className="text-muted-foreground text-sm">Lead Tanker Planner, 609th Air Operations Center</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawResultsSection;

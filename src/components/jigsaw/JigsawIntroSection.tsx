
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Clock, Shield, Activity } from 'lucide-react';

const JigsawIntroSection: React.FC = () => {
  return (
    <CaseStudySection title="Background">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Jigsaw is a sophisticated Air Resource Management (AR) tool used by military and aviation personnel to coordinate air operations, track resources, and manage complex logistical challenges in real-time. The existing platform was functionally robust but suffered from usability issues that hindered adoption and efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
            <div className="relative z-10">
              <Shield className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Critical Operations</h3>
              <p className="text-muted-foreground">Supports mission-critical aerospace operations requiring high reliability</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
            <div className="relative z-10">
              <Clock className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Real-time Tracking</h3>
              <p className="text-muted-foreground">Manages complex scheduling and resource allocation in real-time</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
            <div className="relative z-10">
              <Activity className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">Displays complex operational data in both timeline and geospatial formats</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawIntroSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

const DefTechIntroSection: React.FC = () => {
  return (
    <CaseStudySection title="Background">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          CyberShield is an advanced threat intelligence platform designed specifically for defense contractors who need to protect sensitive information and infrastructure from increasingly sophisticated cyber attacks. The platform aggregates, analyzes, and visualizes cybersecurity data from multiple sources to provide actionable intelligence for security teams.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
            <div className="relative z-10">
              <Shield className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Defense-Grade Security</h3>
              <p className="text-muted-foreground">Built to protect critical defense infrastructure and sensitive military contracts</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
            <div className="relative z-10">
              <AlertTriangle className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Threat Intelligence</h3>
              <p className="text-muted-foreground">Real-time monitoring and analysis of potential security threats</p>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
            <div className="relative z-10">
              <Lock className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Compliance</h3>
              <p className="text-muted-foreground">Ensures adherence to strict DoD cybersecurity frameworks and regulations</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 border-l-4 border-blue-500 rounded-r-md mt-8">
          <p className="italic text-muted-foreground text-lg">
            In plain terms: CyberShield helps defense contractors visualize, understand, and respond to cybersecurity threats by transforming complex security data into clear, actionable insights.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechIntroSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Truck, BarChart, Shield } from 'lucide-react';

const DefTechIntroSection: React.FC = () => {
  return <CaseStudySection title="Background">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed text-muted-foreground">
          Forward Edge is an advanced decision support platform designed for defense logistics leadership. The platform integrates data from multiple sources to provide real-time visibility into supply chain operations, resource allocation, and operational readiness, enabling leaders to make informed strategic decisions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
            <div className="relative z-10 bg-transparent">
              <Truck className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Supply Chain Optimization</h3>
              <p className="text-muted-foreground">Real-time tracking and optimization of defense logistics operations</p>
            </div>
          </div>
          
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
            <div className="relative z-10 bg-transparent">
              <BarChart className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Resource Planning</h3>
              <p className="text-muted-foreground">Data-driven allocation of personnel, equipment, and supplies</p>
            </div>
          </div>
          
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"></div>
            <div className="relative z-10 bg-transparent">
              <Shield className="h-10 w-10 text-emerald-500 mb-4" />
              <h3 className="text-xl font-medium mb-2">Operational Readiness</h3>
              <p className="text-muted-foreground">Real-time monitoring of force readiness and capability status</p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 border-l-4 border-blue-500 rounded-r-md mt-8">
          <p className="italic text-muted-foreground text-lg">
            In plain terms: Forward Edge helps defense leaders visualize, analyze, and optimize their logistics operations by transforming complex data into actionable strategic insights.
          </p>
        </div>
      </div>
    </CaseStudySection>;
};
export default DefTechIntroSection;

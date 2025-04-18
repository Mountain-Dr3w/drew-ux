
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { TrendingUp, Clock, Shield } from 'lucide-react';

const DefTechResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-blue-500" size={24} />
              <h3 className="text-xl font-medium">Efficiency</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-blue-500">72%</p>
            <p className="text-muted-foreground">Reduction in time to identify related threats</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-purple-500" size={24} />
              <h3 className="text-xl font-medium">Adoption</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-purple-500">94%</p>
            <p className="text-muted-foreground">User adoption rate among target defense contractors</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Security</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">47%</p>
            <p className="text-muted-foreground">Increase in proactive threat identification</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/30 p-8 rounded-lg border border-border mb-10">
        <h3 className="text-2xl font-medium mb-6 text-center">Business Impact</h3>
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The redesigned CyberShield platform transformed how defense contractors manage cybersecurity threats, leading to measurable improvements in threat detection, incident response times, and overall security posture.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            The intuitive visualization tools and streamlined workflows have become a significant competitive advantage in the defense technology sector, with multiple contractors citing the platform as essential to their security operations.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            The platform has also helped bridge communication gaps between technical security teams and executive leadership, improving resource allocation and security investment decisions.
          </p>
        </div>
      </div>
      
      <div className="p-1 bg-gradient-to-r from-blue-200 via-purple-400 to-blue-600 rounded-lg">
        <div className="bg-card p-8 rounded-md">
          <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            "CyberShield has completely transformed how we detect and respond to threats. What used to take days of analysis now happens in minutes, and the visualization tools have uncovered attack patterns we would have missed with our previous systems."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-muted rounded-full"></div>
            <div>
              <p className="font-medium">Michael Rivera</p>
              <p className="text-muted-foreground text-sm">Chief Information Security Officer, Defense Systems Inc.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 bg-card p-8 rounded-lg border border-border">
        <h3 className="text-2xl font-medium mb-6 text-center">Lessons Learned</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-medium text-lg mb-3">Balance Complexity</h4>
            <p className="text-muted-foreground">
              Finding the right balance between simplifying the interface while maintaining the depth needed for thorough security analysis was our biggest challenge and most valuable outcome.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-3">Progressive Onboarding</h4>
            <p className="text-muted-foreground">
              Even with an intuitive interface, security tools require thoughtful onboarding. Our phased approach to feature introduction significantly improved adoption.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-3">Cross-functional Collaboration</h4>
            <p className="text-muted-foreground">
              Close collaboration between UX designers, security experts, and data visualization specialists was essential to creating effective security interfaces.
            </p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechResultsSection;

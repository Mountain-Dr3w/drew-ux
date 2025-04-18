
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { TrendingUp, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DefTechResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-blue-500" size={24} />
              <h3 className="text-xl font-medium">Efficiency</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-blue-500">72%</p>
            <p className="text-muted-foreground">Reduction in time to identify related threats</p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-purple-500" size={24} />
              <h3 className="text-xl font-medium">Adoption</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-purple-500">94%</p>
            <p className="text-muted-foreground">User adoption rate among target defense contractors</p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Security</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">47%</p>
            <p className="text-muted-foreground">Increase in proactive threat identification</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <CardContent className="p-8 relative z-10">
          <h3 className="text-2xl font-medium mb-6 text-center">Business Impact</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              The redesigned LogisticsPro platform transformed how defense contractors manage logistics data, leading to measurable improvements in supply chain efficiency, resource allocation, and operational readiness.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              The intuitive visualization tools and streamlined workflows have become a significant competitive advantage in the defense technology sector, with multiple contractors citing the platform as essential to their logistics operations.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              The platform has also helped bridge communication gaps between logistics teams and executive leadership, improving resource allocation and strategic investment decisions.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-1 bg-gradient-to-r from-blue-200 via-purple-400 to-blue-600 rounded-lg">
        <Card className="rounded-md">
          <CardContent className="p-8">
            <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              "LogisticsPro has completely transformed how we manage our supply chain. What used to take days of analysis now happens in minutes, and the visualization tools have uncovered optimization opportunities we would have missed with our previous systems."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full"></div>
              <div>
                <p className="font-medium">Col. James Henderson</p>
                <p className="text-muted-foreground text-sm">Director of Logistics Operations</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
        <CardContent className="p-8 relative z-10">
          <h3 className="text-2xl font-medium mb-6 text-center">Lessons Learned</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-lg mb-3">Balance Complexity</h4>
              <p className="text-muted-foreground">
                Finding the right balance between simplifying the interface while maintaining the depth needed for thorough logistics analysis was our biggest challenge and most valuable outcome.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Progressive Onboarding</h4>
              <p className="text-muted-foreground">
                Even with an intuitive interface, logistics tools require thoughtful onboarding. Our phased approach to feature introduction significantly improved adoption.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Cross-functional Collaboration</h4>
              <p className="text-muted-foreground">
                Close collaboration between UX designers, logistics experts, and data visualization specialists was essential to creating effective logistics interfaces.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </CaseStudySection>
  );
};

export default DefTechResultsSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Card, CardContent } from '@/components/ui/card';

const DebriefResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10 bg-transparent">
            <h3 className="text-xl font-medium mb-3">Efficiency</h3>
            <p className="text-4xl font-bold mb-2 text-blue-500">78%</p>
            <p className="text-muted-foreground">Increase in completed debriefs</p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10 bg-transparent">
            <h3 className="text-xl font-medium mb-3">Safety</h3>
            <p className="text-4xl font-bold mb-2 text-purple-500">34%</p>
            <p className="text-muted-foreground">More safety insights identified</p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10 bg-transparent">
            <h3 className="text-xl font-medium mb-3">MX Time</h3>
            <p className="text-4xl font-bold mb-2 text-green-500">10%</p>
            <p className="text-muted-foreground">Maintenance time cut on average</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <CardContent className="p-8 relative z-10">
          <h3 className="text-2xl font-medium mb-6 text-center">Organizational Impact</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              The Debrief platform has fundamentally transformed how airlines approach post-flight analysis, turning what was once considered an administrative burden into a strategic safety and operational efficiency tool.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Flight safety officers now have access to comprehensive, standardized data that enables them to identify trends and potential issues before they become incidents. This proactive approach has led to documented improvements in training programs and operational procedures.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              For pilots, the platform has significantly reduced administrative workload while improving the quality and usefulness of debriefing sessions, creating a positive feedback loop that reinforces the value of thorough post-flight analysis.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-1 bg-gradient-to-r from-blue-200 via-purple-400 to-blue-600 rounded-lg">
        <Card className="rounded-md">
          <CardContent className="p-8">
            <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              "Debrief has revolutionized how our pilots document and learn from each flight. We're identifying training opportunities and operational improvements that simply weren't visible with our previous systems."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full"></div>
              <div>
                <p className="font-medium">Director of Flight Operations</p>
                <p className="text-muted-foreground text-sm">USAF Fighter Squadron</p>
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
              <h4 className="font-medium text-lg mb-3">Domain Expertise Matters</h4>
              <p className="text-muted-foreground">
                Immersing ourselves in the aviation environment was crucial to understanding the nuances of flight operations and debriefing procedures.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Balance Structure and Flexibility</h4>
              <p className="text-muted-foreground">
                The most effective solution provided standardized reporting while allowing for the unique circumstances of individual flights.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Data Integration is Key</h4>
              <p className="text-muted-foreground">
                Connecting the debriefing platform with existing flight systems significantly increased adoption and data quality.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </CaseStudySection>
  );
};

export default DebriefResultsSection;

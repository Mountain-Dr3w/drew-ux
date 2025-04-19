
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { TrendingUp, Clock, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DefTechResultsSection: React.FC = () => {
  return <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10 bg-transparent">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-blue-500" size={24} />
              <h3 className="text-xl font-medium">Efficiency</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-blue-500">62%</p>
            <p className="text-muted-foreground">Reduction in resource allocation time</p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10 bg-transparent">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-purple-500" size={24} />
              <h3 className="text-xl font-medium">Adoption</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-purple-500">96%</p>
            <p className="text-muted-foreground">User adoption rate among logistics teams</p>
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <CardContent className="p-6 relative z-10 bg-transparent">
            <div className="flex items-center gap-2 mb-3">
              <BarChart className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Cost Savings</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">42%</p>
            <p className="text-muted-foreground">Reduction in logistics operational costs</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mb-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
        <CardContent className="p-8 relative z-10">
          <h3 className="text-2xl font-medium mb-6 text-center">Business Impact</h3>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              The redesigned Forward Edge platform transformed how defense logistics teams manage supply chain operations, leading to measurable improvements in efficiency, resource allocation, and cost management.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              The intuitive visualization tools and streamlined workflows have become a significant competitive advantage, with multiple defense contractors citing the platform as essential to their logistics optimization efforts.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              The platform has helped bridge communication gaps between logistics teams and leadership, enabling more strategic resource planning and investment decisions.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <div className="p-1 bg-gradient-to-r from-blue-200 via-purple-400 to-blue-600 rounded-lg">
        <Card className="rounded-md">
          <CardContent className="p-8">
            <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              "Forward Edge has completely transformed our supply chain management. What used to take days of manual tracking now happens in real-time, and the insights have helped us optimize our entire logistics operation."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-muted rounded-full"></div>
              <div>
                <p className="font-medium">Col. Michael Roberts</p>
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
              <h4 className="font-medium text-lg mb-3">Simplify Complexity</h4>
              <p className="text-muted-foreground">
                Finding the right balance between detailed logistics data and user-friendly interface was crucial for adoption.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Real-time Insights</h4>
              <p className="text-muted-foreground">
                Providing real-time, actionable insights became a key differentiator for logistics management.
              </p>
            </div>
            <div>
              <h4 className="font-medium text-lg mb-3">Cross-functional Collaboration</h4>
              <p className="text-muted-foreground">
                Close collaboration between UX designers, logistics experts, and data analysts was essential to creating an effective platform.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </CaseStudySection>;
};
export default DefTechResultsSection;

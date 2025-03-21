
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
              <h3 className="text-xl font-medium">Efficiency</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-blue-500">42%</p>
            <p className="text-muted-foreground">Increase in operator efficiency</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="text-cyan-500" size={24} />
              <h3 className="text-xl font-medium">Adoption</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-cyan-500">96%</p>
            <p className="text-muted-foreground">User satisfaction rating</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-purple-500" size={24} />
              <h3 className="text-xl font-medium">Training</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-purple-500">-65%</p>
            <p className="text-muted-foreground">Reduction in onboarding time</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/30 p-8 rounded-lg border border-border mb-10">
        <h3 className="text-2xl font-medium mb-6 text-center">Operational Impact</h3>
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The redesigned Jigsaw platform transformed how air resources are managed and coordinated, resulting in significant improvements in operational efficiency and decision-making speed. Operators can now visualize complex mission data more intuitively, leading to faster response times and better resource allocation.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            The new interface dramatically reduced training requirements for new operators, allowing teams to become proficient with the system in days rather than weeks. This has been particularly valuable for deployment in time-sensitive operational environments.
          </p>
        </div>
      </div>
      
      <div className="p-1 bg-gradient-to-r from-blue-200 via-cyan-400 to-blue-600 rounded-lg">
        <div className="bg-card p-8 rounded-md">
          <blockquote className="text-xl md:text-2xl italic font-light text-muted-foreground mb-6">
            "The redesigned Jigsaw platform has fundamentally changed how we manage our operations. What used to take multiple trained specialists can now be accomplished by a single operator with greater speed and accuracy."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-muted rounded-full"></div>
            <div>
              <p className="font-medium">Col. James Reynolds</p>
              <p className="text-muted-foreground text-sm">Director of Operations</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawResultsSection;

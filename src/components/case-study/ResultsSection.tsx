
import React from 'react';
import CaseStudySection from './CaseStudySection';
import { TrendingUp, ThumbsUp, Clock } from 'lucide-react';

const ResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Engagement</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">200%</p>
            <p className="text-muted-foreground">Increase in platform engagement</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Satisfaction</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">+52%</p>
            <p className="text-muted-foreground">Improvement in user satisfaction scores</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Efficiency</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">68%</p>
            <p className="text-muted-foreground">Reduction in training and onboarding time</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/30 p-8 rounded-lg border border-border mb-10">
        <h3 className="text-2xl font-medium mb-6 text-center">Business Impact</h3>
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The redesigned platform transformed how Veriflux's clients interact with waste data, resulting in significant improvements in user engagement and satisfaction. The new design system also enabled the Veriflux team to develop new features more efficiently while maintaining consistency.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most importantly, the improved user experience led to higher adoption rates among client organizations, ultimately helping more businesses effectively track and reduce their food waste - furthering Veriflux's mission of environmental sustainability.
          </p>
        </div>
      </div>
      
      <div className="p-1 bg-gradient-to-r from-green-200 via-green-400 to-green-600 rounded-lg">
        <div className="bg-card p-8 rounded-md">
          <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            "The redesigned platform not only improved our metrics but transformed how our team thinks about product design. We now have a framework for building user-centered features that's been critical to our growth."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-muted rounded-full"></div>
            <div>
              <p className="font-medium">Sarah Chen</p>
              <p className="text-muted-foreground text-sm">CEO, Veriflux</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ResultsSection;

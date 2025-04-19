
import React from 'react';
import CaseStudySection from './CaseStudySection';
import { TrendingUp, ThumbsUp, Clock, RecycleIcon, Truck, CircleCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Waste Reduction</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">42%</p>
            <p className="text-muted-foreground">Average decrease in food waste</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <ThumbsUp className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">User Growth</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">3.5x</p>
            <p className="text-muted-foreground">Increase in platform adoption</p>
          </div>
        </div>
        <div className="bg-card p-6 rounded-lg border border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="text-green-500" size={24} />
              <h3 className="text-xl font-medium">Time Savings</h3>
            </div>
            <p className="text-4xl font-bold mb-2 text-green-500">68%</p>
            <p className="text-muted-foreground">Reduction in reporting time</p>
          </div>
        </div>
      </div>
      
      <div className="bg-card rounded-lg border border-border overflow-hidden mb-10">
        <div className="p-6 border-b border-border">
          <h3 className="text-2xl font-medium mb-2">Sustainability Impact</h3>
          <p className="text-muted-foreground">
            The redesigned platform has directly contributed to measurable environmental benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <RecycleIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-500">1.2M</div>
            </div>
            <p className="text-sm text-muted-foreground">Pounds of waste diverted from landfills</p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-500">342K</div>
            </div>
            <p className="text-sm text-muted-foreground">Miles saved through route optimization</p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <CircleCheck className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-500">98.7%</div>
            </div>
            <p className="text-sm text-muted-foreground">Collection accuracy rate</p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-500">24%</div>
            </div>
            <p className="text-sm text-muted-foreground">Increase in recycling rates</p>
          </div>
        </div>
      </div>
      
      <div className="bg-muted/30 p-8 rounded-lg border border-border mb-10">
        <h3 className="text-2xl font-medium mb-6 text-center">Business Outcomes</h3>
        <div className="space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            The redesigned platform transformed how Veriflux's clients interact with waste management data, resulting in significant improvements in user engagement and satisfaction. The new design system also enabled the Veriflux team to develop new features more efficiently while maintaining consistency.
          </p>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            Most importantly, the improved user experience led to higher adoption rates among client organizations, ultimately helping more businesses effectively track and reduce their food waste - furthering Veriflux's mission of environmental sustainability and creating a measurable impact across the food service industry.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card p-4 rounded-lg border border-border">
              <div className="text-3xl font-bold text-green-500 mb-2">87%</div>
              <p className="text-sm text-muted-foreground">Of users reported the new platform directly helped them reduce food waste</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <div className="text-3xl font-bold text-green-500 mb-2">52%</div>
              <p className="text-sm text-muted-foreground">Increase in regular platform usage among existing clients</p>
            </div>
            <div className="bg-card p-4 rounded-lg border border-border">
              <div className="text-3xl font-bold text-green-500 mb-2">124%</div>
              <p className="text-sm text-muted-foreground">Growth in new client acquisition year-over-year</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-1 bg-gradient-to-r from-green-200 via-green-400 to-green-600 rounded-lg">
        <div className="bg-card p-8 rounded-md">
          <blockquote className="text-xl md:text-2xl italic font-light bg-gradient-to-r from-black to-gray-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
            "The redesigned platform not only improved our metrics but transformed how our team thinks about product design. We now have a framework for building user-centered features that's been critical to our growth and environmental impact."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-muted rounded-full"></div>
            <div>
              <p className="font-medium">Sarah Kerrigan</p>
              <p className="text-muted-foreground text-sm">CEO, Veriflux</p>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="my-16" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h3 className="text-2xl font-medium mb-4">Ready to see more?</h3>
          <p className="text-muted-foreground mb-6">
            Explore another case study to see how we approach different design challenges across industries.
          </p>
        </div>
        
        <div className="flex-shrink-0">
          <img 
            src="/lovable-uploads/Asset%203.svg" 
            alt="Veriflux logo" 
            className="h-16 w-auto opacity-50"
          />
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ResultsSection;

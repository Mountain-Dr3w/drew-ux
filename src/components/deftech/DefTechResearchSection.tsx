import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Lightbulb, Target, LineChart, Users } from 'lucide-react';

const DefTechResearchSection: React.FC = () => {
  return (
    <CaseStudySection title="User Research">
      <div className="flex flex-col gap-6 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <Target className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Research Objectives</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Understand how logistics leaders make strategic resource allocation decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Identify key metrics and data points needed for operational oversight</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Map information flows between different logistics stakeholders</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <LineChart className="text-purple-600 dark:text-purple-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Research Methods</h3>
          </div>
          <p className="text-muted-foreground mb-3 pl-[50px]">
            Our comprehensive research approach included:
          </p>
          <ul className="space-y-2 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>28 interviews with logistics officers and commanders</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>10 observation sessions of logistics operations centers</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Analysis of current logistics management systems</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Workflow mapping of resource allocation processes</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border h-full">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <Lightbulb className="text-green-600 dark:text-green-400" size={20} />
            </div>
            <h3 className="text-xl font-medium">Key Insights</h3>
          </div>
          <ul className="space-y-3 text-muted-foreground pl-[50px]">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Leadership needed real-time visibility into mission-critical resources to reduce decision-making time from days to minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Integrated data visualization across multiple supply chains could prevent stockouts and reduce over-provisioning by 40%</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Automated resource tracking and predictive analytics could increase operational readiness rates by up to 35%</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Cross-unit resource sharing capabilities could optimize asset utilization and reduce emergency procurement costs by 25%</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h4 className="text-lg font-medium mb-4">Persona: Logistics Commander</h4>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            "I need to quickly assess resource availability and make informed decisions about allocation across multiple operational areas."
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Responsible for strategic resource planning</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Needs real-time visibility into operations</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Makes critical decisions about resource prioritization</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h4 className="text-lg font-medium mb-4">Persona: Operations Director</h4>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            "I need to understand how resource allocation decisions impact overall operational readiness and mission capabilities."
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Oversees operational planning and execution</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Requires predictive analytics for planning</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Coordinates between multiple units and stakeholders</span>
            </li>
          </ul>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechResearchSection;

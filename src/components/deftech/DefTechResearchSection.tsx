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
              <span>Understand how security analysts process and prioritize threats</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Identify information hierarchies needed for rapid decision-making</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Map communication flows between technical and non-technical stakeholders</span>
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
              <span>24 interviews with security analysts and managers</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>8 observation sessions of security operations centers</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Competitive analysis of 6 security intelligence platforms</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Card sorting to understand mental models of threat classification</span>
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
              <span>Analysts needed clear visual patterns to quickly identify anomalies in threat data</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Context switching between tools caused significant cognitive load and missed connections</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Executive stakeholders required simplified views without sacrificing important details</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5"></div>
              <span>Relationship visualization between threats was critical but missing in existing tools</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h4 className="text-lg font-medium mb-4">Persona: Security Analyst</h4>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
              <Users className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            "I need to quickly identify genuine threats from the noise and understand their potential impact on our systems."
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Highly technical with cybersecurity expertise</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Frustrated by false positives and tool switching</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Needs efficient ways to investigate and respond to threats</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-muted/30 p-6 rounded-lg border border-border">
          <h4 className="text-lg font-medium mb-4">Persona: Security Director</h4>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
              <Users className="h-10 w-10 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4 text-center">
            "I need to understand our overall security posture and be able to communicate risks effectively to executive leadership."
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Balances technical and business perspectives</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Needs high-level overviews with ability to drill down</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5"></div>
              <span>Responsible for resource allocation and reporting to C-suite</span>
            </li>
          </ul>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechResearchSection;

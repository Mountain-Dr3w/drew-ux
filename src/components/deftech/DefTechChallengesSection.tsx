
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { AlertOctagon, Users, Clock, Database } from 'lucide-react';

const DefTechChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="Challenges">
      <div className="mb-8 bg-card p-6 rounded-lg border border-border">
        <h3 className="text-xl font-medium mb-4 flex items-center gap-2">
          <AlertOctagon size={20} className="text-amber-500" />
          <span>Key Challenges Identified</span>
        </h3>
        <ul className="space-y-6 text-muted-foreground">
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              1
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Information Overload</h4>
              <p className="text-muted-foreground">Security analysts were overwhelmed by the sheer volume of threat intelligence data, making it difficult to identify genuine threats from false positives.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              2
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Fragmented Tools</h4>
              <p className="text-muted-foreground">Teams were using multiple siloed tools for different aspects of threat intelligence, leading to inefficient workflows and missed connections between related threats.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              3
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Technical Complexity</h4>
              <p className="text-muted-foreground">Existing solutions required extensive technical knowledge, making them inaccessible to stakeholders who needed to understand security posture but lacked technical expertise.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex-shrink-0 bg-amber-100 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 w-8 h-8 rounded-full flex items-center justify-center font-medium">
              4
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-1">Decision Paralysis</h4>
              <p className="text-muted-foreground">Security teams struggled to prioritize threats and actions due to poor visualization of threat severity, impact, and relationships between different security events.</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
        <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
          "Defense contractors need a unified threat intelligence platform that transforms overwhelming security data into clear, actionable insights while maintaining compliance with strict defense industry standards."
        </p>
      </div>
    </CaseStudySection>
  );
};

export default DefTechChallengesSection;

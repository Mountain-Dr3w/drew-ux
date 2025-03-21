
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { X, AlertTriangle, Clock, Layout } from 'lucide-react';

const JigsawChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="Challenges">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed text-muted-foreground mb-8">
          The Jigsaw platform faced several significant challenges that were impacting operational efficiency and user satisfaction:
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
              <Layout className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Complex Interface</h3>
              <p className="text-muted-foreground">
                The interface was cluttered with information, making it difficult for users to quickly find what they needed. Data visualization was functional but not optimized for quick comprehension during time-sensitive operations.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
              <Clock className="text-amber-600 dark:text-amber-400" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Steep Learning Curve</h3>
              <p className="text-muted-foreground">
                New users required extensive training to become proficient with the system. The lack of intuitive workflows and clear visual hierarchy made onboarding challenging and time-consuming.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-blue-600 dark:text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Technical Constraints</h3>
              <p className="text-muted-foreground">
                The system needed to maintain compatibility with existing infrastructure while introducing modern UX patterns. Any redesign had to carefully balance innovation with the technical realities of the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawChallengesSection;

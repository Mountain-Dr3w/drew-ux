import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeResultsSection: React.FC = () => {
  return (
    <>
      <CaseStudySection title="Impact">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-2">Reduced Ambiguity</h3>
            <p className="text-muted-foreground">
              Tenants now have a single source of truth for onboarding status and platform capabilities.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-2">Shifted Support Burden</h3>
            <p className="text-muted-foreground">
              Common questions like "What's my status?" and "What tools do I have?" are now self-service.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-2">Created Accountability</h3>
            <p className="text-muted-foreground">
              Progress tracking makes blockers visible to both tenants and internal teams.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-medium mb-2">Established Patterns</h3>
            <p className="text-muted-foreground">
              The service blueprint and friction log became living artifacts that other teams use to identify and prioritize improvements.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            This project reinforced that the hardest service design problems often aren't about individual touchpoints. They're about the invisible spaces between touchpoints. The service blueprint was valuable not because it showed what each team did, but because it revealed where tenant experiences fell through the gaps between teams.
          </p>

          <p className="text-muted-foreground">
            The friction log proved essential for moving from "we hear complaints" to "we understand patterns." By systematically capturing pain points with impact assessment and ownership, we transformed scattered feedback into actionable priorities.
          </p>

          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Most importantly:</strong> Reducing time-to-deployment isn't just a developer experience goal. For FORGE, it directly translates to faster warfighter capabilities. Service design in this context isn't about convenience; it's about mission effectiveness.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default ForgeResultsSection;

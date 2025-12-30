import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeSolutionSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution: The FORGE ACDC Portal">
      <div className="space-y-12">
        <p className="text-lg text-muted-foreground">
          Based on research findings, I designed a self-service onboarding portal that addressed all three core problems simultaneously.
        </p>

        {/* Onboarding Progress Tracking */}
        <div>
          <h3 className="text-xl font-medium mb-4">Onboarding Progress Tracking</h3>
          <p className="text-muted-foreground mb-6">
            The portal provides tenants with a persistent view of their onboarding status. Key design decisions included displaying the current review status prominently, showing exactly which team is assigned, calculating completion progress, and surfacing pending action items with clear ownership.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src="/lovable-uploads/portal-onboarding.png"
              alt="FORGE Portal onboarding progress tracking interface"
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 italic">
            Each pending item shows what's needed, who needs to do it, and provides direct links to complete the action. No more wondering what's blocking progress.
          </p>
        </div>

        {/* Platform Services Hub */}
        <div>
          <h3 className="text-xl font-medium mb-4">Platform Services Hub</h3>
          <p className="text-muted-foreground mb-6">
            A centralized dashboard gives tenants one place to access all development tools and services. Rather than hunting through documentation or asking colleagues, tenants see their complete toolkit at a glance: GitLab, Nucleus, ArgoCD, JFrog Artifactory, Tracer, and SD Elements.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src="/lovable-uploads/portal-services.png"
              alt="FORGE Portal platform services hub"
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 italic">
            Each service card explains what it does and provides direct access. The design eliminates the question "what tools do I have?" entirely.
          </p>
        </div>

        {/* Design Principles */}
        <div>
          <h3 className="text-xl font-medium mb-4">Design Principles</h3>
          <p className="text-muted-foreground mb-6">
            The portal design followed principles derived directly from research findings:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted/30 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Status Over Decoration</h4>
              <p className="text-sm text-muted-foreground">
                The current state is immediately scannable. No hunting for information.
              </p>
            </div>
            <div className="bg-muted/30 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Action Orientation</h4>
              <p className="text-sm text-muted-foreground">
                Every screen shows what the user can do next.
              </p>
            </div>
            <div className="bg-muted/30 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Consistent Ownership</h4>
              <p className="text-sm text-muted-foreground">
                Always displays who is responsible for what.
              </p>
            </div>
            <div className="bg-muted/30 p-5 rounded-lg">
              <h4 className="font-medium mb-2">Connected Experience</h4>
              <p className="text-sm text-muted-foreground">
                Links to external tools rather than trying to replace them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ForgeSolutionSection;

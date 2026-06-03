import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeSynthesisSection: React.FC = () => {
  return (
    <CaseStudySection title="Synthesis: Defining the Core Problem">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          The friction log and service blueprint told a clear story. The platform's primary failure point wasn't any single tool or team. It was that FORGE had no centralized way for a tenant to onboard their application and then manage it. Everything a team needed was real and available, but it lived in scattered tools, undocumented handoffs, and the heads of individual experts. There was no front door to get in, and no home base to operate from once you were.
        </p>

        <div className="bg-accent/5 border-l-2 border-accent p-6 rounded-r-lg">
          <p className="text-foreground font-medium">
            The core problem: there was no single place to onboard your app and then manage it.
          </p>
          <p className="text-muted-foreground mt-2">
            Onboarding wasn't a step that ended at go-live. Tenants needed a persistent home to track status, reach their tools, and know who owned what, from first intake through day-to-day operations. That place didn't exist, so every team rebuilt it ad hoc out of Slack threads and tribal knowledge.
          </p>
        </div>

        <p className="text-muted-foreground">
          That single gap surfaced as three interconnected problems:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-accent font-medium">1</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Visibility Problem</h3>
            <p className="text-muted-foreground">
              Tenants couldn't see their progress, pending requirements, or what came next. They operated blind, dependent on individual relationships for status updates.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-accent font-medium">2</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Discoverability Problem</h3>
            <p className="text-muted-foreground">
              Platform services existed but were scattered across tools, documentation, and tribal knowledge. New tenants didn't know what was available or how to access it.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-accent font-medium">3</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Ownership Problem</h3>
            <p className="text-muted-foreground">
              Nobody owned the tenant experience end-to-end. Each team optimized their piece, but the seams between teams were where tenants fell through.
            </p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ForgeSynthesisSection;

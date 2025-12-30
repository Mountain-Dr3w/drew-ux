import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const JigsawResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          The redesign rolled out to the 609th AOC first, then expanded to two other Air Operations Centers over the next 6 months. Numbers below are from 90 days post-deployment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">8+ hrs → 1.5 hrs</p>
            <p className="text-muted-foreground">Daily planning time</p>
            <p className="text-sm text-muted-foreground mt-2">Planners who used to spend all morning on schedules now finish before their first coffee gets cold.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">4 weeks → 3 days</p>
            <p className="text-muted-foreground">New planner onboarding</p>
            <p className="text-sm text-muted-foreground mt-2">The intuitive interface meant new planners could work independently much faster. Huge productivity gain over time.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">0</p>
            <p className="text-muted-foreground">Conflicts missed in 90 days</p>
            <p className="text-sm text-muted-foreground mt-2">Every scheduling conflict was caught before execution. No more angry phone calls from ops.</p>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-6">What planners actually said</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I used to come in at 0400 to get the daily plan done before the morning brief. Now I come in at 0600 like a normal person."</p>
              <p className="text-sm text-muted-foreground">Major, Lead Tanker Planner</p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"New guy showed up last week. By day three he was building plans on his own. Used to take a month before we'd trust someone to work unsupervised."</p>
              <p className="text-sm text-muted-foreground">Captain, Planning Flight Commander</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">What I'd do differently</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">More cross-AOC research earlier</h4>
              <p className="text-muted-foreground text-sm">
                I focused heavily on the 609th. When we rolled out to other AOCs, we found they had slightly different workflows. Some adjustments could have been avoided with broader initial research.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Better mobile fallback</h4>
              <p className="text-muted-foreground text-sm">
                Planners sometimes needed to make changes from their phones. The responsive design worked, but wasn't great. Should have invested more in the mobile experience.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Built-in documentation</h4>
              <p className="text-muted-foreground text-sm">
                We relied on separate training materials. Should have built contextual help directly into the product. Would have made onboarding even faster.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Performance monitoring earlier</h4>
              <p className="text-muted-foreground text-sm">
                We didn't add analytics until after launch. Wish we'd had usage data from day one to identify bottlenecks faster.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-4">The bigger picture</h3>
          <p className="text-muted-foreground">
            Jigsaw became a case study for Kessel Run on how to approach design for complex domains. The approach of extended embedded research followed by rapid iteration became a template for other teams. That felt like an impact beyond just this one product.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawResultsSection;

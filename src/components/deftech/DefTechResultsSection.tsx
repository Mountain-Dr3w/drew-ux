import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DefTechResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          We launched Forward Edge at Travis AFB first, then rolled out to two more bases over the following 6 months. The numbers below are from post-launch surveys and usage analytics collected 90 days after each deployment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">2.5 hrs → 45 min</p>
            <p className="text-muted-foreground">Daily status assessment time</p>
            <p className="text-sm text-muted-foreground mt-2">Users who previously spent the first 2+ hours of their day building a picture of operations could now get it in under an hour.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">96%</p>
            <p className="text-muted-foreground">Active user rate after 90 days</p>
            <p className="text-sm text-muted-foreground mt-2">Nearly every logistics officer at the pilot bases was using the tool daily. The remaining 4% were personnel who rotated out.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">7 days</p>
            <p className="text-muted-foreground">Average early warning time</p>
            <p className="text-sm text-muted-foreground mt-2">The predictive features gave commanders a week of lead time on potential shortages, up from zero (they found out when things broke).</p>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-6">What users actually said</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I used to come in at 0500 to get caught up before the morning briefing. Now I walk in at 0700 and I already know more than I did before."</p>
              <p className="text-sm text-muted-foreground">Lt Col, Logistics Readiness Squadron</p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"Last week the system flagged a parts shortage 9 days before it would have hit. That's 9 days I got to fix it instead of explaining to the wing commander why jets can't fly."</p>
              <p className="text-sm text-muted-foreground">Chief Master Sergeant, Maintenance Group</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">What I'd do differently</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Start with mobile</h4>
              <p className="text-muted-foreground text-sm">
                I designed desktop-first and adapted for mobile later. In hindsight, I should have started with the tablet experience since that's where most of the floor work happened. The retrofit was painful.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Push harder on data quality</h4>
              <p className="text-muted-foreground text-sm">
                The tool is only as good as the data feeding it. Some units had garbage data and the tool surfaced that clearly. I should have advocated earlier for a data quality initiative alongside the design work.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Document tribal knowledge</h4>
              <p className="text-muted-foreground text-sm">
                There were workarounds and informal processes that never got captured. When the colonel who invented them rotated out, some of that knowledge was lost. I wish I'd spent more time documenting the "unofficial" workflows.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Build in training from day one</h4>
              <p className="text-muted-foreground text-sm">
                Adoption was high, but onboarding new users was still a challenge. I should have designed interactive tutorials into the product instead of relying on separate training materials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechResultsSection;

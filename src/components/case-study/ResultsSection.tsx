import React from 'react';
import CaseStudySection from './CaseStudySection';

const ResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          The redesign rolled out over 3 months. We started with existing customers who were struggling, then onboarded new ones with the updated product. Numbers below are from 6 months post-launch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">52%</p>
            <p className="text-muted-foreground">Increase in daily active users</p>
            <p className="text-sm text-muted-foreground mt-2">People who had stopped using the product came back. The dispatcher who'd gone back to paper logs started using the app again.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">78%</p>
            <p className="text-muted-foreground">Drop in support tickets</p>
            <p className="text-sm text-muted-foreground mt-2">The "how do I..." questions mostly disappeared. Users could figure things out themselves.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">124%</p>
            <p className="text-muted-foreground">YoY client growth</p>
            <p className="text-sm text-muted-foreground mt-2">More than doubled customer base. Sales team said the product demo was finally something they were proud to show.</p>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-6">What the team said</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"Drew didn't just make things look better. He changed how we think about building product. We actually talk to users now."</p>
              <p className="text-sm text-muted-foreground">CTO, Veriflux</p>
            </div>

            <div className="border-l-2 border-green-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I was skeptical when we brought on a designer. I thought it was a waste of money. I was wrong. The component library alone saved us months of dev time."</p>
              <p className="text-sm text-muted-foreground">Lead Engineer, Veriflux</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">What I'd do differently</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">More driver research early on</h4>
              <p className="text-muted-foreground text-sm">
                I talked mostly to dispatchers and managers. Should have spent more time with the drivers themselves. Learned some things late that would have been useful earlier.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Design for localization</h4>
              <p className="text-muted-foreground text-sm">
                Many drivers spoke Spanish as their first language. I didn't account for translation in my designs. Had to retrofit later, which was messy.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Better metrics dashboard</h4>
              <p className="text-muted-foreground text-sm">
                I focused on operational tools but under-invested in analytics. Clients wanted to see their environmental impact over time. That became a fast-follow feature.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Push for dedicated QA</h4>
              <p className="text-muted-foreground text-sm">
                Small team meant designs shipped with bugs. I should have advocated harder for testing resources. Some issues could have been caught before users saw them.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-4">The outcome</h3>
          <p className="text-muted-foreground">
            Veriflux closed their Series A about 4 months after the redesign launched. The founder told me the improved product experience was a big factor in closing the round. That felt like the right measure of impact.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ResultsSection;

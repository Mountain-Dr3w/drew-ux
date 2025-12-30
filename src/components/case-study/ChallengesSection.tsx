import React from 'react';
import CaseStudySection from './CaseStudySection';

const ChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="The Problem">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          My first call with a Veriflux customer went like this: "I love what you guys are trying to do, but I can't figure out how to use the software. My drivers are refusing to use the app. We're back to paper logs."
        </p>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-6">What I heard from users</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"Every time I try to schedule a pickup, I have to click through like 15 screens. By the time I'm done, I forgot what I was doing."</p>
              <p className="text-sm text-muted-foreground">Dispatch Manager, Regional Waste Co.</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"The driver app crashes constantly. My guys just take photos on their regular phones and text them to me. Then I have to enter everything manually."</p>
              <p className="text-sm text-muted-foreground">Operations Lead, GreenCycle LLC</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I need to pull a compliance report for an audit next week. I've been on hold with support for 20 minutes because I can't figure out how to export the data."</p>
              <p className="text-sm text-muted-foreground">Compliance Officer, BioFuels Inc.</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Built by engineers, for engineers</h4>
            <p className="text-muted-foreground text-sm">
              The founders were brilliant on the backend. Chain of custody verification, blockchain integration, API architecture. But the frontend was an afterthought. It showed.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">No user research had been done</h4>
            <p className="text-muted-foreground text-sm">
              They'd never actually watched a user use the product. Assumptions were based on what the founders thought users needed, not what they actually needed.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Running out of runway</h4>
            <p className="text-muted-foreground text-sm">
              The company had about 8 months of funding left. If they couldn't improve retention soon, there wouldn't be a Series A. The pressure was real.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Skeptical of "design"</h4>
            <p className="text-muted-foreground text-sm">
              The team had worked with a designer before who delivered pretty mockups that were impossible to build. They were skeptical I'd be any different. I had to prove value fast.
            </p>
          </div>
        </div>

        <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
          <p className="text-lg font-medium mb-2">The core question</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            How do you make a complex B2B logistics tool simple enough for dispatchers who aren't tech-savvy, without losing the depth that compliance officers need?
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ChallengesSection;

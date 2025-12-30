import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DebriefChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="The Problem">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          My first week on the project, I sat in on a squadron debrief. The pilot had just landed from a training sortie where his wingman nearly collided with another aircraft. Important safety incident. And I watched him spend 45 minutes fighting with the software to document it.
        </p>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-6">What pilots told me</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"By the time I'm done with post-flight checks and maintenance handoff, I don't have another 30 minutes to fill out forms. So I just... don't."</p>
              <p className="text-sm text-muted-foreground">Captain, F-16 Pilot</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"The form asks me 50 questions about stuff that didn't happen. But the one thing that DID happen? There's no good way to describe it."</p>
              <p className="text-sm text-muted-foreground">Major, Flight Lead</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I filed a near-miss report three months ago. Never heard anything back. So why bother?"</p>
              <p className="text-sm text-muted-foreground">Lieutenant, Wingman</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">The tool was designed for paperwork, not pilots</h4>
            <p className="text-muted-foreground text-sm">
              The original interface was basically a digital version of paper forms. Long scrolling pages. Required fields for things that didn't apply. No mobile support for use on the flight line.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Completion rate was 23%</h4>
            <p className="text-muted-foreground text-sm">
              Less than 1 in 4 flights got a proper debrief. Of those, most were perfunctory checkbox exercises with no real insight. The data was nearly useless for safety analysis.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">No feedback loop</h4>
            <p className="text-muted-foreground text-sm">
              Pilots filed reports into a black hole. Safety officers reviewed them, but nothing came back to the squadron. So pilots felt like they were shouting into the void.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Desktop-only in a mobile world</h4>
            <p className="text-muted-foreground text-sm">
              Pilots land, debrief with their wingman on the flight line, then walk to the squadron. By the time they get to a computer, the details are fuzzy. They needed to capture info immediately.
            </p>
          </div>
        </div>

        <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
          <p className="text-lg font-medium mb-2">The core question</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            How do you get fighter pilots, who are already exhausted after a sortie, to document their flights in a way that actually generates useful safety data?
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefChallengesSection;

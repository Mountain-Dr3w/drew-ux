import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DebriefApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Research & Approach">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          I spent the first two weeks just observing. I sat in ready rooms, watched pilots land, followed them through post-flight, timed everything. I needed to understand the real workflow, not the official one written in manuals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">32</p>
            <p className="text-muted-foreground">Pilot interviews</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">15</p>
            <p className="text-muted-foreground">Observed debriefs</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">3</p>
            <p className="text-muted-foreground">Bases visited</p>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">The insight that changed everything</h3>
          <p className="text-muted-foreground mb-4">
            I noticed that pilots already debriefed naturally. Right after landing, on the walk back from the flight line, they'd talk to their wingman: "That break turn was sloppy." "Did you see how close that traffic got?" This verbal debrief happened every time, without any prompting.
          </p>
          <p className="text-muted-foreground">
            The problem wasn't that pilots didn't want to debrief. The problem was that the tool didn't fit into that natural moment. By the time they sat down at a computer an hour later, the energy and detail was gone.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">My design hypothesis</h3>
          <p className="text-muted-foreground mb-6">
            If I could capture that immediate post-flight conversation in a structured way, I could get both high completion rates AND high-quality data. The tool needed to feel like a quick chat, not a form.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Old approach</p>
              <p className="font-medium">50-field form on desktop, filled out later</p>
              <p className="text-sm text-muted-foreground mt-2">Result: 23% completion, low quality data</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border border-green-500/50">
              <p className="text-sm text-muted-foreground mb-2">New approach</p>
              <p className="font-medium">5-minute guided flow on iPad, done on the flight line</p>
              <p className="text-sm text-muted-foreground mt-2">Goal: 80%+ completion, actionable safety data</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">A fight I had to win</h3>
          <p className="text-muted-foreground mb-4">
            The safety officers initially pushed back hard on simplifying the form. They wanted all 50 questions because "we might need that data someday." I had to show them the completion rate data and explain that a short form everyone fills out is worth more than a long form nobody completes.
          </p>
          <p className="text-muted-foreground">
            We compromised: the core flow would be 5 questions that everyone answers. If a pilot indicates something unusual happened, they'd get a follow-up flow with more detailed questions. This gave safety officers the detail they needed without taxing routine flights.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefApproachSection;

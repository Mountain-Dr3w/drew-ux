import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DebriefSolutionSection: React.FC = () => {
  return (
    <CaseStudySection title="The Solution">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          I redesigned Debrief from the ground up around one core principle: capture information in the moment it happens, in the format pilots naturally think about it.
        </p>

        <div>
          <h3 className="text-xl font-medium mb-6">The new flow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-blue-500 font-mono text-sm mb-2">Step 1</div>
              <h4 className="text-xl font-medium mb-3">Quick Capture</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Right after landing, pilots open the iPad app and answer 5 questions. Takes about 4 minutes. Flight number, mission type, anything unusual? Yes or no buttons, minimal typing.
              </p>
              <div className="text-xs text-muted-foreground">
                This is the only required step.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-amber-500 font-mono text-sm mb-2">Step 2 (if needed)</div>
              <h4 className="text-xl font-medium mb-3">Detail Flow</h4>
              <p className="text-muted-foreground text-sm mb-4">
                If something unusual happened, they get a targeted follow-up. For a near-miss, it asks about traffic type, altitude, evasive action. For a maintenance issue, it asks about symptoms and writeup details.
              </p>
              <div className="text-xs text-muted-foreground">
                Only shown when relevant.
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-green-500 font-mono text-sm mb-2">For Safety Officers</div>
              <h4 className="text-xl font-medium mb-3">Trend Dashboard</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Safety officers get a web dashboard that aggregates debrief data across the squadron. They can see patterns, flag recurring issues, and push findings back to pilots through the app.
              </p>
              <div className="text-xs text-muted-foreground">
                Closes the feedback loop.
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Design decisions that made the difference</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Big touch targets for gloved hands</h4>
              <p className="text-muted-foreground text-sm">
                Pilots often debrief while still wearing flight gloves. I made all buttons 48px minimum and spaced them out. Early testing with a prototype proved this was necessary after watching a pilot struggle with standard iOS buttons.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Voice input for notes</h4>
              <p className="text-muted-foreground text-sm">
                Typing on a tablet is slow. I added a voice-to-text option for the free-form notes field. Pilots could just talk through what happened while walking back to the squadron. This single feature got the most positive feedback in testing.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Flight data pre-fill</h4>
              <p className="text-muted-foreground text-sm">
                The app pulled flight data from the scheduling system automatically. Pilots didn't have to enter their tail number, takeoff time, or mission type. It was already there. This cut about 2 minutes off every debrief.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Weekly safety digest</h4>
              <p className="text-muted-foreground text-sm">
                I designed a weekly email digest that went to all squadron pilots summarizing what the safety officer learned from that week's debriefs. Pilots finally saw that their input led to actual changes. This was the key to sustained adoption.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Note on screenshots</h4>
          <p className="text-muted-foreground text-sm">
            The actual interface contains mission-specific information I can't share publicly. I can walk through the design in detail during an interview and show additional work samples under NDA.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefSolutionSection;

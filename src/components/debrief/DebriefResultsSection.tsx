import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DebriefResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          We piloted the new Debrief at one squadron first, then expanded to two more over the next 8 weeks. The numbers below are from 90 days post-launch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">23% → 87%</p>
            <p className="text-muted-foreground">Debrief completion rate</p>
            <p className="text-sm text-muted-foreground mt-2">Went from less than 1 in 4 flights getting debriefed to nearly 9 in 10. This was the primary success metric.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">4.2 min</p>
            <p className="text-muted-foreground">Average completion time</p>
            <p className="text-sm text-muted-foreground mt-2">Down from 30+ minutes. Quick enough that pilots could do it walking from the jet to the squadron.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-4xl font-bold mb-2">3x</p>
            <p className="text-muted-foreground">Safety insights reported</p>
            <p className="text-sm text-muted-foreground mt-2">More flights debriefed meant more data. Safety officers were catching issues they'd missed for years.</p>
          </div>
        </div>

        <div className="bg-muted/30 p-8 rounded-lg">
          <h3 className="text-xl font-medium mb-6">What pilots actually said</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I actually do my debriefs now. It's faster than the walk back to the squadron building."</p>
              <p className="text-sm text-muted-foreground">Captain, F-16 Pilot</p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"The weekly digest is great. I saw that three other pilots reported the same issue with the TACAN approach that I did. Nice to know it wasn't just me."</p>
              <p className="text-sm text-muted-foreground">Major, Flight Lead</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-6">What I'd do differently</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Offline mode from day one</h4>
              <p className="text-muted-foreground text-sm">
                We didn't ship offline support until v1.2. Turns out flight lines don't always have great wifi. Lost some early adoption because of this oversight.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">More customization per squadron</h4>
              <p className="text-muted-foreground text-sm">
                Different squadrons have different mission profiles. The one-size-fits-all approach worked okay, but I heard feedback that some questions didn't apply to certain units.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Better handoff to maintenance</h4>
              <p className="text-muted-foreground text-sm">
                Pilots loved it. Maintenance crews wanted the data too but we didn't design that integration. Missed opportunity to extend the impact.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-3">Longitudinal tracking</h4>
              <p className="text-muted-foreground text-sm">
                We captured each debrief but didn't build good tools for tracking patterns over time for individual pilots. Would have been useful for training development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card p-8 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-4">The save</h3>
          <p className="text-muted-foreground">
            Remember: this project was about to be cancelled when I joined. Four months later, it was being cited as a model for how to design military software. The squadron commander asked our team to present to other units about what we'd learned. That felt like the real measure of success.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DebriefResultsSection;

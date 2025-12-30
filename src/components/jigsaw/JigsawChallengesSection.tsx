import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const JigsawChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="The Problem">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          First day at the 609th, I watched a Major spend 45 minutes trying to reschedule one tanker. The interface had the data he needed, but finding it was like searching for a needle in a haystack made of other needles.
        </p>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-6">What planners told me</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"The system has all the information. I just can't see it when I need it. So I end up keeping a whiteboard next to my desk with the stuff I actually use."</p>
              <p className="text-sm text-muted-foreground">Major, Lead Tanker Planner</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"When there's a conflict, the system doesn't tell me. I find out when someone calls me angry that their tanker isn't there."</p>
              <p className="text-sm text-muted-foreground">Captain, Scheduler</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"New planners take weeks to get up to speed. The interface is so complicated that we pair them with experienced folks for the first month."</p>
              <p className="text-sm text-muted-foreground">Squadron Commander</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">The Gantt was overwhelming</h4>
            <p className="text-muted-foreground text-sm">
              Hundreds of sorties displayed at once. Color-coded, but the colors meant nothing to new users. Impossible to find what you were looking for without knowing exactly where to look.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Conflicts were invisible</h4>
            <p className="text-muted-foreground text-sm">
              The system knew when resources were double-booked, but it didn't surface that information. Planners discovered conflicts by accident or when operations called to complain.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Dependencies were mental math</h4>
            <p className="text-muted-foreground text-sm">
              If you moved one tanker, it affected six other things. The system didn't show those connections. Planners had to keep it all in their heads.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Training took forever</h4>
            <p className="text-muted-foreground text-sm">
              The Air Force rotates personnel every 2-3 years. If it takes a month to train each new planner, that's a huge productivity loss across the force.
            </p>
          </div>
        </div>

        <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
          <p className="text-lg font-medium mb-2">The core question</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            How do you visualize complex interdependencies in a way that makes conflicts obvious and decisions easy?
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawChallengesSection;

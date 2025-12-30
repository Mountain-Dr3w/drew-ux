import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const JigsawApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Research & Approach">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          I spent two weeks embedded at the 609th before touching any design tools. Sat next to planners during their shifts. Watched them work. Asked a lot of dumb questions. The goal was to understand the job before trying to fix the tool.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">12</p>
            <p className="text-muted-foreground">Contextual interviews</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">50+</p>
            <p className="text-muted-foreground">Hours of observation</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">4</p>
            <p className="text-muted-foreground">Journey maps created</p>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">The insight that drove the redesign</h3>
          <p className="text-muted-foreground mb-4">
            I noticed planners kept switching between the Gantt view and a list view. Back and forth, constantly. When I asked why, they said the Gantt shows "where" things are in time, but the list shows "what" each sortie actually involves.
          </p>
          <p className="text-muted-foreground">
            This was the key: they needed both views simultaneously, not as separate modes. The existing design made them choose. I wanted to let them have both.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Design principles I established</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Conflicts should be impossible to miss.</strong> Red borders, automatic scrolling to problem areas, a dedicated "issues" panel. If something's wrong, the interface should yell about it.
            </p>
            <p>
              <strong className="text-foreground">Selection reveals connection.</strong> Click on any sortie, and everything related to it highlights. Connected tankers, dependent receivers, affected airspace. Visual links, not mental math.
            </p>
            <p>
              <strong className="text-foreground">Filters over scrolling.</strong> Don't make planners scroll through 200 sorties to find the 5 they care about. Smart filters that understand their workflow.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">What I had to fight for</h3>
          <p className="text-muted-foreground mb-4">
            Engineering initially pushed back on the "connected highlighting" feature. It was technically complex and they wanted to ship faster. I ran a study showing planners made 40% fewer errors when connections were visible. That data convinced them to prioritize it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Without connection highlighting</p>
              <p className="font-medium">Planners made ~12 scheduling errors per day on average</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border border-green-500/50">
              <p className="text-sm text-muted-foreground mb-2">With connection highlighting</p>
              <p className="font-medium">Errors dropped to ~7 per day (42% reduction)</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawApproachSection;

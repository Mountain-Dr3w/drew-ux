import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const JigsawIntroSection: React.FC = () => {
  return (
    <>
      {/* My Role Section */}
      <CaseStudySection title="My Role">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Lead UX Designer</h3>
            <p className="text-muted-foreground mb-4">
              I led the redesign of Jigsaw's planning interface at Kessel Run, the Air Force's software factory. The existing tool was technically powerful but unusable. Planners were spending 8+ hours on tasks that should take 1-2 hours.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Led research with tanker planners at the 609th AOC</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Redesigned the Gantt-based scheduling interface</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created design system for complex data visualization</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Shipped to production with 6 dev sprints</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Timeline</p>
                <p className="font-medium">8 months</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Team</p>
                <p className="font-medium">8 people</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Platform</p>
                <p className="font-medium">Web (classified)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Users</p>
                <p className="font-medium">Tanker planners</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">What is Kessel Run?</strong><br />
                The USAF's software factory that builds modern tools for military operations. Named after the Star Wars reference. They bring Silicon Valley practices to defense software.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Background Section */}
      <CaseStudySection title="Background">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            The Air Force runs a global aerial refueling operation. Fighter jets, cargo planes, bombers. They all need gas, and tanker aircraft provide it mid-flight. Coordinating when, where, and which tanker meets which receiver is incredibly complex.
          </p>

          <p className="text-muted-foreground">
            Jigsaw is the tool that planners use to schedule these operations. The previous version worked, technically. But planners were using whiteboards and Excel alongside it because the interface was so hard to use. My job was to make the software match how planners actually think.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Sortie Scheduling</h3>
              <p className="text-muted-foreground">Plan when each tanker takes off, where it flies, and when it lands</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Refueling Windows</h3>
              <p className="text-muted-foreground">Coordinate timing so receivers meet tankers at the right place and time</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Conflict Detection</h3>
              <p className="text-muted-foreground">Catch double-bookings, airspace conflicts, and crew availability issues</p>
            </div>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default JigsawIntroSection;

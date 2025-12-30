import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DefTechChallengesSection: React.FC = () => {
  return (
    <CaseStudySection title="The Problem">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          When I started on this project, I spent the first three weeks just shadowing logistics officers at their desks. What I saw was painful: a colonel with 20 years of experience toggling between 6 browser tabs, a shared Excel file on a network drive, and a whiteboard covered in sticky notes. This was how they tracked $2B+ in equipment.
        </p>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-medium mb-6">What I heard from users</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"I spend the first two hours of every day just figuring out what changed overnight. By the time I have the full picture, it's already outdated."</p>
              <p className="text-sm text-muted-foreground">Squadron Logistics Officer, Travis AFB</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"When something breaks, I have to call three different people to figure out if we have a spare. And half the time the inventory system says we do, but it's already been allocated to someone else."</p>
              <p className="text-sm text-muted-foreground">Maintenance Flight Chief</p>
            </div>

            <div className="border-l-2 border-amber-500 pl-4">
              <p className="text-muted-foreground italic mb-2">"The generals want a readiness briefing every morning. I stay late every night building slides from data that's already stale."</p>
              <p className="text-sm text-muted-foreground">Logistics Readiness Squadron Commander</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Data lived in silos</h4>
            <p className="text-muted-foreground text-sm">
              Inventory in one system. Shipments in another. Maintenance schedules in a third. Personnel availability in a fourth. Nobody had a complete picture, so decisions were made on gut instinct.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Information was always stale</h4>
            <p className="text-muted-foreground text-sm">
              Most data was updated daily at best. In a world where a single broken part can ground an aircraft, "yesterday's numbers" aren't good enough.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">No way to see downstream effects</h4>
            <p className="text-muted-foreground text-sm">
              If you moved 10 parts from Base A to Base B, there was no easy way to see how that would affect readiness at Base A next week. Decisions had unintended consequences.
            </p>
          </div>

          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Reactive, not proactive</h4>
            <p className="text-muted-foreground text-sm">
              Leaders only found out about problems when something broke. There was no early warning system, no forecasting, no way to get ahead of issues.
            </p>
          </div>
        </div>

        <div className="bg-black text-white dark:bg-white dark:text-black p-8 rounded-lg">
          <p className="text-lg font-medium mb-2">The core question</p>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            How do you give a logistics commander a real-time, unified view of their entire supply chain without drowning them in data?
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechChallengesSection;

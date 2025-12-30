import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DebriefIntroSection: React.FC = () => {
  return (
    <>
      {/* My Role Section */}
      <CaseStudySection title="My Role">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Product Designer</h3>
            <p className="text-muted-foreground mb-4">
              I was brought in to redesign Debrief's core workflow after the initial version failed to gain adoption. Pilots weren't using it, and the Air Force was considering scrapping the project entirely. I had 4 months to turn it around.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Conducted field research with 32 pilots across 3 bases</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Redesigned the entire debrief input flow</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created the safety insights dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Worked directly with squadron safety officers</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Timeline</p>
                <p className="font-medium">4 months</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Team</p>
                <p className="font-medium">6 people</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Platform</p>
                <p className="font-medium">iPad + Web</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Users</p>
                <p className="font-medium">Fighter pilots</p>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Background Section */}
      <CaseStudySection title="Background">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every time a military pilot lands, they're supposed to do a debrief. What went well, what didn't, any safety concerns, lessons learned. This information is critical for identifying training gaps and preventing accidents.
          </p>

          <p className="text-muted-foreground">
            The problem: pilots hated debriefing. The existing system was a clunky desktop app that took 30+ minutes to fill out. Most pilots just didn't do it, or they rushed through with minimal detail. The Air Force was missing critical safety data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Flight Documentation</h3>
              <p className="text-muted-foreground">Capture what happened during each sortie in a structured format</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Safety Reporting</h3>
              <p className="text-muted-foreground">Flag incidents and near-misses for squadron safety review</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Trend Analysis</h3>
              <p className="text-muted-foreground">Spot patterns across hundreds of flights to catch systemic issues</p>
            </div>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default DebriefIntroSection;

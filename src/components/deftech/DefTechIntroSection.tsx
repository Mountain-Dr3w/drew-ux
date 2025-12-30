import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DefTechIntroSection: React.FC = () => {
  return (
    <>
      {/* My Role Section */}
      <CaseStudySection title="My Role">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Lead Product Designer</h3>
            <p className="text-muted-foreground mb-4">
              I owned the end-to-end design for Forward Edge, from initial research through delivery. This was a 14-month engagement where I was the sole designer embedded with a team of 6 engineers and 2 product managers.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Led discovery research across 5 defense contractors</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created the design system from scratch</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Ran all usability testing and iteration cycles</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Shipped production designs to 3 USAF bases</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Timeline</p>
                <p className="font-medium">14 months</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Team</p>
                <p className="font-medium">9 people</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Platform</p>
                <p className="font-medium">Web (classified network)</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Users</p>
                <p className="font-medium">~200 logistics officers</p>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Background Section */}
      <CaseStudySection title="Background">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Forward Edge helps Air Force logistics commanders see what's happening across their supply chain in real time. Before this tool existed, leaders were pulling data from 6+ different systems, manually updating spreadsheets, and making decisions based on information that was sometimes days old.
          </p>

          <p className="text-muted-foreground">
            The core problem: when you're responsible for keeping aircraft mission-ready, you can't afford to wait 48 hours to find out you're short on critical parts. Commanders needed a single place to see inventory levels, track shipments, and predict shortfalls before they became emergencies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Supply Chain Visibility</h3>
              <p className="text-muted-foreground">Real-time tracking across warehouses, transit, and deployed units</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Resource Allocation</h3>
              <p className="text-muted-foreground">Tools for redistributing equipment and supplies between units</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Readiness Forecasting</h3>
              <p className="text-muted-foreground">Predictive models showing potential shortfalls weeks out</p>
            </div>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default DefTechIntroSection;

import React from 'react';
import CaseStudySection from './CaseStudySection';

const SolutionsSection: React.FC = () => {
  return (
    <CaseStudySection title="The Solution">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          I rebuilt the core workflows from scratch, focusing on the three tasks users did most often: scheduling pickups, checking driver status, and pulling compliance reports.
        </p>

        <div>
          <h3 className="text-xl font-medium mb-6">What I redesigned</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-green-500 font-mono text-sm mb-2">Core Flow 1</div>
              <h4 className="text-xl font-medium mb-3">Quick Scheduling</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Scheduling a pickup went from 15 clicks to 3. Calendar view for date, dropdown for client, done. Repeat pickups could be set up once and forgotten.
              </p>
              <div className="text-xs text-muted-foreground">
                Before: 15+ clicks, 5 minutes<br />
                After: 3 clicks, 30 seconds
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-green-500 font-mono text-sm mb-2">Core Flow 2</div>
              <h4 className="text-xl font-medium mb-3">Live Driver View</h4>
              <p className="text-muted-foreground text-sm mb-4">
                A map showing all drivers in real time with their current pickup. Click a driver to see their route. No more calling drivers to ask where they are.
              </p>
              <div className="text-xs text-muted-foreground">
                Before: Phone calls to each driver<br />
                After: One glance at the map
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-green-500 font-mono text-sm mb-2">Core Flow 3</div>
              <h4 className="text-xl font-medium mb-3">One-Click Reports</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Compliance officers needed chain-of-custody reports for audits. I built pre-configured report templates they could run with one click.
              </p>
              <div className="text-xs text-muted-foreground">
                Before: Call support, wait for CSV<br />
                After: Click button, download PDF
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Design decisions that worked</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-green-500 pl-6">
              <h4 className="font-medium mb-2">Role-based dashboards</h4>
              <p className="text-muted-foreground text-sm">
                Instead of one interface for everyone, I created three: Dispatcher, Driver, and Compliance. Each showed only what that role needed. Less cognitive load, faster task completion.
              </p>
            </div>

            <div className="border-l-2 border-green-500 pl-6">
              <h4 className="font-medium mb-2">Offline-first mobile app</h4>
              <p className="text-muted-foreground text-sm">
                Drivers often work in areas with bad signal. I redesigned the driver app to work offline, syncing when connection returned. This alone fixed half the support tickets.
              </p>
            </div>

            <div className="border-l-2 border-green-500 pl-6">
              <h4 className="font-medium mb-2">Photo-based data capture</h4>
              <p className="text-muted-foreground text-sm">
                Drivers take photos at pickup and drop-off. The app auto-logs timestamp, GPS, and container ID. No typing required. This made chain-of-custody data actually reliable.
              </p>
            </div>

            <div className="border-l-2 border-green-500 pl-6">
              <h4 className="font-medium mb-2">Simple component library</h4>
              <p className="text-muted-foreground text-sm">
                I built a component library in Figma with clear specs for the dev team. Made handoff painless and ensured the final product matched the designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default SolutionsSection;

import React from 'react';
import CaseStudySection from './CaseStudySection';

const BackgroundSection: React.FC = () => {
  return (
    <>
      {/* My Role Section */}
      <CaseStudySection title="My Role">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Contract UX Designer</h3>
            <p className="text-muted-foreground mb-4">
              Veriflux was a startup with no design resources. The founders had built an MVP themselves, but it wasn't getting traction. They brought me in on a 6-month contract to figure out why users weren't sticking and fix it.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Conducted user research with 8 waste management companies</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Ran full accessibility and usability audit</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Redesigned core workflows from scratch</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Built component library for handoff to dev team</span>
              </li>
            </ul>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Timeline</p>
                <p className="font-medium">6 months</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Team</p>
                <p className="font-medium">Solo designer</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Platform</p>
                <p className="font-medium">Web + Mobile</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Industry</p>
                <p className="font-medium">Sustainability / B2B</p>
              </div>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Background Section */}
      <CaseStudySection title="Background">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Veriflux tracks food waste from restaurants and grocery stores to recycling facilities. Think of it like package tracking, but for used cooking oil and food scraps. This matters because renewable fuel producers need to prove where their feedstock came from to get government credits.
          </p>

          <p className="text-muted-foreground">
            The problem: the existing app was built by engineers for engineers. Users were dispatch managers at waste management companies, not software people. They were struggling with basic tasks and calling support constantly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Pickup Scheduling</h3>
              <p className="text-muted-foreground">Coordinate when drivers collect waste from client locations</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Chain of Custody</h3>
              <p className="text-muted-foreground">Track material from source to processing facility</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Compliance Reports</h3>
              <p className="text-muted-foreground">Generate documentation for regulatory audits</p>
            </div>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default BackgroundSection;

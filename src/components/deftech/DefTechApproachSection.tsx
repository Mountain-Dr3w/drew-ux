import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DefTechApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Research & Discovery">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          I started with three weeks of pure research. No wireframes, no mockups. Just watching people work and asking questions. I visited 5 different organizations and talked to 28 people, from junior logistics specialists to O-6 commanders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">28</p>
            <p className="text-muted-foreground">User interviews conducted</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">10</p>
            <p className="text-muted-foreground">Site visits to logistics centers</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">40+</p>
            <p className="text-muted-foreground">Hours of contextual observation</p>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">What I learned</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Commanders don't want more data.</strong> They're drowning in it. What they need is the answer to one question: "Is my unit ready, and if not, why?" Everything else is noise.
            </p>
            <p>
              <strong className="text-foreground">The real workflow happens outside the system.</strong> People had built elaborate workarounds using Excel, email, and phone calls because the official tools didn't match how they actually needed to work.
            </p>
            <p>
              <strong className="text-foreground">Trust is the biggest barrier.</strong> Users had been burned by bad software before. They didn't believe a new tool would actually help, so my first job was proving that I understood their world.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">A pivot that changed the project</h3>
          <p className="text-muted-foreground mb-4">
            My original brief was to design a "logistics dashboard." But after the research phase, I pushed back on the entire concept. Dashboards are passive. They show you information and hope you notice something important.
          </p>
          <p className="text-muted-foreground mb-4">
            What these users needed was the opposite: a system that actively surfaced problems and guided them toward decisions. I proposed shifting from a "monitoring tool" to a "decision support system." It took two weeks of stakeholder conversations to get buy-in, but it completely changed the direction of the project.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground mb-2">Original brief</p>
              <p className="font-medium">"Build a dashboard that shows logistics data"</p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border border-green-500/50">
              <p className="text-sm text-muted-foreground mb-2">What I proposed</p>
              <p className="font-medium">"Build a system that tells commanders what to do next"</p>
            </div>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechApproachSection;

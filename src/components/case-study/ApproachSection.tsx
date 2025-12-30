import React from 'react';
import CaseStudySection from './CaseStudySection';

const ApproachSection: React.FC = () => {
  return (
    <CaseStudySection title="Research & Approach">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          I started with two parallel tracks: talking to users and auditing the existing product. I needed to understand both what was broken and why.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">8</p>
            <p className="text-muted-foreground">Customer interviews</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">47</p>
            <p className="text-muted-foreground">Usability issues found</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-bold mb-2">12</p>
            <p className="text-muted-foreground">Accessibility failures</p>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">The accessibility audit was brutal</h3>
          <p className="text-muted-foreground mb-4">
            I ran the existing product through WCAG 2.1 AA checks. It failed 12 out of 13 categories. Color contrast was bad. No keyboard navigation. Screen readers couldn't parse the forms. The mobile app was even worse.
          </p>
          <p className="text-muted-foreground">
            I documented everything in a spreadsheet with screenshots and severity ratings. This became my first deliverable to the team. Seeing the problems laid out systematically helped the founders understand why users were struggling.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Key research findings</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Two very different users.</strong> Dispatchers needed speed and simplicity. They scheduled hundreds of pickups a day and couldn't afford extra clicks. Compliance officers needed depth and audit trails. Designing for both was the challenge.
            </p>
            <p>
              <strong className="text-foreground">Mobile was critical but broken.</strong> Drivers did everything on their phones. The driver app was the primary interface for chain-of-custody data capture. And it barely worked.
            </p>
            <p>
              <strong className="text-foreground">Trust was the hidden barrier.</strong> Users didn't trust the system to track things correctly because they'd been burned by bugs. They kept parallel paper records "just in case."
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Building credibility with the team</h3>
          <p className="text-muted-foreground mb-4">
            The founders were skeptical, so I started with quick wins. In week 2, I fixed 6 accessibility issues that required zero code changes, just CSS updates. Color contrast, focus states, button sizing.
          </p>
          <p className="text-muted-foreground">
            Seeing those fixes go live quickly changed the team's attitude. They realized I wasn't there to make pretty mockups. I was there to ship improvements.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ApproachSection;

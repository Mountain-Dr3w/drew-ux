import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DefTechResearchSection: React.FC = () => {
  return (
    <CaseStudySection title="Design Process">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground">
          Once I had buy-in on the new direction, I started sketching. Lots of sketching. I went through about 50 different concepts for the main dashboard before landing on something that worked.
        </p>

        <div>
          <h3 className="text-xl font-medium mb-4">The "aha" moment</h3>
          <p className="text-muted-foreground mb-4">
            Early prototypes tried to show everything at once. Inventory levels, shipment status, maintenance schedules, personnel availability. Users were polite but I could tell they were overwhelmed.
          </p>
          <p className="text-muted-foreground mb-4">
            Then I watched a squadron commander use our prototype for the first time. She scrolled past all my carefully designed charts and asked: "Where does it tell me what's broken?"
          </p>
          <p className="text-muted-foreground">
            That question completely reframed my approach. Instead of organizing by data type, I reorganized around decision type. The new structure: "What needs attention now?" → "What's at risk?" → "What's on track?" Everything else became secondary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-3 text-red-500">First attempt (didn't work)</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Organized by data category (inventory, shipping, personnel)</li>
              <li>• Dashboard with 12+ charts</li>
              <li>• Users had to hunt for problems</li>
              <li>• "Comprehensive" but unusable</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border border-green-500/50">
            <h4 className="font-medium mb-3 text-green-500">Final approach (worked)</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Organized by urgency and decision type</li>
              <li>• Problems surfaced automatically at the top</li>
              <li>• Details available on demand</li>
              <li>• Users could act immediately</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Testing with real users</h3>
          <p className="text-muted-foreground mb-4">
            I ran 6 rounds of usability testing across 3 different USAF bases. Each round was a week of testing, synthesis, and iteration. The prototype changed significantly between rounds 2 and 3 when I realized the information hierarchy was still wrong.
          </p>
          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="font-medium mb-4">Key testing insight</p>
            <p className="text-muted-foreground">
              In round 4, a maintenance chief pointed out that our "risk" calculations didn't account for parts that were technically in stock but already committed to other units. This was a huge blind spot. I worked with engineering to add "allocated vs. available" tracking, which became one of the most-used features in the final product.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-3xl font-bold mb-2">6</p>
            <p className="text-muted-foreground text-sm">Testing rounds</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-3xl font-bold mb-2">47</p>
            <p className="text-muted-foreground text-sm">Usability test sessions</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <p className="text-3xl font-bold mb-2">200+</p>
            <p className="text-muted-foreground text-sm">Design iterations</p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechResearchSection;

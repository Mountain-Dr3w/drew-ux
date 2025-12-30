import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const DefTechSolutionSection: React.FC = () => {
  return (
    <CaseStudySection title="The Solution">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          The final product was built around three core views, each designed for a different type of decision. Users could drill down from any view into the details, but the default state always answered the question: "What do I need to do right now?"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-red-500 font-mono text-sm mb-2">View 1</div>
            <h4 className="text-xl font-medium mb-3">Action Required</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Items that need immediate attention. Critical shortages, overdue shipments, or resources about to hit zero. This was always the first thing users saw.
            </p>
            <div className="text-xs text-muted-foreground">
              Before: Buried in 6 different reports<br />
              After: Top of the screen, color-coded by severity
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-amber-500 font-mono text-sm mb-2">View 2</div>
            <h4 className="text-xl font-medium mb-3">Watch List</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Things trending toward trouble. Not urgent today, but will be urgent in 3-7 days if nothing changes. Early warning that gave commanders time to act.
            </p>
            <div className="text-xs text-muted-foreground">
              Before: No visibility until crisis hit<br />
              After: Predictive alerts 7+ days out
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="text-green-500 font-mono text-sm mb-2">View 3</div>
            <h4 className="text-xl font-medium mb-3">Status Overview</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Everything that's on track. This is where the detailed dashboards and charts lived, but they were secondary. Users only looked here when things were going well.
            </p>
            <div className="text-xs text-muted-foreground">
              Before: The entire focus of the old system<br />
              After: Available on demand, not the default
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Key design decisions</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">No login required for read-only access</h4>
              <p className="text-muted-foreground text-sm">
                Users complained that they had to authenticate every time they wanted to check status. I pushed for read-only access without login (on the classified network, users were already authenticated at the network level). This reduced friction for the most common use case: just checking if things were okay.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Mobile-first for the operations floor</h4>
              <p className="text-muted-foreground text-sm">
                Logistics officers spend half their day walking between warehouses and offices. I designed a responsive version specifically for tablets, with larger touch targets and a simplified view. This wasn't in the original requirements but became essential after field testing.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Plain English over military jargon</h4>
              <p className="text-muted-foreground text-sm">
                The old system used acronyms everywhere. MICAP, RDD, ETIC, NMCS. New officers took months to learn the vocabulary. I pushed for plain language labels with acronym tooltips. "Critical Shortage (MICAP)" instead of just "MICAP." This cut training time significantly.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Note on screenshots</h4>
          <p className="text-muted-foreground text-sm">
            Due to the classified nature of this project, I can't show actual interface screenshots. The descriptions above are based on the unclassified design principles and patterns I developed. Happy to discuss the work in more detail in person.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechSolutionSection;

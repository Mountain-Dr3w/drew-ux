import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeDiscoverySection: React.FC = () => {
  return (
    <CaseStudySection title="Discovery: Mapping the Invisible">
      <div className="space-y-12">
        {/* Service Blueprint */}
        <div>
          <h3 className="text-xl font-medium mb-4">Building the Service Blueprint</h3>
          <p className="text-muted-foreground mb-6">
            The first challenge was that no one had a complete picture of the onboarding journey. Knowledge was siloed across five internal teams, each with their own processes and tools but limited visibility into how their work connected to the tenant experience.
          </p>
          <p className="text-muted-foreground mb-6">
            I facilitated collaborative workshops to construct a comprehensive service blueprint spanning 17 phases of the tenant journey, from initial intake through production deployment. The blueprint captured multiple layers simultaneously: what tenants were doing, what they could see, what happened behind the scenes, and where critical support systems came into play.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src="/lovable-uploads/Service-bluepint.png"
              alt="Service blueprint mapping the 17-phase tenant journey"
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 italic">
            The service blueprint revealed that the journey wasn't just long, it was fragmented. Transitions between phases were where most failures occurred.
          </p>
        </div>

        {/* Event Storming */}
        <div>
          <h3 className="text-xl font-medium mb-4">Event Storming: Understanding Internal Complexity</h3>
          <p className="text-muted-foreground mb-6">
            To understand why handoffs were failing, I conducted event storming sessions using Domain-Driven Design principles. This surfaced the actual flow of work through internal systems, not how teams thought it worked, but how it actually worked.
          </p>
          <div className="rounded-lg overflow-hidden border border-border">
            <img
              src="/lovable-uploads/event-storm.png"
              alt="Event storming session mapping commands, events, and decision points"
              className="w-full"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-3 italic">
            Color-coded elements revealed patterns: orange domain events showed state changes, blue commands indicated team actions, and red hotspots marked known problem areas.
          </p>
          <div className="bg-muted/30 p-6 rounded-lg mt-6">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Critical insight:</strong> The platform assumed a "competent human in the loop" at every transition point. When that assumption failed, when someone was new, or documentation was unclear, or the expert was unavailable, the entire process stalled.
            </p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ForgeDiscoverySection;

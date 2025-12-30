import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeIntroSection: React.FC = () => {
  return (
    <>
      {/* My Role Section */}
      <CaseStudySection title="My Role">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Lead Service Designer</h3>
            <p className="text-muted-foreground mb-4">
              I mapped the end-to-end tenant experience, identified systemic friction points, and designed solutions that bridge the gap between internal platform teams and external tenant developers.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Created comprehensive service blueprint spanning 17 phases</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Facilitated event storming sessions using DDD principles</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Established systematic friction logging process</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2"></div>
                <span>Designed self-service onboarding portal</span>
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
                <p className="text-muted-foreground mb-1">Teams</p>
                <p className="font-medium">5 internal teams</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Methods</p>
                <p className="font-medium">Service Design</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Users</p>
                <p className="font-medium">Platform tenants</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">What is FORGE?</strong><br />
                Future Operationally Resilient Ground Evolution. A cloud platform and DevSecOps environment enabling Space Force application teams to deploy mission-critical services.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Background Section */}
      <CaseStudySection title="Background">
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground">
            FORGE is a cloud platform that enables Space Force application teams to deploy mission-critical services. When I joined, the platform faced a critical problem: onboarding was taking months instead of the target of one week, with only a 6-7% self-service success rate.
          </p>

          <p className="text-muted-foreground">
            Teams were getting lost in a maze of disconnected tools, unclear handoffs, and undocumented requirements. The stakes were high. Every week lost to onboarding friction meant delayed threat response capabilities and slower deployment of mission-critical applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">Months vs. Days</h3>
              <p className="text-muted-foreground">Onboarding taking months instead of the target one week timeline</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">6-7% Success</h3>
              <p className="text-muted-foreground">Self-service success rate was critically low, creating support burden</p>
            </div>

            <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-medium mb-2">5 Siloed Teams</h3>
              <p className="text-muted-foreground">Platform, Onboarding, SecRel, Cyber, and Enablement working disconnected</p>
            </div>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default ForgeIntroSection;

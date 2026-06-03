import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeResultsSection: React.FC = () => {
  return (
    <>
      <CaseStudySection title="Impact">
        {/* The outcome that mattered */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 mb-12">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">The outcome that mattered</p>
          <p className="text-2xl md:text-3xl font-medium mb-3 leading-snug">
            New capability now reaches the people who need it in under 30 days, on average.
          </p>
          <p className="text-muted-foreground max-w-2xl">
            A single place to onboard an app and then manage it collapsed the path from "new team" to "running in production." On a mission platform, that time isn't developer convenience. It's how quickly a needed capability gets into the hands of the people depending on it.
          </p>
        </div>

        {/* Before to after numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm text-muted-foreground">6-7%</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-3xl font-medium text-accent">90%</span>
            </div>
            <p className="text-sm text-muted-foreground">Self-service onboarding success. Most teams now finish without a single support handoff.</p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm text-muted-foreground">months</span>
              <span className="text-muted-foreground">→</span>
              <span className="text-3xl font-medium text-accent">4.5 days</span>
            </div>
            <p className="text-sm text-muted-foreground">Time to first deploy, beating the original one-week target.</p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-medium text-accent mb-2">~80%</p>
            <p className="text-sm text-muted-foreground">Fewer onboarding support tickets. "What's my status?" and "what tools do I have?" stopped reaching the queue.</p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <p className="text-3xl font-medium text-accent mb-2">8</p>
            <p className="text-sm text-muted-foreground">Application teams onboarded through the portal, each a repeatable path rather than a bespoke rescue.</p>
          </div>
        </div>

        {/* User outcomes enabled */}
        <h3 className="text-xl font-medium mb-4">What this enabled for tenants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Know exactly where you stand</h4>
            <p className="text-muted-foreground">
              A tenant can confirm onboarding status, see what's blocking them, and tell who owns the next step, without pinging a human. Status moved from individual relationships to a single source of truth, which is most of how self-service climbed to 90%.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Find every tool in one place</h4>
            <p className="text-muted-foreground">
              New teams reach GitLab, Nucleus, ArgoCD, JFrog Artifactory, Tracer, and SD Elements from one hub instead of hunting through docs or asking colleagues. The question "what tools do I have?" no longer has to be asked.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Stop waiting on the support queue</h4>
            <p className="text-muted-foreground">
              Routine questions resolve in the portal, cutting onboarding tickets by roughly 80% and freeing platform experts to work the genuinely hard problems instead of repeating the same answers.
            </p>
          </div>

          <div className="bg-background dark:bg-card p-6 rounded-lg border border-border">
            <h4 className="text-lg font-medium mb-2">Follow a path, not a rescue</h4>
            <p className="text-muted-foreground">
              The service blueprint and friction log became living artifacts that platform teams use to find and prioritize the next improvement, so each new tenant inherits a smoother path than the last.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudySection title="Reflection">
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground">
            This project reinforced that the hardest service design problems often aren't about individual touchpoints. They're about the invisible spaces between touchpoints. The service blueprint was valuable not because it showed what each team did, but because it revealed where tenant experiences fell through the gaps between teams.
          </p>

          <p className="text-muted-foreground">
            The friction log proved essential for moving from "we hear complaints" to "we understand patterns." By systematically capturing pain points with impact assessment and ownership, we transformed scattered feedback into actionable priorities.
          </p>

          <div className="bg-muted/30 p-6 rounded-lg">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Most importantly:</strong> Reducing time-to-deployment isn't just a developer experience goal. For FORGE, it directly translates to faster warfighter capabilities. Service design in this context isn't about convenience; it's about mission effectiveness.
            </p>
          </div>
        </div>
      </CaseStudySection>
    </>
  );
};

export default ForgeResultsSection;

import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const ForgeFrictionSection: React.FC = () => {
  const frictionPoints = [
    {
      title: 'Outages and Issues Communication Gaps',
      description: 'Tenants experienced outages with zero proactive communication. Teams wasted hours debugging when the platform itself was down.',
      impact: 'The internal team had direct Slack access to delivery, but external tenants would be left in the dark, creating duplicate support burden and eroding trust immediately.',
    },
    {
      title: 'Cross-Team Support Model Undefined',
      description: 'No clear support model existed. SecRel had a pairing room that worked well, but tenants wouldn\'t have access to it. Platform support was spread thin and hard to reach.',
      impact: 'Support became "whoever responds first" rather than "who owns this problem." This scaled linearly with tenants and was unsustainable.',
    },
    {
      title: 'Support Ownership Unclear',
      description: 'No clarity on who to contact for different tools and issues. Is it Platform? SecRel? IT Services?',
      impact: 'Teams wasted time guessing who owns what, got bounced around, or solved problems themselves that should have had quick expert resolution.',
    },
    {
      title: 'ArgoCD Repo Structure Undocumented',
      description: 'Teams copied existing examples assuming they were correct. When examples were wrong, teams inherited bad patterns.',
      impact: 'There was no source of truth for "correct" structure, leading to pipeline failures and rework.',
    },
    {
      title: 'Docker File Location Expectation Undocumented',
      description: 'Pipelines failed because of an undocumented expectation for Docker files to be in a specific folder named after the image.',
      impact: 'Teams had no way to know this requirement. The same problem hit every new tenant.',
    },
  ];

  return (
    <CaseStudySection title="Systematizing Pain Points">
      <div className="space-y-8">
        <p className="text-muted-foreground">
          Rather than tracking issues reactively, I established a proactive friction log that categorized problems by owning team, UX impact severity, what could break, and why it mattered. This shifted conversations from anecdotes to data.
        </p>

        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src="/lovable-uploads/friction-log.png"
            alt="Friction log systematically categorizing pain points"
            className="w-full"
          />
        </div>

        <h3 className="text-xl font-medium mt-8">High-Impact Friction Points Identified</h3>

        <div className="space-y-4">
          {frictionPoints.map((point, index) => (
            <div key={index} className="bg-muted/30 p-6 rounded-lg">
              <h4 className="font-medium mb-2">{point.title}</h4>
              <p className="text-muted-foreground mb-3">{point.description}</p>
              <p className="text-sm text-muted-foreground border-t border-border pt-3">
                <strong className="text-foreground">Impact:</strong> {point.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </CaseStudySection>
  );
};

export default ForgeFrictionSection;

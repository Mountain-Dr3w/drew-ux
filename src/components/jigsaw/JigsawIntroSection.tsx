
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const JigsawIntroSection: React.FC = () => {
  return (
    <CaseStudySection title="Overview">
      <div className="space-y-6">
        <p className="text-muted-foreground">
          The Air Force depends on aerial refueling to project power across the globe. Planning and scheduling these complex tanker operations requires sophisticated tools that can handle intricate dependencies, multiple resources, and time-sensitive operations.
        </p>

        <p className="text-muted-foreground">
          Jigsaw is a mission-critical platform developed by Kessel Run, the Air Force's software factory, to revolutionize aerial refueling planning and execution. The legacy system required extensive manual work, with planners spending hours on tasks that could be automated, often using multiple systems and even physical whiteboards to coordinate operations.
        </p>
        
        <h3 className="text-2xl font-medium pt-4">Client</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">United States Air Force</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Specifically the Air Mobility Command (AMC), responsible for coordinating and executing global aerial refueling operations through the 609th Air Operations Center, their Tanker Airlift Control Center (TACC).
            </p>
          </div>
          <div className="bg-muted/30 p-6 rounded-lg">
            <h4 className="font-medium mb-3">Kessel Run</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The USAF software factory that builds modern, agile software solutions for military operations. Named after the famous Star Wars reference, Kessel Run brings Silicon Valley development practices to defense software.
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-medium pt-4">My Role</h3>
        <div className="bg-muted/30 p-6 rounded-lg">
          <p className="text-muted-foreground mb-4">
            As Lead UX Designer, I was responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Leading the redesign of the gantt-based planning interface</li>
            <li>Conducting user research with Air Force tanker planners</li>
            <li>Creating a design system that supported both planning and operational views</li>
            <li>Working directly with developers to implement the new interface</li>
            <li>Facilitating usability testing and iteration based on feedback</li>
          </ul>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawIntroSection;

import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';

const JigsawMapPlanningSection: React.FC = () => {
  return (
    <CaseStudySection title="The Solution">
      <div className="space-y-10">
        <p className="text-lg text-muted-foreground">
          I redesigned the interface around a split-view concept: Gantt timeline on top, detail panel below. Click anything on the timeline, and all the relevant information appears without leaving the view.
        </p>

        <div>
          <h3 className="text-xl font-medium mb-6">Core changes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-blue-500 font-mono text-sm mb-2">Change 1</div>
              <h4 className="text-xl font-medium mb-3">Connected Highlighting</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Click any sortie, and every related item lights up. Tankers, receivers, crew assignments, airspace blocks. The mental math becomes visual.
              </p>
              <div className="text-xs text-muted-foreground">
                Impact: 42% fewer scheduling errors
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-amber-500 font-mono text-sm mb-2">Change 2</div>
              <h4 className="text-xl font-medium mb-3">Conflict Surfacing</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Issues panel in the sidebar that shows every conflict in real time. Red badges on affected sorties. Impossible to miss.
              </p>
              <div className="text-xs text-muted-foreground">
                Impact: 100% of conflicts caught pre-execution
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="text-green-500 font-mono text-sm mb-2">Change 3</div>
              <h4 className="text-xl font-medium mb-3">Smart Filters</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Saved filter presets for common views. "My tankers today," "KC-135s with crew issues," "Unassigned receivers." One click to the view you need.
              </p>
              <div className="text-xs text-muted-foreground">
                Impact: 3 clicks instead of 20 to find info
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium mb-4">Design decisions that worked</h3>
          <div className="space-y-6">
            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Keyboard shortcuts for power users</h4>
              <p className="text-muted-foreground text-sm">
                Experienced planners work fast. I added keyboard shortcuts for all common actions. J/K to navigate, E to edit, D to duplicate. Planners could keep their hands on the keyboard.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Drag-to-reschedule on the Gantt</h4>
              <p className="text-muted-foreground text-sm">
                Moving a sortie used to require opening a dialog, changing times, and saving. Now you just drag the bar on the timeline. The system validates in real time and shows conflicts before you drop.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Inline editing everywhere</h4>
              <p className="text-muted-foreground text-sm">
                Double-click any field to edit it in place. No more modal dialogs for simple changes. Reduced the click count for common edits from 6 to 2.
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-6">
              <h4 className="font-medium mb-2">Map + Timeline sync</h4>
              <p className="text-muted-foreground text-sm">
                Added a map view that syncs with the Gantt. Click a sortie on the timeline, see its route on the map. Click a point on the map, see its position in time. Both views work together.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 p-6 rounded-lg">
          <h4 className="font-medium mb-4">Note on screenshots</h4>
          <p className="text-muted-foreground text-sm">
            Jigsaw runs on classified networks. I can't show the actual interface. The descriptions above are based on declassified design principles. Happy to walk through more detail under NDA.
          </p>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default JigsawMapPlanningSection;


import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { LayoutDashboard, Network, Bell, BarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DefTechSolutionSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution Design">
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-medium mb-6">Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden border-b-4 border-b-blue-500 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Bell className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Clarity in Noise</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Design interfaces that help analysts quickly distinguish genuine threats from noise, using visual hierarchy and pattern recognition.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-b-4 border-b-purple-500 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Network className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Reveal Relationships</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Make connections between threats visible and interactive, allowing analysts to discover patterns and related incidents.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-b-4 border-b-amber-500 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <BarChart className="text-amber-600 dark:text-amber-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Progressive Disclosure</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Layer information from high-level summaries to detailed technical data, allowing different stakeholders to access appropriate depth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-b-4 border-b-green-500 h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <LayoutDashboard className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Contextual Actions</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Present relevant actions and tools at the right moment in the analysis workflow to streamline response processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-6">Key Features</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Network className="h-24 w-24 text-white opacity-30" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium mb-2">Threat Network Visualization</h4>
                <p className="text-muted-foreground mb-4">
                  Interactive graph visualization showing relationships between threats, affected systems, and potential attack vectors. Allows analysts to explore connections and identify attack patterns.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <LayoutDashboard className="h-24 w-24 text-white opacity-30" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-medium mb-2">Role-Based Dashboards</h4>
                <p className="text-muted-foreground mb-4">
                  Customized views for different user roles, from detailed technical displays for analysts to high-level security posture overviews for executives and leadership teams.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-6">Information Architecture</h3>
          <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
            <div className="h-80 bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="w-full max-w-3xl">
                <div className="flex flex-col">
                  <div className="bg-blue-500 text-white p-4 rounded-t-lg text-center font-medium">
                    Dashboard (Entry Point)
                  </div>
                  
                  <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                    <div className="bg-purple-500 text-white p-3 text-center">
                      Threat Explorer
                    </div>
                    <div className="bg-amber-500 text-white p-3 text-center">
                      Security Posture
                    </div>
                    <div className="bg-green-500 text-white p-3 text-center">
                      Alert Management
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                    <div className="flex flex-col gap-0.5">
                      <div className="bg-purple-400 text-white p-2 text-sm text-center">
                        Network View
                      </div>
                      <div className="bg-purple-400 text-white p-2 text-sm text-center">
                        Timeline View
                      </div>
                      <div className="bg-purple-400 text-white p-2 text-sm text-center">
                        Detailed Analysis
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="bg-amber-400 text-white p-2 text-sm text-center">
                        Risk Scores
                      </div>
                      <div className="bg-amber-400 text-white p-2 text-sm text-center">
                        Compliance Status
                      </div>
                      <div className="bg-amber-400 text-white p-2 text-sm text-center">
                        Vulnerability Map
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="bg-green-400 text-white p-2 text-sm text-center">
                        Alert Queue
                      </div>
                      <div className="bg-green-400 text-white p-2 text-sm text-center">
                        Investigation Tools
                      </div>
                      <div className="bg-green-400 text-white p-2 text-sm text-center">
                        Response Actions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Information architecture diagram showing main navigation paths and feature organization
            </p>
          </div>
        </div>
      </div>
    </CaseStudySection>
  );
};

export default DefTechSolutionSection;

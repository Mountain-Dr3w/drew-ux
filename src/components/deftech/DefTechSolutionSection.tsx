
import React from 'react';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Truck, Box, BarChart, Route } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DefTechSolutionSection: React.FC = () => {
  return (
    <CaseStudySection title="Solution Design">
      <div className="space-y-10">
        <div>
          <h3 className="text-2xl font-medium mb-6">Design Principles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="overflow-hidden border-b-4 border-b-blue-500 h-full">
              <CardContent className="p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Truck className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Real-time Visibility</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Design interfaces that provide immediate insight into supply chain status, fleet locations, and inventory levels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-b-4 border-b-purple-500 h-full">
              <CardContent className="p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Box className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Resource Optimization</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Enable smart allocation of resources through intuitive inventory management and personnel deployment tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-b-4 border-b-amber-500 h-full">
              <CardContent className="p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="bg-amber-100 dark:bg-amber-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <BarChart className="text-amber-600 dark:text-amber-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Data-Driven Insights</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Present actionable analytics and KPIs that help leadership make informed decisions about logistics operations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-b-4 border-b-green-500 h-full">
              <CardContent className="p-6 bg-transparent">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900/30 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <Route className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <h4 className="font-medium text-lg">Streamlined Operations</h4>
                </div>
                <p className="text-muted-foreground text-sm">
                  Simplify complex logistics workflows through intuitive interfaces and automated processes.
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
                  <Truck className="h-24 w-24 text-white opacity-30" />
                </div>
              </div>
              <div className="p-6 bg-transparent">
                <h4 className="text-xl font-medium mb-2">Supply Chain Dashboard</h4>
                <p className="text-muted-foreground mb-4">
                  Comprehensive view of supply chain operations, including real-time tracking of resources, inventory levels, and delivery status across multiple locations.
                </p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-amber-500 to-red-500 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BarChart className="h-24 w-24 text-white opacity-30" />
                </div>
              </div>
              <div className="p-6 bg-transparent">
                <h4 className="text-xl font-medium mb-2">Resource Management Hub</h4>
                <p className="text-muted-foreground mb-4">
                  Centralized system for managing personnel, equipment, and supplies with predictive analytics for optimal resource allocation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-6">Information Architecture</h3>
          <div className="bg-card p-6 rounded-lg border border-border overflow-hidden">
            <div className="h-80 bg-transparent rounded-lg flex items-center justify-center">
              <div className="w-full max-w-3xl">
                <div className="flex flex-col">
                  <div className="bg-blue-500 text-white p-4 rounded-t-lg text-center font-medium">
                    Logistics Command Center (Entry Point)
                  </div>
                  
                  <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                    <div className="bg-purple-500 text-white p-3 text-center">
                      Supply Chain
                    </div>
                    <div className="bg-amber-500 text-white p-3 text-center">
                      Resource Planning
                    </div>
                    <div className="bg-green-500 text-white p-3 text-center">
                      Operations
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-0.5 mt-0.5">
                    <div className="flex flex-col gap-0.5">
                      <div className="bg-purple-400 text-white p-2 text-sm text-center">
                        Inventory Tracking
                      </div>
                      <div className="bg-purple-400 text-white p-2 text-sm text-center">
                        Route Planning
                      </div>
                      <div className="bg-purple-400 text-white p-2 text-sm text-center">
                        Delivery Status
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="bg-amber-400 text-white p-2 text-sm text-center">
                        Personnel
                      </div>
                      <div className="bg-amber-400 text-white p-2 text-sm text-center">
                        Equipment
                      </div>
                      <div className="bg-amber-400 text-white p-2 text-sm text-center">
                        Forecasting
                      </div>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <div className="bg-green-400 text-white p-2 text-sm text-center">
                        Performance
                      </div>
                      <div className="bg-green-400 text-white p-2 text-sm text-center">
                        Compliance
                      </div>
                      <div className="bg-green-400 text-white p-2 text-sm text-center">
                        Reporting
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

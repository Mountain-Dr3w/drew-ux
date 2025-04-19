import React from 'react';
import CaseStudySection from './CaseStudySection';
import { BarChart2, LineChart, PieChart, TrendingUp } from 'lucide-react';
const AnalyticsDashboardSection: React.FC = () => {
  return <CaseStudySection title="Analytics Dashboard">
      <div className="space-y-8">
        <p className="text-muted-foreground text-lg">
          We redesigned the analytics experience to provide actionable insights at a glance, helping stakeholders understand waste trends, identify opportunities for improvement, and measure sustainability impact.
        </p>
        
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="aspect-[16/9] relative">
            <img src="/lovable-uploads/b6b3b22b-ef55-45cd-875a-ddf81891eefd.png" alt="Veriflux analytics dashboard showing waste metrics and visualizations" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-medium mb-2">Recycling Analytics Dashboard</h3>
              <p className="text-white/80 text-sm">
                Comprehensive view of waste collection metrics with actionable insights
              </p>
            </div>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Dashboard Highlights</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <BarChart2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Visual breakdowns of waste sources and categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <LineChart className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Temporal analysis showing waste flow across the week</span>
                </li>
                <li className="flex items-start gap-2">
                  <PieChart className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Performance metrics for drivers and collection routes</span>
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Filterable reports with export capabilities for compliance reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium text-lg">Impact</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">34%</div>
                  <p className="text-sm text-muted-foreground">Increase in daily users for Analytivs</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">23%</div>
                  <p className="text-sm text-muted-foreground">Lost product due to improved traceability</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">28%</div>
                  <p className="text-sm text-muted-foreground">Reduction in reporting time</p>
                </div>
                <div className="bg-muted/30 p-4 rounded-md">
                  <div className="text-3xl font-bold text-green-500 mb-1">76%</div>
                  <p className="text-sm text-muted-foreground">Users reporting improved decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-2">Real-time Metrics</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Live statistics showing current collection status, active routes, and daily progress toward targets.
            </p>
            
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-2">Historical Analysis</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Week-over-week and year-over-year comparisons to track progress and identify trends in waste reduction.
            </p>
            
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h4 className="font-medium mb-2">Performance Leaderboard</h4>
            <p className="text-muted-foreground text-sm mb-4">
              Driver performance metrics to encourage healthy competition and recognize top contributors.
            </p>
            
          </div>
        </div>
      </div>
    </CaseStudySection>;
};
export default AnalyticsDashboardSection;
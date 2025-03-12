
import React from 'react';
import { BarChart2, Users, Activity } from 'lucide-react';
import CaseStudySection from './CaseStudySection';

const NewFeaturesSection: React.FC = () => {
  return (
    <CaseStudySection title="New Features">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Enhanced dashboard"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground">Enhanced dashboard with customizable widgets and improved data visualization</p>
        </div>
        <div className="bg-card p-4 rounded-lg border border-border overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="Reporting features"
            className="rounded-md w-full h-auto mb-3"
          />
          <p className="text-sm text-muted-foreground">New reporting features with interactive charts and export capabilities</p>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6">
        We introduced several key features to enhance the platform's usability and value:
      </p>
      <ul className="space-y-4 text-muted-foreground mb-6">
        <li className="flex items-start gap-3">
          <BarChart2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Enhanced Data Visualization</h4>
            <p>Interactive charts and graphs that make waste metrics more understandable and actionable</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Users size={20} className="text-green-500 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Role-Based Dashboards</h4>
            <p>Customized views for different user roles, ensuring each user sees the most relevant information</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Activity size={20} className="text-green-500 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium mb-1">Progress Tracking</h4>
            <p>Visual indicators of waste diversion progress and environmental impact achievements</p>
          </div>
        </li>
      </ul>
    </CaseStudySection>
  );
};

export default NewFeaturesSection;

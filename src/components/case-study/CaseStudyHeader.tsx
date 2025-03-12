
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyHeader: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2 group">
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>
    </header>
  );
};

export default CaseStudyHeader;

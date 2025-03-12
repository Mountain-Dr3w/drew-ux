
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TransitionEffect from '@/components/TransitionEffect';

interface NextCaseStudySectionProps {
  title: string;
  link: string;
}

const NextCaseStudySection: React.FC<NextCaseStudySectionProps> = ({ title, link }) => {
  return (
    <section className="mt-24 pt-10 border-t border-border">
      <div className="flex flex-col items-center text-center">
        <TransitionEffect direction="up" delay={0.1}>
          <p className="text-muted-foreground mb-4">Next Case Study</p>
          <h2 className="text-3xl font-medium tracking-tight mb-6">{title}</h2>
        </TransitionEffect>
        <TransitionEffect direction="up" delay={0.2}>
          <Link 
            to={link} 
            className="group inline-flex items-center justify-center space-x-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-black/90 dark:hover:bg-white/90 transition-colors duration-300"
          >
            <span className="font-medium">View Case Study</span>
            <ArrowRight 
              size={16} 
              className="transition-transform duration-300 group-hover:translate-x-1" 
            />
          </Link>
        </TransitionEffect>
      </div>
    </section>
  );
};

export default NextCaseStudySection;

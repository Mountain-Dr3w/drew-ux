
import React from 'react';
import TransitionEffect from '@/components/TransitionEffect';

interface CaseStudyHeroProps {
  caseNumber: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

const CaseStudyHero: React.FC<CaseStudyHeroProps> = ({
  caseNumber,
  title,
  description,
  imageUrl,
  imageAlt
}) => {
  return (
    <section className="mb-16 md:mb-24">
      <TransitionEffect direction="up" delay={0.1}>
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-900/30 dark:text-green-400">
          {caseNumber}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-8">
          {title}
        </h1>
      </TransitionEffect>
      <TransitionEffect direction="up" delay={0.2}>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
          {description}
        </p>
      </TransitionEffect>
      
      <div className="mt-10 grid place-items-center">
        <div className="w-full max-w-4xl rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 aspect-video">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;

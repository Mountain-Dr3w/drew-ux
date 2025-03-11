
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-xl glass-card transition-all duration-500 h-full hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="absolute top-2 right-2 w-24 h-24 bg-gradient-to-br from-black/20 to-black/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 dark:from-white/20 dark:to-white/10"></div>
      
      <div className="relative h-72 overflow-hidden rounded-t-xl">
        <div className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700 grayscale",
          isHovered ? "scale-110" : "scale-100"
        )} 
        style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-black/10 text-black rounded-full dark:bg-white/10 dark:text-white">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-black transition-colors dark:group-hover:text-white">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        <div className={cn(
          "flex items-center font-medium text-sm transition-all duration-300",
          isHovered ? "text-black dark:text-white" : "text-gray-400"
        )}>
          <span className="mr-2">View project</span>
          <ArrowRight size={16} className={cn(
            "transition-transform duration-300",
            isHovered ? "transform translate-x-2" : ""
          )} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

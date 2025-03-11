
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
      className="group relative overflow-hidden rounded-2xl glass-card transition-all duration-500 h-full hover:shadow-xl hover:shadow-purple-500/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="absolute top-2 right-2 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-violet-700/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      
      <div className="relative h-72 overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-cover bg-center transition-transform duration-700",
          isHovered ? "scale-110" : "scale-100"
        )} 
        style={{ backgroundImage: `url(${imageUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-700 dark:text-purple-300">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <div className={cn(
          "flex items-center font-medium text-sm transition-all duration-300",
          isHovered ? "text-purple-600 dark:text-purple-400" : "text-gray-400"
        )}>
          <span className="mr-2">View project</span>
          <ArrowRight size={16} className={cn(
            "transition-transform duration-300",
            isHovered ? "transform translate-x-1" : ""
          )} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

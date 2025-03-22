
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string[];
  imageUrl: string;
  url?: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  url = "#",
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={url} className="block h-full">
      <div
        className="group relative overflow-hidden rounded-lg shiftnudge-card h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transitionDelay: `${delay}s`,
        }}
      >      
        <div className="relative h-64 overflow-hidden">
          <div className={cn(
            "absolute inset-0 bg-cover bg-center transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )} 
          style={{ backgroundImage: `url(${imageUrl})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-medium mb-2 text-black dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 dark:text-gray-300">
            {description}
          </p>
          <div className={cn(
            "flex items-center font-medium text-sm transition-all duration-300",
            isHovered ? "text-black dark:text-white" : "text-gray-700 dark:text-gray-300"
          )}>
            <span className="mr-2">View project</span>
            <ArrowRight size={14} className={cn(
              "transition-transform duration-300",
              isHovered ? "transform translate-x-1" : ""
            )} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

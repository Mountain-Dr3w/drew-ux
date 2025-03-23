
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
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
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top; // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position
    // Limit the rotation to a small amount (-5 to 5 degrees)
    const rotateX = ((y - centerY) / centerY) * -5; 
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Link to={url} className="block h-full perspective">
      <div
        ref={cardRef}
        className={cn(
          "group relative overflow-hidden rounded-lg h-full z-10 transition-all duration-300",
          "bg-[hsl(var(--z-10-background))] border border-border",
          "shadow-sm hover:shadow-md transform-gpu",
          isHovered ? "translate-y-[-4px]" : ""
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          resetRotation();
        }}
        onMouseMove={handleMouseMove}
        style={{
          transitionDelay: `${delay}s`,
          transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
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

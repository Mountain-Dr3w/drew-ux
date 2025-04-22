
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  category: string;
  year: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  url,
  category,
  year
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group"
    >
      <Link to={url} className="block h-full">
        <div className="bg-neutral-100 dark:bg-neutral-900 overflow-hidden rounded-2xl h-full flex flex-col">
          {/* Image */}
          <div className="relative aspect-[16/9] overflow-hidden">
            <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10 transition-opacity group-hover:opacity-0" />
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          
          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {category}
              </span>
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {year}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">
              {title}
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6">
              {description}
            </p>
            
            <div className="mt-auto flex items-center text-sm font-medium">
              <span className="mr-2">View Case Study</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

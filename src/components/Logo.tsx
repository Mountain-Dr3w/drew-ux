
import React from 'react';
import { Circle, Square, Triangle, Star, Hexagon } from 'lucide-react';
import { cn } from '@/lib/utils';

export type LogoShape = 'circle' | 'square' | 'triangle' | 'star' | 'hexagon' | 'custom';
export type LogoSize = 'sm' | 'md' | 'lg' | 'xl';

interface LogoProps {
  shape?: LogoShape;
  primaryColor?: string;
  secondaryColor?: string;
  size?: LogoSize;
  text?: string;
  className?: string;
  customPath?: string;
  customViewBox?: string;
}

const sizeMap = {
  sm: { icon: 24, container: 'w-8 h-8', text: 'text-xs' },
  md: { icon: 32, container: 'w-10 h-10', text: 'text-sm' },
  lg: { icon: 48, container: 'w-14 h-14', text: 'text-base' },
  xl: { icon: 64, container: 'w-20 h-20', text: 'text-lg' },
};

const Logo: React.FC<LogoProps> = ({
  shape = 'circle',
  primaryColor = 'currentColor',
  secondaryColor,
  size = 'md',
  text,
  className,
  customPath,
  customViewBox = '0 0 24 24',
}) => {
  const { icon: iconSize, container: containerSize, text: textSize } = sizeMap[size];
  
  const renderShape = () => {
    switch (shape) {
      case 'circle':
        return <Circle size={iconSize} color={primaryColor} fill={secondaryColor || 'transparent'} />;
      case 'square':
        return <Square size={iconSize} color={primaryColor} fill={secondaryColor || 'transparent'} />;
      case 'triangle':
        return <Triangle size={iconSize} color={primaryColor} fill={secondaryColor || 'transparent'} />;
      case 'star':
        return <Star size={iconSize} color={primaryColor} fill={secondaryColor || 'transparent'} />;
      case 'hexagon':
        return <Hexagon size={iconSize} color={primaryColor} fill={secondaryColor || 'transparent'} />;
      case 'custom':
        return (
          <svg 
            width={iconSize} 
            height={iconSize} 
            viewBox={customViewBox} 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d={customPath || 'M12 12h1v1h-1z'} 
              fill={secondaryColor || 'transparent'} 
              stroke={primaryColor} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        );
      default:
        return <Circle size={iconSize} color={primaryColor} />;
    }
  };

  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      <div className={cn('flex items-center justify-center', containerSize)}>
        {renderShape()}
      </div>
      {text && (
        <span className={cn('mt-1 font-medium', textSize)} style={{ color: primaryColor }}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Logo;

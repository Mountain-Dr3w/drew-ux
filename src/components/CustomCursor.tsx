
import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/hooks/use-theme";
import { useIsMobile } from "@/hooks/use-mobile";

interface CursorPosition {
  x: number;
  y: number;
}

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const trailsRef = useRef<CursorPosition[]>([]);
  const requestRef = useRef<number>();
  const numTrails = 5;

  useEffect(() => {
    // Skip effect for mobile devices
    if (isMobile) return;

    // Initialize trails
    trailsRef.current = Array(numTrails).fill({ x: 0, y: 0 });

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const animateTrail = () => {
      // Only update the trail if the cursor is visible
      if (isVisible) {
        const newTrails = [position];
        
        // Calculate positions for trailing dots
        for (let i = 0; i < trailsRef.current.length - 1; i++) {
          // Linear interpolation for smooth following
          newTrails.push({
            x: trailsRef.current[i].x * 0.8 + trailsRef.current[i + 1].x * 0.2,
            y: trailsRef.current[i].y * 0.8 + trailsRef.current[i + 1].y * 0.2
          });
        }
        
        trailsRef.current = newTrails;
      }
      
      requestRef.current = requestAnimationFrame(animateTrail);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the target is or is inside a clickable element
      const isClickable = (element: HTMLElement | null): boolean => {
        if (!element) return false;
        
        if (
          element.tagName.toLowerCase() === 'a' || 
          element.tagName.toLowerCase() === 'button' || 
          element.getAttribute('role') === 'button' ||
          element.tagName.toLowerCase() === 'input' ||
          element.tagName.toLowerCase() === 'textarea' ||
          element.tagName.toLowerCase() === 'select' ||
          element.hasAttribute('tabindex')
        ) {
          return true;
        }
        
        if (element.parentElement && element.parentElement !== document.body) {
          return isClickable(element.parentElement);
        }
        
        return false;
      };
      
      setIsHovering(isClickable(target));
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Start the animation loop
    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isVisible, isMobile, position]);

  // Don't render cursor visuals on mobile or when not visible
  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div 
        className="cursor-dot"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          backgroundColor: theme === "dark" ? "white" : "black"
        }}
      />
      
      {/* Trail dots */}
      {trailsRef.current.slice(1).map((pos, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)",
            opacity: 0.8 - (index * 0.15), // Progressively fade out
            transform: `scale(${0.8 - (index * 0.15)})` // Progressively scale down
          }}
        />
      ))}
      
      {/* Cursor ring */}
      <div 
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
        }}
      />
    </>
  );
};

export default CustomCursor;

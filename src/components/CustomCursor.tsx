
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
  const trailsRef = useRef<CursorPosition[]>(Array(5).fill({ x: 0, y: 0 }));
  const trailElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    // Skip effect for mobile devices
    if (isMobile) return;

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const animateTrail = () => {
      // Only update the trail if the cursor is visible
      if (isVisible) {
        // Create a new trail array starting with the current cursor position
        const newTrails = [position];
        
        // Calculate positions for trailing dots based on previous trail positions
        for (let i = 0; i < trailsRef.current.length - 1; i++) {
          newTrails.push({
            x: trailsRef.current[i].x * 0.8 + trailsRef.current[i + 1].x * 0.2,
            y: trailsRef.current[i].y * 0.8 + trailsRef.current[i + 1].y * 0.2
          });
        }
        
        // Update the trail positions
        trailsRef.current = newTrails;
        
        // Update DOM elements directly for smoother animation
        trailElementsRef.current.forEach((el, index) => {
          if (el && index < trailsRef.current.length) {
            const pos = trailsRef.current[index];
            el.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
            
            // Apply additional styling for trail dots
            if (index > 0) { // Only for trail dots, not the main cursor
              el.style.opacity = (1 - index * 0.15).toString();
              el.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${1 - index * 0.15})`;
            }
          }
        });
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
        ref={el => trailElementsRef.current[0] = el}
        className="cursor-dot"
        style={{ 
          left: `0px`, 
          top: `0px`,
          transform: `translate(${position.x}px, ${position.y}px)`,
          backgroundColor: theme === "dark" ? "white" : "black"
        }}
      />
      
      {/* Trail dots */}
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          ref={el => trailElementsRef.current[index + 1] = el}
          className="cursor-trail"
          style={{
            left: `0px`,
            top: `0px`,
            transform: `translate(0px, 0px)`,
            backgroundColor: theme === "dark" ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.3)"
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


import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from "@/hooks/use-theme";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip effect for mobile devices
    if (isMobile) return;

    let requestId: number;
    let mouseX = 0;
    let mouseY = 0;
    const dotEase = 1; // Instant movement for dot
    const ringEase = 0.15; // Smooth movement for ring
    
    const updateCursorPosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      
      // Store mouse position for both dot and ring
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Dot follows cursor directly and instantly
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };
    
    // Separate animation loop for the trailing ring effect
    const animateRing = () => {
      if (cursorRingRef.current) {
        // Get current position
        const rect = cursorRingRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate new position with smoothing
        const newX = centerX + (mouseX - centerX) * ringEase;
        const newY = centerY + (mouseY - centerY) * ringEase;
        
        // Apply the new position
        cursorRingRef.current.style.transform = `translate3d(${newX}px, ${newY}px, 0) translate(-50%, -50%)`;
      }
      
      // Continue the animation loop
      requestId = requestAnimationFrame(animateRing);
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

    // Start the animation loop
    requestId = requestAnimationFrame(animateRing);
    
    // Use passive event listeners for better performance
    window.addEventListener('mousemove', updateCursorPosition, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Clean up all event listeners and animation frame
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(requestId);
    };
  }, [isVisible, isMobile]);

  // Don't render cursor visuals on mobile or when not visible
  if (isMobile || !isVisible) return null;

  return (
    <>
      <div 
        ref={cursorDotRef}
        className="cursor-dot"
        style={{ 
          backgroundColor: theme === "dark" ? "white" : "black",
          pointerEvents: "none",
          position: "fixed",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          zIndex: 9999,
          transform: "translate(-50%, -50%)"
        }}
      />
      <div 
        ref={cursorRingRef}
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        style={{ 
          borderColor: theme === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
          pointerEvents: "none",
          position: "fixed",
          width: isHovering ? "40px" : "30px",
          height: isHovering ? "40px" : "30px",
          borderRadius: "50%",
          border: "2px solid",
          zIndex: 9998,
          transition: "width 0.2s, height 0.2s",
          transform: "translate(-50%, -50%)"
        }}
      />
    </>
  );
};

export default CustomCursor;

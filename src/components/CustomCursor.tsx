
import React, { useEffect, useState } from 'react';
import { useTheme } from "@/hooks/use-theme";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorColor, setCursorColor] = useState<"light" | "dark">("dark");
  const { theme } = useTheme();

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
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
        
        // Check if the element itself is clickable
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
        
        // Check if any parent element is clickable (up to body)
        if (element.parentElement && element.parentElement !== document.body) {
          return isClickable(element.parentElement);
        }
        
        return false;
      };
      
      setIsHovering(isClickable(target));

      // Get background color of the element under cursor
      const determineBackgroundColor = (element: HTMLElement): string => {
        // First check computed background color
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        
        // If element has visible background color, use it
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          return bgColor;
        }
        
        // Check for background-image or gradient
        if (computedStyle.backgroundImage && 
            computedStyle.backgroundImage !== 'none') {
          // For simplicity, if the element has a non-none background image
          // and appears to be a dark element, assume dark background
          if (element.classList.contains('dark') || 
              computedStyle.color === 'rgb(255, 255, 255)' ||
              computedStyle.color.startsWith('rgba(255, 255, 255')) {
            return 'rgb(30, 30, 30)'; // dark color
          }
        }
        
        // Special case for the "Work With Us" button which has black background in light mode
        if ((element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button') && 
            ((computedStyle.backgroundColor === 'rgb(0, 0, 0)' || 
              computedStyle.backgroundColor.includes('rgba(0, 0, 0')) || 
             element.classList.contains('bg-black'))) {
          return 'rgb(0, 0, 0)'; // Force black
        }
        
        // Check for text color - if white text, likely dark background
        if (computedStyle.color === 'rgb(255, 255, 255)' || 
            computedStyle.color.startsWith('rgba(255, 255, 255')) {
          return 'rgb(30, 30, 30)'; // dark color
        }
        
        // If still no result, try parent element
        if (element.parentElement && element.parentElement !== document.body) {
          return determineBackgroundColor(element.parentElement);
        }
        
        // Default background color based on theme
        return theme === 'dark' ? 'rgb(18, 18, 20)' : 'rgb(250, 250, 250)';
      };

      // Get background color considering all edge cases
      const backgroundColor = determineBackgroundColor(target);
      
      // Calculate brightness of the background (simple formula)
      const getBrightness = (color: string): number => {
        // Extract RGB values
        const rgb = color.match(/\d+/g);
        if (!rgb || rgb.length < 3) return 128; // Default to middle brightness
        
        // Calculate brightness (common formula: 0.299*R + 0.587*G + 0.114*B)
        return (
          0.299 * parseInt(rgb[0]) + 
          0.587 * parseInt(rgb[1]) + 
          0.114 * parseInt(rgb[2])
        );
      };
      
      const brightness = getBrightness(backgroundColor);
      
      // Set cursor color based on background brightness
      // Use more aggressive threshold to ensure white buttons get dark cursor
      setCursorColor(brightness > 100 ? "dark" : "light");
      
      // Debug log for development
      // console.log('Element:', target.tagName, 'BG:', backgroundColor, 'Brightness:', brightness, 'Cursor:', brightness > 100 ? "dark" : "light");
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, theme]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        className={`cursor-dot ${cursorColor === "light" ? "light" : ""}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
      <div 
        className={`cursor-ring ${isHovering ? 'hover' : ''} ${cursorColor === "light" ? "light" : ""}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;

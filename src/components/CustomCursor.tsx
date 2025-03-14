
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

      // Get the background color of the element under the cursor
      const getBgColor = (el: HTMLElement): string => {
        const bgColor = window.getComputedStyle(el).backgroundColor;
        
        // If the element has a non-transparent background, use it
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          return bgColor;
        }
        
        // Check for specific color classes
        if (
          el.classList.contains('bg-white') || 
          el.classList.contains('text-black') || 
          el.classList.contains('white') ||
          el.classList.contains('bg-background') && theme === 'light'
        ) {
          return 'rgb(255, 255, 255)';
        }
        
        if (
          el.classList.contains('bg-black') || 
          el.classList.contains('text-white') || 
          el.classList.contains('black') ||
          el.classList.contains('bg-background') && theme === 'dark'
        ) {
          return 'rgb(0, 0, 0)';
        }
        
        // If we can't determine from this element, check the parent
        if (el.parentElement && el.parentElement !== document.body) {
          return getBgColor(el.parentElement);
        }
        
        // Default to theme background
        return theme === 'dark' ? 'rgb(18, 18, 20)' : 'rgb(250, 250, 250)';
      };
      
      // Get the background color
      const backgroundColor = getBgColor(target);
      
      // Simple function to detect if a color is light or dark
      const isLightColor = (color: string): boolean => {
        // Parse the RGB values from the color string
        const rgb = color.match(/\d+/g);
        if (!rgb || rgb.length < 3) return false;
        
        const r = parseInt(rgb[0]);
        const g = parseInt(rgb[1]);
        const b = parseInt(rgb[2]);
        
        // Calculate perceived brightness (using the formula from WCAG)
        // Perceived brightness = (R * 299 + G * 587 + B * 114) / 1000
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        
        // If brightness > 125, the color is considered light
        return brightness > 125;
      };
      
      // Set cursor color based on background lightness
      const isLight = isLightColor(backgroundColor);
      setCursorColor(isLight ? "dark" : "light");
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

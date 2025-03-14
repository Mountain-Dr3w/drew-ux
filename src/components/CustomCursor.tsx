
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

      // Get accurate background color of the element under cursor
      const determineBackgroundColor = (element: HTMLElement): string => {
        const computedStyle = window.getComputedStyle(element);
        const bgColor = computedStyle.backgroundColor;
        
        // First check explicit background color
        if (bgColor !== 'rgba(0, 0, 0, 0)' && bgColor !== 'transparent') {
          return bgColor;
        }
        
        // Check for specific cases based on class names
        if (element.classList.contains('bg-black') || 
            element.classList.contains('bg-primary') || 
            element.classList.toString().includes('black')) {
          return 'rgb(0, 0, 0)';
        }
        
        if (element.classList.contains('bg-white') || 
            element.classList.toString().includes('white')) {
          return 'rgb(255, 255, 255)';
        }
        
        // Check for background-image or gradient
        if (computedStyle.backgroundImage && 
            computedStyle.backgroundImage !== 'none') {
          // Check text color to infer background darkness
          if (element.classList.contains('dark') || 
              computedStyle.color === 'rgb(255, 255, 255)' ||
              computedStyle.color.startsWith('rgba(255, 255, 255')) {
            return 'rgb(30, 30, 30)'; // dark color
          }
        }
        
        // Special case for buttons with dark backgrounds
        if ((element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button') && 
            ((computedStyle.backgroundColor === 'rgb(0, 0, 0)' || 
              computedStyle.backgroundColor.includes('rgba(0, 0, 0')) || 
             element.classList.contains('bg-black'))) {
          return 'rgb(0, 0, 0)'; // Force black
        }
        
        // Check for white/light buttons
        if ((element.tagName.toLowerCase() === 'a' || element.tagName.toLowerCase() === 'button') && 
            (computedStyle.backgroundColor === 'rgb(255, 255, 255)' || 
             computedStyle.backgroundColor.includes('rgba(255, 255, 255') ||
             element.classList.contains('bg-white'))) {
          return 'rgb(255, 255, 255)'; // Force white
        }
        
        // Check text color as indicator
        if (computedStyle.color === 'rgb(255, 255, 255)' || 
            computedStyle.color.startsWith('rgba(255, 255, 255')) {
          return 'rgb(20, 20, 20)'; // Assume dark background
        }
        
        if (computedStyle.color === 'rgb(0, 0, 0)' || 
            computedStyle.color.startsWith('rgba(0, 0, 0')) {
          return 'rgb(240, 240, 240)'; // Assume light background
        }
        
        // Try parent element if we couldn't determine
        if (element.parentElement && element.parentElement !== document.body) {
          return determineBackgroundColor(element.parentElement);
        }
        
        // Default background color based on theme
        return theme === 'dark' ? 'rgb(18, 18, 20)' : 'rgb(250, 250, 250)';
      };

      // Get background color considering all factors
      const backgroundColor = determineBackgroundColor(target);
      
      // Calculate luminance for the background (following WCAG 2.0 formula)
      const calculateLuminance = (color: string): number => {
        const rgb = color.match(/\d+/g);
        if (!rgb || rgb.length < 3) return 0.5; // Default to middle luminance
        
        // Convert RGB to values between 0 and 1
        const r = parseInt(rgb[0]) / 255;
        const g = parseInt(rgb[1]) / 255;
        const b = parseInt(rgb[2]) / 255;
        
        // Convert RGB to linear values
        const R = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        const G = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        const B = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
        
        // Calculate luminance
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
      };
      
      // Calculate background luminance
      const bgLuminance = calculateLuminance(backgroundColor);
      
      // Light cursor has high luminance (white), dark cursor has low luminance (black)
      const lightCursorLuminance = 0.9; // Approximate luminance of white
      const darkCursorLuminance = 0.1;  // Approximate luminance of black
      
      // Calculate contrast ratios for both cursor colors
      const contrastWithLight = (Math.max(lightCursorLuminance, bgLuminance) + 0.05) / 
                               (Math.min(lightCursorLuminance, bgLuminance) + 0.05);
      
      const contrastWithDark = (Math.max(darkCursorLuminance, bgLuminance) + 0.05) / 
                              (Math.min(darkCursorLuminance, bgLuminance) + 0.05);
      
      // Choose cursor color with better contrast (should be at least 4.5:1 for WCAG AA)
      setCursorColor(contrastWithDark > contrastWithLight ? "dark" : "light");
      
      // Debug logs for development
      // console.log('Element:', target.tagName, 'BG:', backgroundColor, 'Luminance:', bgLuminance);
      // console.log('Contrast with light:', contrastWithLight, 'Contrast with dark:', contrastWithDark);
      // console.log('Chosen cursor:', contrastWithDark > contrastWithLight ? "dark" : "light");
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

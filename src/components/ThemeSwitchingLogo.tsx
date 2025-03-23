
import React from "react";
import { useTheme } from "@/hooks/use-theme";

const ThemeSwitchingLogo: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-2">
      <svg 
        viewBox="0 0 333.75 292.5" 
        className="h-6 w-auto"
        aria-label="Logo"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            {theme === "dark" ? (
              <>
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#3b82f6" />
              </>
            )}
          </linearGradient>
        </defs>
        <path 
          fill="url(#logoGradient)"
          d="M187.5,0h-61.68V84.57h61.68c34.01,0,61.68,27.68,61.68,61.68s-27.66,61.68-61.68,61.68h-61.68v84.57h61.68c80.63,0,146.25-65.59,146.25-146.25S268.13,0,187.5,0ZM61.88,84.57L0,207.92H125.83V84.57H61.88Z"
        />
      </svg>
      <span 
        className={`font-bold text-xl tracking-tight ${theme === "dark" ? "text-white" : "text-black"}`}
      >
        DrewUX
      </span>
    </div>
  );
};

export default ThemeSwitchingLogo;

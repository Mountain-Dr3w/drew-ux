
import React from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/hooks/use-theme";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <Toggle
      aria-label="Toggle theme"
      className="px-2 transition-all duration-300"
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun size={16} className="text-yellow-300" />
      ) : (
        <Moon size={16} className="text-gray-700" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;

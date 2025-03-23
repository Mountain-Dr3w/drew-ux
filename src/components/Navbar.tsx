
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import ThemeSwitchingLogo from './ThemeSwitchingLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-8',
        isScrolled 
          ? 'bg-background/90 backdrop-blur-sm border-b border-gray-200 dark:bg-background/90 dark:border-white/10' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <ThemeSwitchingLogo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground hover:text-black/60 dark:hover:text-white/60 transition-colors"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation using Sheet component from shadcn/ui */}
        {isMobile && (
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="flex flex-col space-y-1.5 w-6 h-6 justify-center"
                  aria-label="Toggle menu"
                >
                  <span className="w-6 h-0.5 bg-foreground transition-transform duration-300" />
                  <span className="w-6 h-0.5 bg-foreground transition-opacity duration-300" />
                  <span className="w-6 h-0.5 bg-foreground transition-transform duration-300" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="pt-16 px-6">
                <nav className="flex flex-col items-start justify-start space-y-8">
                  {['Projects', 'About', 'Contact'].map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-xl font-medium text-foreground hover:text-accent/80"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

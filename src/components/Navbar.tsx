import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import ThemeSwitchingLogo from './ThemeSwitchingLogo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="flex flex-col space-y-1.5 w-6 h-6 justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                'w-6 h-0.5 bg-foreground transition-transform duration-300',
                mobileMenuOpen && 'transform rotate-45 translate-y-2'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-foreground transition-opacity duration-300',
                mobileMenuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'w-6 h-0.5 bg-foreground transition-transform duration-300',
                mobileMenuOpen && 'transform -rotate-45 -translate-y-2'
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-16 bg-background z-40 transform transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {['Projects', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium text-foreground hover:text-accent/80"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

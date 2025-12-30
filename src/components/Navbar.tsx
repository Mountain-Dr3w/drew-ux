import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const menuItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 lg:px-24',
          isScrolled
            ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-border'
            : 'py-6 bg-transparent'
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-background font-medium text-sm">DM</span>
            </div>
            <span className="hidden md:block text-sm font-medium">
              Drew McFarland
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors link-hover"
              >
                {item.name}
              </a>
            ))}
            <div className="w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground font-mono">
              {formatTime(time)} EST
            </span>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background transition-all duration-500 md:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col justify-center items-start h-full px-8 py-24">
          <nav className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'heading-lg text-foreground transition-all duration-500',
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div
            className={cn(
              'absolute bottom-12 left-8 right-8 flex justify-between items-center text-sm text-muted-foreground transition-all duration-500',
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            <span>drew@drewux.design</span>
            <span className="font-mono">{formatTime(time)} EST</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

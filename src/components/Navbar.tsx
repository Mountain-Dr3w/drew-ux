
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import ThemeSwitchingLogo from './ThemeSwitchingLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  ChevronRight,
  Home,
  Layers,
  User,
  MessageSquare
} from 'lucide-react';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Projects', icon: <Layers size={18} />, href: '#projects' },
    { name: 'About', icon: <User size={18} />, href: '#about' },
    { name: 'Contact', icon: <MessageSquare size={18} />, href: '#contact' }
  ];

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

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
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-black/60 dark:hover:text-white/60 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        {isMobile && (
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/10 text-foreground transition-all hover:bg-black/10 dark:hover:bg-white/20"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 p-0 backdrop-blur-lg bg-background/80 dark:bg-background/80 border-l border-gray-200 dark:border-white/10" 
              >
                <div className="flex flex-col h-full">
                  {/* Menu Header */}
                  <div className="border-b border-gray-200 dark:border-white/10 px-6 py-6">
                    <h2 className="text-xl font-bold gradient-text">Navigation</h2>
                  </div>
                  
                  {/* Menu Items */}
                  <NavigationMenu className="max-w-none w-full mt-4">
                    <NavigationMenuList className="flex flex-col space-y-1 w-full px-4">
                      {menuItems.map((item, index) => (
                        <NavigationMenuItem key={item.name} className="w-full">
                          <NavigationMenuLink asChild>
                            <a 
                              href={item.href}
                              onClick={handleMenuItemClick}
                              className="group flex items-center justify-between w-full p-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200 animate-fade-in"
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-accent group-hover:text-accent-foreground text-muted-foreground transition-colors">
                                  {item.icon}
                                </div>
                                <span className="font-medium">{item.name}</span>
                              </div>
                              <ChevronRight size={16} className="text-muted-foreground group-hover:translate-x-1 transition-transform duration-200" />
                            </a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                  
                  {/* Footer */}
                  <div className="mt-auto border-t border-gray-200 dark:border-white/10 p-6">
                    <div className="text-sm text-muted-foreground">
                      <p className="mb-1 font-medium gradient-text">DrewUX</p>
                      <p>User Experience Wizard</p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


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
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { 
      name: 'Projects', 
      icon: <Layers size={24} />, 
      href: '#projects' 
    },
    { 
      name: 'About', 
      icon: <User size={24} />, 
      href: '#about' 
    },
    { 
      name: 'Contact', 
      icon: <MessageSquare size={24} />, 
      href: '#contact' 
    }
  ];

  const handleMenuItemClick = (name: string) => {
    setActiveItem(name);
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

        {isMobile && (
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex justify-center items-center w-12 h-12 rounded-full bg-transparent text-foreground transition-all hover:bg-accent/10"
                  aria-label="Toggle menu"
                >
                  <Menu size={28} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-72 p-0 bg-background border-l border-gray-200/50 dark:border-white/10 overflow-y-auto" 
              >
                <div className="flex flex-col h-full relative">
                  <div className="border-b border-gray-200/50 dark:border-white/10 px-4 py-3 flex items-center justify-between">
                    <h2 className="text-base font-bold text-foreground">Menu</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex justify-center items-center w-10 h-10 rounded-full bg-transparent text-foreground hover:bg-accent/10"
                      aria-label="Close menu"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  
                  <NavigationMenu className="max-w-none w-full">
                    <NavigationMenuList className="flex flex-col w-full px-1">
                      {menuItems.map((item, index) => (
                        <NavigationMenuItem key={item.name} className="w-full mb-2">
                          <NavigationMenuLink asChild>
                            <a 
                              href={item.href}
                              onClick={() => handleMenuItemClick(item.name)}
                              className={cn(
                                "group flex items-center justify-between w-full py-5 px-4 rounded-lg transition-all duration-300",
                                activeItem === item.name 
                                  ? "bg-accent/5 dark:bg-accent/10" 
                                  : "hover:bg-accent/5 dark:hover:bg-accent/10"
                              )}
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={cn(
                                  "flex items-center justify-center w-10 h-10 rounded-lg bg-transparent text-foreground/70 group-hover:text-foreground transition-colors"
                                )}>
                                  {item.icon}
                                </div>
                                <span className="text-xl font-medium text-foreground">{item.name}</span>
                              </div>
                              <ChevronRight 
                                size={20} 
                                className={cn(
                                  "text-foreground/50 transition-all duration-300",
                                  "group-hover:translate-x-1 group-hover:text-foreground"
                                )} 
                              />
                            </a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                  
                  <div className="mt-auto px-4 pb-4 sticky bottom-0 left-0 right-0">
                    <div className="relative overflow-hidden rounded-lg p-4 bg-accent/5 dark:bg-accent/10 border border-gray-200/50 dark:border-white/10 shadow-sm group">
                      <h3 className="text-base font-medium mb-1 text-foreground">Need a Product Wizard?</h3>
                      <p className="text-sm text-foreground/70 mb-2">Let's collaborate on your next project</p>
                      <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-medium flex items-center gap-1 text-foreground hover:underline"
                      >
                        Get in touch
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>
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

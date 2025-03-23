
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
    { name: 'Projects', icon: <Layers size={16} />, href: '#projects', color: 'bg-[#FEC6A1] dark:bg-orange-600/20' },
    { name: 'About', icon: <User size={16} />, href: '#about', color: 'bg-[#E5DEFF] dark:bg-purple-600/20' },
    { name: 'Contact', icon: <MessageSquare size={16} />, href: '#contact', color: 'bg-[#D3E4FD] dark:bg-blue-600/20' }
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
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-foreground transition-all hover:shadow-md dark:hover:bg-white/20"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-72 p-0 backdrop-blur-lg bg-gradient-to-br from-[#f7f9fc] to-white/95 dark:from-background/90 dark:to-background/80 border-l border-gray-200/50 dark:border-white/10 overflow-hidden" 
              >
                <div className="flex flex-col h-full relative overflow-hidden">
                  {/* Decorative elements - made smaller */}
                  <div className="absolute top-20 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-pink-100/50 to-purple-100/50 dark:from-pink-900/10 dark:to-purple-900/10 blur-xl -z-10"></div>
                  <div className="absolute bottom-40 left-0 w-28 h-28 rounded-full bg-gradient-to-tr from-blue-100/50 to-teal-100/50 dark:from-blue-900/10 dark:to-teal-900/10 blur-xl -z-10"></div>
                  
                  {/* Menu Header - reduced padding */}
                  <div className="border-b border-gray-200/50 dark:border-white/10 px-4 py-3">
                    <h2 className="text-lg font-bold gradient-text">Menu</h2>
                  </div>
                  
                  {/* Menu Items - tightened spacing and made more compact */}
                  <NavigationMenu className="max-w-none w-full mt-2">
                    <NavigationMenuList className="flex flex-col space-y-1 w-full px-2">
                      {menuItems.map((item, index) => (
                        <NavigationMenuItem key={item.name} className="w-full">
                          <NavigationMenuLink asChild>
                            <a 
                              href={item.href}
                              onClick={() => handleMenuItemClick(item.name)}
                              className={cn(
                                "group flex items-center justify-between w-full py-2 px-3 rounded-lg transition-all duration-300 animate-fade-in",
                                activeItem === item.name 
                                  ? "bg-black/5 dark:bg-white/10 shadow-sm" 
                                  : "hover:bg-black/5 dark:hover:bg-white/5"
                              )}
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className="flex items-center space-x-2">
                                <div className={cn(
                                  "flex items-center justify-center w-8 h-8 rounded-lg",
                                  item.color,
                                  "group-hover:scale-110 transition-transform duration-300"
                                )}>
                                  {item.icon}
                                </div>
                                <span className="text-sm font-medium">{item.name}</span>
                              </div>
                              <ChevronRight 
                                size={14} 
                                className={cn(
                                  "text-muted-foreground transition-all duration-300",
                                  "group-hover:translate-x-1 group-hover:text-foreground"
                                )} 
                              />
                            </a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                  
                  {/* Call to action - more compact */}
                  <div className="mt-4 px-4">
                    <div className="relative overflow-hidden rounded-lg p-3 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-white/50 dark:border-white/5 shadow-sm group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-blue-200/20 dark:from-purple-500/10 dark:to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                      <h3 className="text-sm font-medium mb-0.5">Need a Product Wizard?</h3>
                      <p className="text-xs text-muted-foreground mb-2">Let's collaborate on your next project</p>
                      <a 
                        href="#contact" 
                        onClick={() => setIsOpen(false)}
                        className="text-xs font-medium flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Get in touch
                        <ChevronRight size={12} className="transition-transform group-hover:translate-x-1" />
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

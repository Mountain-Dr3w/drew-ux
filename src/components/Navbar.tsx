
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';
import ThemeSwitchingLogo from './ThemeSwitchingLogo';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
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
    { name: 'Projects', icon: <Layers size={20} />, href: '#projects', color: 'bg-[#FEC6A1]/10 dark:bg-orange-600/10' },
    { name: 'About', icon: <User size={20} />, href: '#about', color: 'bg-[#E5DEFF]/10 dark:bg-purple-600/10' },
    { name: 'Contact', icon: <MessageSquare size={20} />, href: '#contact', color: 'bg-[#D3E4FD]/10 dark:bg-blue-600/10' }
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
          ? 'bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-gray-200/30 dark:border-white/10' 
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
              className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
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
                  className="flex justify-center items-center w-10 h-10 rounded-full text-gray-700 dark:text-gray-300"
                  aria-label="Toggle menu"
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-full sm:w-80 p-0 backdrop-blur-xl bg-white/90 dark:bg-black/90 border-l border-gray-200/20 dark:border-white/10" 
              >
                <div className="flex flex-col h-full relative">
                  <div className="absolute top-16 right-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-100/50 to-purple-100/50 dark:from-pink-900/10 dark:to-purple-900/10 blur-xl -z-10"></div>
                  <div className="absolute bottom-40 left-0 w-12 h-12 rounded-full bg-gradient-to-tr from-blue-100/50 to-teal-100/50 dark:from-blue-900/10 dark:to-teal-900/10 blur-xl -z-10"></div>
                  
                  <div className="border-b border-gray-200/20 dark:border-white/10 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-base font-medium">Menu</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="flex justify-center items-center w-8 h-8 rounded-full text-gray-600 dark:text-gray-400"
                      aria-label="Close menu"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  
                  <NavigationMenu className="max-w-none w-full">
                    <NavigationMenuList className="flex flex-col w-full px-4 mt-6">
                      {menuItems.map((item, index) => (
                        <NavigationMenuItem key={item.name} className="w-full mb-2">
                          <NavigationMenuLink asChild>
                            <a 
                              href={item.href}
                              onClick={() => handleMenuItemClick(item.name)}
                              className={cn(
                                "flex items-center w-full py-3 px-4 rounded-lg transition-all duration-300 animate-fade-in",
                                activeItem === item.name 
                                  ? "bg-gray-100 dark:bg-white/5" 
                                  : ""
                              )}
                              style={{ animationDelay: `${index * 100}ms` }}
                            >
                              <div className={cn(
                                "flex items-center justify-center w-8 h-8 rounded-full",
                                item.color
                              )}>
                                {item.icon}
                              </div>
                              <span className="text-base ml-3 text-gray-900 dark:text-gray-100">{item.name}</span>
                            </a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                  
                  <div className="mt-auto mx-6 mb-8">
                    <a 
                      href="#contact" 
                      onClick={() => setIsOpen(false)}
                      className="block w-full bg-black dark:bg-white text-white dark:text-black font-medium py-3 px-4 rounded-lg text-center"
                    >
                      Get in touch
                    </a>
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

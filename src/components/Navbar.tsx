import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect which section is in view for highlighting nav items
      const sections = ['hero', 'projects', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [{
    label: 'Projects',
    href: '#projects'
  }, {
    label: 'About',
    href: '#about'
  }, {
    label: 'Contact',
    href: '#contact'
  }];
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12 ${isScrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <svg viewBox="0 0 333.75 292.5" className="h-8 w-auto mr-2" aria-label="Logo">
              <path fill="currentColor" d="M187.5,0h-61.68V84.57h61.68c34.01,0,61.68,27.68,61.68,61.68s-27.66,61.68-61.68,61.68h-61.68v84.57h61.68c80.63,0,146.25-65.59,146.25-146.25S268.13,0,187.5,0ZM61.88,84.57L0,207.92H125.83V84.57H61.88Z" />
            </svg>
            <span className="text-xl font-semibold text-neutral-50">Drew<span className="text-blue-500">UX</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <a key={item.label} href={item.href} className={`text-sm font-medium transition-colors hover:text-blue-500 ${activeSection === item.href.substring(1) ? 'text-blue-500' : ''}`}>
                {item.label}
              </a>)}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <button onClick={toggleMobileMenu} className="ml-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white dark:bg-black z-40 transform transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="h-full flex flex-col px-6 py-24">
          <nav className="flex flex-col space-y-8 items-center">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>)}
          </nav>
        </div>
      </div>
    </>;
};
export default Navbar;
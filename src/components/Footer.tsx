
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-6">
              Always open to discussing product design challenges, UX strategies, or new opportunities.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:drew@drewux.design" 
                className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">About</a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            &copy; {currentYear} DrewUX. All rights reserved.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 md:mt-0">
            Designed and built with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

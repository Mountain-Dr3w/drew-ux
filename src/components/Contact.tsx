
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-40 rounded-[50%] bg-gradient-to-r from-blue-600/10 via-indigo-400/5 to-transparent blur-3xl -z-10 transform translate-y-[-45%] dark:from-blue-600/10 dark:via-indigo-400/5 dark:to-transparent" />
        
        {/* Additional gradient shape */}
        <div className="absolute bottom-0 -left-20 -right-20 h-80 rounded-[50%] bg-gradient-to-r from-indigo-400/10 via-blue-500/5 to-transparent blur-3xl -z-10 dark:from-indigo-400/10 dark:via-blue-500/5 dark:to-transparent" />
      </div>
    
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <TransitionEffect delay={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full mb-3 dark:from-blue-900/40 dark:to-indigo-900/30 dark:text-blue-300">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-black dark:text-white">
              Let's work together
            </h2>
            <p className="text-gray-800 max-w-2xl mx-auto dark:text-gray-200">
              I'm always interested in new projects and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
          </div>
        </TransitionEffect>

        <TransitionEffect delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <a 
              href="mailto:hello@example.com" 
              className="group p-1 rounded-2xl block bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 dark:from-blue-800/50 dark:via-indigo-800/50 dark:to-purple-800/50 hover:from-blue-300 hover:via-indigo-300 hover:to-purple-300 dark:hover:from-blue-700 dark:hover:via-indigo-700 dark:hover:to-purple-700 transition-all duration-300"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-medium mb-2 text-black dark:text-white">Send me an email</h3>
                <p className="text-gray-800 mb-6 dark:text-gray-200">hello@example.com</p>
                <div className="flex items-center font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300 dark:text-gray-200 dark:group-hover:text-white">
                  <span className="mr-2">Write me</span>
                  <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          </div>
        </TransitionEffect>

        <TransitionEffect delay={0.3}>
          <div className="mt-24 text-center text-sm text-gray-700 dark:text-gray-300">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </TransitionEffect>
      </div>
    </section>
  );
};

export default Contact;

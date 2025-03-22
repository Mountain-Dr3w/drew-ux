
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <TransitionEffect delay={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/10 text-black rounded-full mb-3 dark:bg-white/10 dark:text-white">
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
              href="mailto:drew@drewux.design" 
              className="group glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-black rounded-full text-white mb-6 dark:bg-white dark:text-black">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2 text-black dark:text-white">Send me an email</h3>
              <p className="text-gray-800 mb-6 dark:text-gray-200">drew@drewux.design</p>
              <div className="flex items-center font-medium text-sm text-gray-800 group-hover:text-black transition-colors duration-300 dark:text-gray-200 dark:group-hover:text-white">
                <span className="mr-2">Write me</span>
                <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </TransitionEffect>
      </div>
    </section>
  );
};

export default Contact;

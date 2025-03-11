
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <TransitionEffect delay={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/5 rounded-full mb-3">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Let's work together
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I'm always interested in new projects and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you.
            </p>
          </div>
        </TransitionEffect>

        <TransitionEffect delay={0.2}>
          <div className="max-w-2xl mx-auto">
            <a 
              href="mailto:hello@example.com" 
              className="group glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-black rounded-full text-white mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-medium mb-2">Send me an email</h3>
              <p className="text-gray-600 mb-6">hello@example.com</p>
              <div className="flex items-center font-medium text-sm text-gray-600 group-hover:text-black transition-colors duration-300">
                <span className="mr-2">Write me</span>
                <ArrowRight size={16} className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </TransitionEffect>

        <TransitionEffect delay={0.3}>
          <div className="mt-24 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </TransitionEffect>
      </div>
    </section>
  );
};

export default Contact;

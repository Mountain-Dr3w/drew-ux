
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { Check, Star } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "Citizen Experience Design", 
    "Service Blueprinting", 
    "Accessibility Standards", 
    "Public Engagement", 
    "Digital Transformation", 
    "Policy Implementation"
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <TransitionEffect delay={0.1}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-black/10 text-black rounded-full mb-3 dark:bg-white/10 dark:text-white">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-black dark:text-white">
                We bridge the gap between policy goals and citizen needs
              </h2>
            </TransitionEffect>
            
            <TransitionEffect delay={0.2}>
              <p className="text-gray-800 mb-6 text-pretty dark:text-gray-200">
                With over 8 years of experience working with government agencies and public institutions, District Creative specializes in transforming complex public services into intuitive digital experiences. We understand the unique challenges of the public sector and design solutions that serve both operational needs and citizen expectations.
              </p>
            </TransitionEffect>
            
            <TransitionEffect delay={0.3}>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-black dark:text-white">Expertise</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check size={16} className="text-black dark:text-white" />
                      <span className="text-gray-800 dark:text-gray-200">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TransitionEffect>
          </div>
          
          <TransitionEffect delay={0.4}>
            <div className="relative p-1">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-100 to-white shadow-sm border border-gray-200 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={20} className="text-black fill-black dark:text-white dark:fill-white" />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg font-medium italic max-w-xs mb-4 text-balance text-black dark:text-white">
                      "District Creative transformed our citizen services portal into an intuitive platform that citizens actually enjoy using."
                    </blockquote>
                    <cite className="text-sm text-gray-700 not-italic dark:text-gray-300">— Director of Digital Services, State Agency</cite>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-black/10 -z-10 dark:bg-white/5" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-black/10 -z-10 dark:bg-white/5" />
            </div>
          </TransitionEffect>
        </div>
      </div>
    </section>
  );
};

export default About;

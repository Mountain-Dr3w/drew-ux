
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { Check, Star } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    "Strategic User Research", 
    "Information Architecture", 
    "Interaction Design", 
    "UI Systems Development", 
    "Usability Testing", 
    "Design Implementation"
  ];

  return (
    <section id="about" className="min-h-screen py-24 md:py-32 relative flex items-center">
      {/* Background elements for personality */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-10 -right-10 h-32 rounded-[50%] bg-gradient-to-r from-black/2 via-black/1 to-muted blur-3xl -z-10 transform translate-y-[-45%] dark:from-white/2 dark:via-white/1 dark:to-muted" />
        
        {/* Lofi sketch elements */}
        <div className="absolute top-20 right-[5%] w-24 h-24 border-2 border-dashed border-gray-300/40 dark:border-gray-700/40 rounded-md rotate-12 opacity-60"></div>
        <div className="absolute bottom-[30%] right-[15%] w-32 h-8 bg-gray-100/20 dark:bg-gray-800/20 rounded-sm transform -rotate-6"></div>
        <div className="absolute top-[25%] left-[20%] w-12 h-12 border-2 border-gray-300/30 dark:border-gray-700/30 transform rotate-45"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <TransitionEffect delay={0.1}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-black/10 text-black rounded-full mb-3 dark:bg-white/10 dark:text-white">
                UX Design Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-black dark:text-white">
                Transforming complex challenges into intuitive user experiences
              </h2>
            </TransitionEffect>
            
            <TransitionEffect delay={0.2}>
              <p className="text-gray-800 mb-6 text-pretty dark:text-gray-200">
                With over 8 years of strategic UX design experience, I specialize in transforming complex digital products into intuitive, user-centered experiences. My design approach balances business objectives with user needs, creating interfaces that drive engagement, adoption, and satisfaction across diverse platforms.
              </p>
            </TransitionEffect>
            
            <TransitionEffect delay={0.3}>
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-4 text-black dark:text-white">Core Competencies</h3>
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
                      "Their strategic UX approach transformed our platform from functional to exceptional, resulting in measurable improvements in user adoption."
                    </blockquote>
                    <cite className="text-sm text-gray-700 not-italic dark:text-gray-300">— Product Lead, Tech Startup</cite>
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

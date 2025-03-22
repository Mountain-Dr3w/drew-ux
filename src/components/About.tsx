
import React from 'react';
import TransitionEffect from './TransitionEffect';
import { Check, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const About: React.FC = () => {
  const qualities = [
    {
      title: "End-to-End Product Design",
      description: "I take ideas all the way from exploratory research to polished, high-fidelity designs—creating experiences that are not just beautiful, but intuitive, functional, and built to scale."
    },
    {
      title: "Product Strategy",
      description: "I connect user needs with business goals to shape products that are both valuable and viable. By blending research, data, and design thinking, I help define clear roadmaps, prioritize features, and create experiences that drive real impact."
    },
    {
      title: "Technical Collaboration",
      description: "With deep knowledge of component architecture and design systems, I partner closely with engineering to create solutions that balance innovation with implementation realities and constraints."
    },
    {
      title: "User-Centered Approach",
      description: "I dig deep to understand what users truly need by listening, researching, and testing. Every design decision I make is guided by real insights and a genuine focus on creating better experiences."
    }
  ];

  const personalQualities = [
    {
      title: "Photography Enthusiast",
      description: "When I'm not designing interfaces, I'm capturing moments through my camera. Photography helps me develop a keen eye for composition and detail that translates directly to my design work."
    },
    {
      title: "Outdoor Explorer",
      description: "I find inspiration in nature and love hiking, camping, and exploring new landscapes. These adventures refresh my creativity and provide new perspectives for problem-solving."
    },
    {
      title: "Continuous Learner",
      description: "I'm always taking courses, reading books, or picking up new skills. This curiosity keeps my thinking fresh and helps me bring diverse influences into my design solutions."
    },
    {
      title: "Community Volunteer",
      description: "I regularly volunteer with local tech meetups and mentor emerging designers. Helping others grow reinforces my own skills and keeps me connected to different viewpoints."
    }
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
        <TransitionEffect delay={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/10 text-black rounded-full mb-3 dark:bg-white/10 dark:text-white">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-black dark:text-white">
              Your key to driving user and business outcomes
            </h2>
            <p className="max-w-2xl mx-auto text-gray-800 text-pretty dark:text-gray-200">
              Beyond tactical execution, I bring strategic vision and cross-functional leadership to drive holistic product experiences that scale and deliver measurable business impact.
            </p>
          </div>
        </TransitionEffect>
        
        <TransitionEffect delay={0.2}>
          <div className="max-w-5xl mx-auto mb-12">
            <Tabs defaultValue="at-work" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100/70 dark:bg-gray-800/50">
                  <TabsTrigger value="at-work" className="text-sm px-6">At Work</TabsTrigger>
                  <TabsTrigger value="outside-work" className="text-sm px-6">Outside of Work</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="at-work" className="mt-0 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {qualities.map((quality, index) => (
                    <div key={index} className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200/80 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 h-full">
                      <h3 className="text-lg font-medium mb-3 text-black dark:text-white">
                        {quality.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-pretty">
                        {quality.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="outside-work" className="mt-0 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {personalQualities.map((quality, index) => (
                    <div key={index} className="bg-white/50 dark:bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-gray-200/80 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 h-full">
                      <h3 className="text-lg font-medium mb-3 text-black dark:text-white">
                        {quality.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-pretty">
                        {quality.description}
                      </p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </TransitionEffect>
        
        <TransitionEffect delay={0.4}>
          <div className="mt-16 relative max-w-2xl mx-auto p-1">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-gray-100 to-white shadow-sm border border-gray-200 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 p-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-black fill-black dark:text-white dark:fill-white" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg font-medium italic mb-4 text-balance text-black dark:text-white">
                  "Drew's ability to build relationships with [our users], and to understand and act on their feedback to deliver valuable outcomes has been instrumental for us. I truly believe we would not have operational adoption without him."
                </blockquote>
                <cite className="text-sm text-gray-700 not-italic dark:text-gray-300">— Portfolio Product Lead</cite>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-black/10 -z-10 dark:bg-white/5" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-black/10 -z-10 dark:bg-white/5" />
          </div>
        </TransitionEffect>
      </div>
    </section>
  );
};

export default About;

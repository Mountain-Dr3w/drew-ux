
import React from 'react';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';

const Portfolio: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 z-[-10] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/15 dark:via-purple-900/15 dark:to-pink-900/15"></div>
      </div>
      
      <Navbar />
      <main className="relative z-0 flex flex-col items-center w-full max-w-[2200px] lg:px-16 xl:px-32 2xl:px-64 mx-auto">
        <section className="section-padding w-full">
          <div className="max-w-4xl mx-auto px-4 md:px-8 mb-16">
            <h1 className="shiftnudge-heading text-center mb-6">Portfolio</h1>
            <p className="shiftnudge-subheading text-center max-w-2xl mx-auto">
              A collection of case studies showcasing my approach to solving complex design challenges across different industries and platforms.
            </p>
          </div>
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;

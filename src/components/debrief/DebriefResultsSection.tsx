
import React from 'react';
import { motion } from 'framer-motion';
import CaseStudySection from '@/components/case-study/CaseStudySection';
import { Card, CardContent } from '@/components/ui/card';

const DebriefResultsSection: React.FC = () => {
  return (
    <CaseStudySection title="Results & Impact">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium mb-3">Efficiency</h3>
              <p className="text-5xl font-bold mb-3 text-blue-500">78%</p>
              <p className="text-neutral-600 dark:text-neutral-400">Increase in completed debriefs</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium mb-3">Safety</h3>
              <p className="text-5xl font-bold mb-3 text-purple-500">34%</p>
              <p className="text-neutral-600 dark:text-neutral-400">More safety insights identified</p>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="overflow-hidden border-0 shadow-md bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-medium mb-3">MX Time</h3>
              <p className="text-5xl font-bold mb-3 text-green-500">10%</p>
              <p className="text-neutral-600 dark:text-neutral-400">Maintenance time cut on average</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <Card className="border-0 shadow-md bg-white dark:bg-neutral-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Organizational Impact</h3>
            <div className="space-y-6">
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                The Debrief platform has fundamentally transformed how aviation teams approach post-flight analysis, turning what was once considered an administrative burden into a strategic safety and operational efficiency tool.
              </p>
              
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                Flight safety officers now have access to comprehensive, standardized data that enables them to identify trends and potential issues before they become incidents. This proactive approach has led to documented improvements in training programs and operational procedures.
              </p>
              
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
                For pilots, the platform has significantly reduced administrative workload while improving the quality and usefulness of debriefing sessions, creating a positive feedback loop that reinforces the value of thorough post-flight analysis.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-16"
      >
        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-10 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <blockquote className="text-xl md:text-2xl italic font-light text-neutral-700 dark:text-neutral-300 mb-8">
              "Debrief has revolutionized how our pilots document and learn from each flight. We're identifying training opportunities and operational improvements that simply weren't visible with our previous systems."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-200 dark:bg-blue-800 rounded-full"></div>
              <div>
                <p className="font-medium">Director of Flight Operations</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">USAF Fighter Squadron</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Card className="border-0 shadow-md bg-white dark:bg-neutral-900">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">Lessons Learned</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">Domain Expertise Matters</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Immersing ourselves in the aviation environment was crucial to understanding the nuances of flight operations and debriefing procedures.
                </p>
              </div>
              <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">Balance Structure and Flexibility</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  The most effective solution provided standardized reporting while allowing for the unique circumstances of individual flights.
                </p>
              </div>
              <div className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl">
                <h4 className="font-bold text-lg mb-3">Data Integration is Key</h4>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Connecting the debriefing platform with existing flight systems significantly increased adoption and data quality.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </CaseStudySection>
  );
};

export default DebriefResultsSection;


import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-neutral-50 dark:bg-neutral-900">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-medium text-blue-500 mb-2 block">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Interested in working together? Have a question about my process or approach?
            Send me a message and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">
              Feel free to reach out for collaboration opportunities, project inquiries, 
              or just to say hello. I'm currently open to new projects.
            </p>
            
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20 mr-4">
                <Mail className="text-blue-500" size={20} />
              </div>
              <div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">Email</p>
                <a href="mailto:drew@drewux.design" className="font-medium hover:text-blue-500 transition-colors">
                  drew@drewux.design
                </a>
              </div>
            </div>
            
            <a 
              href="mailto:drew@drewux.design" 
              className="inline-flex items-center text-blue-500 font-medium group"
            >
              Write me an email <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm"
          >
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 border-0 focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-6 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

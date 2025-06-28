import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowRight, FiMail } = FiIcons;

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="2" fill="rgba(255,255,255,0.1)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied users and transform your workflow today. 
            Experience the difference our platform can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-white/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </motion.button>

            <motion.button
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-white hover:text-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiMail} className="w-5 h-5" />
              Contact Sales
            </motion.button>
          </div>

          <motion.div 
            className="mt-12 text-white/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="mb-4">Trusted by 10,000+ companies worldwide</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="w-20 h-8 bg-white/20 rounded"></div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
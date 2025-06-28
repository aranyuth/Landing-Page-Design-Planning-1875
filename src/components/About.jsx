import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheck, FiStar, FiAward } = FiIcons;

const stats = [
  { number: '10K+', label: 'Happy Users' },
  { number: '99.9%', label: 'Uptime' },
  { number: '50+', label: 'Countries' },
  { number: '24/7', label: 'Support' }
];

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <span className="text-purple-600 font-semibold text-lg">About Our Platform</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We've been at the forefront of innovation, helping businesses transform 
                their operations and achieve remarkable growth through cutting-edge technology.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                'Advanced Analytics & Insights',
                'Seamless Integration Capabilities',
                'Enterprise-Grade Security',
                'Scalable Infrastructure'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-cyan-50 p-6 rounded-2xl text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Awards */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <SafeIcon icon={FiAward} className="w-6 h-6 text-yellow-500" />
                Recognition & Awards
              </h3>
              <div className="space-y-4">
                {[
                  { title: 'Best Innovation Award 2024', org: 'Tech Excellence' },
                  { title: 'Top User Experience', org: 'Design Awards' },
                  { title: 'Industry Leader Recognition', org: 'Business Today' }
                ].map((award, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <SafeIcon icon={FiStar} className="w-5 h-5 text-yellow-500" />
                    <div>
                      <div className="font-semibold text-gray-900">{award.title}</div>
                      <div className="text-sm text-gray-600">{award.org}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
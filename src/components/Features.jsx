import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiTrendingUp, FiUsers, FiClock, FiHeart } = FiIcons;

const features = [
  {
    icon: FiZap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized infrastructure.'
  },
  {
    icon: FiShield,
    title: 'Secure & Safe',
    description: 'Your data is protected with enterprise-grade security measures.'
  },
  {
    icon: FiTrendingUp,
    title: 'Scalable Growth',
    description: 'Scale effortlessly as your business grows and evolves.'
  },
  {
    icon: FiUsers,
    title: 'Team Collaboration',
    description: 'Work together seamlessly with powerful collaboration tools.'
  },
  {
    icon: FiClock,
    title: '24/7 Support',
    description: 'Get help whenever you need it with our round-the-clock support.'
  },
  {
    icon: FiHeart,
    title: 'User Friendly',
    description: 'Intuitive design that makes complex tasks simple and enjoyable.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-purple-600">Our Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make us the preferred choice for thousands of users worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
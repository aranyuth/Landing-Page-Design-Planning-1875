import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiLogOut, FiUser, FiHome, FiSettings } = FiIcons;

const DashboardPage = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleBackToLanding = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full"></div>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-white">Platform Dashboard</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleBackToLanding}
                className="flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiHome} className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </motion.button>
              
              <motion.button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-white rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiLogOut} className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Welcome Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8 border border-white/20">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"
              >
                <SafeIcon icon={FiUser} className="w-10 h-10 text-white" />
              </motion.div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Welcome to Your Dashboard!
              </h2>
              
              <p className="text-xl text-gray-300 mb-6">
                You've successfully completed the authentication flow. Your personalized experience awaits.
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>User ID: {user?.id}</span>
              </div>
            </div>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Analytics', icon: FiSettings, desc: 'View your metrics', color: 'from-blue-500 to-cyan-500' },
              { title: 'Settings', icon: FiSettings, desc: 'Customize your experience', color: 'from-purple-500 to-pink-500' },
              { title: 'Profile', icon: FiUser, desc: 'Manage your account', color: 'from-green-500 to-teal-500' },
              { title: 'Projects', icon: FiHome, desc: 'Your active projects', color: 'from-orange-500 to-red-500' },
              { title: 'Team', icon: FiUser, desc: 'Collaborate with others', color: 'from-indigo-500 to-purple-500' },
              { title: 'Support', icon: FiSettings, desc: 'Get help when needed', color: 'from-pink-500 to-rose-500' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                  <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-green-300 mb-2">
                🎉 Authentication Complete!
              </h3>
              <p className="text-green-200">
                You've successfully integrated the Quest React SDK authentication flow. 
                Users can now seamlessly log in and complete onboarding.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default DashboardPage;
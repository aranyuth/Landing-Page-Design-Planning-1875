import React, { useState } from 'react';
import { OnBoarding } from '@questlabs/react-sdk';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import questConfig from '../config/questConfig';

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const getAnswers = () => {
    // Navigate to main app after onboarding completion
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex">
      {/* Left Section - Visual/Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl mb-8 mx-auto flex items-center justify-center shadow-2xl">
              <span className="text-4xl">🚀</span>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Let's Get You <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Started!
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-md">
              We're setting up your personalized experience. This will only take a few moments and help us tailor the platform to your needs.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Personalized dashboard</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Customized recommendations</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span>Optimized workflow</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Onboarding Component */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Setup Your Profile</h2>
              <p className="text-gray-300 text-sm">Help us personalize your experience</p>
            </div>
            
            <div style={{ width: '400px', maxWidth: '100%' }}>
              <OnBoarding
                userId={userId}
                token={token}
                questId={questConfig.QUEST_ONBOARDING_QUESTID}
                answer={answers}
                setAnswer={setAnswers}
                getAnswers={getAnswers}
                accent={questConfig.PRIMARY_COLOR}
                singleChoose="modal1"
                multiChoice="modal2"
              >
                <OnBoarding.Header />
                <OnBoarding.Content />
                <OnBoarding.Footer />
              </OnBoarding>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden absolute top-8 left-8 right-8 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl">🚀</span>
        </div>
        <h1 className="text-xl font-bold text-white">Let's Get Started!</h1>
      </div>
    </div>
  );
};

export default OnboardingPage;
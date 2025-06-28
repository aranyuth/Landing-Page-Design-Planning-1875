import React from 'react';
import { QuestLogin } from '@questlabs/react-sdk';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import questConfig from '../config/questConfig';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = ({ userId, token, newUser }) => {
    login({ userId, token });
    
    if (newUser) {
      navigate('/onboarding');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 flex flex-col justify-center items-center text-center p-12 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-3xl mb-8 mx-auto flex items-center justify-center shadow-2xl">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full"></div>
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-md">
              Transform your ideas into reality with our cutting-edge platform. Join thousands of innovators today.
            </p>
            
            <div className="flex items-center justify-center gap-8 opacity-60">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="w-12 h-8 bg-white/20 rounded"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-gray-300">Sign in to continue your journey</p>
            </div>
            
            <div className="w-full max-w-sm mx-auto">
              <QuestLogin
                onSubmit={handleLogin}
                email={true}
                google={false}
                accent={questConfig.PRIMARY_COLOR}
              />
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                By signing in, you agree to our{' '}
                <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Branding */}
      <div className="lg:hidden absolute top-8 left-8 right-8 text-center">
        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">Platform</h1>
      </div>
    </div>
  );
};

export default LoginPage;
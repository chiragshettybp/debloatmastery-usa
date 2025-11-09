import React from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center p-4">
      <motion.div 
        className="max-w-md w-full bg-gray-900/50 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <CheckCircle className="w-20 h-20 text-green-400" />
            <motion.div
              className="absolute inset-0 bg-green-400/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.h1 
          className="text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Thank You!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="flex justify-center mb-4">
            <Mail className="w-16 h-16 text-blue-400" />
          </div>

          <p className="text-gray-300 text-lg mb-2">
            You will get the guide via email
          </p>
          
          <p className="text-blue-400 font-semibold text-xl">
            Please check your inbox
          </p>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              Don't forget to check your spam folder if you don't see it in a few minutes
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThankYou;

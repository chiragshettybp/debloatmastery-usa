import React from 'react';
// Removed: import SlinkySection from './SlinkySection';

const ProductInfo: React.FC = () => {
  return <div className="w-full px-4 bg-black">
      {/* Removed: <SlinkySection /> */}
      <div className="w-full flex justify-center mb-4">
        <img src="https://i.postimg.cc/ht5snH80/maxresdefault-1.jpg" alt="Debloat Guide - Debloat Face in 30 Days" className="w-full max-w-md rounded-2xl" />
      </div>
      <h1 className="font-bold text-white mt-2 mb-2 text-2xl text-left py-[19px]">THE 30-DAY DEBLOAT GUIDE - YOUR PATH TO A LEANER, DEFINED FACE</h1>
      
      <p className="font-semibold text-white mb-2">Discover the secrets to reduce facial puffiness, enhance your natural features, and boost your confidence.</p>
      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Introduction: Say Goodbye To Your Puffy Face</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Understanding Facial Bloat: More Than Just Fat</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">The Secret to a Debloated Face: The 3 Core Principles</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Step-by-Step Debloat Program</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Natural Methods for Reducing Facial Puffiness</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Detailed Supplement Recommendations & Dosages. (Optional)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Effective Strategies for Sodium & Water Flush</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Guided Lymphatic Drainage Techniques</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Anti-Inflammatory Diet Reset Plan</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Consistency is Key: Your Path to a Leaner Face</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Real Results, No Filters, No BS: See The Difference</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-green-400">📘</span>
          <span className="text-white">Bonus: Before & After Transformation Spotlights (See the difference!): Real examples of people who have achieved results with this guide.</span>
        </div>
        
      </div>
      <p className="text-white mb-1 text-base text-center py-[3px] font-bold">No Complicated Routines. No BS.</p>
    </div>;
};
export default ProductInfo;
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const ProductStatsSection: React.FC = () => {
  const statItems = [{
    percent: "96%",
    description: "Noticed reduced facial puffiness within the first 2 weeks of following the guide"
  }, {
    percent: "91%",
    description: "Gained confidence in their appearance after implementing the debloat methods"
  }, {
    percent: "88%",
    description: "Started seeing visible results and improvements in their facial definition within 30 days"
  }];
  const handleButtonClick = () => {
    window.open('https://www.paypal.com/ncp/payment/CNM78K9DEKTPG', '_blank', 'noopener,noreferrer');
  };
  return <section className="w-full bg-black py-12 px-4">
      <motion.div className="max-w-md mx-auto" initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        {/* Main Headings */}
        <h2 className="text-3xl font-bold text-white mb-1">ACHIEVE YOUR DEBLOAT GOALS®</h2>
        <p className="text-md text-gray-300 font-semibold mb-7">
          Less Puff, More You
        </p>

        {/* Stats Grid */}
        <div className="divide-y divide-gray-700 mb-8">
          {statItems.map((item, index) => <div key={index} className="flex items-center py-5 space-x-6">
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-[#3b83f2]">
                <span className="font-bold text-lg text-slate-50">{item.percent}</span>
              </div>
              <div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>)}
        </div>
        
        <p className="text-xs text-gray-500 mt-2 mb-5">
          As reported by active 30-Days-Debloat-Guide users. Individual results depend on consistency and effort.
        </p>
        
        {/* Order Button and Reviews Block (unchanged) */}
        <button onClick={handleButtonClick} className="w-44 h-12 bg-[#3b83f2] hover:bg-[#3b83f2]/90 text-white font-bold rounded-lg mb-8 relative overflow-hidden">
          {/* Shining effect overlay */}
          <span className="absolute inset-0 overflow-hidden px-0 text-zinc-950">
            <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
          </span>
          <span className="relative z-10 text-xl">GET IT NOW</span>
        </button>
      </motion.div>
    </section>;
};
export default ProductStatsSection;
import React from 'react';
import burgerImage from '../assets/burger.png';
const BurgerComparisonSection = () => {
  return <div className="w-full px-4 mb-4">
      <div className="relative bg-gradient-to-br from-yellow-900/20 to-amber-900/20 backdrop-blur-sm border-2 border-yellow-500/30 rounded-xl p-2 overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-amber-600/20 to-yellow-600/20 animate-pulse"></div>
        
        {/* Content - Left/Right Layout */}
        <div className="relative z-10 flex items-center gap-4">
          {/* Left side - Burger image */}
          <div className="flex-shrink-0">
            <div className="relative hover-scale">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-lg animate-pulse"></div>
              <img src={burgerImage} alt="Burger" className="relative w-12 h-12 object-contain drop-shadow-lg animate-scale-in" />
            </div>
          </div>
          
          {/* Right side - Text content */}
          <div className="flex-1 text-left">
            <h2 className="text-lg font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-1 animate-fade-in">Cost Less Than a Burger! </h2>
            <p className="text-gray-300 mb-2 text-sm font-medium animate-fade-in">
              Get your guide today for the price of a single burger.
            </p>
            
            {/* Price comparison */}
            
          </div>
        </div>
      </div>
    </div>;
};
export default BurgerComparisonSection;
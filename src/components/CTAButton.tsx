
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const CTAButton: React.FC<{
  onClick: () => void;
  paypalLink?: string;
}> = ({ onClick, paypalLink }) => {
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    window.open('https://www.paypal.com/ncp/payment/CNM78K9DEKTPG', '_blank', 'noopener,noreferrer');
    onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.09, rotate: -6 }}
      whileTap={{ scale: 0.97, rotate: 0 }}
      className={
        `w-full h-16 font-bold tracking-wider text-white text-xl transition-all duration-300 ease-in-out transform active:scale-95 shadow-lg hover:shadow-xl rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 bg-[#3b82f6] whitespace-nowrap overflow-hidden text-ellipsis relative` +
        (isMounted ? ' animate-pop-up' : '')
      }
      style={{ backgroundColor: "#3b82f6" }}
    >
      {/* Shining effect overlay */}
      <span className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none z-20">
        <span className="relative text-white text-base font-semibold drop-shadow-md uppercase">
          GET IT NOW
        </span>
        <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
      </span>
      <span className="invisible">GET IT NOW</span>
    </motion.button>
  );
};

export default CTAButton;

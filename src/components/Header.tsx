import React, { useState, useEffect, useRef } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideNavigation } from '../components/SideNavigation';
const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const [minutes, setMinutes] = useState(12);
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else if (minutes > 0) {
          setMinutes(prevMinutes => prevMinutes - 1);
          return 59;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  return <div className="w-full sticky top-0 z-50 shadow-sm">
      {/* Top grey banner */}
      <div className="w-full py-2 px-3 md:px-6 relative overflow-hidden bg-black">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <p className="text-white text-xs md:text-sm font-bold text-center flex-1 md:flex-none">🏆 2025 BEST RATED DIGITAL GUIDE</p>
          
          {/* Countdown timer */}
          <div className="flex items-center justify-center md:justify-end space-x-2 flex-1">
            <div className="w-[45px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-black text-[11px] font-black leading-none">{minutes}</p>
              <p className="text-black text-[6px] font-bold leading-none">MIN</p>
            </div>
            
            <div className="w-[45px] h-[26px] bg-white rounded-[2px] flex flex-col items-center justify-center">
              <p className="text-black text-[11px] font-black leading-none">{formattedSeconds}</p>
              <p className="text-black text-[6px] font-bold leading-none">SEC</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Light grey banner */}
      <div className="w-full py-2 relative bg-[#3b83f2]">
        <div className="container mx-auto">
          <p className="text-xs md:text-sm font-bold text-center text-slate-50">30 DAY MONEY BACK GUARANTEE</p>
        </div>
      </div>
      
      {/* Navigation bar */}
      
    </div>;
};
export default Header;
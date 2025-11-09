import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
const GOLD_GRADIENT = "bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400";
const BottomOfferBar: React.FC<{
  paypalLink?: string;
}> = ({
  paypalLink
}) => {
  // For demo purpose, countdown from 1 minute
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds(prev => {
        if (prev > 0) return prev - 1;
        if (minutes > 0) {
          setMinutes(m => m - 1);
          return 59;
        }
        if (timerRef.current) clearInterval(timerRef.current);
        return 0;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minutes]);
  const handleButtonClick = () => {
    const isIndiaPage = location.pathname === '/india' || location.pathname === '/';
    const defaultLink = isIndiaPage ? 'https://rzp.io/rzp/wqjBY2Br' : 'https://www.paypal.com/ncp/payment/L8JHEPL6RSSPJ';
    
    if (paypalLink) {
      window.open(paypalLink, "_blank", "noopener,noreferrer");
    } else {
      window.open(defaultLink, "_blank", "noopener,noreferrer");
    }
  };
  return <div className="fixed left-0 bottom-0 z-50 w-full" style={{
    pointerEvents: "none"
  }}>
      <div className="w-full min-h-[32px] bg-[#111] border-t border-blue-400 flex flex-row items-center justify-between gap-2 px-3 py-1 shadow-lg" style={{
      pointerEvents: "auto"
    }}>
        <div className="flex flex-col items-start justify-center">
          <div className="text-white text-xs font-semibold mb-0">
            Offer Will Expire In...
          </div>
          <div className="flex items-center gap-1">
            <span className="text-blue-400 font-bold text-sm tabular-nums">
              {minutes.toString().padStart(2, "0")}
            </span>
            <span className="text-white ml-1 text-xs font-medium">Min</span>
            <span className="text-blue-400 font-bold text-sm tabular-nums ml-2">
              {seconds.toString().padStart(2, "0")}
            </span>
            <span className="text-white ml-1 text-xs font-medium">Sec</span>
          </div>
        </div>
        <button className={`${GOLD_GRADIENT} transition-all duration-200 rounded-full text-black font-semibold text-sm px-3 py-1 shadow-lg hover:brightness-105 focus:outline-none`} style={{
        boxShadow: "0 4px 18px 0 rgba(59,130,246,0.16), 0 1.5px 0 0 #3b82f6 inset"
      }} onClick={handleButtonClick}>GET IT NOW</button>
      </div>
    </div>;
};
export default BottomOfferBar;

import React from "react";

// Sparkle SVG -- reusable
const Sparkle = ({
  className = ""
}: {
  className?: string;
}) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className={className}>
    <g filter="url(#sparkle)">
      <path d="M11 2V20M2 11H20M4.22 4.22L17.78 17.78M17.78 4.22L4.22 17.78" stroke="#3b83f2" strokeWidth="2" strokeLinecap="round" />
    </g>
    <defs>
      <filter id="sparkle" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feGaussianBlur stdDeviation="0.7" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>;

interface PromoBannerProps {
  currency?: string;
  price?: string;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ currency = "$", price = "9" }) => <div className="relative w-full px-4 mb-4">
    {/* Animated glow burst behind banner */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <span className="
          absolute
          w-full h-full
          rounded-2xl
          bg-gradient-to-r from-blue-400/40 via-blue-500/10 to-blue-300/40
          blur-2xl opacity-60
          animate-[pulse_2.5s_ease-in-out_infinite]
          scale-100
        " style={{
      filter: "drop-shadow(0 0 24px #3b83f2) blur(6px)"
    }} />
    </div>

    {/* Sparkle Animation overlays */}
    {/* Top left corner */}
    <Sparkle className="absolute left-2 -top-2 animate-[popin_0.7s_ease-in-out_infinite_alternate] z-10" />
    {/* Top right */}
    <Sparkle className="absolute right-5 top-0 animate-[twinkle_1.5s_ease-in-out_infinite]" />
    {/* Bottom left */}
    <Sparkle className="absolute left-4 bottom-2 animate-[twinkle_2.2s_ease-in-out_infinite]" />
    {/* Bottom right */}
    <Sparkle className="absolute right-7 bottom-2 animate-[popin_1.1s_ease-in_alternate_infinite]" />

    {/* Promo Banner Card */}
    <div className="
        relative z-10
        rounded-2xl border-2 border-blue-400 overflow-hidden shadow-lg
        flex flex-col md:flex-row items-stretch justify-between
        animate-bounce-in
        bg-gradient-to-r from-neutral-900 via-neutral-800 to-blue-900
      " style={{
    background: "linear-gradient(90deg, #18181b 0%, #27272a 50%, #3b83f2 100%)"
  }}>
      {/* Everyday Price (crossed out) */}
      <div className="flex items-center px-5 pt-4 pb-2 md:py-4 min-w-[175px] bg-gradient-to-r from-black/70 via-transparent to-transparent relative justify-center">
        <span className="text-white text-lg font-semibold whitespace-nowrap">
          Everyday Price:
        </span>
        <span className="relative ml-2 text-2xl font-bold text-white select-none">
          <span className="relative z-10">{currency}29</span>
          <span className="absolute left-0 right-0 top-1/2 h-1 border-b-4 border-blue-300 z-20 w-full" style={{
          transform: "rotate(-14deg) translateY(-50%)"
        }} />
        </span>
        {/* Tiny sparkle */}
        <Sparkle className="absolute -left-6 top-1/2 -translate-y-1/2 scale-75 animate-[twinkle_1.3s_linear_infinite]" />
      </div>

      {/* Animated Arrow (show only on desktop) */}
      <div className="hidden md:flex items-center px-2 animate-[popin_0.8s_ease-in-out_alternate_infinite]">
        <span className="text-white text-3xl font-bold drop-shadow-glow animate-pulse">&rarr;</span>
      </div>

      {/* Today's Price with underline */}
      <div className="flex items-center px-5 pb-4 pt-2 md:py-4 bg-gradient-to-l from-black/70 via-transparent to-transparent relative min-w-[190px] justify-center">
        <span className="text-white text-lg font-semibold mr-1 whitespace-nowrap">
          Today's Price:
        </span>
        <span className="text-2xl font-extrabold text-blue-300 whitespace-nowrap relative drop-shadow-glow">
          {currency}{price}
          {/* Blue underline effect */}
          <svg className="absolute left-0 -bottom-2" width="64" height="12" viewBox="0 0 64 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{
          zIndex: 1
        }}>
            <path d="M2 10C11.3142 6.66667 35.6 0.8 62 4" stroke="#3b83f2" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      </div>
    </div>
    {/* Custom Keyframes for burst/pop-in, bounce-in, and twinkle */}
    <style>{`
      @keyframes popin {
        0% { transform: scale(1) rotate(-12deg); opacity: 0.2; }
        40% { transform: scale(1.16) rotate(3deg); opacity: 1; }
        80% { transform: scale(0.91) rotate(-3deg); }
        100% { transform: scale(1) rotate(0deg); opacity: 1; }
      }
      .animate-popin { animation: popin 1.35s cubic-bezier(0.6,1.22,0.3,1) alternate infinite; }
      @keyframes bounce-in {
        0% { transform: scale(0.75) translateY(-35px); opacity: 0; }
        70% { transform: scale(1.02) translateY(7px); opacity: 0.9; }
        100% { transform: scale(1) translateY(0); opacity: 1; }
      }
      .animate-bounce-in { animation: bounce-in 0.97s cubic-bezier(0.23, 1.05, 0.32, 1.0) both; }
      @keyframes twinkle {
        0%, 100% { opacity: 1; transform: scale(1) rotate(0deg);}
        48% { opacity: 0.2; transform: scale(1.4) rotate(-11deg);}
        60% { opacity: 0.5; transform: scale(0.87) rotate(10deg);}
      }
      .animate-twinkle { animation: twinkle 1.2s infinite; }
      .drop-shadow-glow { filter: drop-shadow(0 0 6px #3b83f2); }
      @media (max-width: 767px) {
        /* Stack badge under the price on mobile if needed */
        .font-inter[style*="absolute"] {
          right: 50%!important; 
          left: 50%!important;
          transform: translate(-50%,0);
        }
      }
    `}
    </style>
  </div>;

export default PromoBanner;

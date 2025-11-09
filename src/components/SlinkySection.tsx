
import React from "react";
import "./SlinkySection.css";
import { Youtube } from "lucide-react";

const SlinkySection: React.FC = () => {
  const buttons = Array.from({ length: 13 });

  return (
    <div className="flex w-full justify-center py-5 select-none relative">
      <div className="slinky relative">
        {/* Centered YouTube logo */}
        <div className="absolute left-1/2 top-[35%] z-10 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          <Youtube size={64} color="#3b82f6" fill="#3b82f6" className="drop-shadow-lg" />
        </div>
        {/* Slinky animated YouTube buttons */}
        {buttons.map((_, i) => (
          <div className="slinky__button" key={i}>
            <div className="slinky__play" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlinkySection;

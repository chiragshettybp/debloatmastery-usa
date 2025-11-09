
import React, { useState, useEffect, useRef } from 'react';

const OrderTimer: React.FC = () => {
  const [timeDisplay, setTimeDisplay] = useState({
    hours: 2,
    minutes: 8
  });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hoursRef = useRef(2);
  const minutesRef = useRef(8);

  useEffect(() => {
    // Set up the timer only once on component mount
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        if (minutesRef.current > 0) {
          minutesRef.current -= 1;
        } else if (hoursRef.current > 0) {
          hoursRef.current -= 1;
          minutesRef.current = 59;
        } else {
          if (timerRef.current) clearInterval(timerRef.current);
        }

        // Update the display state only once per minute
        setTimeDisplay({
          hours: hoursRef.current,
          minutes: minutesRef.current
        });
      }, 60000); // Update every minute
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this only runs once

  // Hardcode the date for clarity and brevity
  const dateString = "Today";

  return (
    <div className="w-full px-4 text-center my-6 bg-black">
      <p className="font-semibold text-white mb-1">
        Want to Start Seeing Results {dateString}?
      </p>
      <div className="flex items-center justify-center">
        <span className="font-semibold text-white mr-2">Enroll Within</span>
        <span className="font-bold text-[#3b82f6]">
          {timeDisplay.hours} Hours {timeDisplay.minutes} Minutes
        </span>
      </div>
    </div>
  );
};

export default OrderTimer;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const DogGridSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Updated image links
  const images = ["https://i.postimg.cc/0yxZZYkp/images.jpg", "https://i.postimg.cc/pXKqDGHW/images-7.jpg", "https://i.postimg.cc/CM3cny9r/Z.jpg"];
  
  const captions = [
    "\"Puffy face gone! Seriously, the potassium thing is magic. My jawline is back! So easy to follow. Love it!\"\n– Priya, India",
    "\"Was a bit confused, but my face looks much better. The massage part is actually good. Big change, very happy.\"\n– Mike, USA",
    "\"This guide is real. My morning puffiness? Finished! The supplement tips were super helpful. Totally worth buying.\"\n– Anu, India"
  ];

  // Auto-slide effect - one image at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2500); // Change image every 2.5 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  return <section className="w-full bg-black py-8">
      <div className="max-w-md mx-auto px-4">
        <motion.div className="text-center mb-6 px-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="font-bold text-white mb-2 text-2xl">Real Effort. Real Results.</h2>
          <p className="text-sm text-gray-300">I'll show you step-by-step how to debloat you face within 2 weeks.</p>
        </motion.div>
        
        <div className="relative w-full h-80 overflow-hidden rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="absolute inset-0 border-2 border-gray-600 rounded-lg p-3 shadow-md bg-gray-800 flex flex-col" initial={{
            x: '100%',
            opacity: 0
          }} animate={{
            x: 0,
            opacity: 1
          }} exit={{
            x: '-100%',
            opacity: 0
          }} transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}>
              <img className="w-full rounded-md h-48 object-cover mb-3" src={images[currentIndex]} alt="Digital Product Marketing" />
              <p className="text-sm italic text-center text-gray-300 flex-1 flex items-center justify-center px-2 whitespace-pre-line">
                {captions[currentIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, idx) => <div key={idx} className={`h-2 w-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white' : 'bg-gray-600'}`} />)}
        </div>
      </div>
    </section>;
};
export default DogGridSection;

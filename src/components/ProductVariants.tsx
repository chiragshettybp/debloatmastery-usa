import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Small reusable component for variant option
const VariantOption: React.FC<{
  active: boolean;
  variant: 'basic' | 'complete';
  onClick: () => void;
}> = ({
  active,
  variant,
  onClick
}) => {
  // Friendly label and description, could be extended
  const label = variant === 'basic' ? 'Basic Kit' : 'Complete Kit';
  const desc = variant === 'basic'
    ? '3 grip types'
    : '5 grip types + extra resistance + carry bag';

  return (
    <button
      type="button"
      className={`
        flex flex-col w-full rounded-lg border-2 px-4 py-3 mb-1 text-left 
        transition-colors duration-150
        ${active
          ? 'border-green-400 bg-gradient-to-r from-green-900/60 via-black/70 to-fuchsia-800/30 shadow-lg'
          : 'border-gray-700 bg-transparent hover:border-green-400'
        }
        focus:outline-none
      `}
      onClick={onClick}
      aria-pressed={active}
      tabIndex={0}
    >
      <div className="flex items-center">
        <span className={`font-bold text-lg mr-2 ${active ? 'text-green-300' : 'text-gray-200'}`}>
          {label}
        </span>
        {active && (
          <span className="ml-1 px-2 py-0.5 rounded bg-green-500 text-xs text-black font-semibold shadow">
            Selected
          </span>
        )}
      </div>
      <span className={`text-xs mt-1 ${active ? 'text-green-200' : 'text-gray-400'}`}>{desc}</span>
    </button>
  );
};

const ProductVariants: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState<'basic' | 'complete'>('complete');
  return <motion.div className="w-full px-4 space-y-4" initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }}>
      <VariantOption active={selectedVariant === 'basic'} variant="basic" onClick={() => setSelectedVariant('basic')} />
      <VariantOption active={selectedVariant === 'complete'} variant="complete" onClick={() => setSelectedVariant('complete')} />

      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.3
    }} className="w-full rounded-b-lg p-3 text-white flex items-center py-0 bg-gray-700">
        <div>
          <p className="text-xs">
            <span className="font-bold">+ INSTANT</span> SHIPPING included with this package
          </p>
        </div>
      </motion.div>

      {selectedVariant === 'complete' && <motion.div className="flex items-center justify-center w-full mt-4 text-gray-400" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      delay: 0.5
    }}>
          <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
          <p className="text-xs">
            <span className="font-bold text-center">SECURE &amp; FAST PAYMENT OPTION</span> 
          </p>
        </motion.div>}
    </motion.div>;
};
export default ProductVariants;


import React from 'react';

const PaymentMethods: React.FC = () => {
  return (
    <div className="w-full px-4 my-4 bg-black">
      <div className="w-full h-6 bg-gray-800 rounded flex items-center justify-center">
        <span className="text-xs text-gray-300">VISA • MASTERCARD • AMEX • DISCOVER • PAYPAL</span>
      </div>
    </div>
  );
};

export default PaymentMethods;

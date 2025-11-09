import React from 'react';
import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="w-full text-white pb-16 bg-black">
      <div className="max-w-md mx-auto px-4 pt-16 bg-black">
        {/* Logo and email signup */}
        <div className="mb-10">
          
        </div>
        
        {/* Help Links */}
        
        
        {/* Legal Disclaimer */}
        <div className="border-t border-gray-700 pt-6 mb-8">
          <p className="opacity-75 leading-5 text-center text-xs">
            DISCLAIMER: The profit figures stated above are my personal figures from the last 5 years. Please understand these results can vary, I'm not implying you'll duplicate them (or do anything for that matter). The average person who buys any "how to" information gets little to no results. I'm using these references for example purposes only. Your results will vary and depend on many factors… including but not limited to your background, experience, and work ethic. All business entails risk as well as massive and consistent effort and action. If you're not willing to accept that, please DO NOT ATTEND THIS TRAINING.
            <br /><br />
            This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        </div>
        
        {/* Footer Bottom */}
        <div className="flex flex-col items-center">
          <div className="flex gap-2 text-xs opacity-75 mb-6">
            <span>Debloat Mastery - Copyright © 2025. All Rights Reserved.</span>
          </div>
          
          {/* Payment methods */}
          <p className="text-xs opacity-75 mb-3">We accept</p>
          <div className="grid grid-cols-4 gap-2 mb-6 items-center">
            <img src="/lovable-uploads/10cdf540-7087-4a4e-bbcd-13528bb6a15d.png" alt="Payment methods: Visa, Mastercard, American Express, and PayPal" className="col-span-4 w-2/4 mx-auto h-auto" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
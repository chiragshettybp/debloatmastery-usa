
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Package, Truck, ShieldCheck, FileText, UserX, Mail, Phone, Star } from 'lucide-react';

export const SideNavigation: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-black border-r border-gray-700">
      {/* Header */}
      <div className="p-4 border-b border-gray-700 flex items-center">
        
      </div>
      
      {/* Navigation Links */}
      <div className="flex-1 overflow-auto p-4">
        <div className="mb-6">
          <Link to="/" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <Home size={18} />
            <span className="text-sm">Home</span>
          </Link>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xs uppercase font-bold text-gray-400 mb-2 px-2">Customer Support</h3>
          
          <Link to="/track-order" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <Truck size={18} />
            <span className="text-sm">Track Your Order</span>
          </Link>
          
          <Link to="/how-to-use" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <HelpCircle size={18} />
            <span className="text-sm">How to Use</span>
          </Link>
          
          <Link to="/help-center" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <HelpCircle size={18} />
            <span className="text-sm">Help Center</span>
          </Link>
          
          <Link to="/shipping-delivery" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <Truck size={18} />
            <span className="text-sm">Shipping & Delivery</span>
          </Link>

          <Link to="/reviews" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <Star size={18} />
            <span className="text-sm">Customer Reviews</span>
          </Link>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xs uppercase font-bold text-gray-400 mb-2 px-2">Policies</h3>
          
          <Link to="/return-refund" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <Package size={18} />
            <span className="text-sm">Return & Refund Policy</span>
          </Link>
          
          <Link to="/privacy-policy" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <ShieldCheck size={18} />
            <span className="text-sm">Privacy Policy</span>
          </Link>
          
          <Link to="/terms-of-service" className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md text-white">
            <FileText size={18} />
            <span className="text-sm">Terms of Service</span>
          </Link>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="p-4 border-t border-gray-700">
        <h3 className="text-xs uppercase font-bold text-gray-400 mb-2">Contact Us</h3>
        <a href="mailto:rememberframe@gmail.com" className="flex items-center gap-2 p-2 text-sm hover:text-gray-400 text-white">
          <Mail size={16} />
          <span>rememberframe@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

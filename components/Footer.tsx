import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-rylt-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
             <span className="font-bold text-3xl tracking-tighter block mb-4">
                RYL<span className="text-rylt-green">T</span>
              </span>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.tagline}. Pioneering sustainable and innovative thermal solutions for a greener future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rylt-green transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-rylt-green transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-rylt-green transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-rylt-green pl-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Products</Link></li>
              <li><Link to="/customers" className="text-gray-400 hover:text-white text-sm transition-colors">Customers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-rylt-green pl-3">Our Solutions</h3>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Pool Heat Pumps</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Industrial Dehumidifiers</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition-colors">Food & Pharma HVAC</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-l-4 border-rylt-green pl-3">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-rylt-green flex-shrink-0 mt-1" size={18} />
                <a 
                  href="https://www.google.com/maps/place/RYLT+ENERGY/@17.4713848,78.5962559,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9d4f4c101fa9:0xf6b30e81759cbf05!8m2!3d17.4713848!4d78.5962559!16s%2Fg%2F11vb0hvgp9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm hover:text-rylt-green transition-colors"
                >
                  {COMPANY_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-rylt-green flex-shrink-0" size={18} />
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-gray-400 text-sm hover:text-rylt-green transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-rylt-green flex-shrink-0" size={18} />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-400 text-sm hover:text-rylt-green transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} RYLT Energy Pvt Ltd. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
             <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

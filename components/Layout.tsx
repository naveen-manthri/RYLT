import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Format phone number for WhatsApp API (remove non-digits)
  const whatsappNumber = COMPANY_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappMessage = encodeURIComponent("Hi, I am interested in RYLT Energy solutions.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 relative">
      <Navbar />
      <main className="flex-grow bg-white">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Button - Bottom Left */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>

      {/* Scroll to Top Button - Bottom Right */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-rylt-green text-black p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:bg-green-400 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rylt-green ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Layout;
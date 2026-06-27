import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const MapPinIcon = () => (
  <svg className="w-3.5 h-3.5 text-gold mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
);

const PhoneIcon = () => (
  <svg className="w-3.5 h-3.5 text-gold mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
);

const ClockIcon = () => (
  <svg className="w-3.5 h-3.5 text-gold mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const TopBar = () => (
  <div className="bg-black text-[#d1d1d1] text-[10px] lg:text-[11px] py-0.5 lg:py-1.5 font-body">
    <div className="max-w-[1200px] mx-auto px-2 sm:px-5 flex flex-col lg:flex-row justify-between items-center gap-0.5 lg:gap-0">
      <div className="flex flex-wrap justify-center lg:justify-start items-center gap-x-3 sm:gap-x-4 gap-y-0 lg:gap-8">
        <span className="flex items-center"><MapPinIcon /> 123 Beauty Street, Mumbai</span>
        <span className="flex items-center"><PhoneIcon /> +91 98765 43210</span>
        <span className="flex items-center"><ClockIcon /> Mon - Sun: 10 AM - 8 PM</span>
      </div>
      <div className="flex items-center space-x-3 sm:space-x-4 pt-0.5 lg:pt-0 border-t border-gray-800 lg:border-none w-full lg:w-auto justify-center lg:justify-end mt-0">
        <span className="mr-2 hidden sm:inline">Follow Us:</span>
        <a href="#" className="hover:text-gold transition-colors"><FaFacebookF className="w-3.5 h-3.5" /></a>
        <a href="#" className="hover:text-gold transition-colors"><FaInstagram className="w-3.5 h-3.5" /></a>
        <a href="#" className="hover:text-gold transition-colors"><FaYoutube className="w-3.5 h-3.5" /></a>
        <a href="#" className="hover:text-gold transition-colors"><FaWhatsapp className="w-3.5 h-3.5" /></a>
      </div>
    </div>
  </div>
);

export default TopBar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Navbar = ({ onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  return (
    <nav className="bg-white py-5 shadow-sm sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center bg-white relative z-50">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImage} alt="Mehaks Makeover Logo" className="h-14 w-auto object-contain drop-shadow-md rounded-md" />
          <div className="flex flex-col">
            <h3 className="text-xl m-0 tracking-[2px] leading-none uppercase text-gold font-heading">MEHAKS</h3>
            <span className="text-[10px] tracking-[4px] text-text-gray font-body mt-1">MAKEOVER</span>
          </div>
        </Link>
        
        <ul className="hidden lg:flex gap-8 m-0 p-0 list-none font-body">
          <li className="relative">
            <Link to="/" className={`text-[12px] uppercase transition-colors ${location.pathname === '/' ? 'font-bold text-black' : 'font-semibold text-text-gray hover:text-black'}`}>HOME</Link>
          </li>
          <li><Link to="/about" className={`text-[12px] uppercase transition-colors ${location.pathname === '/about' ? 'font-bold text-black' : 'font-semibold text-text-gray hover:text-black'}`}>ABOUT US</Link></li>
          <li><Link to="/services" className={`text-[12px] uppercase transition-colors ${location.pathname === '/services' ? 'font-bold text-black' : 'font-semibold text-text-gray hover:text-black'}`}>SERVICES</Link></li>
          <li><Link to="/training" className={`text-[12px] uppercase transition-colors ${location.pathname === '/training' ? 'font-bold text-black' : 'font-semibold text-text-gray hover:text-black'}`}>TRAINING</Link></li>
          <li><Link to="/gallery" className={`text-[12px] uppercase transition-colors ${location.pathname === '/gallery' ? 'font-bold text-black' : 'font-semibold text-text-gray hover:text-black'}`}>GALLERY</Link></li>
          <li><Link to="/contact" className={`text-[12px] uppercase transition-colors ${location.pathname === '/contact' ? 'font-bold text-black' : 'font-semibold text-text-gray hover:text-black'}`}>CONTACT</Link></li>
        </ul>

        <button 
          onClick={onBookClick}
          className="hidden lg:block bg-black text-gold border border-gold px-6 py-3 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 hover:bg-gold hover:text-black"
        >
          BOOK APPOINTMENT
        </button>

        <button className="lg:hidden p-2 text-black" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[400px] border-t border-gray-100' : 'max-h-0'}`}>
        <div className="px-5 py-6 flex flex-col gap-4 text-center font-body">
          <Link to="/" onClick={() => setIsOpen(false)} className={`text-[12px] uppercase ${location.pathname === '/' ? 'font-bold text-black' : 'font-semibold text-text-gray'}`}>HOME</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className={`text-[12px] uppercase ${location.pathname === '/about' ? 'font-bold text-black' : 'font-semibold text-text-gray'}`}>ABOUT US</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className={`text-[12px] uppercase ${location.pathname === '/services' ? 'font-bold text-black' : 'font-semibold text-text-gray'}`}>SERVICES</Link>
          <Link to="/training" onClick={() => setIsOpen(false)} className={`text-[12px] uppercase ${location.pathname === '/training' ? 'font-bold text-black' : 'font-semibold text-text-gray'}`}>TRAINING</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className={`text-[12px] uppercase ${location.pathname === '/gallery' ? 'font-bold text-black' : 'font-semibold text-text-gray'}`}>GALLERY</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className={`text-[12px] uppercase ${location.pathname === '/contact' ? 'font-bold text-black' : 'font-semibold text-text-gray'}`}>CONTACT</Link>
          <button 
            onClick={() => {
              setIsOpen(false);
              onBookClick();
            }}
            className="mt-2 bg-black text-gold border border-gold px-6 py-3 text-[11px] font-bold uppercase tracking-wider mx-auto"
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

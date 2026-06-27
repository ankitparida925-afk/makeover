import React from 'react';
import footerLogoImage from '../assets/footer-logo.png';

const FooterSection = () => (
  <footer className="relative bg-black text-gray-400 py-10 lg:py-20 border-t-2 border-gold/30 mt-10 lg:mt-20">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img src="/footer-bg.jpg" className="w-full h-full object-cover opacity-20" alt="Background" />
      <div className="absolute inset-0 bg-black/80"></div>
    </div>

    <div className="max-w-[1200px] mx-auto px-5 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
        
        {/* Brand Column */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <div className="flex flex-col items-center mb-6">
            <img src={footerLogoImage} alt="Mehaks Makeover Logo" className="w-28 h-auto object-contain drop-shadow-md rounded-md mb-3" />
            <h3 className="text-2xl m-0 tracking-[2px] leading-none uppercase text-gold font-heading">MEHAKS</h3>
            <span className="text-[10px] tracking-[4px] text-gray-400 font-body mt-1">MAKEOVER</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-400 max-w-[280px]">
            Mehaks Makeover is a unisex salon dedicated to enhancing your natural beauty with style, care and perfection.
          </p>
          <div className="flex gap-4 mt-6">
             <a href="#" className="text-gold hover:text-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg></a>
             <a href="#" className="text-gold hover:text-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.6 4 4 5.6 4 7.6V16.4C4 18.4 5.6 20 7.6 20H16.4C18.4 20 20 18.4 20 16.4V7.6C20 5.6 18.4 4 16.4 4H7.6ZM12 7.25C14.62 7.25 16.75 9.38 16.75 12C16.75 14.62 14.62 16.75 12 16.75C9.38 16.75 7.25 14.62 7.25 12C7.25 9.38 9.38 7.25 12 7.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25ZM17 6C17.55 6 18 6.45 18 7C18 7.55 17.55 8 17 8C16.45 8 16 7.55 16 7C16 6.45 16.45 6 17 6Z"/></svg></a>
             <a href="#" className="text-gold hover:text-white transition-colors"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21.582 6.186a2.506 2.506 0 0 0-1.762-1.766C18.265 4 12 4 12 4s-6.264 0-7.82.42a2.505 2.505 0 0 0-1.762 1.766C2 7.75 2 12 2 12s0 4.25.418 5.814a2.506 2.506 0 0 0 1.762 1.766C5.736 20 12 20 12 20s6.265 0 7.82-.42a2.506 2.506 0 0 0 1.762-1.766C22 16.25 22 12 22 12s0-4.25-.418-5.814ZM9.99 15.474v-6.948L15.827 12l-5.837 3.474Z"/></svg></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li><a href="#" className="hover:text-gold transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Training</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="lg:col-span-2">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Services</h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li><a href="#" className="hover:text-gold transition-colors">Hair Styling</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Beard & Grooming</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Skincare</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Hair Treatments</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Nail Care</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Makeup</a></li>
          </ul>
        </div>

        {/* Training */}
        <div className="lg:col-span-2">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Training</h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li><a href="#" className="hover:text-gold transition-colors">Our Courses</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Batch Schedule</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Admission</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Our Trainers</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Placements</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="lg:col-span-2">
          <h4 className="text-white text-xs font-bold tracking-widest uppercase mb-6">Contact Us</h4>
          <ul className="flex flex-col gap-4 text-xs">
            <li className="flex items-start gap-3">
              <svg className="w-4 h-4 text-gold shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              <span>123 Beauty Street,<br/>Mumbai, India - 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>info@mehaks-makeover.com</span>
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-4 h-4 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              <span>www.mehaksmakeover.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-6 flex justify-center items-center">
        <p className="text-[10px] text-gray-500 uppercase tracking-wider">
          © 2024 Mehaks Makeover. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;

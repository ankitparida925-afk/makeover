import React from 'react';
import { Link } from 'react-router-dom';
import footerLogoImage from '../assets/footer-logo.png';

const AboutSection = () => (
  <section className="py-8 lg:py-24 bg-white relative z-20 overflow-hidden">
    <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
      
      {/* Left Column - Collage */}
      <div className="lg:col-span-4 order-2 lg:order-1 relative w-full aspect-[4/3] lg:aspect-auto lg:h-[380px] flex items-center justify-center">
        {/* Background Dot Pattern */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(var(--color-app-beige)_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-60"></div>
        <div className="absolute bottom-0 right-10 w-48 h-48 bg-[radial-gradient(var(--color-app-beige)_1.5px,transparent_1.5px)] [background-size:16px_16px] opacity-60"></div>
        
        {/* Gold Border Frame - Flush left to align perfectly with Navbar/Hero */}
        <div className="absolute top-0 bottom-0 left-0 right-8 border border-app-beige opacity-50 z-0"></div>

        {/* Main Image */}
        <div className="absolute top-8 left-8 right-16 bottom-16 shadow-2xl z-10 border-[6px] border-white">
          <img src="/about-new.jpg" className="w-full h-full object-cover" alt="Mehaks Makeover Interior" />
        </div>

        {/* Small Bottom Image */}
        <div className="absolute -bottom-4 lg:-bottom-8 left-4 lg:left-16 w-40 h-28 lg:w-56 lg:h-40 shadow-xl z-20 border-[4px] lg:border-[6px] border-white bg-gray-100">
          <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover" alt="Cosmetic Products" />
        </div>

        {/* Black Logo Box */}
        <div className="absolute top-1/2 right-2 lg:-right-4 -translate-y-1/2 w-28 h-28 lg:w-40 lg:h-40 bg-[#0a0a0a] flex flex-col items-center justify-center z-30 shadow-2xl border border-gold/30 scale-90 sm:scale-100">
          <img src={footerLogoImage} alt="Mehaks Makeover Logo" className="w-12 lg:w-16 h-auto object-contain mb-2 lg:mb-3" />
          <span className="text-gold font-heading text-[10px] lg:text-sm tracking-[0.2em] uppercase">Mehaks</span>
          <span className="text-gold/70 text-[6px] lg:text-[8px] tracking-[0.3em] uppercase mt-1">Makeover</span>
        </div>
      </div>

      {/* Middle Column - Text */}
      <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center mt-6 lg:mt-0 lg:pl-12">
        <h4 className="font-script text-gold text-3xl lg:text-4xl mb-2">About Us</h4>
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-heading mb-6 text-app-primary leading-tight">
          <span className="whitespace-nowrap">Enhancing Beauty,</span><br/>
          <span className="font-script text-gold font-normal text-4xl lg:text-5xl xl:text-6xl block mt-2 whitespace-nowrap">Elevating Confidence</span>
        </h2>
        <p className="text-text-gray text-sm leading-relaxed mb-8">
          At Mehaks Makeover, we believe beauty is for everyone. Our unisex salon offers a wide range of services tailored to your unique style and personality. From trendy haircuts to premium skincare, we make every experience special.
        </p>
        <div>
          <Link to="/about" className="inline-block bg-black text-gold px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors duration-300">
            Discover More
          </Link>
        </div>
      </div>

      {/* Right Column - Features */}
      <div className="lg:col-span-3 order-3 flex flex-col justify-center gap-8 pl-0 lg:pl-10 lg:ml-16 border-t lg:border-t-0 lg:border-l border-gray-200 pt-6 lg:pt-0 mt-6 lg:mt-0">
        
        {/* Feature 1 */}
        <div className="flex items-center gap-5 group">
          <div className="w-14 h-14 flex-shrink-0 text-gold flex items-center justify-center border border-app-beige/40 rounded-full group-hover:bg-gold/10 transition-colors">
            {/* Person Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-bold text-app-primary">Personalized</h5>
            <p className="text-xs text-text-gray mt-0.5">Consultation</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-5 group">
          <div className="w-14 h-14 flex-shrink-0 text-gold flex items-center justify-center border border-app-beige/40 rounded-full group-hover:bg-gold/10 transition-colors">
            {/* Lotus/Crown Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-1.388 0-2.68.328-3.834.908a8.23 8.23 0 0 0-4.008 4.008A8.25 8.25 0 0 0 2.25 12c0 1.388.328 2.68.908 3.834a8.23 8.23 0 0 0 4.008 4.008c1.154.58 2.446.908 3.834.908 1.388 0 2.68-.328 3.834-.908a8.23 8.23 0 0 0 4.008-4.008A8.25 8.25 0 0 0 21.75 12c0-1.388-.328-2.68-.908-3.834a8.23 8.23 0 0 0-4.008-4.008A8.25 8.25 0 0 0 12 2.25ZM12 2.25v2.25m0 15v2.25M2.25 12h2.25m15 0h2.25" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-bold text-app-primary">Luxurious</h5>
            <p className="text-xs text-text-gray mt-0.5">Environment</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-5 group">
          <div className="w-14 h-14 flex-shrink-0 text-gold flex items-center justify-center border border-app-beige/40 rounded-full group-hover:bg-gold/10 transition-colors">
            {/* Scissors/Comb Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5m-3-11.25h13.5m-13.5 9h13.5" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-bold text-app-primary">Unisex</h5>
            <p className="text-xs text-text-gray mt-0.5">Services</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center gap-5 group">
          <div className="w-14 h-14 flex-shrink-0 text-gold flex items-center justify-center border border-app-beige/40 rounded-full group-hover:bg-gold/10 transition-colors">
            {/* Tag/Pricing Icon */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
            </svg>
          </div>
          <div>
            <h5 className="text-sm font-bold text-app-primary">Affordable</h5>
            <p className="text-xs text-text-gray mt-0.5">Pricing</p>
          </div>
        </div>

      </div>

    </div>
  </section>
);

export default AboutSection;

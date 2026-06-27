import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "HAIR STYLING",
      desc: "Trendy haircuts, color, smoothening & more.",
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0-5.758l-2.879-2.879" />
        </svg>
      )
    },
    {
      title: "BEARD & GROOMING",
      desc: "Beard styling, shaving, facial & grooming.",
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "SKINCARE",
      desc: "Facials, cleanup, detan & advanced skin treatments.",
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "HAIR TREATMENTS",
      desc: "Nourishing therapies for healthy & beautiful hair.",
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "NAIL CARE",
      desc: "Manicure, pedicure, nail art & extensions.",
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
        </svg>
      )
    },
    {
      title: "MAKEUP",
      desc: "Party, bridal, engagement & special occasions.",
      icon: (
        <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-10 lg:py-16 relative">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center gap-6 lg:gap-2">
        
        {/* Left Side - Services */}
        <div className="flex-1 w-full">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <h4 className="font-script text-gold text-3xl lg:text-4xl m-0 leading-none">Our Services</h4>
            <h2 className="text-2xl lg:text-4xl font-heading text-black m-0 uppercase tracking-widest mt-2">Beauty & Style For Everyone</h2>
          </div>

          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <div key={idx} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-black rounded-full flex items-center justify-center mb-2 lg:mb-4 shadow-lg hover:scale-105 transition-transform duration-300">
                  {React.cloneElement(svc.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-gold' })}
                </div>
                <h5 className="font-bold text-black text-[8px] sm:text-[11px] lg:text-[13px] tracking-widest uppercase leading-tight">{svc.title}</h5>
                <p className="text-gray-500 text-[10px] lg:text-[12px] leading-tight mt-2 hidden lg:block">
                  {svc.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link to="/services" className="bg-black text-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors duration-300">
              View All Services
            </Link>
          </div>
        </div>

        {/* Right Side - Bridal Packages */}
        <div className="w-full lg:w-[300px] shrink-0 lg:-mr-12 xl:-mr-24 mt-6 lg:mt-0">
          <div className="relative w-full h-[260px] bg-[#FAF8F5] border border-gold/20 shadow-xl overflow-hidden group">
            <img src="/services-bg.jpg" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" alt="Bridal Makeup" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
            
            <div className="absolute inset-y-0 left-0 p-6 lg:p-8 flex flex-col justify-center">
              <h3 className="font-script text-gold text-4xl mb-0">Bridal</h3>
              <h2 className="text-3xl font-heading text-black mb-2">Packages</h2>
              <p className="text-gray-700 text-[11px] mb-4 max-w-[150px] leading-relaxed">
                Look your best on your special day.
              </p>
              <button className="bg-black text-white px-6 py-2.5 text-[10px] font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors duration-300 w-max shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

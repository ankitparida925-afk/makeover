import React from 'react';

const AdBannersSection = () => (
  <section className="bg-white pb-4 lg:pb-12">
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {/* Left Ad - 20% OFF */}
      <div className="relative h-[140px] sm:h-[160px] md:h-[190px] bg-black overflow-hidden group">
        <img src="/special-offer.png" alt="Special Offer" className="absolute bottom-0 right-20 sm:right-32 h-[90%] md:h-[95%] w-auto object-contain object-bottom opacity-100 group-hover:scale-105 transition-transform duration-700 origin-bottom" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent w-2/3"></div>
        <div className="relative z-10 py-3 sm:py-2 md:py-5 pr-2 sm:pr-6 md:pr-10 pl-[max(1.25rem,calc(50vw-580px))] flex flex-col justify-center h-full text-left">
          <h4 className="font-script text-gold text-lg sm:text-lg lg:text-xl mb-0 leading-none">Special Offer</h4>
          <h2 className="text-white font-heading text-2xl sm:text-2xl lg:text-3xl mb-0 leading-none mt-1 sm:mt-1">20% OFF</h2>
          <p className="text-gray-300 text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase mt-1 sm:mt-1 mb-2 sm:mb-2 line-clamp-1">On First Visit</p>
          <button className="bg-gold text-black px-4 sm:px-4 py-1.5 sm:py-1.5 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 w-max shadow-lg">
            Book Now
          </button>
        </div>
      </div>

      {/* Right Ad - Refer & Earn */}
      <div className="relative h-[140px] sm:h-[160px] md:h-[190px] bg-[#D4AF37] overflow-hidden group">
        <img src="/refer-and-earn.png" alt="Refer & Earn" className="absolute bottom-0 right-4 sm:right-10 h-[90%] md:h-[95%] w-auto object-contain object-bottom opacity-100 group-hover:scale-105 transition-transform duration-700 origin-bottom" />
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/80 to-transparent w-full sm:w-2/3"></div>
        <div className="relative z-10 py-3 sm:py-2 md:py-5 pl-[max(1.25rem,calc(50vw-580px))] sm:pl-6 md:pl-10 pr-[max(1.25rem,calc(50vw-580px))] flex flex-col justify-center h-full text-left">
          <h4 className="font-script text-black text-lg sm:text-lg lg:text-xl mb-0 leading-none">Refer & Earn</h4>
          <h2 className="text-black font-heading text-2xl sm:text-2xl lg:text-3xl mb-0 leading-none mt-1 sm:mt-1">GET 10% OFF</h2>
          <p className="text-black/80 text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase mt-1 sm:mt-1 mb-2 sm:mb-2 line-clamp-1">Refer a friend</p>
          <button className="bg-black text-white px-4 sm:px-4 py-1.5 sm:py-1.5 text-[8px] sm:text-[9px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 w-max shadow-lg">
            Refer Now
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default AdBannersSection;

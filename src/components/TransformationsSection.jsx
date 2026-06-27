import React, { useRef, useEffect, useState } from 'react';

const TransformationsSection = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, children } = scrollRef.current;
        
        // If we have enough elements to loop
        if (children.length >= 18) {
          // Calculate the exact pixel width of the first complete set of 9 images
          const firstSetWidth = children[9].offsetLeft - children[0].offsetLeft;
          
          // Calculate the exact width of a single item (including gap)
          const itemWidth = children.length > 1 ? children[1].offsetLeft - children[0].offsetLeft : 300;

          // If we have scrolled past the first set, invisibly jump back
          if (scrollLeft >= firstSetWidth) {
            scrollRef.current.scrollTo({ left: scrollLeft - firstSetWidth, behavior: 'auto' });
            
            // Then smoothly scroll forward on the next frame
            requestAnimationFrame(() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
              }
            });
            return;
          }
        }
        
        // Use dynamic itemWidth for standard scroll
        if (children.length > 1) {
          const itemWidth = children[1].offsetLeft - children[0].offsetLeft;
          scrollRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
      }
    }, 1500); // scrolls every 1.5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { children } = scrollRef.current;
      const itemWidth = children.length > 1 ? children[1].offsetLeft - children[0].offsetLeft : 300;
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const images = [
    "/footer-bg.jpg",
    "/services-bg.jpg",
    "/academy-bg.jpg",
    "/footer-bg.jpg",
    "/services-bg.jpg",
    "/academy-bg.jpg",
    "/footer-bg.jpg",
    "/services-bg.jpg",
    "/academy-bg.jpg",
  ];

  return (
    <section className="bg-white py-6 lg:py-8 relative">
      <div className="max-w-[1200px] mx-auto px-5 text-center mb-4">
        <h2 className="text-2xl lg:text-3xl font-heading text-black inline-block mr-2">Transformations</h2>
        <h4 className="font-script text-gold text-2xl lg:text-3xl inline-block mt-1 lg:mt-0">We Love</h4>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
        
        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 lg:w-8 lg:h-8 bg-black rounded-full flex items-center justify-center text-gold hover:scale-110 transition-transform z-10 shadow-lg cursor-pointer"
        >
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Images Container */}
        <div 
          ref={scrollRef}
          className="flex gap-2 lg:gap-4 overflow-x-auto snap-x snap-mandatory hide-scroll"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...images, ...images, ...images].map((img, idx) => (
            <div key={idx} className="relative w-[calc(33.333%-6px)] sm:w-[120px] md:w-[220px] lg:w-[280px] shrink-0 aspect-[3/4] snap-center overflow-hidden group/img cursor-pointer bg-gray-100">
              <img src={img} alt={`Transformation ${idx + 1}`} className="w-full h-full object-cover object-top group-hover/img:scale-110 transition-transform duration-700" loading="lazy" />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 lg:w-8 lg:h-8 bg-black rounded-full flex items-center justify-center text-gold hover:scale-110 transition-transform z-10 shadow-lg cursor-pointer"
        >
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TransformationsSection;

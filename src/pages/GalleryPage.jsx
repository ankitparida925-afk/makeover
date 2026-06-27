import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExpand } from 'react-icons/fa';

// Import local image assets
import collage1 from '../assets/galleryPage/collage-1.jpg';
import collage2 from '../assets/galleryPage/collage-2.jpg';
import collage3 from '../assets/galleryPage/collage-3.jpg';
import collage4 from '../assets/galleryPage/collage-4.jpg';
import collage5 from '../assets/galleryPage/collage-5.jpg';
import review1 from '../assets/galleryPage/review-1.jpg';
import review2 from '../assets/galleryPage/review-2.jpg';
import review3 from '../assets/galleryPage/review-3.jpg';
import port1 from '../assets/galleryPage/port-1.jpg';
import port2 from '../assets/galleryPage/port-2.jpg';
import port3 from '../assets/galleryPage/port-3.jpg';
import port4 from '../assets/galleryPage/port-4.jpg';
import port5 from '../assets/galleryPage/port-5.jpg';
import port6 from '../assets/galleryPage/port-6.jpg';
import port7 from '../assets/galleryPage/port-7.jpg';
import port8 from '../assets/galleryPage/port-8.jpg';
import port9 from '../assets/galleryPage/port-9.jpg';

const GalleryPage = () => {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAllImagesOpen, setIsAllImagesOpen] = useState(false);

  const reviews = [
    {
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      author: "ananya sharma.",
      image: review1
    },
    {
      quote: "Step into a world of pure transformation. The artistry is unparalleled, and the team works with a dedication that is hard to find. My bridal session was absolutely flawless, and it stayed perfect through the entire evening.",
      author: "ria sen.",
      image: review2
    },
    {
      quote: "The academy portfolio shoot was an incredible experience. They designed the looks to bring out the bold, high-fashion editorial aesthetics. Their attention to lighting, symmetry, and detail is outstanding.",
      author: "megha patel.",
      image: review3
    }
  ];

  const handleNextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const portfolioImages = [
    { src: port1, alt: 'High Fashion Editorial Makeup', desc: 'Bold lip and detailed eyeliner look.' },
    { src: port2, alt: 'Classic Bridal Makeover', desc: 'Timeless luxury wedding glam.' },
    { src: port3, alt: 'Glow Base & Contour', desc: 'Airbrush finish with flawless contouring.' },
    { src: port4, alt: 'Studio Portrait Styling', desc: 'Editorial lighting and hair prep.' },
    { src: port5, alt: 'Warm Peach Clean Look', desc: 'Natural organic makeup session.' },
    { src: port6, alt: 'Editorial Fashion Shoot', desc: 'Creative color palettes and styling.' },
    { src: port7, alt: 'Traditional Elegance Draping', desc: 'Saree draping and bridal hair bun.' },
    { src: port8, alt: 'Luxury Party Glow', desc: 'Glimmer eyeshadow and soft lashes.' },
    { src: port9, alt: 'Academy Practical Session', desc: 'Live hands-on student transformation.' },
  ];

  // Extra helper array of all gallery images combined
  const allGalleryImages = [
    { src: collage1, alt: 'Bridal Front Look', desc: 'Elegant bridal styling from masterclass session.' },
    { src: collage2, alt: 'Contemporary Fashion Look', desc: 'Bold eye work and clean finish.' },
    { src: collage3, alt: 'Smokey Eye Glam', desc: 'High-contrast studio fashion setup.' },
    { src: collage4, alt: 'Classic Matte Finish', desc: 'Premium luxury makeover session.' },
    { src: collage5, alt: 'Glow Bridal Prep', desc: 'Flawless airbrush base prep styling.' },
    ...portfolioImages
  ];

  return (
    <div className="font-body overflow-x-hidden bg-[#0a0a0a] text-white min-h-screen">
      {/* =========================================
          1. TOP BANNER COLLAGE (Aligned with logo/header)
      ========================================= */}
      <section className="w-full bg-[#faf7f2] py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          {/* Creative Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-heading text-neutral-900 uppercase tracking-widest leading-tight">
              Visual <span className="font-script font-normal text-gold normal-case block sm:inline italic ml-1">Poetry</span>
            </h1>
            <p className="text-neutral-600 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
              Step into a canvas of curated transformations, high-fashion editorials, and premium bridal artistry captured in absolute detail.
            </p>
            <div className="w-16 h-[1px] bg-gold/50 mx-auto mt-4"></div>
          </div>

          {/* Premium Asymmetric Collage Layout */}
          <div className="grid grid-cols-12 gap-4 h-[550px] w-full">
            {/* Main Featured Portrait Frame */}
            <div className="col-span-12 md:col-span-5 h-full relative overflow-hidden border-2 border-gold/25 group shadow-lg">
              <img
                src={collage1}
                alt="Collage Main feature"
                className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-4 left-4 bg-black/75 px-4 py-2 border-l border-gold">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Bridal Artistry</span>
              </div>
            </div>

            {/* Right Side Asymmetric Grid Container */}
            <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 h-full">
              {/* Top Row: Landscape Frame */}
              <div className="col-span-2 h-[260px] relative overflow-hidden border border-gold/15 group shadow-md">
                <img
                  src={collage2}
                  alt="Collage Landscape"
                  className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-black/75 px-4 py-2 border-l border-gold">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold">Editorial Fashion</span>
                </div>
              </div>

              {/* Bottom Row Left: Small square Frame */}
              <div className="h-[258px] relative overflow-hidden border border-gold/15 group shadow-md">
                <img
                  src={collage3}
                  alt="Collage Square left"
                  className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Bottom Row Right: Small square Frame */}
              <div className="h-[258px] relative overflow-hidden border border-gold/15 group shadow-md">
                <img
                  src={collage4}
                  alt="Collage Square right"
                  className="w-full h-full object-cover rounded-none transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. CLIENT REVIEWS (Split Layout Slider)
      ========================================= */}
      <section className="py-20 lg:py-32 bg-[#faf7f2] border-b border-gold/10 relative">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Testimonial slider text */}
            <div className="lg:col-span-6 text-left space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-4xl sm:text-5xl font-heading text-neutral-900 uppercase tracking-widest leading-[1.1]">
                  Client <span className="font-script font-normal text-gold normal-case block mt-2 text-4xl sm:text-6xl italic">Reviews</span>
                </h2>
                <div className="w-16 h-[1.5px] bg-gold mt-6"></div>
              </div>

              <div className="min-h-[180px] flex flex-col justify-between">
                <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-light italic">
                  "{reviews[activeReviewIndex].quote}"
                </p>
                <p className="text-gold text-xs tracking-widest uppercase font-bold mt-6">
                  — {reviews[activeReviewIndex].author}
                </p>
              </div>

              {/* Slider Arrows */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handlePrevReview}
                  className="w-12 h-12 rounded-none border border-gold/30 hover:border-gold hover:text-black hover:bg-gold text-gold flex items-center justify-center transition-all duration-300"
                  aria-label="Previous Review"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={handleNextReview}
                  className="w-12 h-12 rounded-none border border-gold/30 hover:border-gold hover:text-black hover:bg-gold text-gold flex items-center justify-center transition-all duration-300"
                  aria-label="Next Review"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </div>
            </div>

            {/* Right Column: Large portrait image */}
            <div className="lg:col-span-6 relative flex justify-center order-1 lg:order-2">
              <div className="w-full max-w-[480px] aspect-[3/4] border-4 border-gold shadow-2xl overflow-hidden relative group">
                <img
                  src={reviews[activeReviewIndex].image}
                  alt="Client Review Portrait"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. PORTFOLIO (Asymmetric Grid Layout)
      ========================================= */}
      <section className="py-6 bg-[#faf7f2]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-heading text-neutral-900 uppercase tracking-widest">
              Portfolio
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm tracking-wide uppercase font-light">
              Explore some of our signature makeovers, creative styling sessions, and courses in detail
            </p>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
          </div>

          {/* Asymmetric Portfolio Collage Grid */}
          <div className="grid grid-cols-12 gap-4 auto-rows-[160px] md:auto-rows-[180px] w-full">
            
            {/* 1. Large landscape banner span (cols 1-8, row 1-2) */}
            <div className="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[0])}>
              <img src={portfolioImages[0].src} alt={portfolioImages[0].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[0].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[0].desc}</p>
              </div>
            </div>

            {/* 2. Vertical tall span (cols 9-12, row 1-3) */}
            <div className="col-span-12 md:col-span-4 row-span-3 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[1])}>
              <img src={portfolioImages[1].src} alt={portfolioImages[1].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[1].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[1].desc}</p>
              </div>
            </div>

            {/* 3. Small square (cols 1-4, row 3) */}
            <div className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[2])}>
              <img src={portfolioImages[2].src} alt={portfolioImages[2].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[2].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[2].desc}</p>
              </div>
            </div>

            {/* 4. Small square (cols 5-8, row 3) */}
            <div className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[3])}>
              <img src={portfolioImages[3].src} alt={portfolioImages[3].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[3].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[3].desc}</p>
              </div>
            </div>

            {/* 5. Medium square (cols 1-6, row 4-5) */}
            <div className="col-span-12 md:col-span-6 row-span-2 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[4])}>
              <img src={portfolioImages[4].src} alt={portfolioImages[4].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[4].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[4].desc}</p>
              </div>
            </div>

            {/* 6. Medium square (cols 7-12, row 4-5) */}
            <div className="col-span-12 md:col-span-6 row-span-2 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[5])}>
              <img src={portfolioImages[5].src} alt={portfolioImages[5].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[5].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[5].desc}</p>
              </div>
            </div>

            {/* 7. Small square (cols 1-4, row 6) */}
            <div className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[6])}>
              <img src={portfolioImages[6].src} alt={portfolioImages[6].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[6].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[6].desc}</p>
              </div>
            </div>

            {/* 8. Small square (cols 5-8, row 6) */}
            <div className="col-span-6 md:col-span-4 row-span-1 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[7])}>
              <img src={portfolioImages[7].src} alt={portfolioImages[7].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[7].alt}</h4>
                <p className="text-gray-400 text-xs">{portfolioImages[7].desc}</p>
              </div>
            </div>

            {/* 9. Small square (cols 9-12, row 6) */}
            <div className="col-span-12 md:col-span-4 row-span-1 relative group overflow-hidden border border-gold/15 cursor-pointer shadow-lg" onClick={() => setSelectedImage(portfolioImages[8])}>
              <img src={portfolioImages[8].src} alt={portfolioImages[8].alt} className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/50 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <FaExpand className="text-gold text-lg absolute top-4 right-4" />
                <h4 className="text-white text-sm font-heading uppercase tracking-widest mb-1">{portfolioImages[8].alt}</h4>
                <p className="text-gray-400 text-xs mb-12">{portfolioImages[8].desc}</p>
              </div>

              {/* View More Button Overlay (Positioned in Bottom Right) */}
              <div className="absolute bottom-3 right-3 z-10">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAllImagesOpen(true);
                  }}
                  className="bg-black/80 text-gold border border-gold/50 hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 px-4 py-2 text-[10px] font-bold uppercase tracking-wider rounded-none"
                >
                  View More
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. FULL IMAGES COLLAGE MODAL (Gallery View)
      ========================================= */}
      {isAllImagesOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto p-4 md:p-10 transition-all duration-300">
          <div className="max-w-[1200px] mx-auto space-y-8 py-8">
            <div className="flex justify-between items-center border-b border-gold/25 pb-4">
              <h2 className="text-2xl font-heading text-gold uppercase tracking-widest">
                Entire Studio Gallery
              </h2>
              <button 
                onClick={() => setIsAllImagesOpen(false)} 
                className="text-white hover:text-gold text-3xl transition-colors outline-none"
                aria-label="Close Gallery Modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Grid display of all image assets */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allGalleryImages.map((img, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden border border-gold/10 cursor-pointer aspect-square shadow-md"
                  onClick={() => {
                    setSelectedImage(img);
                  }}
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                    <FaExpand className="text-gold text-base absolute top-3 right-3" />
                    <h4 className="text-white text-xs font-heading uppercase tracking-wider mb-0.5">{img.alt}</h4>
                    <p className="text-gray-400 text-[10px] truncate">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================
          5. LIGHTBOX MODAL
      ========================================= */}
      {selectedImage && (
        <div className="fixed inset-0 z-[110] bg-black/95 flex items-center justify-center p-4 md:p-10 transition-all duration-300">
          <button 
            onClick={() => setSelectedImage(null)} 
            className="absolute top-6 right-6 text-white hover:text-gold text-3xl transition-colors outline-none"
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
          
          <div className="max-w-[1000px] w-full max-h-[85vh] flex flex-col items-center">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[70vh] object-contain border-2 border-gold/45 shadow-2xl"
            />
            <div className="text-center mt-6 space-y-2">
              <h3 className="text-xl font-heading uppercase text-white tracking-widest">{selectedImage.alt}</h3>
              <p className="text-gray-400 text-sm max-w-lg">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

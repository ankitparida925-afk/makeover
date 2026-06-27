import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

// Import images
import img1 from '../assets/galleryPage/collage-1.jpg';
import img2 from '../assets/galleryPage/collage-2.jpg';
import img3 from '../assets/galleryPage/collage-3.jpg';
import img4 from '../assets/galleryPage/collage-4.jpg';
import img5 from '../assets/galleryPage/collage-5.jpg';
import img6 from '../assets/galleryPage/port-1.jpg';
import img7 from '../assets/galleryPage/port-3.jpg';
import img8 from '../assets/galleryPage/port-5.jpg';
import img9 from '../assets/galleryPage/port-6.jpg';
import img10 from '../assets/galleryPage/port-7.jpg';
import img11 from '../assets/galleryPage/port-9.jpg';
import img12 from '../assets/galleryPage/review-2.jpg';

const GalleryGlimpseSection = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-5">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h4 className="font-script text-gold text-3xl lg:text-4xl m-0 leading-none">Visual Poetry</h4>
          <h2 className="text-2xl lg:text-4xl font-heading text-black m-0 uppercase tracking-widest mt-2">
            Glimpse Of Gallery
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
        </div>

        {/* Custom collage matching the user reference layout */}
        <div className="grid grid-cols-10 gap-3 w-full max-w-[1000px] mx-auto auto-rows-[90px] sm:auto-rows-[120px]">
          
          {/* Top Row Images */}
          {/* Top Row - 1: Horizontal item */}
          <div className="col-span-3 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img1} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Top Row - 2: Symmetrical small vertical layout (Top box) */}
          <div className="col-span-2 row-span-1 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img2} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Top Row - 3: Center tall vertical key frame */}
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img3} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Top Row - 4: Side tall vertical frame */}
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img4} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Top Row - 5: End horizontal block */}
          <div className="col-span-2 sm:col-span-1 row-span-1 md:row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img5} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Middle Row Left (below Top 2) */}
          <div className="col-span-2 row-span-1 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img6} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Middle Left Side Block */}
          <div className="col-span-2 row-span-1 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img7} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* CENTRAL YOUR TEXT FRAME */}
          <div className="col-span-6 row-span-1 flex flex-col justify-center items-center text-center bg-[#faf7f2] border-y border-gold/30 p-2 sm:p-4">
            <h4 className="font-script text-gold text-2xl lg:text-3xl leading-none m-0">Glimpse of</h4>
            <h2 className="text-sm sm:text-lg lg:text-xl font-heading text-black m-0 uppercase tracking-widest mt-1">Our Gallery</h2>
            <Link to="/gallery" className="text-[8px] sm:text-[10px] font-bold text-gold uppercase tracking-wider hover:text-black mt-1.5 transition-colors flex items-center gap-1">
              EXPLORE ALL <FaChevronRight className="text-[6px]" />
            </Link>
          </div>

          {/* Middle Right Side Block */}
          <div className="col-span-2 row-span-1 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img8} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Bottom Row Images */}
          {/* Bottom Row - 1: Left bottom square */}
          <div className="col-span-2 row-span-1 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img9} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Bottom Row - 2: Bottom column medium */}
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img10} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Bottom Row - 3: Center tall vertical block */}
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img11} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Bottom Row - 4: Symmetrical bottom vertical (Top box) */}
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img12} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Bottom Row - 5: Right bottom wide block */}
          <div className="col-span-2 row-span-2 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img1} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

          {/* Bottom Row Left Offset (below Bottom 4) */}
          <div className="col-span-2 row-span-1 relative overflow-hidden border border-gold/10 group shadow-sm">
            <img src={img2} className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105" alt="Showcase" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryGlimpseSection;

import React, { useState, useEffect, useRef } from 'react';
import { FaCrown } from 'react-icons/fa';

const Hero = ({ onBookClick }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 91;

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/hero-frames/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1 || i === 1) {
          setImages([...loadedImages]);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Handle scroll and draw
  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let targetFrameIndex = 0;
    let currentRenderedFrame = 0;
    let lastDrawnFrame = -1;
    let animationFrameId;

    const drawFrame = (index) => {
      const img = images[index];
      if (img && img.complete && img.naturalWidth !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    drawFrame(0);

    const renderLoop = () => {
      currentRenderedFrame += (targetFrameIndex - currentRenderedFrame) * 0.04; 
      const frameToDraw = Math.round(currentRenderedFrame);
      
      if (frameToDraw !== lastDrawnFrame) {
        drawFrame(frameToDraw);
        lastDrawnFrame = frameToDraw;
      }
      
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollPosition = window.scrollY;
      const scrollMax = containerHeight - windowHeight;
      
      let scrollFraction = (scrollPosition - containerTop) / scrollMax;
      scrollFraction = Math.max(0, Math.min(1, scrollFraction));
      
      targetFrameIndex = Math.floor(scrollFraction * (frameCount - 1));
      

    };

    handleScroll();
    animationFrameId = requestAnimationFrame(renderLoop);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images]);

  return (
    <section ref={containerRef} className="h-[150vh] lg:h-[500vh] bg-black relative">
      <div className="sticky top-[88px] h-[calc(100vh-88px)] overflow-hidden flex items-center justify-center bg-black">
        
        <canvas 
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-[70%_top] lg:object-right-top z-0"
        />

        <div ref={contentRef} className="max-w-[1200px] mx-auto px-5 flex items-center w-full relative z-20">
          
          <div className="flex-1 max-w-full lg:max-w-[600px] lg:pr-12 flex flex-col items-start text-left -translate-y-2 lg:-translate-y-10">
            <h1 className="flex flex-col items-start mb-6">
              <span className="text-gold font-script font-normal text-4xl sm:text-5xl lg:text-7xl mb-2 lg:translate-x-[-20px]">Mehaks</span>
              <span className="font-heading text-4xl sm:text-5xl lg:text-7xl tracking-widest text-black drop-shadow-sm">MAKEOVER</span>
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 lg:w-12 bg-gold"></div>
              <p className="text-[11px] lg:text-[13px] tracking-[4px] text-black font-semibold uppercase m-0 flex items-center gap-2">
                <span className="text-gold text-[8px]">♦</span> UNISEX SALON <span className="text-gold text-[8px]">♦</span>
              </p>
              <div className="h-[1px] w-8 lg:w-12 bg-gold"></div>
            </div>

            <h3 className="text-xs lg:text-sm font-bold tracking-[2px] text-text-gray mb-3 drop-shadow-sm">WHERE STYLE MEETS PERFECTION</h3>
            <FaCrown className="text-gold text-lg mb-4" />
            
            <p className="text-text-gray text-[12px] lg:text-[13px] leading-relaxed max-w-[240px] sm:max-w-[350px] mb-8 drop-shadow-sm">
              Step into a world of luxury and transformation.<br className="hidden lg:block"/>
              We bring out the best in you with our professional<br className="hidden lg:block"/>
              care and unique styling.
            </p>

            <button 
              onClick={onBookClick}
              className="bg-gold text-black rounded-none px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-gold/20"
            >
              Book Appointment
            </button>
          </div>

          <div className="flex-1 hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

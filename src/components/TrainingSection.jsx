import React from 'react';
import { Link } from 'react-router-dom';

const TrainingSection = () => (
  <section className="py-10 lg:py-16 relative overflow-hidden bg-black">
    {/* Background Image with Gradient Overlays */}
    <div className="absolute inset-0 z-0 flex justify-center items-center bg-black">
      <img src="/footer-bg.jpg" className="w-auto h-full object-contain object-[50%_55%] lg:object-center [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]" alt="Makeup Training" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent w-[30%] lg:w-[40%] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black via-black/80 to-transparent w-[30%] lg:w-[40%] right-0 left-auto"></div>
    </div>

    <div className="max-w-[1200px] mx-auto px-5 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      
      {/* Left Column - Text Content */}
      <div className="lg:col-span-6 flex flex-col items-start text-left relative z-10">
        <h4 className="font-script text-gold text-xl lg:text-2xl mb-1">Join Our</h4>
        <h2 className="text-xl lg:text-2xl xl:text-3xl font-heading text-white mb-2 leading-tight tracking-widest uppercase">
          Professional<br/>Training Academy
        </h2>
        <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4 max-w-sm">
          Learn from industry experts and build a successful career in beauty & styling.
        </p>

        {/* Checkmark List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3 mb-4">
          {[
            "Hair Styling & Cutting",
            "Skin & Hair Treatments",
            "Makeup Pro",
            "Salon Management"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white text-xs lg:text-sm font-semibold tracking-wide">{item}</span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link 
          to="/training" 
          className="bg-[#D4AF37] text-black px-10 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors duration-300 flex items-center gap-3 group mt-2"
        >
          Know More
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Center Spacer for Image */}
      <div className="h-64 sm:h-80 lg:h-auto lg:col-span-2"></div>

      {/* Right Column - Features Box */}
      <div className="lg:col-span-4 flex justify-center lg:justify-end w-full lg:-mr-16 mt-4 lg:mt-0">
        <div className="border border-gold/40 bg-black/50 backdrop-blur-md p-5 w-full max-w-full sm:max-w-[320px] lg:max-w-[280px] shadow-2xl">
          <div className="flex flex-col gap-3">
            
            {/* Feature 1 */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 text-gold flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h5 className="text-white text-xs font-bold tracking-widest uppercase">Certified Courses</h5>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 text-gold flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
              </div>
              <h5 className="text-white text-xs font-bold tracking-widest uppercase">Hands-On Training</h5>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 text-gold flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h5 className="text-white text-xs font-bold tracking-widest uppercase">Placement Support</h5>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 text-gold flex items-center justify-center">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="text-white text-xs font-bold tracking-widest uppercase">Flexible Batches</h5>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
);

export default TrainingSection;

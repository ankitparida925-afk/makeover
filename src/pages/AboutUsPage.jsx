import React from 'react';
import { Link } from 'react-router-dom';
import footerLogoImage from '../assets/footer-logo.png';
import brushesImg from '../assets/galleryPage/port-6.jpg';
import jessicaImg from '../assets/servicesPage/jessica-t.jpg';
import elenaImg from '../assets/servicesPage/elena-v.jpg';

const AboutUsPage = () => {
  return (
    <div className="bg-white font-body overflow-x-hidden text-app-primary">
      
      {/* =========================================
          1. ABOUT US HERO SECTION (Split Layout)
      ========================================= */}
      <section className="relative min-h-[80vh] flex flex-col lg:block bg-[#0a0a0a]">
        
        {/* Right Side Video (Mobile: Top, Desktop: Absolute Right Half) */}
        <div className="w-full h-[400px] lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full relative overflow-hidden order-1">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <video
            src="/about-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Left Side: Content Container matched to header width */}
        <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col justify-center order-2 relative z-10 pt-6 pb-16 lg:pt-10 lg:pb-20 min-h-[400px] lg:min-h-[80vh]">
          <div className="w-full lg:w-1/2 lg:pr-12 text-left mt-2 lg:mt-4">
            <span className="font-script text-gold text-4xl lg:text-5xl mb-6 inline-block transform -rotate-2 ml-2 p-2">Mehaks Makeover</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-white uppercase tracking-widest mb-8 leading-[1.2]">
              We Create Beauty <br className="hidden xl:block" /> That Feels Like You
            </h1>
            <div className="w-24 h-[2px] bg-gold mb-8 shadow-[0_0_10px_rgba(212,175,55,0.8)]"></div>
            <p className="text-gray-300 text-lg leading-relaxed mb-5 font-light max-w-[500px]">
              At Mehaks Makeover, we believe makeup is not about changing who someone is—it is about enhancing natural beauty and bringing out confidence. Our team creates personalized looks for every occasion, style, and personality.
            </p>
            <Link to="/services" className="bg-gold text-black px-10 py-5 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 inline-block">
              Explore Our Services
            </Link>
          </div>
        </div>

      </section>

      {/* =========================================
          2. WHO WE ARE
      ========================================= */}
      <section className="py-10 lg:py-16 bg-white relative z-20 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative max-w-[85%] sm:max-w-[70%] lg:max-w-[80%]">
            <div className="absolute top-4 -left-4 w-full h-full border border-gold/40 z-0"></div>
            <img src="/about-who-we-are.jpg" alt="Makeup Studio" className="relative z-10 w-full h-auto shadow-2xl transition-all duration-700" />
          </div>
          {/* Content */}
          <div>
            <h4 className="font-script text-gold text-5xl lg:text-6xl mb-2">Who We Are</h4>
            <h2 className="text-3xl lg:text-5xl font-heading mb-6 text-app-primary uppercase tracking-widest leading-tight">
              More Than a Makeover Studio
            </h2>
            <p className="text-text-gray text-base leading-relaxed">
              Mehaks Makeover is a professional beauty and makeover studio offering makeup, hairstyling, grooming, and styling services. We combine creativity, quality products, and modern beauty techniques to create looks that feel elegant, comfortable, and unique.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          3. OUR STORY (Timeline)
      ========================================= */}
      <section className="py-12 lg:py-20 bg-[#FAF9F6] border-t border-gray-100 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-16">
            <h4 className="font-script text-gold text-5xl lg:text-6xl mb-2 transform -rotate-2">Our Story</h4>
            <h2 className="text-3xl lg:text-4xl font-heading text-app-primary uppercase tracking-widest">
              The Story Behind Our Glow
            </h2>
            <p className="text-text-gray mt-6 max-w-2xl mx-auto">
              Founded with a passion for beauty and self-expression, Mehaks Makeover began with a simple vision—to help people feel confident in their own skin. Over time, our passion turned into a trusted makeover destination for brides, professionals, party lovers, and anyone ready for a fresh new look.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Aesthetic Collage */}
            <div className="relative h-[400px] md:h-[500px] w-full mt-8 lg:mt-0">
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/40 z-0"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-[radial-gradient(var(--color-app-beige)_1.5px,transparent_1.5px)] [background-size:16px_16px] z-0 opacity-50"></div>
              
              {/* Image 1 (Main/Left) */}
              <div className="absolute top-0 left-0 w-[55%] h-[70%] z-10 shadow-2xl overflow-hidden group border-4 border-white bg-gray-100">
                <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80" alt="Makeup details" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Image 2 (Top Right) */}
              <div className="absolute top-[5%] right-0 w-[50%] h-[45%] z-20 shadow-2xl overflow-hidden group border-4 border-white bg-gray-100">
                <img src={brushesImg} alt="Brushes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Image 3 (Bottom Overlap) */}
              <div className="absolute bottom-0 right-[15%] w-[45%] h-[45%] z-30 shadow-2xl overflow-hidden group border-4 border-white bg-gray-100">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80" alt="Cosmetics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>

            {/* Right: Vertical Timeline */}
            <div className="relative border-l-2 border-gold/30 ml-4 lg:ml-10 space-y-12 py-4">
              {/* Event 1 */}
              <div className="relative pl-10 group">
                <div className="absolute w-4 h-4 bg-white border-2 border-gold rounded-full -left-[9px] top-1 group-hover:bg-gold group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <h3 className="text-xl font-heading uppercase text-app-primary mb-2 group-hover:text-gold transition-colors">The Beginning</h3>
                <p className="text-sm text-text-gray">Started with a love for makeup and beauty.</p>
              </div>

              {/* Event 2 */}
              <div className="relative pl-10 group">
                <div className="absolute w-4 h-4 bg-white border-2 border-gold rounded-full -left-[9px] top-1 group-hover:bg-gold group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <h3 className="text-xl font-heading uppercase text-app-primary mb-2 group-hover:text-gold transition-colors">The Growth</h3>
                <p className="text-sm text-text-gray">Built a team of skilled artists and stylists.</p>
              </div>

              {/* Event 3 */}
              <div className="relative pl-10 group">
                <div className="absolute w-4 h-4 bg-white border-2 border-gold rounded-full -left-[9px] top-1 group-hover:bg-gold group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
                <h3 className="text-xl font-heading uppercase text-app-primary mb-2 group-hover:text-gold transition-colors">Today</h3>
                <p className="text-sm text-text-gray">Creating memorable transformations for every special moment.</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* =========================================
          4. MISSION & VISION
      ========================================= */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative">
        <div className="max-w-[1200px] mx-auto px-5 text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-heading text-gold uppercase tracking-widest">
            Our Purpose, Our Passion
          </h2>
        </div>
        <div className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#111] p-10 lg:p-12 border border-gray-800 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <h3 className="font-script text-gold text-4xl mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              To provide high-quality, personalized makeover experiences that help every client feel confident, beautiful, and comfortable.
            </p>
          </div>

          <div className="bg-[#111] p-10 lg:p-12 border border-gray-800 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <h3 className="font-script text-gold text-4xl mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              To become a trusted name in beauty and makeover services by creating looks that celebrate individuality and confidence.
            </p>
          </div>

          <div className="bg-[#111] p-10 lg:p-12 border border-gray-800 hover:shadow-2xl hover:-translate-y-2 hover:border-gold/30 transition-all duration-500 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            <h3 className="font-script text-gold text-4xl mb-4">Our Promise</h3>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              To exclusively use premium products and uphold the highest standards of hygiene and care for every client who walks through our doors.
            </p>
          </div>

        </div>
      </section>



      {/* =========================================
          6. MEET THE TEAM
      ========================================= */}
      <section className="pt-10 pb-14 lg:pt-14 lg:pb-16 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 text-center relative z-10">
          <h4 className="font-script text-gold text-5xl lg:text-6xl mb-2">Meet The Team</h4>
          <h2 className="text-3xl lg:text-4xl font-heading mb-6 text-app-primary uppercase tracking-widest">
            The Artists Behind Every Transformation
          </h2>
          <p className="text-text-gray max-w-2xl mx-auto mb-4">
            Our team of makeup artists, hairstylists, and beauty professionals brings skill, creativity, and attention to detail into every appointment.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            
            {/* Team Member 1 */}
            <div className="bg-[#FAF9F6] p-6 hover:-translate-y-2 transition-transform duration-500 group shadow-sm hover:shadow-xl flex flex-col">
              <div className="w-full aspect-[3/3] overflow-hidden mb-4 relative">
                <img src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80" alt="Ananya Sharma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-heading text-app-primary uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">Ananya Sharma</h3>
              <p className="text-xs text-gold uppercase tracking-widest font-bold mb-3">Lead Makeup Artist</p>
              <p className="text-sm text-text-gray italic mb-4 flex-grow">"Known for creating elegant, glowing, and camera-ready looks."</p>
              {/* Socials */}
              <div className="flex gap-3 text-app-primary mt-auto">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-[#FAF9F6] p-6 hover:-translate-y-2 transition-transform duration-500 group shadow-sm hover:shadow-xl flex flex-col">
              <div className="w-full aspect-[3/3] overflow-hidden mb-4 relative">
                <img src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&q=80" alt="Sarah M." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-heading text-app-primary uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">Sarah M.</h3>
              <p className="text-xs text-gold uppercase tracking-widest font-bold mb-3">Senior Stylist</p>
              <p className="text-sm text-text-gray italic mb-4 flex-grow">"Master of editorial and avant-garde looks, bringing runway perfection to everyday luxury."</p>
              <div className="flex gap-3 text-app-primary mt-auto">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-[#FAF9F6] p-6 hover:-translate-y-2 transition-transform duration-500 group shadow-sm hover:shadow-xl flex flex-col">
              <div className="w-full aspect-[3/3] overflow-hidden mb-4 relative">
                <img src={jessicaImg} alt="Jessica T." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-heading text-app-primary uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">Jessica T.</h3>
              <p className="text-xs text-gold uppercase tracking-widest font-bold mb-3">Hair Specialist</p>
              <p className="text-sm text-text-gray italic mb-4 flex-grow">"Crafting elegant, enduring hairstyles that perfectly complement the makeup architecture."</p>
              <div className="flex gap-3 text-app-primary mt-auto">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-[#FAF9F6] p-6 hover:-translate-y-2 transition-transform duration-500 group shadow-sm hover:shadow-xl flex flex-col">
              <div className="w-full aspect-[3/3] overflow-hidden mb-4 relative">
                <img src={elenaImg} alt="Elena V." className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <h3 className="text-xl font-heading text-app-primary uppercase tracking-widest mb-1 group-hover:text-gold transition-colors">Elena V.</h3>
              <p className="text-xs text-gold uppercase tracking-widest font-bold mb-3">Skin Expert</p>
              <p className="text-sm text-text-gray italic mb-4 flex-grow">"Dedicated to skin prep and glowing bases, ensuring a flawless canvas."</p>
              <div className="flex gap-3 text-app-primary mt-auto">
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition-colors cursor-pointer">
                  <span className="text-xs font-bold">IG</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          7. OUR VALUES
      ========================================= */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a] relative">
        <div className="max-w-[1200px] mx-auto px-5 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-heading text-gold uppercase tracking-widest mb-16">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Value 1 */}
            <div className="bg-[#111] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto border border-gray-800 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5m-3-11.25h13.5m-13.5 9h13.5" /></svg>
              </div>
              <h3 className="text-xl font-heading uppercase text-white mb-3 group-hover:text-gold transition-colors">Creativity</h3>
              <p className="text-sm text-gray-400">We create fresh looks inspired by every client's personality.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-[#111] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto border border-gray-800 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
              </div>
              <h3 className="text-xl font-heading uppercase text-white mb-3 group-hover:text-gold transition-colors">Quality</h3>
              <p className="text-sm text-gray-400">We use professional and skin-friendly products.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-[#111] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto border border-gray-800 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-heading uppercase text-white mb-3 group-hover:text-gold transition-colors">Hygiene</h3>
              <p className="text-sm text-gray-400">We maintain clean tools and a safe beauty environment.</p>
            </div>
            {/* Value 4 */}
            <div className="bg-[#111] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:border-gold/30 transition-all duration-300 group">
              <div className="w-12 h-12 mx-auto border border-gray-800 rounded-full flex items-center justify-center text-gold mb-4 group-hover:bg-gold group-hover:text-black transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
              </div>
              <h3 className="text-xl font-heading uppercase text-white mb-3 group-hover:text-gold transition-colors">Care</h3>
              <p className="text-sm text-gray-400">We focus on comfort, confidence, and client satisfaction.</p>
            </div>

          </div>
        </div>
      </section>



      {/* =========================================
          9. CLIENT EXPERIENCE
      ========================================= */}
      <section className="bg-[#FAF9F6] pt-12 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 text-center">
          <h4 className="font-script text-gold text-3xl mb-2">Testimonials</h4>
          <h2 className="text-3xl lg:text-4xl font-heading mb-2 text-app-primary uppercase tracking-widest">
            Loved by Our Clients
          </h2>
          <p className="text-text-gray mb-10 max-w-2xl mx-auto">
            Our clients choose us for our personalized service, professional approach, and beautiful results. Here is what they have to say.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "They made my bridal look feel elegant, natural, and completely me. I couldn't have asked for a better experience on my special day." },
              { text: "The team was friendly, professional, and understood exactly what I wanted. I left feeling more confident than ever before!" },
              { text: "The basic makeup course exceeded all my expectations. The trainers are extremely supportive and cover every detail hands-on." },
              { text: "Absolutely loved the HD airbrush makeup they did for my reception! It looked flawless all night and photographed beautifully." },
              { text: "A truly luxurious salon experience. The staff is polite, the hygiene is top-notch, and the hair spa treatment did wonders for my hair." },
              { text: "I highly recommend the professional academy. The guidance on building a portfolio and attracting clients was invaluable to my career." }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-8 lg:p-10 border border-app-beige relative hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between text-left">
                <div>
                  <span className="absolute top-2 left-4 text-5xl text-gold/20 font-serif leading-none">"</span>
                  <p className="text-gray-700 italic relative z-10 text-sm leading-relaxed mb-6">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-gold text-sm pt-4 border-t border-gray-100">
                  ★★★★★
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



    </div>
  );
};

export default AboutUsPage;

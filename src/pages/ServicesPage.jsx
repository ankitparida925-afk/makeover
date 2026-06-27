import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaStar, FaHeart, FaHands, FaCertificate, FaLeaf, FaGraduationCap, FaFolderOpen } from 'react-icons/fa';

import servicesHero from '../assets/servicesPage/services-hero.jpg';
import bridalMakeupService from '../assets/servicesPage/bridal-makeup-service.jpg';
import partyMakeupService from '../assets/servicesPage/party-makeup-service.jpg';
import hdAirbrush from '../assets/servicesPage/hd-airbrush.jpg';
import hairstyling from '../assets/servicesPage/hairstyling.jpg';
import groomMakeupService from '../assets/servicesPage/groom-makeup-service.jpg';
import sareeDraping from '../assets/servicesPage/saree-draping.jpg';
import beautyHair from '../assets/servicesPage/beauty-hair.jpg';
import academyService from '../assets/servicesPage/academy-service.jpg';

const ServicesPage = ({ onBookClick }) => {
  const studioServices = [
    { icon: '💄', title: 'Bridal Makeup', desc: 'Timeless, elegant looks crafted for the most special day of your life.', img: bridalMakeupService },
    { icon: '🎉', title: 'Party Makeup', desc: 'Glamorous and bold looks perfect for every celebration and event.', img: partyMakeupService },
    { icon: '✨', title: 'HD & Airbrush', desc: 'Flawless, camera-ready finish using the latest professional techniques.', img: hdAirbrush },
    { icon: '💇', title: 'Hairstyling', desc: 'From classic updos to modern blowouts, styled to perfection.', img: hairstyling },
    { icon: '🤵', title: 'Groom Makeup', desc: 'Subtle, natural-looking grooming and styling for the groom.', img: groomMakeupService },
    { icon: '🥻', title: 'Saree Draping', desc: 'Elegant draping styles for weddings, functions, and festive occasions.', img: sareeDraping },
  ];

  const packages = [
    { name: 'Bridal Glow Package', desc: 'Bridal makeup, hairstyle, saree draping, and lashes.', tag: 'Signature Experience', highlight: false },
    { name: 'Wedding Guest Glam', desc: 'Party makeup, hairstyle, and outfit styling.', tag: 'Deluxe Option', highlight: false },
    { name: 'Pre-Wedding Package', desc: 'Couple makeup, hairstyling, and photoshoot-ready styling.', tag: 'Celebration Set', highlight: false },
  ];

  const careServices = ['Facials & clean-ups', 'Hair spa & treatments', 'Haircuts & styling', 'Eyebrow shaping', 'Manicure & pedicure', 'Nail art'];

  const courses = [
    { title: 'Basic Makeup Course', desc: 'Learn skincare, base makeup, eye makeup, and everyday looks.', icon: '💄', duration: '4 Weeks', level: 'Beginner' },
    { title: 'Advanced Makeup Course', desc: 'Learn bridal, HD, airbrush, party, and fashion makeup.', icon: '✨', duration: '8 Weeks', level: 'Advanced' },
    { title: 'Professional Hairstyling', desc: 'Learn buns, braids, curls, bridal hairstyles, and hair tool handling.', icon: '💇', duration: '6 Weeks', level: 'Intermediate' },
    { title: 'Beautician Course', desc: 'Learn skincare, facials, waxing, threading, and salon basics.', icon: '🌿', duration: '10 Weeks', level: 'Beginner' },
    { title: 'Nail Art & Extensions', desc: 'Learn nail design, extensions, and professional nail care.', icon: '💅', duration: '3 Weeks', level: 'Beginner' },
    { title: 'Saree Draping Course', desc: 'Learn different draping styles for weddings and special occasions.', icon: '🥻', duration: '2 Weeks', level: 'Beginner' },
  ];

  const whyChoose = [
    { title: 'Expert Artists', desc: 'Experienced makeup artists and trainers with years of industry experience.', icon: <FaTrophy /> },
    { title: 'Premium Products', desc: 'Only the finest, skin-friendly products for flawless results.', icon: <FaStar /> },
    { title: 'Personalized Care', desc: 'Every service and class tailored to your unique needs and style.', icon: <FaHeart /> },
    { title: 'Real Practice', desc: 'Hands-on learning with real models for practical skill building.', icon: <FaHands /> },
    { title: 'Certified', desc: 'Receive a professional certificate upon course completion.', icon: <FaCertificate /> },
    { title: 'Hygienic Studio', desc: 'Clean, friendly, and welcoming environment for every client.', icon: <FaLeaf /> },
  ];


  return (
    <div className="font-body overflow-x-hidden text-app-primary bg-[#FAF6F0]">
      {/* =========================================
          1. HERO — Soft Organic / Warm Blush Cover
      ========================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center py-16 overflow-hidden">
        {/* Soft terracotta and rose blurred background blobs */}
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#EEDAD1]/40 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#EEDAD1]/30 rounded-full blur-[150px] -z-10"></div>

        <div className="max-w-[1200px] mx-auto px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text details */}
          <div className="text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EEDAD1]/50 rounded-none text-xs font-semibold text-gold tracking-widest uppercase">
              <span>✦</span> Mehaks Makeover Studio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-app-primary uppercase tracking-wide leading-[1.1] mb-6">
              Beauty is an<br />
              <span className="font-script font-normal text-gold normal-case block mt-2 text-5xl lg:text-7xl">Organic Feeling</span>
            </h1>

            <p className="text-text-gray text-base lg:text-lg leading-relaxed max-w-lg">
              From flawless makeovers for your special moments to professional beauty courses for your career, we offer everything you need under one roof.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onBookClick}
                className="bg-gold text-black rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-app-primary hover:text-white transition-all duration-300 shadow-lg shadow-gold/20"
              >
                Book a Service
              </button>
              <button 
                onClick={() => document.getElementById('our-offerings')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-gold text-gold rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300 inline-block text-center"
              >
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Interactive Image Layout */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="w-[360px] sm:w-[480px] lg:w-[540px] aspect-square rounded-t-full rounded-b-none overflow-hidden border-4 border-gold shadow-2xl relative group">
              <img
                src={servicesHero}
                alt="Blush Makeup Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#EEDAD1]/10 mix-blend-multiply"></div>
            </div>

            {/* Small floating badge */}
            <div className="absolute bottom-2 right-12 bg-white border border-[#EEDAD1] rounded-none px-6 py-4 shadow-xl text-center">
              <p className="text-[10px] font-bold tracking-widest text-gold uppercase">5★ Star Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. STUDIO SERVICES — Soft Organic Grid
      ========================================= */}
      <section id="our-offerings" className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-script text-gold text-4xl lg:text-5xl block mb-2">Our Offerings</span>
            <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest mb-4">
              Makeover Services for Every Occasion
            </h2>
            <p className="text-text-gray text-sm lg:text-base leading-relaxed">
              Their studio offers personalized makeup, hairstyling, beauty, and grooming services designed to enhance every client's natural beauty and confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioServices.map((service, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center bg-[#FAF6F0] rounded-none p-8 transition-all duration-300 hover:bg-[#EEDAD1]/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/5"
              >
                {/* Circular Image Container */}
                <div className="w-40 h-40 rounded-none overflow-hidden border-4 border-gold shadow-md mb-6 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between items-center">
                  <div>
                    <h3 className="text-lg font-heading text-app-primary uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-text-gray text-xs sm:text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>
                  <button className="text-xs font-bold tracking-widest uppercase text-gold hover:text-black transition-colors font-medium">
                    Book Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. BRIDAL PACKAGES — Curvy Elegant Invitations
      ========================================= */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-script text-gold text-4xl lg:text-5xl block mb-2">Signature Package</span>
            <h2 className="text-2xl lg:text-3xl font-heading text-white uppercase tracking-widest mb-4">
              Your Special Day, Their Signature Touch
            </h2>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
              They create elegant and long-lasting looks for weddings, engagements, receptions, parties, photoshoots, and festive celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-6 lg:p-8 text-center rounded-none bg-gold text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold/25"
              >
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase bg-black/10 text-black/80 px-4 py-1.5 rounded-none inline-block mb-4">
                    {pkg.tag}
                  </span>
                  <h3 className="text-lg lg:text-xl font-heading uppercase tracking-wider text-black mb-4">
                    {pkg.name}
                  </h3>
                  <p className="text-black/75 text-xs sm:text-sm leading-relaxed mb-4">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4">
                  <button
                    className="w-full py-3.5 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-black text-gold hover:bg-white hover:text-black shadow-md shadow-black/10"
                  >
                    Inquire Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          4. BEAUTY & HAIR — Soft Rounded Cloud Grid
      ========================================= */}
      <section className="py-24 lg:py-32 bg-[#FAF6F0]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Image (Circular Collage style) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-[300px] lg:w-[350px] aspect-[4/5] rounded-none overflow-hidden shadow-2xl border-4 border-gold">
                <img
                  src={beautyHair}
                  alt="Spa Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right List Detail */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="font-script text-gold text-4xl lg:text-5xl block">Pure Serenity</span>
              <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest">
                Beauty &amp; Hair Care Services
              </h2>
              <p className="text-text-gray text-sm lg:text-base leading-relaxed">
                Our beauty professionals offer grooming and hair care services to help clients maintain healthy skin, hair, and a polished look.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {careServices.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3.5 bg-gold hover:bg-app-primary text-black hover:text-white text-sm font-semibold rounded-none tracking-wide transition-all duration-300 cursor-default border border-gold/30 shadow-md shadow-gold/10"
                  >
                    ✦ {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. ACADEMY — Curved Card Banner
      ========================================= */}
      <section className="py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="bg-[#111] rounded-none p-8 lg:p-16 shadow-xl border border-gold/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left text */}
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="font-script text-gold text-4xl lg:text-5xl block">Professional Academy</span>
                <h2 className="text-2xl lg:text-3xl font-heading text-white uppercase tracking-widest">
                  Learn the Art of Beauty
                </h2>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                  Our academy provides practical beauty training for beginners and aspiring professionals who want to build a successful career in the makeup industry.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: <FaGraduationCap />, text: 'Beginner-friendly classes' },
                    { icon: <FaHands />, text: 'Hands-on practice with models' },
                    { icon: <FaCertificate />, text: 'Certificate after completion' },
                    { icon: <FaFolderOpen />, text: 'Portfolio & career guidance' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-lg bg-black/40 w-10 h-10 flex items-center justify-center rounded-none border border-gold/20 text-gold">
                        {item.icon}
                      </span>
                      <span className="text-gray-300 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link to="/training" className="inline-block bg-gold text-black rounded-none px-8 py-3.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-md shadow-gold/10">
                    Know More →
                  </Link>
                </div>
              </div>

              {/* Right image */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="w-64 h-64 rounded-none overflow-hidden border-4 border-gold shadow-xl">
                  <img
                    src={academyService}
                    alt="Beauty Academy Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-gold text-black rounded-none px-5 py-3 shadow-md">
                  <p className="text-[10px] font-bold tracking-widest uppercase">100% Placement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* =========================================
          7. WHY CHOOSE + CTA — Smooth Warm Curves
      ========================================= */}
      <section className="py-24 lg:py-32 bg-[#FAF6F0]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-script text-gold text-4xl lg:text-5xl block mb-2">Our Values</span>
            <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest mb-4">
              Start Your Beauty Journey With Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-none p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 text-left border border-[#EEDAD1]/20"
              >
                <div>
                  <div className="text-2xl mb-4 text-gold">{item.icon}</div>
                  <h3 className="text-base font-heading uppercase tracking-widest text-app-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Rounded Terracotta / Clay Banner */}
          <div className="relative rounded-none bg-[#EEDAD1]/50 border border-white/60 p-8 lg:p-16 overflow-hidden text-center max-w-[1000px] mx-auto">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="font-script text-gold text-3xl lg:text-4xl block">Start Your Journey</span>
              <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest leading-tight">
                Whether You Want a Makeover or a Professional Beauty Career
              </h2>
              <p className="text-text-gray text-sm lg:text-base leading-relaxed">
                Our studio and academy are ready to support every step of your beauty journey — from a single makeover to a full professional career.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={onBookClick}
                  className="bg-gold text-black rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-app-primary hover:text-white transition-all duration-300 shadow-md"
                >
                  Book a Service
                </button>
                <Link 
                  to="/training"
                  className="border border-gold text-gold rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300 inline-block"
                >
                  Join the Academy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
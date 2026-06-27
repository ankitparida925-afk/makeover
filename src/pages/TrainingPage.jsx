import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrophy, FaHands, FaCrown, FaCertificate, FaPaintBrush, FaStar, FaCut, FaLeaf, FaHandSparkles, FaGraduationCap } from 'react-icons/fa';

import academyService from '../assets/trainingPage/academy-service.jpg';
import servicesHero from '../assets/trainingPage/services-hero.jpg';
import partyMakeupService from '../assets/trainingPage/party-makeup-service.jpg';

const TrainingPage = ({ onEnrollClick }) => {
  const highlights = [
    { title: 'Expert Trainers', desc: 'Learn from active industry professionals with years of experience.', icon: <FaTrophy /> },
    { title: 'Practical Classes', desc: 'Hands-on practice on real models to build solid real-world skills.', icon: <FaHands /> },
    { title: 'Professional Products', desc: 'Work with premium, international brand cosmetics and styling tools.', icon: <FaCrown /> },
    { title: 'Certificate Provided', desc: 'Gain a recognized professional certification to jumpstart your career.', icon: <FaCertificate /> }
  ];

  const courses = [
    { title: 'Basic Makeup Course', desc: 'Learn skincare basics, flawless base makeup, daily eye looks, and everyday glam.', icon: <FaPaintBrush />, duration: '4 Weeks', level: 'Beginner' },
    { title: 'Advanced Makeup Course', desc: 'Master bridal, HD, airbrush, fashion, and photoshoot makeup looks.', icon: <FaStar />, duration: '8 Weeks', level: 'Advanced' },
    { title: 'Bridal Makeup Course', desc: 'Specialized training for premium wedding makeovers, hair prep, and styling.', icon: <FaCrown />, duration: '5 Weeks', level: 'Professional' },
    { title: 'Professional Hairstyling Course', desc: 'Learn classic buns, modern braids, curls, hair extensions, and tool handling.', icon: <FaCut />, duration: '6 Weeks', level: 'Intermediate' },
    { title: 'Beautician Course', desc: 'Master skincare treatments, clean-ups, facials, waxing, threading, and salon basics.', icon: <FaLeaf />, duration: '10 Weeks', level: 'Beginner' },
    { title: 'Nail Art Course', desc: 'Learn gel extensions, acrylic nail art, design patterns, and professional nail care.', icon: <FaHandSparkles />, duration: '3 Weeks', level: 'Beginner' }
  ];

  const steps = [
    { num: '01', title: 'Learn Makeup Basics', desc: 'Skincare, color correction, shade matching, and base work.' },
    { num: '02', title: 'Practice with Tools & Products', desc: 'Get hands-on experience with professional brushes, palettes, and tools.' },
    { num: '03', title: 'Work on Models', desc: 'Apply your learning in live practice sessions on real models.' },
    { num: '04', title: 'Get Trainer Feedback', desc: 'Receive personalized one-on-one evaluations to refine your work.' },
    { num: '05', title: 'Build Your Portfolio', desc: 'Create a professional photoset of your best works to attract clients.' }
  ];

  const whyJoin = [
    { title: 'Hands-on Practical Sessions', desc: 'No theory-only learning. Practice every single day on live models.' },
    { title: 'Small Batch Sizes', desc: 'Ensures individual attention and personalized guidance for every student.' },
    { title: 'Experienced Trainers', desc: 'Learn tips, tricks, and industry standards from active professionals.' },
    { title: 'Certificate After Completion', desc: 'Earn credentials to build trust with high-paying clients or top salons.' },
    { title: 'Portfolio Guidance', desc: 'Learn how to capture and showcase your work to build a strong social media presence.' },
    { title: 'Freelancing & Career Support', desc: 'Get placement support, industry networking advice, and career coaching.' }
  ];

  return (
    <div className="font-body overflow-x-hidden text-app-primary bg-[#FAF6F0]">
      {/* =========================================
          1. HERO — Elegant Academy Introduction
      ========================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-16 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#EEDAD1]/40 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#EEDAD1]/30 rounded-full blur-[150px] -z-10"></div>

        <div className="max-w-[1200px] mx-auto px-5 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text */}
          <div className="text-left space-y-8 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EEDAD1]/50 rounded-none text-xs font-semibold text-gold tracking-widest uppercase">
              <FaGraduationCap className="text-sm" /> Professional Beauty Academy
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-app-primary uppercase tracking-wide leading-[1.1] mb-6">
              Learn Makeup.<br />
              <span className="font-script font-normal text-gold normal-case block mt-2 text-5xl lg:text-7xl">Build Your Career.</span>
            </h1>

            <p className="text-text-gray text-base lg:text-lg leading-relaxed max-w-lg">
              Join their professional makeup academy and gain practical skills in makeup, hairstyling, beauty, and styling.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={onEnrollClick}
                className="bg-gold text-black rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-app-primary hover:text-white transition-all duration-300 shadow-lg shadow-gold/20"
              >
                Enroll Now
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="w-[360px] sm:w-[480px] lg:w-[500px] aspect-square rounded-t-full rounded-b-none overflow-hidden border-4 border-gold shadow-2xl relative group">
              <img
                src={academyService}
                alt="Trainer teaching a student makeup"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#EEDAD1]/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. ABOUT THE ACADEMY — Learn From Professionals
      ========================================= */}
      <section className="py-12 lg:py-16 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Column: Image / Stats */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="w-[300px] lg:w-[350px] aspect-[4/5] rounded-none overflow-hidden shadow-2xl border-8 border-gold">
                <img
                  src={servicesHero}
                  alt="Professional Makeup Environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="font-script text-gold text-4xl lg:text-5xl block">Expert Guidance</span>
              <h2 className="text-2xl lg:text-3xl font-heading text-white uppercase tracking-widest">
                Learn From Professionals
              </h2>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                Their academy provides beginner-friendly and professional training for students who want to become skilled makeup artists, hairstylists, or beauty professionals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <span className="text-xl text-gold bg-[#111] w-10 h-10 flex items-center justify-center shrink-0 rounded-none border border-gold/10 group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                      {h.icon}
                    </span>
                    <div>
                      <h4 className="text-white text-sm font-bold uppercase tracking-wider group-hover:text-gold transition-colors">{h.title}</h4>
                      <p className="text-gray-400 text-xs mt-1 leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          3. COURSES OFFERED — Choose Your Course
      ========================================= */}
      <section id="academy-courses" className="py-12 lg:py-16 bg-[#FAF6F0]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-script text-gold text-4xl lg:text-5xl block mb-2">Programs</span>
            <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest mb-4">
              Choose Your Course
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-none p-8 flex flex-col justify-between hover:shadow-2xl hover:shadow-gold/5 transition-all duration-300 text-left border border-[#EEDAD1]/20"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl text-gold bg-[#FAF6F0] w-12 h-12 flex items-center justify-center rounded-none border border-[#EEDAD1]">
                      {course.icon}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-gold/10 text-gold px-3 py-1 rounded-none">
                      {course.duration}
                    </span>
                  </div>
                  <h3 className="text-base lg:text-lg font-heading text-app-primary uppercase tracking-widest mb-3 group-hover:text-gold transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-text-gray text-xs sm:text-sm leading-relaxed mb-6">
                    {course.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EEDAD1]/30 flex justify-between items-center mt-6">
                  <span className="text-[10px] text-text-gray tracking-widest uppercase font-semibold">
                    Level: {course.level}
                  </span>
                  <button 
                    onClick={onEnrollClick}
                    className="text-xs font-bold tracking-widest uppercase text-gold hover:text-black transition-colors font-medium"
                  >
                    Enroll Now →
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          4. TRAINING PROCESS — Learn by Doing
      ========================================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-left space-y-8 order-2 lg:order-1">
              <div>
                <span className="font-script text-gold text-4xl lg:text-5xl block mb-2">Our Process</span>
                <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest">
                  Learn by Doing
                </h2>
                <div className="w-16 h-[1px] bg-gold mt-4"></div>
              </div>

              <div className="space-y-6">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex gap-6 items-start group">
                    <span className="font-heading text-xl lg:text-2xl font-light text-gold/60 group-hover:text-gold transition-colors duration-300">
                      {s.num}
                    </span>
                    <div>
                      <h4 className="text-app-primary text-sm lg:text-base font-bold uppercase tracking-wider group-hover:text-gold transition-colors">
                        {s.title}
                      </h4>
                      <p className="text-text-gray text-xs sm:text-sm mt-1 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center order-1 lg:order-2">
              <div className="w-[300px] lg:w-[350px] aspect-[4/5] rounded-[10rem_0_10rem_0] overflow-hidden shadow-2xl border-8 border-gold">
                <img
                  src={partyMakeupService}
                  alt="Students practicing makeup in class"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          5. WHY JOIN THEM — More Than Just Training
      ========================================= */}
      <section className="py-12 lg:py-16 bg-[#FAF6F0]">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-script text-gold text-4xl lg:text-5xl block mb-2">Academy Benefits</span>
            <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest mb-4">
              More Than Just Training
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyJoin.map((point, idx) => (
              <div
                key={idx}
                className="bg-white rounded-none p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 text-left border border-[#EEDAD1]/20"
              >
                <div>
                  <span className="text-gold font-heading text-lg font-bold block mb-4">0{idx + 1}</span>
                  <h3 className="text-base font-heading uppercase tracking-widest text-app-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-text-gray text-xs sm:text-sm leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          6. FINAL CTA — Start Your Career Today
      ========================================= */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="relative rounded-none bg-[#EEDAD1]/50 border border-white/60 p-8 lg:p-16 overflow-hidden text-center max-w-[1000px] mx-auto">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="font-script text-gold text-3xl lg:text-4xl block">Join the Academy</span>
              <h2 className="text-2xl lg:text-3xl font-heading text-app-primary uppercase tracking-widest leading-tight">
                Start Your Beauty Career Today
              </h2>
              <p className="text-text-gray text-sm lg:text-base leading-relaxed">
                Learn professional beauty skills and turn your passion into a successful career.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <button 
                  onClick={onEnrollClick}
                  className="bg-gold text-black rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-app-primary hover:text-white transition-all duration-300 shadow-md"
                >
                  Enroll Now
                </button>
                <Link to="/contact" className="border border-gold text-gold rounded-none px-10 py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300 inline-block">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
          7. PRODUCTS WE USE — Infinite Marquee
      ========================================= */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a] border-t border-gold/10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 mb-10 text-center">
          <span className="font-script text-gold text-3xl lg:text-4xl block mb-2">Our Standards</span>
          <h2 className="text-2xl lg:text-3xl font-heading text-white uppercase tracking-widest">
            Products We Use
          </h2>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-4"></div>
        </div>

        <div className="relative w-full flex items-center overflow-hidden py-6 bg-[#111]/50 border-y border-gold/10">
          {/* Shadow fades on sides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          <div className="animate-marquee flex items-center gap-16 lg:gap-24 text-white text-base sm:text-lg lg:text-xl font-heading font-medium tracking-[0.2em] uppercase select-none">
            {/* Set 1 */}
            <span>M.A.C Cosmetics</span>
            <span className="text-gold">✦</span>
            <span>Huda Beauty</span>
            <span className="text-gold">✦</span>
            <span>Kryolan Professional</span>
            <span className="text-gold">✦</span>
            <span>Bobbi Brown</span>
            <span className="text-gold">✦</span>
            <span>NARS Cosmetics</span>
            <span className="text-gold">✦</span>
            <span>Estée Lauder</span>
            <span className="text-gold">✦</span>
            <span>Anastasia Beverly Hills</span>
            <span className="text-gold">✦</span>
            <span>Charlotte Tilbury</span>
            <span className="text-gold">✦</span>

            {/* Set 2 */}
            <span>M.A.C Cosmetics</span>
            <span className="text-gold">✦</span>
            <span>Huda Beauty</span>
            <span className="text-gold">✦</span>
            <span>Kryolan Professional</span>
            <span className="text-gold">✦</span>
            <span>Bobbi Brown</span>
            <span className="text-gold">✦</span>
            <span>NARS Cosmetics</span>
            <span className="text-gold">✦</span>
            <span>Estée Lauder</span>
            <span className="text-gold">✦</span>
            <span>Anastasia Beverly Hills</span>
            <span className="text-gold">✦</span>
            <span>Charlotte Tilbury</span>
            <span className="text-gold">✦</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;
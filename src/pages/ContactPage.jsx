import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="font-body overflow-x-hidden bg-[#0a0a0a] text-white min-h-screen">
      {/* =========================================
          1. HERO HEADER
      ========================================= */}
      <section className="relative py-10 lg:py-16 border-b border-gold/10 overflow-hidden flex items-center justify-center">
        {/* Decorative Golden Blobs */}
        <div className="absolute top-[-20%] right-[-10%] w-[450px] h-[450px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[450px] h-[450px] bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-5 w-full text-center relative z-10 space-y-4">
          <span className="font-script text-gold text-4xl lg:text-5xl block">We'd Love to Hear From You</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-[0.2em] leading-tight text-white">
            Contact <span className="text-gold font-light">Us</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mt-4"></div>
        </div>
      </section>

      {/* =========================================
          2. CONTACT DETAILS & FORM SECTION
      ========================================= */}
      <section className="pt-10 lg:pt-16 pb-20 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-5 space-y-12 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-heading uppercase tracking-widest text-white">
                  Visit Our <span className="text-gold">Studio</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Whether you want to book a luxury makeover session or enroll in our beauty academy, feel free to reach out. Our team is here to assist you.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-6">
                {[
                  { icon: <FaPhoneAlt />, title: 'Call Us', val: '+91 98765 43210', label: 'Mon-Sun, 10am-8pm' },
                  { icon: <FaEnvelope />, title: 'Email Us', val: 'info@mehaksmakeover.com', label: 'Response within 24 hours' },
                  { icon: <FaMapMarkerAlt />, title: 'Visit Us', val: '123 Beauty Street, Link Road', label: 'Andheri West, Mumbai - 400053' },
                  { icon: <FaClock />, title: 'Opening Hours', val: '10:00 AM - 08:00 PM', label: 'Open all days of the week' }
                ].map((info, idx) => (
                  <div key={idx} className="flex gap-5 items-start p-6 bg-[#111] border border-gold/15 hover:border-gold/40 transition-colors duration-300 rounded-none">
                    <span className="text-xl text-gold mt-1 shrink-0 bg-[#0a0a0a] p-3 rounded-none border border-gold/10">
                      {info.icon}
                    </span>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-gold uppercase mb-1">{info.title}</h4>
                      <p className="text-white text-sm font-semibold mb-0.5">{info.val}</p>
                      <span className="text-gray-500 text-xs block">{info.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="space-y-4 pt-4">
                <h4 className="text-xs font-bold tracking-widest text-white uppercase">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: <FaFacebookF />, link: '#' },
                    { icon: <FaInstagram />, link: '#' },
                    { icon: <FaYoutube />, link: '#' },
                    { icon: <FaWhatsapp />, link: '#' }
                  ].map((soc, idx) => (
                    <a key={idx} href={soc.link} className="w-10 h-10 flex items-center justify-center bg-[#111] border border-gold/20 hover:border-gold hover:text-black hover:bg-gold transition-all duration-300 text-gold rounded-none text-sm">
                      {soc.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-[#111] border border-gold/15 p-8 lg:p-12 rounded-none relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-none blur-2xl pointer-events-none"></div>

                <div className="text-left space-y-8 relative z-10">
                  <div className="space-y-2">
                    <h3 className="text-xl lg:text-2xl font-heading uppercase tracking-widest text-white">Send Message</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Please fill out the form below and we will get back to you shortly.</p>
                  </div>

                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-gold uppercase block">Full Name</label>
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full bg-[#0a0a0a] border border-gold/20 focus:border-gold rounded-none px-6 py-4 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-gold uppercase block">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="Your Email" 
                          className="w-full bg-[#0a0a0a] border border-gold/20 focus:border-gold rounded-none px-6 py-4 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-gold uppercase block">Phone Number</label>
                        <input 
                          type="tel" 
                          placeholder="Your Number" 
                          className="w-full bg-[#0a0a0a] border border-gold/20 focus:border-gold rounded-none px-6 py-4 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold tracking-widest text-gold uppercase block">Subject</label>
                        <input 
                          type="text" 
                          placeholder="How can we help?" 
                          className="w-full bg-[#0a0a0a] border border-gold/20 focus:border-gold rounded-none px-6 py-4 text-sm text-white placeholder-gray-600 outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 text-left">
                      <label className="text-[10px] font-bold tracking-widest text-gold uppercase block">Message</label>
                      <textarea 
                        rows="5" 
                        placeholder="Write your message here..." 
                        className="w-full bg-[#0a0a0a] border border-gold/20 focus:border-gold rounded-none px-6 py-4 text-sm text-white placeholder-gray-600 outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-gold text-black rounded-none py-4.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-gold/10"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. MAP PLACEHOLDER SECTION
      ========================================= */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="border border-gold/20 rounded-none overflow-hidden h-[400px] relative shadow-2xl">
            {/* Virtual aesthetic dark map placeholder */}
            <div className="absolute inset-0 bg-[#111] flex flex-col items-center justify-center p-8 space-y-4">
              <FaMapMarkerAlt className="text-5xl text-gold animate-bounce" />
              <h4 className="text-lg font-heading uppercase tracking-widest text-white">Flagship Salon Map</h4>
              <p className="text-gray-400 text-sm text-center max-w-md leading-relaxed">
                Find us in the heart of Mumbai. Near Link Road, Andheri West. High-end valet parking and elegant studio reception await your arrival.
              </p>
              <button className="border border-gold text-gold rounded-none px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors duration-300">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

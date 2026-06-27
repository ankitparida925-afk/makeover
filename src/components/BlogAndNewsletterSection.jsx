import React from 'react';

const BlogAndNewsletterSection = () => {
  const blogs = [
    { date: "May 20, 2024", title: "Top 10 Hair Care Tips for Healthy Hair", img: "/hair-care-tips.jpg" },
    { date: "May 15, 2024", title: "Makeup Trends You Should Try", img: "/makeup-trends.jpg" },
    { date: "May 10, 2024", title: "Benefits of Regular Facials", img: "/services-bg.jpg" }
  ];

  return (
    <section className="bg-[#FAF8F5] py-6 lg:py-8">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* Left Side: Blog */}
        <div className="lg:w-2/3 flex flex-col">
          <div className="text-center mb-4">
            <h3 className="font-script text-gold text-2xl lg:text-3xl m-0">- Beauty Tips & Trends -</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {blogs.map((blog, idx) => (
              <div key={idx} className="bg-white border border-gold/30 flex p-2 gap-2 items-center hover:shadow-lg transition-shadow duration-300">
                <img src={blog.img} alt={blog.title} className="w-16 h-20 object-cover shrink-0" />
                <div className="flex flex-col text-left h-full py-1">
                  <span className="text-[9px] text-gray-500 mb-0">{blog.date}</span>
                  <h4 className="text-[11px] font-bold leading-tight my-1 text-black">{blog.title}</h4>
                  <a href="#" className="text-[9px] font-bold text-black uppercase tracking-widest flex items-center hover:text-gold transition-colors mt-auto">
                    Read More <span className="ml-1 text-xs leading-none">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Newsletter */}
        <div className="lg:w-1/3 bg-white border border-gold/30 p-5 flex flex-col justify-center text-center lg:text-left relative">
          <div className="absolute inset-0 border-[4px] border-transparent opacity-0 hover:opacity-100 hover:border-[#FAF8F5] transition-all duration-300 pointer-events-none"></div>
          <h3 className="font-script text-gold text-2xl lg:text-3xl mb-0 leading-none">Stay Beautiful,</h3>
          <h2 className="font-heading text-black text-xl lg:text-2xl mb-1 mt-1">Stay Updated</h2>
          <p className="text-gray-600 text-[10px] mb-4 leading-snug">Subscribe to our newsletter for latest offers & beauty tips.</p>
          <div className="flex border border-gray-300 relative group focus-within:border-gold transition-colors">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="w-full pl-3 pr-8 py-2 text-[10px] outline-none bg-transparent placeholder-gray-400" 
            />
            <div className="absolute right-[85px] top-1/2 -translate-y-1/2 text-gold">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <button className="bg-black text-white px-4 py-2 text-[9px] font-bold tracking-widest uppercase hover:bg-gold transition-colors whitespace-nowrap shrink-0">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BlogAndNewsletterSection;

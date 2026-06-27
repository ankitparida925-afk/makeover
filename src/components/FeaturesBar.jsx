import React from 'react';

const FeaturesBar = () => {
  const features = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm0 0l-2.879 2.879m4.243-8.485a3 3 0 114.243-4.243 3 3 0 01-4.243 4.243z"></path></svg>,
      title: "EXPERT STYLISTS",
      desc: "Trained & Certified Professionals"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
      title: "PREMIUM PRODUCTS",
      desc: "High Quality & Safe Products"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3-.086.641-.194 1.272-.322 1.892M12 21c-3.473 0-6.72-.942-9.482-2.585M12 21c3.473 0 6.72-.942 9.482-2.585"></path></svg>,
      title: "HYGIENE FIRST",
      desc: "Clean, Safe & Sanitized Environment"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>,
      title: "CUSTOMER SATISFACTION",
      desc: "Your Happiness is Our Priority"
    }
  ];

  return (
    <div className="bg-black py-4 lg:py-6 border-t-2 border-gold relative z-20">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-5 grid grid-cols-4 gap-2 sm:gap-4 lg:gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center justify-start text-center gap-1.5 lg:gap-3 text-white">
            <div className="text-gold shrink-0 flex items-center justify-center">
              {React.cloneElement(feature.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" })}
            </div>
            <div className="flex flex-col items-center justify-start">
              <h4 className="text-[6px] sm:text-[9px] lg:text-[13px] font-bold tracking-wider mb-0.5 lg:mb-1 m-0">{feature.title}</h4>
              <p className="text-[5px] sm:text-[7px] lg:text-[11px] text-gray-400 m-0 leading-tight lg:leading-snug max-w-[70px] sm:max-w-[110px] lg:max-w-[155px]">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBar;

import React, { useState } from 'react';
import { FaTimes, FaCalendarAlt, FaClock, FaUser, FaPhoneAlt, FaCut, FaCheckCircle } from 'react-icons/fa';

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    timeSlot: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    'Bridal Makeup Transformation',
    'High Fashion Editorial Makeup',
    'Luxury Party Glam',
    'Airbrush base contour prep',
    'Saree Draping & Styling',
    'Hair Bun & Bridal Hairstyling'
  ];

  const timeSlots = [
    '10:00 AM - 11:30 AM',
    '12:00 PM - 01:30 PM',
    '02:30 PM - 04:00 PM',
    '04:30 PM - 06:00 PM',
    '06:30 PM - 08:00 PM'
  ];

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.service && formData.date && formData.timeSlot) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      timeSlot: ''
    });
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-[#111] border border-gold/30 max-w-[650px] w-full relative shadow-2xl rounded-none overflow-hidden text-white">
        
        {/* Header */}
        <div className="border-b border-gold/15 p-5 flex justify-between items-center bg-[#0a0a0a]">
          <h3 className="text-lg font-heading text-white uppercase tracking-widest">
            Book an <span className="text-gold">Appointment</span>
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gold transition-colors text-xl outline-none"
            aria-label="Close Appointment Modal"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 font-body text-left">
              {/* Name */}
              <div className="space-y-1.5 relative">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Your Name</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60 text-xs"><FaUser /></span>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1b1b1b] text-white border border-gold/10 focus:border-gold px-10 py-3 text-xs tracking-wider outline-none rounded-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1.5 relative">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60 text-xs"><FaPhoneAlt /></span>
                  <input
                    type="tel"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#1b1b1b] text-white border border-gold/10 focus:border-gold px-10 py-3 text-xs tracking-wider outline-none rounded-none transition-colors"
                  />
                </div>
              </div>

              {/* Service Select */}
              <div className="space-y-1.5 relative">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Select Service</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60 text-xs"><FaCut /></span>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#1b1b1b] text-white border border-gold/10 focus:border-gold px-10 py-3 text-xs tracking-wider outline-none rounded-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Choose a service</option>
                    {servicesList.map((svc, i) => (
                      <option key={i} value={svc} className="bg-[#111]">{svc}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Date */}
                <div className="space-y-1.5 relative">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Preferred Date</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60 text-xs"><FaCalendarAlt /></span>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#1b1b1b] text-white border border-gold/10 focus:border-gold pl-10 pr-3 py-3 text-[11px] tracking-wider outline-none rounded-none transition-colors cursor-pointer"
                    />
                  </div>
                </div>

                {/* Time slot select */}
                <div className="space-y-1.5 relative">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 block font-bold">Select Time</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold/60 text-xs"><FaClock /></span>
                    <select
                      required
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full bg-[#1b1b1b] text-white border border-gold/10 focus:border-gold px-10 py-3 text-[11px] tracking-wider outline-none rounded-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Time Slot</option>
                      {timeSlots.map((slot, i) => (
                        <option key={i} value={slot} className="bg-[#111]">{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Book button */}
              <button 
                type="submit"
                className="w-full bg-gold text-black border border-gold hover:bg-transparent hover:text-gold transition-all duration-300 py-3.5 text-xs font-bold uppercase tracking-widest rounded-none mt-2"
              >
                Confirm Appointment
              </button>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-6 space-y-6 font-body">
              <div className="flex justify-center">
                <FaCheckCircle className="text-gold text-5xl animate-bounce" />
              </div>
              <div className="space-y-2">
                <h4 className="text-white text-lg font-heading uppercase tracking-widest">Booking Confirmed!</h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[320px] mx-auto">
                  Thank you, <span className="text-white font-bold">{formData.name}</span>. Your appointment for <span className="text-white font-bold">{formData.service}</span> is scheduled on <span className="text-gold font-bold">{formData.date}</span> at <span className="text-gold font-bold">{formData.timeSlot}</span>.
                </p>
              </div>
              <button 
                onClick={handleReset}
                className="bg-transparent text-gold border border-gold/45 hover:border-gold hover:bg-gold hover:text-black transition-all duration-300 px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-none"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AppointmentModal;

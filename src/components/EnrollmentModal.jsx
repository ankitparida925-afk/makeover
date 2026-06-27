import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const EnrollmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    emailAddress: '',
    dob: '',
    selectedCourse: 'Basic Makeup Course',
    preferredBatch: 'Morning',
    message: '',
    agreeToContact: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({
        fullName: '',
        mobileNumber: '',
        emailAddress: '',
        dob: '',
        selectedCourse: 'Basic Makeup Course',
        preferredBatch: 'Morning',
        message: '',
        agreeToContact: false
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[650px] bg-white border border-gold/20 shadow-2xl p-6 sm:p-10 z-10 overflow-y-auto max-h-[90vh] text-left">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors p-2"
          aria-label="Close modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <span className="text-4xl">🎓</span>
            <h3 className="text-xl font-heading text-black uppercase tracking-wider">Enrollment Request Received!</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">We will contact you shortly regarding the batches and admission process.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Header */}
            <div className="border-b border-gray-100 pb-4">
              <span className="font-script text-gold text-2xl lg:text-3xl block">Admission Academy</span>
              <h2 className="text-xl lg:text-2xl font-heading text-black uppercase tracking-widest mt-1">
                Course Enrollment
              </h2>
            </div>

            {/* Section 1: Personal Information */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-gold uppercase border-l-2 border-gold pl-2">
                👤 Personal Information
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Full Name *</label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name" 
                    className="w-full bg-[#FAF6F0] border border-gray-200 focus:border-gold rounded-none px-4 py-3 text-sm text-black outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="mobileNumber"
                    required
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter mobile number" 
                    className="w-full bg-[#FAF6F0] border border-gray-200 focus:border-gold rounded-none px-4 py-3 text-sm text-black outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Email Address *</label>
                  <input 
                    type="email" 
                    name="emailAddress"
                    required
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="Enter email address" 
                    className="w-full bg-[#FAF6F0] border border-gray-200 focus:border-gold rounded-none px-4 py-3 text-sm text-black outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Date of Birth (Optional)</label>
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full bg-[#FAF6F0] border border-gray-200 focus:border-gold rounded-none px-4 py-3 text-sm text-black outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Course Information */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-gold uppercase border-l-2 border-gold pl-2">
                🎓 Course Information
              </h3>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Select Course</label>
                <select 
                  name="selectedCourse"
                  value={formData.selectedCourse}
                  onChange={handleChange}
                  className="w-full bg-[#FAF6F0] border border-gray-200 focus:border-gold rounded-none px-4 py-3 text-sm text-black outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="Basic Makeup Course">Basic Makeup Course</option>
                  <option value="Advanced Makeup Course">Advanced Makeup Course</option>
                  <option value="Bridal Makeup Course">Bridal Makeup Course</option>
                  <option value="Professional Makeup Artist Course">Professional Makeup Artist Course</option>
                  <option value="Hair Styling Course">Hair Styling Course</option>
                  <option value="Nail Art Course">Nail Art Course</option>
                  <option value="Self Makeup Course">Self Makeup Course</option>
                </select>
              </div>
            </div>

            {/* Section 3: Preferences */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest text-gold uppercase border-l-2 border-gold pl-2">
                📅 Preferences
              </h3>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Preferred Batch</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['Morning', 'Afternoon', 'Evening', 'Weekend'].map((batch) => (
                    <label 
                      key={batch}
                      className={`flex items-center justify-center p-3 border text-xs font-bold uppercase tracking-wider cursor-pointer transition-all duration-300 ${
                        formData.preferredBatch === batch 
                          ? 'border-gold bg-gold/5 text-gold' 
                          : 'border-gray-200 text-gray-500 hover:border-gray-300'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="preferredBatch" 
                        value={batch}
                        checked={formData.preferredBatch === batch}
                        onChange={handleChange}
                        className="sr-only" 
                      />
                      {batch}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Optional Message Field */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase block">Message (Optional)</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your query or details here..." 
                rows="3"
                className="w-full bg-[#FAF6F0] border border-gray-200 focus:border-gold rounded-none px-4 py-3 text-sm text-black outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {/* Agree to Contact Checkbox */}
            <div className="flex items-center gap-2">
              <input 
                type="checkbox" 
                id="agreeToContact"
                name="agreeToContact"
                checked={formData.agreeToContact}
                onChange={handleChange}
                required
                className="w-4 h-4 accent-gold border-gray-300 rounded cursor-pointer"
              />
              <label htmlFor="agreeToContact" className="text-xs text-gray-600 select-none cursor-pointer">
                I agree to be contacted.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button 
                type="submit" 
                className="w-full bg-black text-gold hover:bg-gold hover:text-black transition-colors duration-300 py-4 text-xs font-bold tracking-widest uppercase rounded-none border border-gold/15"
              >
                Enroll Now
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};

export default EnrollmentModal;

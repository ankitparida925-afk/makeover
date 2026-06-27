import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './index.css';
import ScrollToTop from './components/ScrollToTop';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import AppointmentModal from './components/AppointmentModal';
import EnrollmentModal from './components/EnrollmentModal';

function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-body">
        <TopBar />
        <Navbar onBookClick={() => setIsBookModalOpen(true)} />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage onBookClick={() => setIsBookModalOpen(true)} />} />
          <Route path="/training" element={<TrainingPage onEnrollClick={() => setIsEnrollModalOpen(true)} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <FooterSection />

        {/* Global Appointment Booking Modal */}
        <AppointmentModal 
          isOpen={isBookModalOpen} 
          onClose={() => setIsBookModalOpen(false)} 
        />

        {/* Global Course Enrollment Modal */}
        <EnrollmentModal 
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;

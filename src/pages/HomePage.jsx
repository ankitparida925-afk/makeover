import React from 'react';
import Hero from '../components/Hero';
import FeaturesBar from '../components/FeaturesBar';
import AboutSection from '../components/AboutSection';
import TrainingSection from '../components/TrainingSection';
import ServicesSection from '../components/ServicesSection';
import StatsBanner from '../components/StatsBanner';
import TransformationsSection from '../components/TransformationsSection';
import AdBannersSection from '../components/AdBannersSection';
import GalleryGlimpseSection from '../components/GalleryGlimpseSection';
import BlogAndNewsletterSection from '../components/BlogAndNewsletterSection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturesBar />
      <AboutSection />
      <TrainingSection />
      <ServicesSection />
      <StatsBanner />
      <TransformationsSection />
      <AdBannersSection />
      <GalleryGlimpseSection />
      <BlogAndNewsletterSection />
    </>
  );
};

export default HomePage;

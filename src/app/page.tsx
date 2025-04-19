import React from 'react';
import Hero from '@/components/home/Hero';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import FaqSection from '@/components/home/FaqSection';
import ContactSection from '@/components/home/ContactSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

/**
 * Home page component
 * @returns {React.ReactElement} The Home page
 */
export default function Home(): React.ReactElement {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

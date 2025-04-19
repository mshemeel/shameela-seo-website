import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/layout/Container';
import ContactForm from '@/components/contact/ContactForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Us | Shameela Sheriff - SEO Specialist',
  description: 'Contact Shameela Sheriff for SEO services, content marketing, and web optimization. Get in touch for personalized strategies to boost your online presence.',
  keywords: 'SEO contact, Shameela Sheriff contact, digital marketing contact, SEO consultation, SEO services contact',
  openGraph: {
    title: 'Contact Us | Shameela Sheriff - SEO Specialist',
    description: 'Contact Shameela Sheriff for SEO services, content marketing, and web optimization. Get in touch for personalized strategies to boost your online presence.',
    url: 'https://shameelacseo.com/contact',
    siteName: 'Shameela Sheriff - SEO Specialist',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shameela Sheriff Contact Page',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
};

/**
 * Contact page component
 * @returns {React.ReactElement} The Contact page
 */
export default function ContactPage(): React.ReactElement {
  return (
    <main className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.contactHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            Need help with your digital marketing strategy? Let's talk about how we can work together to achieve your business goals.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <Container>
          <ContactForm />
        </Container>
      </section>
      
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Visit our office or connect with us online. We're available to assist you with your SEO and digital marketing needs.
            </p>
          </div>
          
          <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
            {/* Replace with an actual map component or iframe when available */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Map will be displayed here</p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 
import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/layout/Container';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import faqs from '@/data/faqs';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Shameela Sheriff - SEO Expert',
  description: 'Find answers to common questions about SEO, content marketing, social media, and website development services offered by Shameela Sheriff.',
  openGraph: {
    title: 'FAQ | Shameela Sheriff - Digital Marketing Strategist',
    description: 'Get answers to frequently asked questions about digital marketing, SEO, and web development services.',
    images: ['/images/faq-og.jpg'],
  },
};

/**
 * FAQ page component
 * @returns {React.ReactElement} The FAQ page
 */
export default function FaqPage(): React.ReactElement {
  // Group FAQs by category
  const categories = {
    general: faqs.filter(faq => faq.category === 'general'),
    seo: faqs.filter(faq => faq.category === 'seo'),
    content: faqs.filter(faq => faq.category === 'content'),
    website: faqs.filter(faq => faq.category === 'website'),
    social: faqs.filter(faq => faq.category === 'social'),
  };

  // Convert FAQs to accordion items
  const convertToAccordionItems = (items: typeof faqs): AccordionItem[] => {
    return items.map(faq => ({
      id: faq.id,
      title: faq.question,
      content: <p className={styles.faqAnswer}>{faq.answer}</p>,
    }));
  };

  // Category labels for display
  const categoryLabels = {
    general: 'General Questions',
    seo: 'Search Engine Optimization',
    content: 'Content Marketing',
    website: 'Website Development',
    social: 'Social Media Marketing',
  };

  return (
    <main className={styles.faqPage}>
      {/* Hero Section */}
      <section className={styles.faqHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Frequently Asked Questions</h1>
          <p className={styles.heroSubtitle}>
            Find answers to common questions about digital marketing, SEO, and my services
          </p>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className={styles.faqCategories}>
        <Container>
          <div className={styles.categoriesWrapper}>
            <div className={styles.sidebarNav}>
              <div className={styles.navSticky}>
                <h2 className={styles.navTitle}>Categories</h2>
                <ul className={styles.navList}>
                  {Object.keys(categories).map(category => (
                    <li key={category} className={styles.navItem}>
                      <a href={`#${category}`} className={styles.navLink}>
                        {categoryLabels[category as keyof typeof categoryLabels]}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className={styles.navCta}>
                  <p className={styles.navCtaText}>Still have questions?</p>
                  <Button href="/contact">Contact Me</Button>
                </div>
              </div>
            </div>

            <div className={styles.categoriesContent}>
              {Object.entries(categories).map(([category, categoryFaqs]) => (
                categoryFaqs.length > 0 && (
                  <div key={category} id={category} className={styles.categorySection}>
                    <h2 className={styles.categoryTitle}>
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h2>
                    <Accordion 
                      items={convertToAccordionItems(categoryFaqs)} 
                      className={styles.faqAccordion} 
                      allowMultiple={true}
                    />
                  </div>
                )
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.ctaSection}>
        <Container>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaDescription}>
              If you couldn't find the answer to your question, feel free to contact me directly. 
              I'm always happy to help and provide more information about my services.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/contact" size="large">
                Contact Me
              </Button>
              <Button href="/services" variant="outline" size="large">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
} 
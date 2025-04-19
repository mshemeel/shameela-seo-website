import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import Accordion, { AccordionItem } from '../ui/Accordion';
import ScrollReveal from '../animations/ScrollReveal';
import faqs from '@/data/faqs';
import styles from './FaqSection.module.css';

/**
 * FaqSection component for the home page
 * @returns {React.ReactElement} The FaqSection component
 */
export default function FaqSection(): React.ReactElement {
  // Convert faq data to accordion items format
  const homepageFaqs = faqs.slice(0, 4); // Only show first 4 FAQs on homepage
  
  const accordionItems: AccordionItem[] = homepageFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    content: <p className={styles.faqAnswer}>{faq.answer}</p>,
  }));

  return (
    <section id="faqs" className={styles.faqs}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <ScrollReveal>
              <h2 className={styles.sectionTitle}>
                <span className={styles.subtitle}>Frequently Asked Questions</span>
                Common Questions About Digital Marketing
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <p className={styles.sectionDescription}>
                Here are answers to some common questions about digital marketing, SEO, and web development. If you don't find the answer you're looking for, feel free to get in touch.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className={styles.accordionWrapper}>
                <Accordion items={accordionItems} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className={styles.moreQuestions}>
                <h3 className={styles.moreQuestionsTitle}>Still have questions?</h3>
                <p className={styles.moreQuestionsText}>
                  If you couldn't find the answer to your question, feel free to contact me. I'm always happy to help!
                </p>
                <div className={styles.buttons}>
                  <Button href="/faq" variant="outline">
                    View All FAQs
                  </Button>
                  <Button href="/contact">
                    Contact Me
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="right" className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img 
                src="/images/faq-illustration.svg" 
                alt="FAQs Illustration" 
                className={styles.image}
              />
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
} 
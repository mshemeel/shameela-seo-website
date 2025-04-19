import React from 'react';
import Container from '../layout/Container';
import Button from '../ui/Button';
import ScrollReveal from '../animations/ScrollReveal';
import styles from './AboutSection.module.css';

/**
 * AboutSection component for the home page
 * @returns {React.ReactElement} The AboutSection component
 */
export default function AboutSection(): React.ReactElement {
  return (
    <section id="about" className={styles.about}>
      <Container>
        <div className={styles.content}>
          <ScrollReveal direction="left" className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <div className={styles.imageBorder}></div>
              <img 
                src="/images/shameela.jpg" 
                alt="Shameela Sheriff" 
                className={styles.image}
              />
              <div className={styles.experience}>
                <span className={styles.years}>5+</span>
                <span className={styles.text}>Years<br />Experience</span>
              </div>
            </div>
          </ScrollReveal>

          <div className={styles.textContent}>
            <ScrollReveal direction="right">
              <h2 className={styles.sectionTitle}>
                <span className={styles.subtitle}>Get to know me</span>
                The Digital Marketing Expert Your Business Needs
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={200}>
              <div className={styles.description}>
                <p>
                  I'm Shameela Sheriff, a dedicated Digital Marketing Strategist with over 5 years of experience helping businesses in Palakkad and beyond establish a strong online presence.
                </p>
                <p>
                  My expertise spans across various aspects of digital marketing, including SEO, content creation, website development, and social media management. I tailor my strategies to meet the unique needs of each client, ensuring maximum ROI and sustainable growth.
                </p>
                <p>
                  What sets me apart is my commitment to staying updated with the latest industry trends and my passion for transforming businesses through effective digital strategies.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={400}>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>50+</span>
                  <span className={styles.statText}>Happy Clients</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100+</span>
                  <span className={styles.statText}>Projects Completed</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>80%</span>
                  <span className={styles.statText}>Repeat Clients</span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={600}>
              <div className={styles.buttons}>
                <Button 
                  href="mailto:shameela@example.com" 
                  variant="primary" 
                  size="large"
                >
                  Hire Me
                </Button>
                <Button 
                  href="/about" 
                  variant="outline"
                  size="large"
                >
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
} 
import React from 'react';
import Container from '../layout/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScrollReveal from '../animations/ScrollReveal';
import services from '@/data/services';
import styles from './ServicesSection.module.css';

/**
 * ServicesSection component for the home page
 * @returns {React.ReactElement} The ServicesSection component
 */
export default function ServicesSection(): React.ReactElement {
  return (
    <section id="services" className={styles.services}>
      <Container>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>
            <span className={styles.subtitle}>My Services</span>
            What Can I Offer As A Leading Digital Marketing Strategist in Palakkad?
          </h2>
        </ScrollReveal>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 100}>
              <Card variant="feature" className={styles.serviceCard}>
                <div className={styles.serviceIcon} dangerouslySetInnerHTML={{ __html: service.icon }}></div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
                <ul className={styles.serviceFeatures}>
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className={styles.serviceFeature}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="16"
                        height="16"
                        className={styles.checkIcon}
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href={`/services#${service.id}`} variant="text" className={styles.serviceLink}>
                  Learn More
                </Button>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className={styles.infoBlocks}>
          <ScrollReveal direction="left" className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Why You Need Best Digital Marketing Expert For Your Business?</h3>
            <p className={styles.infoText}>
              In today's digital age, a strong online presence is essential for business success. A digital marketing expert helps you navigate the complex online landscape, ensuring your business stands out among competitors, reaches the right audience, and converts visitors into customers.
            </p>
            <ul className={styles.infoList}>
              <li>Increase online visibility and reach</li>
              <li>Target specific audiences effectively</li>
              <li>Build brand credibility and authority</li>
              <li>Measure and analyze campaign performance</li>
              <li>Adapt to changing market trends</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Why Choose Me As Your Digital Marketing Strategist?</h3>
            <p className={styles.infoText}>
              With over 5 years of experience in digital marketing, I offer personalized strategies tailored to your business needs. I combine technical expertise with creative solutions to deliver measurable results that help your business grow in the digital space.
            </p>
            <ul className={styles.infoList}>
              <li>Customized strategies for your business goals</li>
              <li>Transparent communication and reporting</li>
              <li>Up-to-date with latest industry trends</li>
              <li>Proven track record with local businesses</li>
              <li>Holistic approach to digital marketing</li>
            </ul>
            <Button href="mailto:shameela@example.com" className={styles.infoButton}>
              Let's Connect
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
} 
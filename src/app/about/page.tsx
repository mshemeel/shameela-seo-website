import React from 'react';
import Container from '@/components/layout/Container';
import ScrollReveal from '@/components/animations/ScrollReveal';
import styles from './page.module.css';

export const metadata = {
  title: 'About - Shameela Khan | SEO Specialist',
  description: 'Learn about Shameela Khan, an experienced SEO specialist with expertise in digital marketing, content strategy, and search engine optimization.',
};

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* Hero section */}
      <section className={styles.aboutHero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>About Me</h1>
            <p className={styles.heroSubtitle}>
              Passionate SEO Specialist with a track record of improving search rankings and driving organic traffic.
            </p>
          </div>
        </Container>
      </section>

      {/* Biography section */}
      <section className={styles.biographySection}>
        <Container>
          <div className={styles.sectionContent}>
            <div className={styles.bioImageContainer}>
              <div className={styles.bioImage}>
                {/* Placeholder for image */}
              </div>
            </div>
            <div className={styles.bioTextContent}>
              <ScrollReveal>
                <span className={styles.subtitle}>MY STORY</span>
                <h2 className={styles.sectionTitle}>The Journey to Becoming an SEO Expert</h2>
                <div className={styles.bioText}>
                  <p>
                    With over 8 years of experience in digital marketing, I've developed a deep understanding of search engine algorithms and user behavior patterns that drive successful SEO strategies.
                  </p>
                  <p>
                    My journey began at a small marketing agency where I discovered my passion for the analytical and creative aspects of SEO. Since then, I've worked with businesses across various industries, from e-commerce startups to established B2B companies, helping them achieve significant improvements in their online visibility.
                  </p>
                  <p>
                    I believe that effective SEO is not just about technical optimization but about creating meaningful connections between brands and their audiences through quality content and user-centric strategies.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills section */}
      <section className={styles.skillsSection}>
        <Container>
          <ScrollReveal>
            <span className={styles.subtitle}>MY EXPERTISE</span>
            <h2 className={styles.sectionTitle}>Skills & Specialties</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
                <h3 className={styles.skillTitle}>Keyword Research</h3>
                <p className={styles.skillDescription}>
                  Uncovering valuable search terms with high intent and reasonable competition to drive targeted traffic.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path>
                    <path d="M18 14H10"></path>
                    <path d="M15 18H10"></path>
                    <path d="M10 6h8v4h-8z"></path>
                  </svg>
                </div>
                <h3 className={styles.skillTitle}>Content Strategy</h3>
                <p className={styles.skillDescription}>
                  Developing comprehensive content plans that align with business goals and search intent.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <h3 className={styles.skillTitle}>Technical SEO</h3>
                <p className={styles.skillDescription}>
                  Optimizing site architecture, page speed, mobile usability, and crawlability for search engines.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <h3 className={styles.skillTitle}>Local SEO</h3>
                <p className={styles.skillDescription}>
                  Optimizing business listings, managing reviews, and implementing local content strategies.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <h3 className={styles.skillTitle}>Analytics & Reporting</h3>
                <p className={styles.skillDescription}>
                  Tracking performance metrics, analyzing user behavior, and delivering actionable insights.
                </p>
              </div>

              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className={styles.skillTitle}>Link Building</h3>
                <p className={styles.skillDescription}>
                  Creating ethical link acquisition strategies that build domain authority naturally.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Credentials section */}
      <section className={styles.credentialsSection}>
        <Container>
          <ScrollReveal>
            <span className={styles.subtitle}>QUALIFICATIONS</span>
            <h2 className={styles.sectionTitle}>Certifications & Education</h2>
            <div className={styles.credentialsGrid}>
              <div className={styles.credentialCard}>
                <div className={styles.credentialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3 className={styles.credentialTitle}>Google Analytics Certification</h3>
                <p className={styles.credentialDate}>Certified 2023</p>
              </div>

              <div className={styles.credentialCard}>
                <div className={styles.credentialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3 className={styles.credentialTitle}>Google Search Console Certification</h3>
                <p className={styles.credentialDate}>Certified 2022</p>
              </div>

              <div className={styles.credentialCard}>
                <div className={styles.credentialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <h3 className={styles.credentialTitle}>Digital Marketing Degree</h3>
                <p className={styles.credentialDate}>University of Marketing, 2017</p>
              </div>

              <div className={styles.credentialCard}>
                <div className={styles.credentialIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <h3 className={styles.credentialTitle}>SEMrush SEO Certification</h3>
                <p className={styles.credentialDate}>Certified 2023</p>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Mission section */}
      <section className={styles.missionSection}>
        <Container>
          <div className={styles.missionContent}>
            <ScrollReveal>
              <span className={styles.subtitle}>MY PHILOSOPHY</span>
              <h2 className={styles.sectionTitle}>Mission & Values</h2>
              <div className={styles.missionText}>
                <p>
                  My mission is to help businesses achieve sustainable growth through ethical SEO practices that focus on providing value to users rather than gaming algorithms.
                </p>
                <p>
                  I believe in transparent communication, data-driven strategies, and continuous learning. The digital landscape is constantly evolving, and staying ahead requires adaptability and a commitment to understanding both technical developments and user behavior trends.
                </p>
                <p>
                  Each client partnership is built on mutual trust and a shared vision for success. I take pride in demystifying SEO and empowering my clients with the knowledge they need to make informed decisions about their digital presence.
                </p>
              </div>
              <div className={styles.missionValues}>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Integrity</h3>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Innovation</h3>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Growth</h3>
                </div>
                <div className={styles.valueItem}>
                  <div className={styles.valueIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                      <path d="M9 12l2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className={styles.valueTitle}>Reliability</h3>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </main>
  );
} 
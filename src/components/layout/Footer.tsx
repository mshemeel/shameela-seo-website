'use client';

import React from 'react';
import Link from 'next/link';
import Container from './Container';
import styles from './Footer.module.css';

/**
 * Footer component with navigation links and social media
 * @returns {React.ReactElement} The Footer component
 */
export default function Footer(): React.ReactElement {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.footerLogo}>
              <span className={styles.footerName}>Shameela Sheriff</span>
              <span className={styles.footerTitle}>SEO Expert</span>
            </Link>
            <p className={styles.footerDescription}>
              Leading Digital Marketing Strategist in Palakkad, 
              helping businesses boost their online presence and reach their target audience.
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 00.1.4V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.466.181.8.398 1.15.748.35.35.566.684.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.37.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858-.181.466-.398.8-.748 1.15-.35.35-.684.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.181-.466.398-.8.748-1.15.35-.35.684-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.37-.058 4.041-.058zm0 11.531a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm0-8.468a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm6.538-.203a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"></path>
                </svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M20.9 2H3.1A1.1 1.1 0 002 3.1v17.8A1.1 1.1 0 003.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 013.88-4 20.26 20.26 0 012.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 001.1-1.1V3.1A1.1 1.1 0 0020.9 2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linksList}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Services</h3>
              <ul className={styles.linksList}>
                <li><Link href="/services#website-development">Website Development</Link></li>
                <li><Link href="/services#content-writing">Content Writing</Link></li>
                <li><Link href="/services#seo">Search Engine Optimization</Link></li>
                <li><Link href="/services#social-media">Social Media Marketing</Link></li>
              </ul>
            </div>
            
            <div className={styles.linksColumn}>
              <h3 className={styles.columnTitle}>Contact</h3>
              <address className={styles.contactInfo}>
                <p>Palakkad, Kerala, India</p>
                <p>
                  <a href="mailto:shameela@example.com">shameela@example.com</a>
                </p>
                <p>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
              </address>
            </div>
          </div>
        </div>
        
        <div className={styles.footerCopyright}>
          <p>&copy; {currentYear} Shameela Sheriff. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
} 
'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import styles from './ContactForm.module.css';

/**
 * ContactForm component for the Contact page
 * @returns {React.ReactElement} The ContactForm component
 */
export default function ContactForm(): React.ReactElement {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  /**
   * Handle input change events
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} e - The change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * Handle form submission
   * @param {React.FormEvent} e - The form event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission with a timeout
    setTimeout(() => {
      // Replace with actual form submission logic
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      // Reset status after a delay
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  return (
    <div className={styles.contactGrid}>
      <SlideIn direction="left" className={styles.contactInfo}>
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>Contact Information</h2>
          <p className={styles.infoDescription}>
            Feel free to get in touch with me for any questions or inquiries about my services. 
            I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"/>
                </svg>
              </div>
              <div className={styles.contactText}>
                <h3 className={styles.contactLabel}>Email</h3>
                <a href="mailto:shameela@example.com" className={styles.contactValue}>
                  shameela@example.com
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path fill="currentColor" d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"/>
                </svg>
              </div>
              <div className={styles.contactText}>
                <h3 className={styles.contactLabel}>Phone</h3>
                <a href="tel:+919876543210" className={styles.contactValue}>
                  +91 98765 43210
                </a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path fill="currentColor" d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                </svg>
              </div>
              <div className={styles.contactText}>
                <h3 className={styles.contactLabel}>Location</h3>
                <p className={styles.contactValue}>
                  Palakkad, Kerala, India
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.availability}>
            <h3 className={styles.availabilityTitle}>Business Hours</h3>
            <ul className={styles.availabilityList}>
              <li className={styles.availabilityItem}>
                <span className={styles.availabilityDay}>Monday - Friday:</span>
                <span className={styles.availabilityTime}>9:00 AM - 6:00 PM</span>
              </li>
              <li className={styles.availabilityItem}>
                <span className={styles.availabilityDay}>Saturday:</span>
                <span className={styles.availabilityTime}>10:00 AM - 4:00 PM</span>
              </li>
              <li className={styles.availabilityItem}>
                <span className={styles.availabilityDay}>Sunday:</span>
                <span className={styles.availabilityTime}>Closed</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.socialLinks}>
            <h3 className={styles.socialsTitle}>Connect With Me</h3>
            <div className={styles.socialsContainer}>
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
                  <path fill="currentColor" d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465 1.067.048 1.407.06 4.123.06s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772 4.902 4.902 0 00-1.772-1.153c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2z"></path>
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
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Twitter/X"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </SlideIn>

      <SlideIn direction="right" className={styles.formContainer}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Send Me a Message</h2>
          <p className={styles.formSubtitle}>
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.formLabel}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Your name"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.formLabel}>
                  Email Address <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.formInput}
                  placeholder="Your email"
                  disabled={formStatus === 'submitting'}
                />
              </div>
            </div>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="phone" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.formInput}
                  placeholder="Your phone number (optional)"
                  disabled={formStatus === 'submitting'}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.formLabel}>
                  Subject <span className={styles.required}>*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={styles.formSelect}
                  disabled={formStatus === 'submitting'}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message <span className={styles.required}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className={styles.formTextarea}
                placeholder="How can I help you?"
                rows={6}
                disabled={formStatus === 'submitting'}
              ></textarea>
            </div>
            
            <div className={styles.formSubmit}>
              <Button
                type="submit"
                disabled={formStatus === 'submitting'}
                variant="primary"
                size="large"
                fullWidth
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
            
            {formStatus === 'success' && (
              <FadeIn delay={300}>
                <div className={styles.formSuccess}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className={styles.successIcon}>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z"/>
                  </svg>
                  <p>Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
                </div>
              </FadeIn>
            )}
            
            {formStatus === 'error' && (
              <FadeIn delay={300}>
                <div className={styles.formError}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className={styles.errorIcon}>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"/>
                  </svg>
                  <p>Sorry, something went wrong. Please try again later or contact me directly via email.</p>
                </div>
              </FadeIn>
            )}
          </form>
        </div>
      </SlideIn>
    </div>
  );
} 
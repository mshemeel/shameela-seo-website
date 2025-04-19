'use client';

import React, { useState, useEffect } from 'react';
import Container from '../layout/Container';
import ScrollReveal from '../animations/ScrollReveal';
import testimonials from '@/data/testimonials';
import styles from './TestimonialsSection.module.css';

/**
 * TestimonialsSection component for the home page
 * @returns {React.ReactElement} The TestimonialsSection component
 */
export default function TestimonialsSection(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay]);

  /**
   * Move to the next testimonial
   */
  const nextTestimonial = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  /**
   * Move to the previous testimonial
   */
  const prevTestimonial = () => {
    setIsAutoplay(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  /**
   * Go to a specific testimonial
   * @param {number} index - The index to go to
   */
  const goToTestimonial = (index: number) => {
    setIsAutoplay(false);
    setActiveIndex(index);
  };

  /**
   * Generate star rating elements
   * @param {number} rating - The rating value
   * @returns {JSX.Element[]} Star elements
   */
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : ''}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
          <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </span>
    ));
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <Container>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>
            <span className={styles.subtitle}>Testimonials</span>
            What My Clients Say
          </h2>
        </ScrollReveal>

        <div className={styles.testimonialSlider}>
          <div className={styles.sliderContent}>
            <button 
              className={styles.navButton} 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>

            <div className={styles.testimonialCard}>
              <div className={styles.quote}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
                  <path fill="currentColor" d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>

              <p className={styles.testimonialText}>
                {testimonials[activeIndex].testimonial}
              </p>

              <div className={styles.rating}>
                {renderStars(testimonials[activeIndex].rating)}
              </div>

              <div className={styles.testimonialAuthor}>
                <div className={styles.authorImage}>
                  {testimonials[activeIndex].image ? (
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].name} 
                    />
                  ) : (
                    <div className={styles.initials}>
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                  )}
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonials[activeIndex].name}</h4>
                  <p className={styles.authorPosition}>
                    {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <button 
              className={styles.navButton} 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="none" d="M0 0h24v24H0z"/>
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>

          <div className={styles.indicators}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === activeIndex ? styles.active : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
} 
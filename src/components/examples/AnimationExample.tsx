'use client';

import React from 'react';
import FadeIn from '../animations/FadeIn';
import SlideIn from '../animations/SlideIn';
import ScrollReveal from '../animations/ScrollReveal';
import styles from './AnimationExample.module.css';

/**
 * Example component to demonstrate the usage of animation components
 * @returns {React.ReactElement} The AnimationExample component
 */
export default function AnimationExample(): React.ReactElement {
  return (
    <div className={styles.container}>
      <h2>Animation Components Demo</h2>
      
      <section className={styles.section}>
        <h3>FadeIn Animation</h3>
        <div className={styles.demoGrid}>
          <FadeIn delay={100} className={styles.card}>
            <div className={styles.content}>FadeIn with 100ms delay</div>
          </FadeIn>
          <FadeIn delay={300} className={styles.card}>
            <div className={styles.content}>FadeIn with 300ms delay</div>
          </FadeIn>
          <FadeIn delay={500} className={styles.card}>
            <div className={styles.content}>FadeIn with 500ms delay</div>
          </FadeIn>
          <FadeIn delay={700} className={styles.card}>
            <div className={styles.content}>FadeIn with 700ms delay</div>
          </FadeIn>
        </div>
      </section>
      
      <section className={styles.section}>
        <h3>SlideIn Animation</h3>
        <div className={styles.demoGrid}>
          <SlideIn direction="up" delay={200} className={styles.card}>
            <div className={styles.content}>SlideIn from bottom</div>
          </SlideIn>
          <SlideIn direction="down" delay={400} className={styles.card}>
            <div className={styles.content}>SlideIn from top</div>
          </SlideIn>
          <SlideIn direction="left" delay={600} className={styles.card}>
            <div className={styles.content}>SlideIn from right</div>
          </SlideIn>
          <SlideIn direction="right" delay={800} className={styles.card}>
            <div className={styles.content}>SlideIn from left</div>
          </SlideIn>
        </div>
      </section>
      
      <section className={styles.section}>
        <h3>ScrollReveal Animation</h3>
        <p className={styles.instruction}>Scroll down to see these elements animate</p>
        <div className={styles.demoGrid}>
          <ScrollReveal direction="up" className={styles.card}>
            <div className={styles.content}>ScrollReveal from bottom</div>
          </ScrollReveal>
          <ScrollReveal direction="down" className={styles.card}>
            <div className={styles.content}>ScrollReveal from top</div>
          </ScrollReveal>
          <ScrollReveal direction="left" className={styles.card}>
            <div className={styles.content}>ScrollReveal from right</div>
          </ScrollReveal>
          <ScrollReveal direction="right" className={styles.card}>
            <div className={styles.content}>ScrollReveal from left</div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
} 
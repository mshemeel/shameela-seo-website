'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import styles from './ScrollReveal.module.css';

/**
 * Animation direction options
 */
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

/**
 * ScrollReveal component props
 * @param {ReactNode} children - The content to be animated
 * @param {AnimationDirection} direction - The direction from which the animation comes
 * @param {number} delay - Delay before animation starts (in milliseconds)
 * @param {number} threshold - Visibility threshold to trigger animation (0-1)
 * @param {string} className - Additional CSS class names
 */
interface ScrollRevealProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  threshold?: number;
  className?: string;
}

/**
 * ScrollReveal component that animates elements when they enter the viewport
 * @returns {React.ReactElement} The ScrollReveal component
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps): React.ReactElement {
  const elementRef = useRef<HTMLDivElement>(null);
  const wasIntersectedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !wasIntersectedRef.current) {
          // Add visible class after delay
          setTimeout(() => {
            element.classList.add(styles.visible);
            wasIntersectedRef.current = true;
          }, delay);
          
          // Unobserve after animation has been triggered
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold]);

  // Determine animation class based on direction
  const getAnimationClass = () => {
    switch (direction) {
      case 'up':
        return styles.fromBottom;
      case 'down':
        return styles.fromTop;
      case 'left':
        return styles.fromLeft;
      case 'right':
        return styles.fromRight;
      case 'fade':
        return styles.fade;
      default:
        return styles.fromBottom;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${styles.scrollReveal} ${getAnimationClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
} 
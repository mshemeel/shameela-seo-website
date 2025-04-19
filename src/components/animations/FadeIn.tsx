'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import styles from './FadeIn.module.css';

/**
 * FadeIn component props
 * @param {ReactNode} children - The content to be animated
 * @param {number} delay - Delay before animation starts (in milliseconds)
 * @param {number} duration - Duration of the animation (in milliseconds)
 * @param {string} className - Additional CSS class names
 */
interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeIn component that animates elements with a fade effect when mounted
 * @returns {React.ReactElement} The FadeIn component
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 800,
  className = '',
}: FadeInProps): React.ReactElement {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set a timeout to add the visible class after the specified delay
    const timer = setTimeout(() => {
      element.classList.add(styles.visible);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={`${styles.fadeIn} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms` 
      }}
    >
      {children}
    </div>
  );
} 
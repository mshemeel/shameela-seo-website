'use client';

import React, { useEffect, useRef, ReactNode } from 'react';
import styles from './SlideIn.module.css';

/**
 * Animation direction options
 */
export type SlideDirection = 'up' | 'down' | 'left' | 'right';

/**
 * SlideIn component props
 * @param {ReactNode} children - The content to be animated
 * @param {SlideDirection} direction - The direction from which the animation comes
 * @param {number} delay - Delay before animation starts (in milliseconds)
 * @param {number} duration - Duration of the animation (in milliseconds)
 * @param {number} distance - Distance to slide in pixels
 * @param {string} className - Additional CSS class names
 */
interface SlideInProps {
  children: ReactNode;
  direction?: SlideDirection;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

/**
 * SlideIn component that animates elements with a sliding effect when mounted
 * @returns {React.ReactElement} The SlideIn component
 */
export default function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  distance = 30,
  className = '',
}: SlideInProps): React.ReactElement {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial transform based on direction and distance
    const transform = getInitialTransform(direction, distance);
    element.style.transform = transform;

    // Set a timeout to add the visible class after the specified delay
    const timer = setTimeout(() => {
      element.classList.add(styles.visible);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay, direction, distance]);

  /**
   * Get the initial transform value based on direction
   * @param {SlideDirection} dir - The slide direction
   * @param {number} dist - The slide distance
   * @returns {string} CSS transform value
   */
  const getInitialTransform = (dir: SlideDirection, dist: number): string => {
    switch (dir) {
      case 'up':
        return `translate3d(0, ${dist}px, 0)`;
      case 'down':
        return `translate3d(0, -${dist}px, 0)`;
      case 'left':
        return `translate3d(${dist}px, 0, 0)`;
      case 'right':
        return `translate3d(-${dist}px, 0, 0)`;
      default:
        return `translate3d(0, ${dist}px, 0)`;
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${styles.slideIn} ${styles[direction]} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms` 
      }}
    >
      {children}
    </div>
  );
} 
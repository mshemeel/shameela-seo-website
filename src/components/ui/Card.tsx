import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Card.module.css';

/**
 * Card component variants
 */
export type CardVariant = 'default' | 'elevated' | 'outlined' | 'feature';

/**
 * Card component props
 * @param {ReactNode} children - The content to be rendered inside the card
 * @param {CardVariant} variant - The visual style variant of the card
 * @param {string} className - Additional CSS class names
 * @param {string} href - Optional URL to make the card clickable
 */
interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  className?: string;
  href?: string;
}

/**
 * Card component for displaying content in a box with different styles
 * @returns {React.ReactElement} The Card component
 */
export default function Card({
  children,
  variant = 'default',
  className = '',
  href
}: CardProps): React.ReactElement {
  const cardClasses = `
    ${styles.card} 
    ${styles[variant]} 
    ${href ? styles.clickable : ''} 
    ${className}
  `;

  // If href is provided, make the card a link
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {children}
      </Link>
    );
  }

  // Otherwise, render as a div
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
} 
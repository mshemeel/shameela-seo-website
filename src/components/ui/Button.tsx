'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

/**
 * Button variants
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

/**
 * Button sizes
 */
export type ButtonSize = 'small' | 'medium' | 'large';

/**
 * Button props interface
 * @param {ReactNode} children - Button content
 * @param {ButtonVariant} variant - Button style variant
 * @param {ButtonSize} size - Button size
 * @param {string} href - URL for link buttons
 * @param {boolean} fullWidth - Whether button should take full width
 * @param {string} className - Additional CSS class names
 */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Button component with various styles and configurations
 * @returns {React.ReactElement} The Button component
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  fullWidth = false,
  className = '',
  target,
  rel,
  ...props
}: ButtonProps): React.ReactElement {
  const buttonClasses = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
    ${fullWidth ? styles.fullWidth : ''}
    ${className}
  `;

  // If href is provided, render an anchor tag with Next.js Link
  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonClasses}
        target={target}
        rel={rel}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render a button element
  return (
    <button
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
} 
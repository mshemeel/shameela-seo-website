import React, { ReactNode, ElementType } from 'react';
import styles from './Container.module.css';

/**
 * Container component for consistent content width and padding
 * @param {ReactNode} children - The content to be wrapped by the container
 * @param {string} className - Additional CSS class names
 * @param {boolean} fluid - Whether the container should be full width
 * @param {ElementType} as - The HTML element to render the container as
 * @returns {React.ReactElement} The Container component
 */
interface ContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
  as?: ElementType;
}

export default function Container({
  children,
  className = '',
  fluid = false,
  as: Component = 'div',
}: ContainerProps): React.ReactElement {
  return (
    <Component 
      className={`${styles.container} ${fluid ? styles.fluid : ''} ${className}`}
    >
      {children}
    </Component>
  );
} 
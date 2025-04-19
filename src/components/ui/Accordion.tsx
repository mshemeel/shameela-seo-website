'use client';

import React, { useState } from 'react';
import styles from './Accordion.module.css';

/**
 * Accordion item interface
 */
export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

/**
 * Accordion component props
 * @param {AccordionItem[]} items - Array of accordion items to display
 * @param {boolean} allowMultiple - Whether multiple items can be expanded at once
 * @param {string} className - Additional CSS class names
 */
interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

/**
 * Accordion component for displaying collapsible content sections
 * @returns {React.ReactElement} The Accordion component
 */
export default function Accordion({
  items,
  allowMultiple = false,
  className = '',
}: AccordionProps): React.ReactElement {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  /**
   * Toggle the expanded state of an accordion item
   * @param {string} id - The ID of the item to toggle
   */
  const toggleItem = (id: string) => {
    setExpandedItems((prevExpandedItems) => {
      // If the item is already expanded, remove it
      if (prevExpandedItems.includes(id)) {
        return prevExpandedItems.filter((item) => item !== id);
      }
      
      // If multiple items are allowed, add this item
      if (allowMultiple) {
        return [...prevExpandedItems, id];
      }
      
      // Otherwise, replace the expanded items with just this one
      return [id];
    });
  };

  /**
   * Check if an item is expanded
   * @param {string} id - The ID of the item to check
   * @returns {boolean} Whether the item is expanded
   */
  const isItemExpanded = (id: string): boolean => {
    return expandedItems.includes(id);
  };

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item) => (
        <div
          key={item.id}
          className={`${styles.accordionItem} ${isItemExpanded(item.id) ? styles.expanded : ''}`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleItem(item.id)}
            aria-expanded={isItemExpanded(item.id)}
            aria-controls={`accordion-content-${item.id}`}
          >
            <span className={styles.accordionTitle}>{item.title}</span>
            <span className={styles.accordionIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isItemExpanded(item.id) ? (
                  <path d="M18 15l-6-6-6 6" />
                ) : (
                  <path d="M6 9l6 6 6-6" />
                )}
              </svg>
            </span>
          </button>
          
          <div
            id={`accordion-content-${item.id}`}
            className={styles.accordionContent}
            aria-hidden={!isItemExpanded(item.id)}
            style={{
              maxHeight: isItemExpanded(item.id) ? '1000px' : '0',
              opacity: isItemExpanded(item.id) ? 1 : 0,
            }}
          >
            <div className={styles.accordionBody}>
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 
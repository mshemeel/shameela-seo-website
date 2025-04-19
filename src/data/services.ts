/**
 * Service data interface
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

/**
 * Services data for the Services section and page
 */
const services: Service[] = [
  {
    id: 'website-development',
    title: 'Website Development & Optimization',
    description: 'I design and develop modern, responsive websites optimized for search engines and user experience.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3-4h9v2h-9v-2zm-3-4h12v2H6V7z"/></svg>',
    features: [
      'Custom responsive web design',
      'SEO-optimized architecture',
      'Performance optimization',
      'Mobile-friendly interfaces',
      'Fast loading times',
      'Conversion-focused layouts'
    ]
  },
  {
    id: 'content-writing',
    title: 'Content Writing',
    description: 'I create compelling, SEO-optimized content that engages your audience and improves your search rankings.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 6.375c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875C3 3.683 7.03 1.5 12 1.5s9 2.183 9 4.875z M3 12.375v1.5c0 2.692 4.03 4.875 9 4.875s9-2.183 9-4.875v-1.5c0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875z"/></svg>',
    features: [
      'Keyword-optimized blog posts',
      'Website copy that converts',
      'Product descriptions',
      'Email marketing campaigns',
      'Social media content',
      'Content strategy development'
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization',
    description: 'I implement proven SEO strategies to increase your website visibility and drive organic traffic.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"/></svg>',
    features: [
      'Comprehensive SEO audits',
      'Keyword research and analysis',
      'On-page optimization',
      'Technical SEO improvements',
      'Local SEO strategies',
      'Performance tracking and reporting'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'I help businesses build their brand and engage with customers through effective social media strategies.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.06 8.11l1.415 1.415a7 7 0 0 1 0 9.9l-.354.353a7 7 0 0 1-9.9-9.9l1.415 1.415a5 5 0 1 0 7.071 7.071l.354-.354a5 5 0 0 0 0-7.07l-1.415-1.415 1.415-1.414zm6.718 6.011l-1.414-1.414a5 5 0 1 0-7.071-7.071l-.354.354a5 5 0 0 0 0 7.07l1.415 1.415-1.415 1.414-1.414-1.414a7 7 0 0 1 0-9.9l.354-.353a7 7 0 0 1 9.9 9.9z"/></svg>',
    features: [
      'Social media strategy development',
      'Content creation and scheduling',
      'Community management',
      'Paid social media advertising',
      'Performance analytics',
      'Influencer outreach'
    ]
  }
];

export default services; 
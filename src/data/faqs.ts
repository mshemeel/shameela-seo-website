/**
 * FAQ item interface
 */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'seo' | 'content' | 'website' | 'social';
}

/**
 * FAQs data for the FAQs section and page
 */
const faqs: FAQ[] = [
  {
    id: 'what-is-seo',
    question: 'What is SEO and why is it important for my business?',
    answer: 'SEO (Search Engine Optimization) is the practice of optimizing your website and content to rank higher in search engine results pages (SERPs). It\'s important because higher rankings lead to more visibility, traffic, and potential customers. Good SEO practices help search engines understand your website\'s content and purpose, making it more likely to appear when people search for related topics.',
    category: 'seo'
  },
  {
    id: 'how-long-seo-results',
    question: 'How long does it take to see results from SEO?',
    answer: 'SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. The timeline varies based on factors like website age, competition in your industry, current optimization level, and the quality of the implemented strategies. While some improvements may be visible within weeks, sustainable ranking improvements and traffic growth usually require several months of consistent effort.',
    category: 'seo'
  },
  {
    id: 'content-frequency',
    question: 'How frequently should I update my website content?',
    answer: 'Content should be updated regularly, but the ideal frequency depends on your industry, audience, and resources. For blogs, 1-4 high-quality posts per month is often more effective than daily low-quality content. Core website pages should be reviewed and updated quarterly. The key is consistency and quality over quantity, focusing on providing value to your audience while keeping information current and relevant.',
    category: 'content'
  },
  {
    id: 'social-platforms',
    question: 'Which social media platforms should my business focus on?',
    answer: 'Focus on platforms where your target audience is most active. For B2B companies, LinkedIn and Twitter are often most effective. For B2C, consider Instagram, Facebook, or TikTok depending on your demographics. It\'s better to maintain an excellent presence on 2-3 relevant platforms than a mediocre presence on all of them. Research your audience\'s online habits and choose platforms that align with your content type and business goals.',
    category: 'social'
  },
  {
    id: 'website-redesign-seo',
    question: 'Will redesigning my website affect my SEO rankings?',
    answer: 'Yes, website redesigns can impact SEO if not managed properly. To minimize negative effects, maintain the same URL structure or implement proper redirects, preserve existing SEO elements (metadata, headings, alt text), ensure the new design is mobile-friendly and loads quickly, and keep valuable content. With careful planning and implementation, a redesign can actually improve your SEO by enhancing user experience and addressing technical issues.',
    category: 'website'
  },
  {
    id: 'local-seo',
    question: 'How can I improve my local SEO to attract nearby customers?',
    answer: 'To improve local SEO, claim and optimize your Google Business Profile, ensure consistent NAP (Name, Address, Phone) information across all directories, add location-specific pages to your website, get reviews from local customers, create local content relevant to your area, use local keywords in your content, and build relationships with other local businesses for backlinks. These strategies will help your business appear in local search results and map listings.',
    category: 'seo'
  },
  {
    id: 'content-strategy',
    question: 'What makes a good content strategy?',
    answer: 'A good content strategy aligns with business goals, understands target audience needs, includes a diverse content mix (blogs, videos, infographics, etc.), focuses on quality over quantity, incorporates keyword research for SEO, maintains a consistent publishing schedule, includes distribution plans, and measures performance regularly. It should provide value to your audience while supporting your marketing objectives, creating a balance between educational, promotional, and engaging content.',
    category: 'content'
  },
  {
    id: 'website-speed',
    question: 'Why is website speed important and how can I improve it?',
    answer: 'Website speed is crucial for user experience and SEO rankings. Slow sites increase bounce rates and reduce conversions. To improve speed: optimize image sizes, use browser caching, minify CSS and JavaScript, reduce server response time, enable compression, use a content delivery network (CDN), eliminate unnecessary plugins, and consider upgrading your hosting. Regular speed testing using tools like Google PageSpeed Insights can help identify specific areas for improvement.',
    category: 'website'
  }
];

export default faqs; 
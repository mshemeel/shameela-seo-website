/**
 * Blog post interface
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  date: string;
  category: string;
  tags: string[];
}

/**
 * Blog posts data for the blog page
 */
const blogPosts: BlogPost[] = [
  {
    id: 'post-1',
    title: '10 SEO Tips to Boost Your Website Ranking in 2023',
    slug: '10-seo-tips-to-boost-your-website-ranking',
    excerpt: 'Discover the most effective SEO strategies to improve your website\'s search engine ranking and drive more organic traffic in 2023.',
    coverImage: '/images/blog/seo-tips.jpg',
    date: '2023-11-15',
    category: 'SEO',
    tags: ['SEO', 'Website Ranking', 'Digital Marketing']
  },
  {
    id: 'post-2',
    title: 'Why Content Is Still King in Digital Marketing',
    slug: 'why-content-is-still-king-in-digital-marketing',
    excerpt: 'Explore the continued importance of high-quality content in digital marketing strategies and how it drives engagement and conversions.',
    coverImage: '/images/blog/content-marketing.jpg',
    date: '2023-10-28',
    category: 'Content Marketing',
    tags: ['Content Marketing', 'Digital Strategy', 'Engagement']
  },
  {
    id: 'post-3',
    title: 'Local SEO: How to Dominate Search Results in Palakkad',
    slug: 'local-seo-how-to-dominate-search-results-in-palakkad',
    excerpt: 'Learn how businesses in Palakkad can optimize their online presence to appear in local search results and attract nearby customers.',
    coverImage: '/images/blog/local-seo.jpg',
    date: '2023-10-12',
    category: 'Local SEO',
    tags: ['Local SEO', 'Palakkad', 'Google Business Profile']
  },
  {
    id: 'post-4',
    title: 'The Impact of Website Speed on User Experience and SEO',
    slug: 'impact-of-website-speed-on-user-experience-and-seo',
    excerpt: 'Understand how website loading speed affects both user experience and search engine rankings, with tips to improve performance.',
    coverImage: '/images/blog/website-speed.jpg',
    date: '2023-09-22',
    category: 'Technical SEO',
    tags: ['Website Speed', 'User Experience', 'Technical SEO']
  },
  {
    id: 'post-5',
    title: 'Social Media Marketing Strategies for Small Businesses',
    slug: 'social-media-marketing-strategies-for-small-businesses',
    excerpt: 'Effective social media strategies that small businesses can implement to build brand awareness and connect with their audience.',
    coverImage: '/images/blog/social-media.jpg',
    date: '2023-09-05',
    category: 'Social Media',
    tags: ['Social Media', 'Small Business', 'Marketing Strategy']
  },
  {
    id: 'post-6',
    title: 'How to Create a Content Calendar That Drives Results',
    slug: 'how-to-create-a-content-calendar-that-drives-results',
    excerpt: 'Step-by-step guide to creating and maintaining an effective content calendar to organize your digital marketing efforts.',
    coverImage: '/images/blog/content-calendar.jpg',
    date: '2023-08-19',
    category: 'Content Strategy',
    tags: ['Content Strategy', 'Content Calendar', 'Planning']
  }
];

export default blogPosts; 
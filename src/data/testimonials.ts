/**
 * Testimonial item interface
 */
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image: string;
  rating: number;
}

/**
 * Testimonials data for the testimonials section
 */
const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Rahul Sharma',
    position: 'CEO',
    company: 'TechGrow Solutions',
    testimonial: 'Shameela transformed our online presence completely. Our organic traffic increased by 180% within just 5 months of implementing her SEO strategies. Her deep understanding of search algorithms and user behavior helped us target the right audience. I highly recommend her services to any business looking to grow their digital footprint.',
    image: '/images/testimonials/testimonial-1.jpg',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Priya Nair',
    position: 'Marketing Director',
    company: 'Kerala Eats',
    testimonial: 'Working with Shameela has been a game-changer for our restaurant chain. Her social media strategies helped us connect with food enthusiasts across Kerala, and her content writing skills brought our menu to life online. Our bookings have increased by 45% since we started implementing her marketing suggestions.',
    image: '/images/testimonials/testimonial-2.jpg',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'Anand Menon',
    position: 'Founder',
    company: 'Ayurvedic Wellness',
    testimonial: 'Shameela helped us develop a comprehensive digital marketing strategy that perfectly aligned with our brand values. Her SEO expertise helped our wellness products reach the right audience, and her content strategy established us as thought leaders in the Ayurvedic health space. Our e-commerce sales have doubled in just six months!',
    image: '/images/testimonials/testimonial-3.jpg',
    rating: 5
  },
  {
    id: 'testimonial-4',
    name: 'Lakshmi Krishnan',
    position: 'Owner',
    company: 'Fashion Boutique Palakkad',
    testimonial: 'As a small business owner with limited marketing knowledge, I was struggling to build an online presence. Shameela not only created a beautiful website for my boutique but also taught me how to maintain it. Her SEO and social media strategies were tailored to my local market, bringing in both online and walk-in customers.',
    image: '/images/testimonials/testimonial-4.jpg',
    rating: 5
  },
  {
    id: 'testimonial-5',
    name: 'Mohammed Ali',
    position: 'Director',
    company: 'Kerala Educational Institute',
    testimonial: 'Shameela\'s digital marketing expertise helped our educational institution stand out in a competitive market. Her content strategy focused on highlighting our unique teaching methodology, and her SEO work ensured we ranked for key educational terms in our region. Student inquiries increased by 65% within the first three months.',
    image: '/images/testimonials/testimonial-5.jpg',
    rating: 5
  }
];

export default testimonials; 
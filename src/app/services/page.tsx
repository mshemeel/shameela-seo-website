import React from 'react';
import { Metadata } from 'next';
import { FaCheck, FaSearchDollar, FaChartLine, FaCode, FaComments, FaSlidersH } from 'react-icons/fa';
import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'SEO Services | Shameela Sheriff - SEO Expert',
  description: 'Professional SEO services tailored to drive organic traffic and increase conversions. From technical SEO audits to content optimization and link building.',
  openGraph: {
    title: 'SEO Services | Shameela Sheriff',
    description: 'Comprehensive SEO services designed to boost your online visibility and drive organic traffic to your website.',
    images: ['/images/services-og.jpg'],
  },
};

const ServicesPage = () => {
  const services = [
    {
      id: 'seo-audit',
      title: 'Technical SEO Audit',
      icon: <FaSearchDollar />,
      description: 'Comprehensive analysis of your website to identify technical issues that may be hindering your search performance.',
      features: [
        'Full website crawl and analysis',
        'Site speed and performance review',
        'Mobile-friendliness assessment',
        'Schema markup evaluation',
        'Indexability issues identification',
        'Detailed actionable report'
      ]
    },
    {
      id: 'keyword-research',
      title: 'Keyword Research & Strategy',
      icon: <FaChartLine />,
      description: 'Data-driven keyword research to identify high-value search terms that your target audience is using.',
      features: [
        'Competitor keyword analysis',
        'Search volume and difficulty assessment',
        'Long-tail keyword opportunities',
        'User intent mapping',
        'Content gap analysis',
        'Keyword prioritization strategy'
      ]
    },
    {
      id: 'on-page-seo',
      title: 'On-Page SEO Optimization',
      icon: <FaCode />,
      description: 'Optimize individual pages to improve search engine rankings and drive targeted organic traffic.',
      features: [
        'Meta title and description optimization',
        'Heading structure improvement',
        'Internal linking strategy',
        'Content optimization for keywords',
        'Image optimization with alt text',
        'URL structure recommendations'
      ]
    },
    {
      id: 'content-strategy',
      title: 'Content Strategy & Creation',
      icon: <FaComments />,
      description: 'Strategic content planning and creation to attract and engage your target audience while building topical authority.',
      features: [
        'Content audit and gap analysis',
        'Editorial calendar development',
        'SEO-optimized content creation',
        'Content performance tracking',
        'Topic cluster strategy',
        'Engagement optimization'
      ]
    },
    {
      id: 'link-building',
      title: 'Link Building & Outreach',
      icon: <FaSlidersH />,
      description: 'Build high-quality backlinks to increase your website&apos;s authority and improve search rankings.',
      features: [
        'Competitor backlink analysis',
        'Outreach campaign management',
        'Guest posting opportunities',
        'Content promotion strategy',
        'Toxic link audit and removal',
        'Monthly link acquisition reporting'
      ]
    },
    {
      id: 'local-seo',
      title: 'Local SEO',
      icon: <FaSearchDollar />,
      description: 'Improve visibility in local search results to drive foot traffic and local customers to your business.',
      features: [
        'Google Business Profile optimization',
        'Local citation building and cleanup',
        'Review management strategy',
        'Local keyword targeting',
        'Local landing page optimization',
        'Competitor local analysis'
      ]
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Discovery & Analysis',
      description: 'We begin with a thorough analysis of your website, business goals, target audience, and current SEO performance. This helps us understand your unique challenges and opportunities.'
    },
    {
      number: 2,
      title: 'Strategy Development',
      description: 'Based on our findings, we develop a customized SEO strategy tailored to your specific needs and goals, including keyword targeting, content planning, and technical improvements.'
    },
    {
      number: 3,
      title: 'Implementation',
      description: 'Our team executes the strategy, making technical improvements, optimizing content, building quality backlinks, and implementing other tactics to improve your search visibility.'
    },
    {
      number: 4,
      title: 'Monitoring & Reporting',
      description: 'We continuously monitor your website&apos;s performance, tracking key metrics and making adjustments to ensure optimal results. Regular reports keep you informed of progress.'
    },
    {
      number: 5,
      title: 'Optimization & Growth',
      description: 'SEO is an ongoing process. We regularly refine our approach based on performance data and industry changes to ensure sustained growth and improved ROI over time.'
    }
  ];

  const pricingPlans = [
    {
      title: 'Essential',
      price: '$999',
      period: 'per month',
      features: [
        'Technical SEO audit',
        'Keyword research (20 keywords)',
        'On-page optimization (5 pages)',
        'Monthly performance reporting',
        'Basic Google Analytics setup',
        'Email support'
      ],
      cta: 'Get Started',
      featured: false
    },
    {
      title: 'Professional',
      price: '$1,999',
      period: 'per month',
      features: [
        'Everything in Essential, plus:',
        'Expanded keyword research (50 keywords)',
        'On-page optimization (10 pages)',
        'Content creation (2 articles/month)',
        'Link building (5 links/month)',
        'Weekly performance updates',
        'Priority email & phone support'
      ],
      cta: 'Get Started',
      featured: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: 'tailored solutions',
      features: [
        'Everything in Professional, plus:',
        'Comprehensive keyword strategy',
        'Unlimited page optimization',
        'Custom content strategy & creation',
        'Advanced link building strategy',
        'Dedicated SEO consultant',
        '24/7 priority support',
        'Executive reporting'
      ],
      cta: 'Contact Me',
      featured: false
    }
  ];

  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.servicesHero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SEO Services</h1>
          <p className={styles.heroSubtitle}>
            Customized SEO solutions to boost your online visibility, drive organic traffic, and increase conversions.
          </p>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className={styles.servicesOverview}>
        <Container>
          <div className={styles.overviewContent}>
            <div>
              <h2 className={styles.sectionTitle}>My SEO Services</h2>
              <p className={styles.sectionDescription}>
                I offer comprehensive SEO services tailored to your business needs. From technical audits to content strategy, 
                my data-driven approach helps you achieve sustainable growth and higher rankings.
              </p>
            </div>

            <div className={styles.servicesGrid}>
              {services.map((service) => (
                <div key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceHeader}>
                    <div className={styles.serviceIcon}>
                      {service.icon}
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                  </div>
                  
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.serviceDetails}>
                    <h4 className={styles.featuresTitle}>What's included:</h4>
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, index) => (
                        <li key={index} className={styles.featureItem}>
                          <span className={styles.checkIcon}><FaCheck /></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.serviceAction}>
                    <Button href={`/contact?service=${service.id}`} variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <Container>
          <h2 className={styles.sectionTitle}>My SEO Process</h2>
          <p className={styles.sectionDescription}>
            I follow a structured approach to ensure consistent results and maximize your ROI. 
            Here's how we'll work together to improve your search visibility.
          </p>

          <div className={styles.processSteps}>
            {processSteps.map((step) => (
              <div key={step.number} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Pricing Plans</h2>
          <p className={styles.sectionDescription}>
            Transparent pricing for sustainable SEO results. Choose the plan that best fits your business needs and goals.
          </p>

          <div className={styles.pricingGrid}>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`${styles.pricingCard} ${plan.featured ? styles.featured : ''}`}>
                {plan.featured && <div className={styles.pricingBadge}>Most Popular</div>}
                <div className={styles.pricingHeader}>
                  <h3 className={styles.pricingTitle}>{plan.title}</h3>
                  <div className={styles.pricingPrice}>
                    {plan.price === 'Custom' ? (
                      <span className={styles.priceCustom}>{plan.price}</span>
                    ) : (
                      <span className={styles.price}>{plan.price}</span>
                    )}
                    <span className={styles.period}>{plan.period}</span>
                  </div>
                </div>

                <ul className={styles.pricingFeatures}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className={styles.pricingAction}>
                  <Button 
                    href={`/contact?plan=${plan.title.toLowerCase()}`} 
                    variant={plan.featured ? 'primary' : 'outline'} 
                    size="large"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.pricingDisclaimer}>
            All plans require a minimum 3-month commitment for optimal results. Prices do not include add-on services or custom projects.
          </p>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Ready to Boost Your Search Rankings?</h2>
          <p className={styles.ctaDescription}>
            Let's discuss how my SEO services can help your business grow through improved organic visibility and targeted traffic.
          </p>
          <div className={styles.ctaButtons}>
            <Button href="/contact" variant="secondary" size="large">
              Schedule a Consultation
            </Button>
            <Button href="/portfolio" variant="outline" size="large">
              View My Portfolio
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage; 
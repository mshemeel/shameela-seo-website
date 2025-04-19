'use client';

import React from 'react';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  path: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, breadcrumbs }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-blue-500 py-16 md:py-24 mt-16">
      <div className="container mx-auto px-4">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6">
            <ol className="flex flex-wrap items-center text-sm text-white/70">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.path}>
                  {index > 0 && <span className="mx-2">/</span>}
                  <li>
                    {index === breadcrumbs.length - 1 ? (
                      <span className="font-medium text-white">{item.label}</span>
                    ) : (
                      <Link 
                        href={item.path}
                        className="hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        
        {subtitle && (
          <p className="text-xl text-white/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader; 
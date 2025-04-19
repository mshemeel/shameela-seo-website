/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['randomuser.me'],
    dangerouslyAllowSVG: true,
  },
  poweredByHeader: false,
};

export default nextConfig;

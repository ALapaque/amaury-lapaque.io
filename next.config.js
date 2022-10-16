const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io']
  }
};

module.exports = withPWA(nextConfig);

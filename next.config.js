const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.sanity.io']
  }
};

module.exports = withPWA(nextConfig);

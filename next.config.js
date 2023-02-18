const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    domains: ['cdn.sanity.io']
  }
};

module.exports = withPWA(nextConfig);

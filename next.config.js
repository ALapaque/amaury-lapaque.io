const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: { appDir: false },
  images: {
    domains: ['cdn.sanity.io']
  }
};

module.exports = nextConfig;

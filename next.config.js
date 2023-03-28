/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "project50017.s3.us-east-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig

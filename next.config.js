/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  output: 'export',
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig; 
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/olme-freelancer' : '',
  assetPrefix: isProd ? '/olme-freelancer/' : '',
  images: {
    unoptimized: true, // GitHub Pages no soporta optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;

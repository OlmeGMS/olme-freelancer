/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/nombre-de-tu-repositorio' : '',
  assetPrefix: isProd ? '/nombre-de-tu-repositorio/' : '',
  images: {
    unoptimized: true, // GitHub Pages no soporta optimización de imágenes de Next.js
  },
};

module.exports = nextConfig;

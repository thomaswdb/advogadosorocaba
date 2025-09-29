// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['advogadosorocaba.vercel.app'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Optimize package imports for smaller bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improve performance with compression
  compress: true,
  // Generate source maps for production debugging
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
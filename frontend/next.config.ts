import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',        // Enables static export (replaces `next export`)
  images: {
    unoptimized: true,     // Netlify & static hosts don’t support Next/Image optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    // No unrecognized flags here to avoid deploy errors
  },
};

export default nextConfig;

import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // your image domain
        port: '', // optional
        pathname: '/**', // match all paths
      },
      {
        protocol: 'https',
        hostname: 'api.qrserver.com', // if using QR codes from API
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig

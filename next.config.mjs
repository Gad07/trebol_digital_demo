/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['10.100.1.2', 'localhost:3000', 'localhost:3001'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;

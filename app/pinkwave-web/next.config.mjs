/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'static.socialdev.club',
        protocol: 'https',
      },
      {
        hostname: 'static.socialdev.club',
        protocol: 'http',
      },
    ],
  },
  transpilePackages: ['next/server', 'next/server.js'],
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // ignoreBuildErrors: true,
  },
  // ...other config settings
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static export
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
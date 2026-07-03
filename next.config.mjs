/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Allow accessing dev server via LAN IP
  allowedDevOrigins: ['192.168.1.11', 'localhost'],
};

export default nextConfig;

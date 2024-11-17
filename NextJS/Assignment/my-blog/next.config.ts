import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  sanity: {
    projectId: 'nj8tbh7j',
    dataset: 'production',
    apiVersion: '2024-11-10',
    useCdn: true,
    url: 'https://volks-blog.vercel.app/studio', // Update this URL
  },
  rewrites: async () => {
    return [
      {
        source: '/studio/:path*',
        destination: '/studio/tool.html',
      },
    ]
  },
};
module.exports = nextConfig
export default nextConfig

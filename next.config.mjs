/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/blog-online-course-v1',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog-online-course-v1/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

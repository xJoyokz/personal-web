/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true, // Set to true for permanent redirect, false for temporary
      },
    ];
  },
};

module.exports = nextConfig;

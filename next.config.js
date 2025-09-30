/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  outputFileTracingRoot: __dirname,
  experimental: {
    adapterPath: require.resolve("@next-community/adapter-vercel"),
  },
};

module.exports = nextConfig;

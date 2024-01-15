/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["cdn.sanity.io"],
    deviceSizes: [320, 640, 768, 1024, 1600],
    loader: "custom",
  },
};

module.exports = nextConfig;

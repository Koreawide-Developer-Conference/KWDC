/** @type {import("next").NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? "standalone" : "export",
  reactStrictMode: true,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/2024",
        permanent: true,
      },
    ];
  },
  transpilePackages: ["three"],
};

module.exports = nextConfig;

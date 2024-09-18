/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/2023",
        destination: "https://hello-kwdc.github.io/",
        permanent: true,
      },
    ];
  },

  transpilePackages: ["three"],
};

module.exports = nextConfig;

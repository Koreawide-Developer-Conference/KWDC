const { i18n } = require("./next-i18next.config");

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: process.env.NODE_ENV !== "production" ? "standalone" : "export",
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
        source: "/",
        destination: "/2024",
        permanent: true,
      },
    ];
  },
  transpilePackages: ["three"],
  i18n,
};

module.exports = nextConfig;

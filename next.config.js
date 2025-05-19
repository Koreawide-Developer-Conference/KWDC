/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'develop.kwdc.dev'
      },
      {
        hostname: 'kwdc.dev'
      }
    ]
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
      {
        source: '/2025/sponsor',
        destination: 'https://forms.gle/gfbidUhcenWiLU1z6',
        permanent: true,
      },
      {
        source: '/2025/speaker',
        destination: 'https://forms.gle/zt2T8dqxXw3q25Zf9',
        permanent: true,
      }
    ];
  },
  transpilePackages: ["three"],
};

module.exports = nextConfig;

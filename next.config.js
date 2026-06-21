/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org" },
      { protocol: "https", hostname: "is.zobj.net" },
      { protocol: "https", hostname: "wallpapers.com" },
      { protocol: "https", hostname: "assets.nflxext.com" },
      { protocol: "https", hostname: "occ-0-90-6.1.nflxso.net" },
    ],
  },
};

module.exports = nextConfig;

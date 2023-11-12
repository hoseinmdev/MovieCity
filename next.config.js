/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.uptvs.com",
      "ntvb.tmsimg.com",
      "www.hindustantimes.com",
      "movies.universalpictures.com",
      "www.thestatesman.com",
      "images.thedirect.com",
      "www.megmovie.net",
      "filmr.ir",
      "lumiere-a.akamaihd.net",
      "4kwallpapers.com",
      "encrypted-tbn0.gstatic.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.uptvs.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig

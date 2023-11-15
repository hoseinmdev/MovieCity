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
      "images.squarespace-cdn.com",
      "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com",
      "i.redd.it",
      "www.slashfilm.com",
      "c4.wallpaperflare.com",
      "images3.alphacoders.com",
      "images.hdqwalls.com",
      "i.pinimg.com",
      "bloody-disgusting.com",
      "w0.peakpx.com",
      "wallpapercave.com",
      "wallpaperaccess.com",
      "www.rollingstone.com",
      "gizmodo.com.au",
      "www.pixground.com",
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

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'haveyourowntrip.ir'
      },{
        protocol: 'https',
        hostname:'assets3.lottiefiles.com'
      },{
        protocol: 'https',
        hostname: 'test-videos.co.uk'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ],
  },
}

module.exports = nextConfig

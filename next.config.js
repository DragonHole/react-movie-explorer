/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['i.natgeofe.com', 'm.media-amazon.com']
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'i.natgeofe.com',
    //   },
    // ],
  }
}

module.exports = nextConfig

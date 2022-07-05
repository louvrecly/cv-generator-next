/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'openseauserdata.com',
      'images.vexels.com',
      'media-exp1.licdn.com',
      'pigeoncity.com.hk'
    ]
  }
}

module.exports = nextConfig

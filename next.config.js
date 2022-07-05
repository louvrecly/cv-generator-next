/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'media-exp1.licdn.com',
      'scontent.xx.fbcdn.net',
      'pigeoncity.com.hk',
      'images.squarespace-cdn.com',
      'www.hk-matrix.com',
      'media.istockphoto.com',
      'pbs.twimg.com',
      'yt3.ggpht.com'
    ]
  }
}

module.exports = nextConfig

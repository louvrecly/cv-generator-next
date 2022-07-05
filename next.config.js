/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'openseauserdata.com',
      'images.vexels.com',
      'media-exp1.licdn.com',
      'scontent.xx.fbcdn.net',
      'pigeoncity.com.hk',
      'sas.sph.hku.hk',
      'images.squarespace-cdn.com',
      'www.hk-matrix.com',
      'pbs.twimg.com'
    ]
  }
}

module.exports = nextConfig

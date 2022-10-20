/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'edx-cdn.org',
      'ih1.redbubble.net',
      'images.ctfassets.net',
      'upload.wikimedia.org',
      'media-exp1.licdn.com',
      'scontent.xx.fbcdn.net',
      'cdn.qwiklabs.com',
      'images.squarespace-cdn.com',
      'pbs.twimg.com',
      'yt3.ggpht.com',
      'media.istockphoto.com',
      'www.hk-matrix.com',
      'encrypted-tbn0.gstatic.com',
      'www.vectorkhazana.com',
      'pigeoncity.com.hk'
    ]
  }
}

module.exports = nextConfig

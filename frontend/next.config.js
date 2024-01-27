module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/profiles/:path*',
          destination: 'http://179.169.0.253:8000/api/profiles/:path*',
        },
      ]
    },
};
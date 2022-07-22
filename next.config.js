/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: '/api/:slug*',
          destination: 'http://localhost:5000/api/v1/:slug*',
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: '/api/:slug*',
          destination: 'http://localhost:5000/api/v1/:slug*',
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        {
          source: '/api/:slug*',
          destination: 'http://localhost:5000/api/v1/:slug*',
        },
      ],
    }
  },
}

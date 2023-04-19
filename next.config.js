/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactRoot: true,
    runtime: 'nodejs',
    serverComponents: true,
    concurrentFeatures: true,
  },
}

module.exports = nextConfig

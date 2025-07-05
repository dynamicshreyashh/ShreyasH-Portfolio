/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable TypeScript extension imports
  experimental: {
    allowImportTsExtensions: true
  },
  
  
  typescript: {
    ignoreBuildErrors: false,
    tsconfigPath: './tsconfig.app.json'
  }
}

module.exports = nextConfig
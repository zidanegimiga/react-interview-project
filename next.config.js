/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}

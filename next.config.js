/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  env: {
    rapidApiKey: process.env.NEXT_PUBLIC_RAPID_API_KEY,
  },
};

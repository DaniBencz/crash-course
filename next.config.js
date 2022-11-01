/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // i18n breaks "next export": https://github.com/vercel/next.js/issues/18318
    locales: ['en'],
    defaultLocale: 'en',
  },
  typescript: { tsconfigPath: "./tsconfig.json" }
};

module.exports = nextConfig;

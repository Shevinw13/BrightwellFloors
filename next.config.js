/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    // Consolidated pages (conversion research: fewer, decision-driving pages).
    // Styles merged into the Wood Types page; Services merged into Home/About.
    // Permanent (308) redirects preserve SEO and keep old links working.
    return [
      { source: "/styles", destination: "/flooring-types", permanent: true },
      { source: "/services", destination: "/about", permanent: true },
    ];
  },
};

module.exports = nextConfig;

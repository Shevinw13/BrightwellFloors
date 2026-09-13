/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Allow Unsplash-hosted photography. These are placeholder stock images;
    // replace with real Brightwell project photos before launch by swapping
    // the URLs in lib/data/images.ts (and you can drop this remotePattern once
    // images are served from /public).
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
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

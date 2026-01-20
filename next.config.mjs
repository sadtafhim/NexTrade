/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Static Export for Netlify Drag & Drop
  output: "export",

  images: {
    // 2. Required: Next.js Image Optimization doesn't work with 'export'
    // unless you use a third-party loader or disable optimization.
    unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

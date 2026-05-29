import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/linktree-alternative" : "";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // GitHub Pages subpath — only applied in production builds
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Headers only apply to server deployments (Vercel, etc.)
  // For static export, these are ignored
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-XSS-Protection", value: "1; mode=block" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=()",
        },
      ],
    },
  ],
};

export default nextConfig;

import type { NextConfig } from "next";

// Use basePath only when explicitly deploying to GitHub Pages
const isGitHubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGitHubPages ? "/linktree-alternative" : "";

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",

  images: {
    unoptimized: true,
  },

  // Security headers (active on Vercel, ignored on static export)
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

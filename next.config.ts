import type { NextConfig } from "next";

// On Vercel, fall back to the production domain so canonical URLs, the sitemap
// and OG tags are correct without any manual configuration.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const appUrl =
  process.env.NEXT_PUBLIC_APP_URL ||
  (vercelUrl ? `https://${vercelUrl}` : undefined);

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  ...(appUrl && { env: { NEXT_PUBLIC_APP_URL: appUrl } }),
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;

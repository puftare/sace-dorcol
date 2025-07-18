import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);

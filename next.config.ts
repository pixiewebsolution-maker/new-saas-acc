import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: !process.env.CI,
  telemetry: false, // Disables telemetry warnings
  
  // Hides source maps from generated client bundles
  hideSourceMaps: true,
  widenClientFileUpload: true,

  // Sentry 8.x webpack options
  reactComponentAnnotation: {
    enabled: true,
  },
  tunnelRoute: "/monitoring",
});

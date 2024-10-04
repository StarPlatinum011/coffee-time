/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "utfs.io" }],
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
    ];
  },
  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true, 
};

// import { withSentryConfig } from "@sentry/nextjs";


// const sentryWebpackPluginOptions = {
//   silent: true, // Suppresses Sentry's verbose build output
//   org: 'icp-go',  // Replace with your Sentry organization slug
//   project: 'coffee-time',  // Replace with your Sentry project slug
//   authToken: process.env.SENTRY_AUTH_TOKEN, // Required for uploading source maps
// };


// // Make sure adding Sentry options is the last code to run before exporting
//  export default withSentryConfig(coreConfig, {
//   org: "icp-go",
//   project: "coffee-time",

//   // An auth token is required for uploading source maps.
//   // authToken: process.env.SENTRY_AUTH_TOKEN,

//   silent: false, // Can be used to suppress logs

//   widenClientFileUpload: true,
//   tunnelRoute: "/monitoring",
//   hideSourceMaps: true,
//   disableLogger: true,
// });



// export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);

export default nextConfig;


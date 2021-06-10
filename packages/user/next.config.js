const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["shared"]);
const withImages = require("next-images");

const { withSentryConfig } = require("@sentry/nextjs");

const SentryWebpackPluginOptions = {};

module.exports = withPlugins(
  [
    withTM(),
    withImages,
    (nextConfig) => withSentryConfig(nextConfig, SentryWebpackPluginOptions),
  ],
  {
    webpack: (config) => {
      // custom webpack config
      return config;
    },
    distDir: "../../out",
    images: {},
  }
);

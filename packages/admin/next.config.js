const withTM = require("next-transpile-modules")(["shared"]);
const withImages = require("next-images");
const nextSourceMaps = require("@zeit/next-source-maps");
const withLinaria = require("next-linaria");
const withAntdLess = require("next-plugin-antd-less");

module.exports = withImages(
  nextSourceMaps(
    withTM(
      withLinaria(
        withAntdLess({
          webpack: (config, { isServer }) => {
            if (!isServer) {
              config.resolve.alias["@sentry/node"] = "@sentry/browser";
            }
            // work around to tell linaria to compile shared package
            config.module.rules.push({
              test: /\.([jt]sx?|mjs)$/,
              use: [
                {
                  loader: "linaria/loader",
                  options: {
                    extension: ".linaria.module.css",
                    evaluate: true,
                    ignore: /node_modules\/(?!@project\/shared)/,
                  },
                },
              ],
            });
            return config;
          },
        })
      )
    )
  )
);

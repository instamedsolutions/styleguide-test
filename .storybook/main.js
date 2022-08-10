const path = require('path');

module.exports = {
  stories: ["../ui/**/*.stories.@(mdx|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: async config => {
    config.resolve.alias = {
      "@ui": path.resolve(__dirname, "..", "ui")
    };
    return config;
  },
}

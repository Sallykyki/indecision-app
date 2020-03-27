module.exports = {
  stories: ["../src/components/**/*.stories.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource"
  ],

  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: {
        loader: require.resolve("ts-loader")
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  }
};

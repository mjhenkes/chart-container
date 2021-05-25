const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;

const terraApplicationConfig = () => ({
  output: {
    publicPath: 'auto',
  },
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'chart',
      filename: 'remoteEntry.js',
      exposes: {
        './ActiveOrders': './src/demo-application/pages/ActiveOrders',
        './ChartReview': './src/demo-application/pages/ChartReview',
        './Handoff': './src/demo-application/pages/Handoff',
        './InactiveOrders': './src/demo-application/pages/InactiveOrders',
        './InProgressNotes': './src/demo-application/pages/InProgressNotes',
        './NoteTemplates': './src/demo-application/pages/NoteTemplates',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
        '@cerner/terra-application': {
          singleton: true,
          version: '2.0',
          requiredVersion: '^2',
        },
        '@cerner/terra-application/': {
          singleton: true,
          version: '2.0',
          requiredVersion: '^2',
        },
        'react-intl': {
          singleton: true,
          requiredVersion: '^5.0.0',
        },
      },
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

module.exports = mergedConfig;

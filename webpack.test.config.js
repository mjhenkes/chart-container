const defaultWebpackConfig = require('@cerner/webpack-config-terra');
const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const terraApplicationConfig = (env = {}) => ({
  entry: {
    index: './test-harness/index.jsx',
  },
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
        './ActiveOrders': './src/pages/ActiveOrders',
        './ChartReview': './src/pages/ChartReview',
        './Handoff': './src/pages/Handoff',
        './InactiveOrders': './src/pages/InactiveOrders',
        './InProgressNotes': './src/pages/InProgressNotes',
        './NoteTemplates': './src/pages/NoteTemplates',
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
    new HtmlWebpackPlugin({
      lang: env.defaultLocale || 'en',
      filename: 'index.html',
      template: './test-harness/index.html',
      rootElementId: 'root',
    }),
    new DefinePlugin({
      TERRA_APPLICATION_LOCALE: JSON.stringify(env.defaultLocale || 'en'),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'test-harness/AppConfig.json', to: 'config/AppConfig.json' },
      ],
    }),
  ],
});

const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), terraApplicationConfig(env, argv))
);

module.exports = mergedConfig;

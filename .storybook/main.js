const path = require('path');
const custom = require('../webpack.common.js');

module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    'storybook-addon-paddings',
    '@storybook/addon-contexts/register',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      module: { ...config.module, rules: custom.module.rules },
    };
  },
};

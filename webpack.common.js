const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    main: './src/index.jsx',
    sprite: glob.sync('./src/assets/images/svg/**/*.svg'),
  },
  output: {
    filename: `assets/js/[name].[hash].js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-modules-flow-types-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: isDevelopment ? '[hash:base64:5]' : '[local]',
              },
              sourceMap: isDevelopment,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              config: { path: `./postcss.config.js` },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/scss/utils/_variables.scss',
                './src/assets/scss/utils/_media-queries.scss',
              ],
            },
          },
        ],
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-modules-flow-types-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDevelopment,
              config: { path: `./postcss.config.js` },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        loader: 'file-loader',
        exclude: path.resolve(__dirname, 'src/assets/images/svg'),
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        include: path.resolve(__dirname, 'src/assets/fonts'),
        options: {
          name: '[name].[ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, 'src/assets/images/svg/icons'),
        options: {
          esModule: false,
          extract: true,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `assets/css/[name].[hash].css`,
    }),
    new CopyPlugin({
      patterns: [
        { from: `src/assets/images`, to: `assets/images` },
        { from: `src/assets/fonts`, to: `assets/fonts` },
      ],
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production',
      test: /\.(jpe?g|png|gif|svg)$/i,
      optipng: {
        optimizationLevel: 7,
      },
      jpegtran: { progressive: true },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pug/pages/index.pug',
      // Specify chunks to exclude sprite entry point
      chunks: ['main', 'vendors'],
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
    new SpriteLoaderPlugin({ plainSprite: true }),
    new StylelintPlugin(),
    // Remove sprite.js file
    {
      apply: (compiler) => {
        compiler.plugin('emit', (compilation, callback) => {
          const { assets } = compilation;
          const chunkToRemove = Object.keys(assets)
            .filter((chunk) => chunk.match(/sprite.*\.js$/))
            .join('');
          delete compilation.assets[chunkToRemove];
          callback();
        });
      },
    },
    // Remove sprite.svg file
    {
      apply: (compiler) => {
        compiler.plugin('emit', (compilation, callback) => {
          const { assets } = compilation;
          const chunkToRemove = Object.keys(assets)
            .filter((chunk) => chunk.match(/sprite.*\.svg$/))
            .join('');
          delete compilation.assets[chunkToRemove];
          callback();
        });
      },
    },
  ],
};

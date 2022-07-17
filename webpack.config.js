const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWepbackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const fs = require('fs')

module.exports = (env, argv) => {

  const isDevServer = env.WEBPACK_SERVE
  const mode = argv.mode || (isDevServer ? 'development' : 'production')
  const isDev = mode !== 'production'

  const result = {
    mode,
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: isDevServer ? '/' : 'auto',
      filename: '[name].[hash].js'
    },
    devServer: {
      port: 4300,
      historyApiFallback: true
    },
    plugins: [
      new HTMLWepbackPlugin({ 
        template: './public/index.html',
        minify: isDev
          ? false
          : {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true,
              collapseBooleanAttributes: true,
              removeScriptTypeAttributes: true,
            },
      }),
      new CleanWebpackPlugin(),
      // new CopyWebpackPlugin({
        // patterns: [{ 
        //   from: path.resolve(__dirname, 'public/assets'), 
        //   to: path.resolve(__dirname, 'build/assets')
        // }]
      // }),
      new Dotenv({ systemvars: true })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(css|less)$/,
          use: [
            'style-loader', 
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: "local",
                  auto: true,
                  exportGlobals: true,
                  localIdentName: "[local]-[hash:base64:5]",
                  exportOnlyLocals: false,
                },
              }
            },
            {
              loader: 'less-loader',
              options: {
                additionalData: (content, loaderContext) => {
                    const variables = fs.readFileSync('./src/styles/antd-vars.less');
    
                    return variables + content;
                },
                lessOptions: {
                  javascriptEnabled: true,
                  includePaths: [path.resolve(__dirname, 'src/styles')]
                }
              }
            } 
          ],
        },
        {
          test: /\.(jpg|jpeg|png|svg|gif|mp4)$/,
          use: [{
            loader: 'file-loader'
          }]
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        },
      ]
    }
  }

  return result
}
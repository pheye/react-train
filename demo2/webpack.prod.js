const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(env, argv) {
  const isEnvDevelopment = argv.mode === "development" || !argv.mode;
  const isEnvProduction = argv.mode === "production";

  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    devtool: isEnvProduction
      ? "source-map"
      : isEnvDevelopment && "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    devServer: {
      contentBase: './dist',
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
        },
        {
          test: /\.css$/,
          exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader"]
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.scss$/,
          exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader?modules", "sass-loader"]
        },
        {
          test: /\.less$/,
          include: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"]
        },
        {
          test: /\.less$/,
          exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/],
          use: [MiniCssExtractPlugin.loader, "css-loader?modules", "postcss-loader", "less-loader"]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: "pre",
          use: "eslint-loader"
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"]
        },
        {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin(Object.assign({
        title: 'Github热门项目',
        favicon: 'public/favicon.png',
        template: "public/index.html"
      }, 
		  false	
            ? {                              
                minify: {                    
                  removeComments: true,      
                  collapseWhitespace: true,  
                  removeRedundantAttributes: true,                                        
                  useShortDoctype: true,     
                  removeEmptyAttributes: true,                                            
                  removeStyleLinkTypeAttributes: true,                                    
                  keepClosingSlash: true,    
                  minifyJS: true,            
                  minifyCSS: true,           
                  minifyURLs: true,          
                },                           
              }                              
            : undefined                   
      )),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash:8].css',
        chunkFilename: '[name].[contenthash:8].chunk.css',
      }), 
    ],
    resolve: {
      alias: {
        '@': path.resolve('src')
      }
    }
  };
};

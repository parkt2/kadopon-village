/* eslint-disable import/no-extraneous-dependencies */
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Phaser webpack config
const phaserModule = path.join(__dirname, "/node_modules/phaser/");
const phaser = path.join(phaserModule, "src/phaser.js");

const definePlugin = new webpack.DefinePlugin({
	__DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "false")),
	// I did this to make webpack work, but I'm not really sure it should always be true
	WEBGL_RENDERER: true,
	CANVAS_RENDERER: true,
});

module.exports = {
	entry: {
		app: [
			"babel-polyfill",
			path.resolve(__dirname, "src/main.js"),
		],
		// vendor: ['pixi']

	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "./",
		filename: "js/bundle.js",
	},
	plugins: [
		definePlugin,
		new CleanWebpackPlugin(["build"]),
		new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		/* new webpack.optimize.UglifyJsPlugin({
      drop_console: true,
      minimize: true,
      output: {
        comments: false
      }
    }), */
		new webpack.optimize.CommonsChunkPlugin({ name: "vendor" /* chunkName= */, filename: "js/vendor.bundle.js" /* filename= */ }),
		new HtmlWebpackPlugin({
			filename: "index.html", // path.resolve(__dirname, 'build', 'index.html'),
			template: "./src/index.html",
			chunks: ["vendor", "app"],
			chunksSortMode: "manual",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				html5: true,
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true,
				removeComments: true,
				removeEmptyAttributes: true,
			},
			hash: true,
		}),
		// new CopyWebpackPlugin([
		// 	{ from: "assets", to: "assets" },
		// ]),
	],
	module: {
		rules: [
			{ test: /\.js$/, use: ["babel-loader"], include: path.join(__dirname, "src") },
			{ test: /phaser-split\.js$/, use: "raw-loader" },
			{ test: [/\.vert$/, /\.frag$/], use: "raw-loader" },
		],
	},
	node: {
		fs: "empty",
		net: "empty",
		tls: "empty",
	},
	resolve: {
		alias: {
			phaser,

		},
	},
};

const webpack = require('webpack');
const path = require('path');

const SRC = path.resolve(__dirname, 'src/main/js');
const DEST = path.resolve(__dirname, 'src/main/resources/static/built');

module.exports = {
	context : SRC,
	entry : {
		index : [ './index.js' ],
	},
	resolve : {
		modules : [ "node_modules", "hello", ],
	},
	devtool : 'sourcemaps',
	cache : true,
	output : {
		path : DEST,
		filename : "[name].bundle.js",
		chunkFilename : "[id].chunk.js"
	},
	module : {
		rules : [ {
			test : /\.js?$/,
			exclude : /(node_modules)/,
			use : [ {
				loader : 'babel-loader',
				options : {
					presets : [ [ 'es2015' ], [ 'react' ], [ 'stage-2' ] ]
				}
			} ],
		}, ]
	},
	plugins : [ new webpack.HotModuleReplacementPlugin(), ],
	devServer : {
		contentBase : DEST,
		port : 9090,
		proxy : {
			'/' : {
				target : 'http://localhost:8080',
				secure : false
			}
		},
		hot : true,
		inline : true,
		publicPath : '/built/',
	}
};
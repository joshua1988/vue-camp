var path = require('path');

module.exports = {
		mode: 'none',
		entry: './js/app.js',
		output: {
				path: path.resolve(__dirname, 'build'),
				filename: 'main.bundle.js'
		},
		module: {
				rules: [
						{
								test: /\.js$/,
								loader: 'babel-loader',
								query: {
										presets: ['es2015']
								}
						}
				]
		},
		stats: {
				colors: true
		},
		devtool: 'source-map'
};

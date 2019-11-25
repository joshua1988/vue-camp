var env = require('dot-env');

module.exports = {
	entry: '',
	output: '',
	module: '',
	plugins: [
		new DefinePlugin({
			VUE_APP_DEV_URL: env.VUE_APP_DEV_URL,
		}),
	],
};

const path = require('path');
module.exports = {
	//input
	//just give webpack the entry point
	entry: './src',

	//output
	//specify path and filename separately
	output: {
		path: path.join(__dirname + 'build'),
		filename: 'bundle.js'
	},

	//transformations
	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: [
					['transform-react-jsx', { pragma: 'h'}]
					]
				}
			}
		]
	},

	//sourcemaps
	devtool: 'source-map',

	//server configuration
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		historyApiFallback: true
	}
}
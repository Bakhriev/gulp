const jsPath = "./src/assets/js/"

const config = {
	mode: "production",
	entry: {
		main: jsPath + "main.js",
	},
	output: {
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
}

module.exports = config

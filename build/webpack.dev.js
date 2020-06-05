/*
 * @Author: your name
 * @Date: 2020-06-04 15:30:24
 * @LastEditTime: 2020-06-04 15:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javaf:\vue3-demo\webpack.dev.js
 */
const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.base.js')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8090,
		hot: true,
	},
	output: {
		filename: 'js/[name].[hash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	module: {},
	mode: 'development',
})

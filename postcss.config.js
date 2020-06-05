/*
 * @Author: your name
 * @Date: 2020-06-04 15:28:08
 * @LastEditTime: 2020-06-04 15:28:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \javaf:\vue3-demo\postcss.config.js
 */
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default'
        })
    ]
}
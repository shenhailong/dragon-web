/*
 * @page: 页面-
 * @Author: Dragon
 * @Date: 2021-10-12 15:40:23
 * @LastEditors: Dragon
 * @LastEditTime: 2021-10-13 14:28:22
 */

module.exports = {
  // ...其他配置
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  }
}

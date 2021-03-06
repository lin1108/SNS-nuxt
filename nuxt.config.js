const webpack = require('webpack');
module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: '简书--皮卡林',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'jianshu by Linli'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    // 配置v-tooltip插件
    plugins:[
        {src:'~/plugins/myPlugins',ssr:false}
    ],
    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/animate.css',
        '~/assets/css/font-awesome.css',
        './assets/css/iconfont/iconfont.css',
        '~/assets/css/main.css',
        '~/assets/css/grid.css',  //栅格系统的布局
        '~/assets/css/index.css',
        '~/assets/css/tooltip.css' //v-tooltip插件样式
    ],
    /*
    ** Add axios globally
    */
    build: {
        vendor: ['axios', 'jquery'],
        plugins: [
            new webpack.ProvidePlugin(
                {
                    $: 'jquery',
                    jQuery: 'jquery',
                    'window.jQuery': 'jquery'
                }
            )
        ]
        /*
        ** Run ESLINT on save
        */
        /*extend (config, ctx) {
          if (ctx.isClient) {
            config.module.rules.push({
              enforce: 'pre',
              test: /\.(js|vue)$/,
              loader: 'eslint-loader',
              exclude: /(node_modules)/
            })
          }
        }*/
    }
}

const { defineConfig } = require('@vue/cli-service')
const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = defineConfig({
    transpileDependencies: true

})


module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"));
        config.module.rules.delete("svg"); //重点:删除默认配置中处理svg,
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/icons')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    },
    devServer: {
        port: 3368, // 端口
        host: 'localhost',
        open: true, //浏览器自动访问
        // contentBase: 'src', //指定托管的根目录
        hot: true, //启动热更新 第一步webpack只用这一步
        // proxy: 'http://192.168.1.104:8080' //代理
        proxy: {
            // '/admin/v1': { //代理
            //     target: 'http://192.168.1.104:8080/', //API服务器的地址
            //     // ws: true,  //代理websockets 
            //     changeOrigin: true, //设置true 代表跨域访问
            //     // secure: false,  // 如果是https接口，需要配置这个参数
            //     // pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
            //     // '^/api': ''
            // }
        }

    }
}
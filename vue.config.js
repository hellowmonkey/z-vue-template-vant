module.exports = {
    chainWebpack: config => {
        // 移除 prefetch 插件
        config.plugins.delete('prefetch')
    },
    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    red: '#03a9f4'
                },
                javascriptEnabled: true
            }
        }
    }
}

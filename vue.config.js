module.exports = {
    css: {
      loaderOptions: {
        scss: {
            prependData: `
            @import "@/style/settings/var.scss";
            @import"@/style/tools/_sassMagic.scss";`
        },
        postcss: {
          plugins: [
            require('postcss-plugin-px2rem')({
              rootValue: 37.5,
              exclude: /(node_module)/,
              minPixelValue: 3,
              // selectorBlackList:['van']
            })
          ]
        },
      }
    }
  }
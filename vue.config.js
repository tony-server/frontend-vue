// vue.config.js
module.exports = {
  configureWebpack: {
    performance: {
      maxAssetSize: 3300000, // 整数类型（以字节为单位）
      maxEntrypointSize: 5500000 // 整数类型（以字节为单位）
    }

  }
}

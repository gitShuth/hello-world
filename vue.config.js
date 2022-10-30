module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8001,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://rap2api.taobao.org/app/mock/304665',
        ws: true,
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^api': '/api'
        },
      },
    },
  },
};

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8001,
    hot: true,
    proxy: {
      '/api': {
        target: 'http://192.168.233.68',
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

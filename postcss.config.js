module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏幕宽度,默认iPhoneX
      // 设计图（二倍图）750，调成一倍：375
      viewportWidth: 375
    }
  }
}

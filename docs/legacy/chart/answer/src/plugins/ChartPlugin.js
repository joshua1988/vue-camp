import Chart from 'chart.js'

export default {
  install(Vue, options) {
    Vue.prototype.ChartJS = Chart;
  }
}
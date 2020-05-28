import Chart from 'chart.js';

export default {
  install(Vue) {
    // console.log('설치');
    Vue.prototype.$_Chart = Chart;
  },
};

// var vm = new Vue();
// vm.$_Chart

import Chart from 'chart.js';

export default {
  install(Vue) {
    // console.log('차트 플러그인 설치');
    Vue.prototype.$_Chart = Chart;
  },
};

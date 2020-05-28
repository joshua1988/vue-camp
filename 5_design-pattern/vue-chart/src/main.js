import Vue from 'vue'
import App from './App.vue'
// 플러그인 목록
// import router from './router/index';
import ChartPlugin from './plugins/ChartPlugin'
// import DatePickerPlugin from './plugins/DatePickerPlugin'

Vue.use(ChartPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

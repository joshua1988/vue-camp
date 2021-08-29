import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.use(ChartPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})

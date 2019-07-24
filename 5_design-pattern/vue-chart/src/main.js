import Vue from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin.js';

Vue.use(ChartPlugin);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

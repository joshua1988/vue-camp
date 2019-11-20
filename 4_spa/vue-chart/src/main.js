import Vue from 'vue'
import App from './App.vue'
import ChartPlugin from './plugins/ChartPlugin';

// Vue.use(Vuex);
// Vue.use(VueRouter);
Vue.use(ChartPlugin);
// Vue.use(ValidationPlugin);
// Vue.use(DatePickerPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

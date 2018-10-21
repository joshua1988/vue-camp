import Vue from 'vue';
import App from './App.vue';
import DatePickerPlugin from './plugins/DatePickerPlugin';

Vue.use(DatePickerPlugin);

new Vue({
  el: '#app',
  render: h => h(App)
})

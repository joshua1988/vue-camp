import Vue from 'vue';
import App from './App.vue';
import * as filters from './utils/filters.js';

Object.keys(filters).forEach(function(key) {
  Vue.filter(key, filters[key]);
});

new Vue({
  el: '#app',
  render: h => h(App),
});

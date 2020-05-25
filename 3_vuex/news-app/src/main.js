import Vue from 'vue';
import App from './App.vue';
// import App2 from './App2.vue';
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


// import axios from 'axios'

// axios.config.baseUrl = 'http://...';
// Vue.prototype.$http = axios;

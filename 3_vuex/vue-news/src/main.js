import Vue from 'vue';
import App from './App.vue';
import router from './routes/index.js';
import store from './store/index.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

// 1
// import { 들고올 변수, 함수 } from '파일 경로'
// import { router } from './routes'
// 2
// import 들고와서 담을 변수 from '파일 경로'
// import router from './routes'

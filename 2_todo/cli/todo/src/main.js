import Vue from 'vue'
import App from './App.vue'
import store from './store/index.js';

// // index.js
// export const store = {};
// // main.js
// import { store } from './index.js';

// // index.js
// export default {};
// // main.js
// import store from './index.js';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    num: 10,
  },
  getters: {
    doubleNum(state) {
      // return this.num * 2;
      return state.num * 2;
    },
  },
  mutations: {
    addNumber(state) {
      // this.num = this.num + 1;
      state.num = state.num + 1;
    },
  },
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');

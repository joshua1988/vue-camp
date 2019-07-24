import Vue from 'vue';
import Vuex from 'vuex';
import account from './account/index.js';
import state from './state.js';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    account,
  },
  state: state,
  mutations: {
    setUserId(state, id) {
      // console.log(object);
      // debugger;
      state.userId = id;
    },
  },
});

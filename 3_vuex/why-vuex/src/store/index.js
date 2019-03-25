import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // data: {

  // },
  state: {
    username: ''
  },
  // methods: {

  // }
  mutations: {
    saveUsername(state, value) {
      state.username = value;
    }
  }
})
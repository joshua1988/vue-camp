import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  // strict: true,
  strict: process.env.NODE_ENV === 'development' ? true : false,
  state: {
    token: ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    }
  }
});

// this.$store.commit('setToken', '새로운 토큰 값');

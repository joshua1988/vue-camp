import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    token: '',
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
    userToken(state) {
      return state.token;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    async LOGIN({ commit }, data) {
      const response = await loginUser(data);
      commit('SET_USER', response.data.user);
      commit('SET_TOKEN', response.data.token);
      return response;
    }
  },
});
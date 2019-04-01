import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNews as fetchNewsItems } from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      return fetchNewsItems()
        .then(response => 
          context.commit('setNews', response.data))
        .catch(error => console.log(error));
    }
  }
});
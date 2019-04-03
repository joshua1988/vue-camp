import Vue from 'vue';
import Vuex from 'vuex';
import { 
  fetchNews as fetchNewsItems,
  fetchAsk
} from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    news: [],
    ask: [],
  },
  getters: {
    getAsk(state) {
      return state.ask;
    },
  },
  mutations: {
    setNews(state, news) {
      state.news = news;
    },
    setAsk(state, ask) {
      state.ask = ask;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      return fetchNewsItems()
        .then(response => 
          context.commit('setNews', response.data))
        .catch(error => console.log(error));
    },
    FETCH_ASK({ commit }) {
      return fetchAsk()
        .then(({ data }) => {
          commit('setAsk', data);
        })
        .catch(error => console.log(error));
    }
  }
});
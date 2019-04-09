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
    async FETCH_NEWS(context) {
      const { data } = await fetchNewsItems();
      context.commit('setNews', data);
      return data;
      // return fetchNewsItems()
      //   .then(response => 
      //     context.commit('setNews', response.data))
      //   .catch(error => console.log(error));
    },
    async FETCH_ASK({ commit }) {
      const { data } = await fetchAsk();
      commit('setAsk', data);
      return data;

      // return fetchAsk()
      //   .then(({ data }) => {
      //     commit('setAsk', data);
      //   })
      //   .catch(error => console.log(error));
    }
  }
});
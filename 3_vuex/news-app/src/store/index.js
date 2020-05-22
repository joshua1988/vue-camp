import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNews } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: 'hi vuex',
    newsItems: [],
  },
  mutations: {
    changeMsg(state) {
      state.msg = state.msg + '!';
      // this.msg = this.msg + '!';
    },
    setNews(state, news) {
      state.newsItems = news;
    },
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNews()
        .then((response) => {
          // this.newsItems = response.data;
          context.commit('setNews', response.data);
        })
        .catch();
    },
  },
});

export const str = 'hello';

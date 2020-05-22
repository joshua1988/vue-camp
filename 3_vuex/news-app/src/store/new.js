import axios from 'axios';
import Vuex from 'vuex';

const url = 'https://api.hnpwa.com/v0/ask/1.json';

new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    fetchAsk() {
      axios.get(url).then(response => {
        return response.data;
      });
    }
  }
})
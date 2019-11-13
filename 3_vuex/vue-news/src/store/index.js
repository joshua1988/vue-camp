import Vue from "vue";
import Vuex from "vuex";
import { fetchJobs, fetchAsk } from "../api/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
    ask: []
  },
  mutations: {
    setJobs(state, jobs) {
      state.jobs = jobs;
    },
    setAsk(state, ask) {
      state.ask = ask;
    }
  },
  actions: {
    FETCH_JOBS(context) {
      return fetchJobs()
        .then(({ data }) => {
          context.commit("setJobs", data);
          // state.jobs = data;
        })
        .catch(error => console.log(error));
    },
    FETCH_ASK({ commit }) {
      fetchAsk()
        .then(({ data }) => commit("setAsk", data))
        .catch(error => console.log(error));
    }
  }
});

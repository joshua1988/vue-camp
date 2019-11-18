import Vue from 'vue';
import Vuex from 'vuex';
import { fetchJobs, fetchAsk } from '../api/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		jobs: [],
		ask: [],
	},
	mutations: {
		setJobs(state, jobs) {
			state.jobs = jobs;
		},
		setAsk(state, ask) {
			state.ask = ask;
		},
	},
	actions: {
		async FETCH_JOBS(context) {
			// fetchJobs()
			// 	.then(response => {
			// 		context.commit('setJobs', response.data);
			// 		// state.jobs = data;
			// 	})
			// 	.catch(error => console.log(error));

			const response = await fetchJobs();
			context.commit('setJobs', response.data);
			return response;
		},
		// TODO: fetchAsk에 async, await 적용해보세요.
		FETCH_ASK({ commit }) {
			fetchAsk()
				.then(({ data }) => commit('setAsk', data))
				.catch(error => console.log(error));
		},
	},
});

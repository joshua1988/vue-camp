import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: process.env.NODE_ENV === 'production' ? false : true,
	state: {
		username: '',
		token: '',
	},
	mutations: {
		setUsername(state, username) {
			state.username = username;
		},
		setToken(state, token) {
			state.token = token;
		},
	},
	actions: {
		// async LOGIN_USER({ commit }) {
		// 	await loginUser();
		// 	commit('setUsername');
		// 	commit('setToken');
		// },
	},
});

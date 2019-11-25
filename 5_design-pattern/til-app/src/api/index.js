import axios from 'axios';
import store from '../store/index';

// process.env.NODE_ENV === 'production'
// 	? process.env.VUE_APP_PROD_URL
// 	: process.env.VUE_APP_DEV_URL;

const instance = axios.create({
	// 개발용
	baseURL: process.env.VUE_APP_URL, // http://localhost:3000/
	// 배포용
	// baseURL: "http://localhost:9090/dev"
});

function registerUser(userData) {
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

function fetchPosts() {
	return instance.get('posts', {
		headers: {
			Authorization: store.state.token,
		},
	});
}

export { registerUser, loginUser, fetchPosts };

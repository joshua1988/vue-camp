import axios from 'axios';
// process.env.NODE_ENV === 'production'
// 	? process.env.VUE_APP_PROD_URL
// 	: process.env.VUE_APP_DEV_URL;
import { setInterceptor } from './interceptors';

function init() {
	return axios.create({
		// 개발용
		baseURL: process.env.VUE_APP_URL, // http://localhost:3000/posts
		// 배포용
		// baseURL: "http://localhost:9090/dev"
	});
}
const instance = init();

function initWithAuth() {
	const instance = axios.create({
		baseURL: `${process.env.VUE_APP_URL}posts`,
	});
	return setInterceptor(instance);
}
const posts = initWithAuth();

function registerUser(userData) {
	return instance.post('signup', userData);
}

function loginUser(userData) {
	return instance.post('login', userData);
}

export { registerUser, loginUser, posts };

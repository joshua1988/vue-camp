import axios from 'axios';

const instance = axios.create({
	// 개발용
	baseURL: process.env.VUE_APP_DEV_URL, // http://localhost:3000/
	headers: {
		Authorization: '$e6ase1',
	},
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
	return instance.get('posts');
}

export { registerUser, loginUser };

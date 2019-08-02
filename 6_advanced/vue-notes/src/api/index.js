import axios from 'axios';
import store from '../store/index.js';

function createInstance(options) {
	return axios.create({
		baseURL: 'http://localhost:3000',
		...options,
	});
}

// Axios 인스턴스
let auth = createInstance({
	timeout: 5000,
});
let posts = createInstance({
	// headers: {
	// 	Authorization:
	// 		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RAYWJjLmNvbSIsIl9pZCI6IjVkM2VlM2M5OWU2MzA0MTBlY2ZhYTU4NSIsImlhdCI6MTU2NDc0MzA2MCwiZXhwIjoxNTczMzgzMDYwfQ.2mxjdXfHHwTg37On9_JfD6xUjQmjfotSsCrKkCffXYc',
	// },
});

// Axios 인터셉터 - Request
posts.interceptors.request.use(
	function(config) {
		// Do something before request is sent
		config.headers.Authorization = store.state.token;
		return config;
	},
	function(error) {
		// Do something with request error
		return Promise.reject(error);
	},
);

// Axios 인터셉터 - Response
posts.interceptors.response.use(
	function(response) {
		// Do something with response data
		// console.log(response);
		return response;
	},
	function(error) {
		// Do something with response error
		return Promise.reject(error);
	},
);

export { auth, posts };
// let products = createInstance({

// })

// instance.post('/signup');
// axios.post('http://localhost:3000/signup');

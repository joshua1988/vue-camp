import { auth } from './index.js';

function signupUser(data) {
	return auth.post('/signup', data);
}

function loginUser(data) {
	return auth.post('/login', data);
}

export { signupUser, loginUser };

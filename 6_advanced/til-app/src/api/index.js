import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
});

// 회원 가입
// const userData = {
//   username: 'test@abc.com',
//   password: 12341234,
//   nickname: 'hi'
// }
function signupUser(userData) {
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { signupUser, loginUser };

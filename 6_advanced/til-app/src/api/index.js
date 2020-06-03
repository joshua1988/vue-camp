import axios from 'axios';
import store from '../store/index';

const instance = axios.create({
  baseURL: 'http://localhost:3000/'
  // headers: {
  //   Authorization: 'abc123'
  // }
});

const authInstance = axios.create({
  baseURL: 'http://localhost:3000/'
});

// Add a request interceptor
authInstance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log('서버로 요청 보내기 전', config);
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
authInstance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

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

function fetchPosts() {
  // return instance.get('posts');
  return authInstance.get('posts');
}

// function createPost() {
//   return instance.post('posts');
// }

export { signupUser, loginUser, fetchPosts };

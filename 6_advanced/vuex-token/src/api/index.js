import axios from 'axios';
import store from '../store/index.js';
import { getAuthFromCookie } from '../utils/cookies.js';

// basic config for axios
const APP_URL = 'http://localhost:3000/';

// instance & interceptor
function create(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  return instance;
}

function createWithAuth(url, options) {
  const instance = axios.create(Object.assign({ baseURL: url }, options));
  instance.interceptors.request.use(config => {
    config.headers.Authorization = store.getters['userToken'] || getAuthFromCookie();
    return config;
  }, error => {
    return Promise.reject(error.response);
  });
  instance.interceptors.response.use(config => {
    return config;
  }, error => {
    return Promise.reject(error.response);
  });
  return instance;
}

const auth = create(APP_URL);
const posts = createWithAuth(`${APP_URL}posts/`);

// users
function loginUser(data) {
  try {
    return auth.post('login', data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

function signupUser(data) {
  try {
    return auth.post('signup', data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

// posts
function createNewPost(data) {
  try {
    return posts.post('/', data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

function fetchPosts() {
  try {
    return posts.get('/');
  } catch (error) {
    console.log(error);
    return error;
  }
}

function fetchPostById(id) {
  try {
    return posts.get(id);
  } catch (error) {
    console.log(error);
    return error;
  }
}

function editPostById(id, data) {
  try {
    return posts.put(id, data);
  } catch (error) {
    console.log(error);
    return error;
  }
}

function deletePostById(id) {
  try {
    return posts.delete(id);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export {
  loginUser,
  signupUser,
  createNewPost,
  fetchPosts,
  fetchPostById,
  editPostById,
  deletePostById,
}
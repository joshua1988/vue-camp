// #1 - 라이브러리 로딩
import axios from 'axios';

// #2 - API 공통 옵션 설정
let config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// #4 - Instance & Interceptor 설정
// #3 - API 함수 정의
function fetchNews() {
  try {
    return axios.get(config.baseUrl + 'news/1.json');  
  } catch (error) {
    console.log(error);
    return;
  }
}

function fetchAsk() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchUser(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItem(itemId) {
  return axios.get(`${config.baseUrl}item/${itemId}.json`);
  // 'https://api.hnpwa.com/v0/item/13831370.json'
}

export {
  fetchNews,
  fetchAsk,
  fetchUser,
  fetchItem,
}
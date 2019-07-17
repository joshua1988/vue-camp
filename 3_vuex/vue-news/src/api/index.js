import axios from 'axios';

function createInstance() {
  return axios.create({
    baseURL: 'https://api.hnpwa.com/v0/',
    // timeout: 5000,
    // headers: {
    //   Authorization: '$df2932j'
    // }
  });
}
let instance = createInstance();

function fetchNews() {
  return instance.get('news/1.json');
}

function fetchAsk() {
  // TODO: 위 instance를 이용해서 구현해보세요..
  return instance.get('ask/1.json');
}

function fetchUser(name) {
  // 'https://api.hnpwa.com/v0/user/Luc.json'
  //  instance.get('user/' + name + '.json');
  return instance.get(`user/${name}.json`);
}

export { fetchNews, fetchAsk, fetchUser };

// API 공통 설정
// let config = {
//   baseUrl: 'https://api.hnpwa.com/v0/',
// };

// API 함수 구현
// function fetchNews() {
//   axios.get('https://api.hnpwa.com/v0/news/1.json');
//   axios.get(config.baseUrl + 'news/1.json');
//   return axios.get(`${config.baseUrl}news/1.json`);
// }

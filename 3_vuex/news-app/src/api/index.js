import axios from 'axios';

let config = {
  url: 'https://api.hnpwa.com/v0/'
}

function fetchNews() {
  return axios.get(config.url + 'news/1.json');
}

function fetchAsk() {
  return axios.get(config.url + 'ask/1.json');
}

export { fetchNews, fetchAsk }
import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.hnpwa.com/v0/',
	timeout: 5000,
});

function fetchListData(listName) {
	return instance.get(`${listName}/1.json`);
}

function fetchNews() {
	return instance.get('news/1.json');
	// const url = 'https://api.hnpwa.com/v0/news/1.json';
	// return axios.get(url);
}

function fetchAsk() {
	return instance.get('ask/1.json');
}

function fetchJobs() {
	return instance.get('jobs/1.json');
}

function fetchUser(userName) {
	'https://api.hnpwa.com/v0/user/davideast.json';
	// instance.get('user/' + userName + '.json');
	return instance.get(`user/${userName}.json`);
}

function fetchItem(id) {
	return instance.get(`item/${id}.json`);
}

export { fetchNews, fetchAsk, fetchJobs, fetchUser, fetchItem, fetchListData };

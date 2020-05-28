function fetchNews() {
  return axios.get('users/1');
}

fetchNews().then(response =>{
  fetchNewsDetail();
  fetchQuestions();
})

import axios from 'axios';
import Vue from 'vue';
import VueRouter from 'vue-router';

// const config = {
//   baseUrl: 'http://localhost:3000',
// };

function createInstance() {
  return axios.create({
    // TODO: Url이 아니라 URL로 바꿔주세요!
    baseURL: 'http://localhost:3000/posts',
    headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3QxMjM0IiwiX2lkIjoiNWNhZGQ5MTE4NWY4NTkzN2YzNmE3ZTM3IiwiaWF0IjoxNTU0OTAyMTc2LCJleHAiOjE1NjM1NDIxNzZ9.KS_s3Dqb3EF6k594ygIL2d0Q1kATcXrmRsSoh9FPb44',
    },
  });
}

const posts = createInstance();

function fetchPosts() {
  // return axios.get(`${config.baseUrl}/posts`);
  try {
    return posts.get();
  } catch (error) {
    console.log(error);
    return error;
  }
}

function createPost(post) {
  return axios.post(`${config.baseUrl}/posts`, post);
}

export {
  fetchPosts,
}
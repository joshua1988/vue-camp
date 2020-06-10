<template>
  <div>
    <h1>학습 노트</h1>
    <!-- TODO: 로그인 이후 메인 화면에서 학습 노트 목록을 표시 -->
    <ul>
      <li v-for="post in posts" :key="post._id">
        {{ post.title }}
      </li>
    </ul>
    <!-- TODO: 아래 버튼 누르면 생성 페이지로 가서 학습 노트를 생성할 수 있는 UI와 기능 구현 -->
    <button @click="createPost">생성</button>
  </div>
</template>

<script>
import { fetchPosts } from '../api/index';

export default {
  data() {
    return {
      posts: []
    };
  },
  async beforeMount() {
    const response = await fetchPosts();
    console.log(response);
    this.posts = response.data.posts;
  }
};
</script>

<style></style>

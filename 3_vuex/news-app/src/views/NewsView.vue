<template>
  <div>
    <!-- TODO: 아래 URL로 뉴스 목록을 받아와 제목을 리스트로 뿌려보세요 -->
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <p>{{ item.title }}</p>
        <router-link v-bind:to="'/user/' + item.user">
          {{ item.user }}
        </router-link>
<!-- TODO: 사용자 아이디를 클릭했을 때 사용자 상세 페이지로 이동 -->
[실습 절차]
1. 사용자 상세 페이지 라우터 정보 생성
2. 사용자 이름을 클릭했을 때 상세 페이지로 이동하게끔 구성
3. 사용자 상세 페이지로 진입했을 때 API 호출해서 화면에 상세 정보 표시
10시 35분까지...

      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNews } from '../api/index'

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchNewsItems() {
      // this;
      // axios
      //   .get(url)
      fetchNews()
        .then((response) => {
          console.log(response.data);
          this.items = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.fetchNewsItems();
  },
};
</script>

<style></style>

<template>
  <div>
    <!-- TODO: 아래 URL로 뉴스 목록을 받아와 제목을 리스트로 뿌려보세요 -->
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const url = 'https://api.hnpwa.com/v0/news/1.json';

export default {
  data() {
    return {
      items: [],
    };
  },
  methods: {
    fetchNews() {
      // this;
      axios
        .get(url)
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
    this.fetchNews();
  },
};
</script>

<style></style>

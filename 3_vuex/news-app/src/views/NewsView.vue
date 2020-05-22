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

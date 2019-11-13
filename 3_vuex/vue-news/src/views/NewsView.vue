<template>
  <div>
    <h1>News</h1>
    <div>
      {{ this.$store.state.jobs }}
    </div>
    <!-- <div v-if="!isLoading">
      {{ items }}
    </div>
    <div v-else>
      데이터 로딩 중입니다...
    </div> -->
  </div>
</template>

<script>
// ask url
// https://api.hnpwa.com/v0/ask/1.json

import axios from "axios";

export default {
  // vda
  data() {
    return {
      items: [],
      isLoading: true
    };
  },
  methods: {
    fetchItems() {
      const url = "https://api.hnpwa.com/v0/news/1.json";
      console.log("요청 시작");
      this.isLoading = true;
      axios
        .get(url)
        .then(response => {
          console.log("요청 완료");
          // console.log(response.data);
          this.items = response.data;
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchItems();
  }
};
</script>

<style></style>

<template>
  <div>
    <h1>질문 페이지</h1>
    <ul>
      <li v-for="item in items" v-bind:key="item.id">
        <!-- <router-link to="/ask/1">{{ item.title }}</router-link> -->
        <router-link v-bind:to="'/ask/' + item.id">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: []
    }
  },
  methods: {
    fetchAskItems() {
      const url = 'https://api.hnpwa.com/v0/ask/1.json';
      axios.get(url)
        .then(response => {
          console.log(response);
          this.items = response.data;
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.fetchAskItems();
  }
}
</script>

<style>

</style>
<template>
  <div>
    <div>
      <p v-for="item in newsItems">
        {{ item.title }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newsItems: [],
    }
  },
  methods: {
    fetchData() {
      axios.get('https://api.hnpwa.com/v0/news/1.json')
        .then((response) => {
          console.log(response);
          this.newsItems = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style>

</style>

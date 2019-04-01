<template>
  <div>
    <ul>
      <li v-for="item in askItems" 
        v-bind:key="item.id">
        {{ item.title }}
        <span> by 
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchAsk } from '../api/index.js';

export default {
  data() {
    return {
      askItems: [],
    }
  },
  methods: {
    fetchData() {
      fetchAsk()
        .then((response) => {
          console.log(response);
          this.askItems = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  created() {
    this.fetchData();
  }
}
</script>

<style>

</style>

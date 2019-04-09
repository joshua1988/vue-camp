<template>
  <div>
    <div>
      <!-- NOTE: #1 -->
      <template v-if="!isLoading">
        <p v-for="item in this.$store.state.news" :key="item.id">
          <a v-bind:href="item.url">{{ item.title }}</a>
          <span> by 
            <router-link v-bind:to="'/user/' + item.user">
              {{ item.user }}
            </router-link>
          </span>
        </p>
      </template>
      <template v-else>
        Loading...
      </template>
      <!-- NOTE: #2 -->
      <!-- <p v-for="item in newsItems" :key="item.id" v-if="!isLoading">
        <a v-bind:href="item.url">{{ item.title }}</a>
        <span> by 
          <router-link v-bind:to="'/user/' + item.user">
            {{ item.user }}
          </router-link>
        </span>
      </p>
      <div v-else>
        Loading...
      </div> -->
    </div>
  </div>
</template>

<script>
import { fetchNews } from '../api/index.js';
import bus from '../utils/bus.js';

export default {
  data() {
    return {
      newsItems: [],
      // loading status
      isLoading: false,
    }
  },
  methods: {
    fetchData() {
      fetchNews()
        .then((response) => {
          console.log(response);
          this.newsItems = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  async created() {
    // try {
    //   bus.$emit('on:progress');
    //   let response = await this.$store.dispatch('FETCH_NEWS');
    //   this.isLoading = false;
    //   bus.$emit('off:progress'); 
    // } catch (error) {
    //   console.log(error);
    // }

      // .then(response => {
      //   this.isLoading = false;
      //   bus.$emit('off:progress');
      // })
      // .catch(error => console.log(error));
  }
}
</script>

<style>

</style>

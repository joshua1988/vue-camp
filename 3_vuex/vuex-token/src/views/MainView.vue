<template>
  <div>
    <button @click="$router.push('new')">add a new post</button>
    <div>
      <ul>
        <li v-for="item in postItems" :key="item._id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts } from '../api/index.js';

export default {
  data() {
    return {
      postItems: [],
    }
  },
  async created() {
    try {
      const response = await fetchPosts();
      console.log(response);
      this.postItems = response.data.posts;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style>

</style>

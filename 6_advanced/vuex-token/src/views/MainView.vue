<template>
  <div>
    <button @click="$router.push('new')">add a new post</button>
    <div>
      <ul>
        <li v-for="item in postItems" :key="item._id">
          <router-link :to="`/post/${item._id}`">
            {{ item.title }}
          </router-link>
          <button @click="removePost(item._id)">
            delete
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPosts, deletePostById } from '../api/index.js';

export default {
  data() {
    return {
      postItems: [],
    }
  },
  methods: {
    async fetchData() {
      try {
        const { data: { posts: postItems } } = await fetchPosts();
        this.postItems = postItems;
        return;
      } catch (error) {
        console.log(error);
      }
    },
    async removePost(id) {
      try {
        await deletePostById(id);
        await this.fetchData();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchData();
  },
}
</script>

<style>

</style>

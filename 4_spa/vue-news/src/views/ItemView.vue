<template>
  <div>
    <div>
      <h1>Question</h1>
      <p><strong>title :</strong> {{askItem.title}}</p>
      <div>
        <strong>content :</strong> 
        <div v-html="askItem.content">
          <!-- ...... -->
        </div>
      </div>
    </div>
    <div>
      <h1>Comments</h1>
      <ul>
        <li v-for="comment in askItem.comments" 
          :key="comment.id">
          <span v-html="comment.content"></span>
          <span>by {{ comment.user }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchItem } from '../api/index.js';

export default {
  data() {
    return {
      askItem: null,
    }
  },
  methods: {
    fetchData() {
      let itemId = this.$route.params.id;
      fetchItem(itemId)
        .then(response => this.askItem = response.data)
        .catch(error => console.log(error));
    }
  },
  beforeMount() {
    this.fetchData();
  }
}
</script>

<style>

</style>

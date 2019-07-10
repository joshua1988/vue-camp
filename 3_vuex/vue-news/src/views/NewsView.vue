<template>
  <div>
    <ul>
      <li v-for="newsItem in newsItems" v-bind:key="newsItem.id">
        {{ newsItem.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNews } from '../api/index.js';

export default {
	data() {
		return {
			newsItems: [],
		};
	},
	methods: {
		fetchNewsItems() {
			fetchNews()
				.then(response => {
					console.log(response.data);
					this.newsItems = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	created() {
		this.fetchNewsItems();
	},
};
</script>

<style>
</style>

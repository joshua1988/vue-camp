<template>
  <div>
    <h1>News</h1>
    <div>
      {{ items }}
    </div>
  </div>
</template>

<script>
// ask url
// https://api.hnpwa.com/v0/ask/1.json

import axios from 'axios';

export default {
	// vda
	data() {
		return {
			items: [],
		};
	},
	methods: {
		fetchItems() {
			const url = 'https://api.hnpwa.com/v0/news/1.json';
			axios
				.get(url)
				.then(response => {
					// console.log(response.data);
					this.items = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	created() {
		this.fetchItems();
	},
};
</script>

<style>
</style>
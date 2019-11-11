<template>
  <div>
    <ul>
			<li v-for="item in items" v-bind:key="item.id">
				{{ item.title }}
			</li>
		</ul>
  </div>
</template>

<script>
import { fetchAsk } from '../api/index.js';

export default {
	data() {
		return {
			items: [],
		};
	},
	methods: {
		// response = {
		// 	headers: {},
		// 	config: {},
		// 	data: {},
		// 	// ..
		// }

		fetchItems() {
			fetchAsk()
				.then(({ data }) => {
					this.items = data;
				})
				.catch(error => {
					console.log(error);
				});
			// const url = 'https://api.hnpwa.com/v0/ask/1.json';
			// axios.get();
		},
	},
	created() {
		this.fetchItems();
	},
};
</script>

<style>
</style>
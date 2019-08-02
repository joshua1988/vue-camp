<template>
	<div>
		<h1>Home</h1>
	</div>
</template>

<script>
import { fetchPosts } from '../api/posts.js';

export default {
	methods: {
		async fetchItem() {
			try {
				let posts = await fetchPosts();
				console.log(posts);
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.fetchItem();
	},
};
</script>

<style></style>

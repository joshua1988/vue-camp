<template>
	<div>
		<h1>Home</h1>
		<div>
			<ul>
				<li v-for="postItem in postItems" :key="postItem._id">
					{{ postItem.title }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { fetchPosts } from '../api/posts.js';

export default {
	data() {
		return {
			postItems: [],
		};
	},
	methods: {
		async fetchItem() {
			try {
				// #1
				let response = await fetchPosts();
				this.postItems = response.data.posts;
				// #2
				// let { data } = await fetchPosts();
				// this.postItems = data.posts;
				// #3
				// let { data: { posts } } = await fetchPosts();
				// this.postItems = posts;
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

<template>
	<div>
		<h1>Today I learned</h1>
		<button class="create" @click="routeAdd">+</button>
	</div>
</template>

<script>
import { fetchPosts } from '../api/posts';

export default {
	created() {
		fetchPosts();
	},
	methods: {
		routeAdd() {
			this.$router.push('/add');
		},
	},
};
</script>

<style scoped>
.create {
	width: 60px;
	height: 60px;
	position: fixed;
	bottom: 20px;
	right: 20px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
	background: skyblue;
	border: 3px solid white;
	outline: none;
}
</style>

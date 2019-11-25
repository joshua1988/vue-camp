<template>
	<div>
		<h1>Today I learned</h1>
	</div>
</template>

<script>
import { fetchPosts } from '../api/index';

export default {
	created() {
		fetchPosts();
	},
};
</script>

<style></style>

<template>
	<div>
		<form @submit.prevent="submitForm">
			<div>
				<label for="">email:</label>
				<input type="text" v-model="username" />
			</div>
			<div>
				<label for="">password:</label>
				<input type="text" v-model="password" />
			</div>
			<button type="submit">로그인</button>
		</form>
		<button @click="fetchItem">게시글 조회</button>
	</div>
</template>

<script>
import { loginUser } from '../api/account.js';
import { fetchPosts } from '../api/posts.js';

export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		async fetchItem() {
			try {
				let posts = await fetchPosts();
				console.log(posts);
			} catch (error) {
				console.log(error);
			}
		},
		submitForm() {
			let data = {
				username: this.username,
				password: this.password,
			};
			loginUser(data)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		},
	},
};
</script>

<style></style>

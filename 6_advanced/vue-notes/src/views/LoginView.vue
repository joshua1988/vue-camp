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
		<!-- <button @click="fetchItem">게시글 조회</button> -->
	</div>
</template>

<script>
import { loginUser } from '../api/account.js';

export default {
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		submitForm() {
			let data = {
				username: this.username,
				password: this.password,
			};
			loginUser(data)
				.then(response => {
					let token = response.data.token;
					this.$store.commit('setToken', token);
					this.$router.push('/home');
					// this.$router.push({
					// 	path: '/home',
					// 	name: 'home',
					// 	query: {},
					// 	// ...
					// });
				})
				.catch(error => console.log(error));
		},
	},
};
</script>

<style></style>

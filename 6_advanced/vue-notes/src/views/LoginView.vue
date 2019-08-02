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
			<button type="submit" :disabled="!isValidUsername">로그인</button>
			<p v-if="!isValidUsername">email is not valid</p>
		</form>
		<!-- <button @click="fetchItem">게시글 조회</button> -->
	</div>
</template>

<script>
import { loginUser } from '../api/account.js';

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default {
	data() {
		return {
			username: '',
			password: '',
			testValue: 10,
		};
	},
	computed: {
		isValidUsername() {
			if (!this.username) {
				return true;
			}
			return validateEmail(this.username);
		},
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

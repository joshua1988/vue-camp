<template>
	<form @submit.prevent="submitForm">
		<div>
			<label for="username">ID: </label>
			<input id="username" type="text" v-model="username" />
		</div>
		<div>
			<label for="password">PW: </label>
			<input id="password" type="text" v-model="password" />
		</div>
		<button type="submit">로그인</button>
		<p>
			{{ errorMessage }}
		</p>
	</form>
</template>

<script>
import { loginUser } from '../api/index';

export default {
	data() {
		return {
			username: '',
			password: '',
			errorMessage: '',
		};
	},
	methods: {
		async submitForm() {
			try {
				const { data } = await loginUser({
					username: this.username,
					password: this.password,
				});
				this.$store.commit('setUsername', data.user.username);
				this.$store.commit('setToken', data.token);
				this.$router.push('/home');
			} catch (error) {
				console.log(error);
				this.errorMessage = error;
			}
		},
	},
};
</script>

<style></style>

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
			<div>
				<label for="">nickname:</label>
				<input type="text" v-model="nickname" />
			</div>
			<button type="submit">회원 가입</button>
		</form>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			username: '',
			password: '',
			nickname: '',
		};
	},
	methods: {
		submitForm() {
			let url = 'http://localhost:3000/signup';
			let data = {
				username: this.username,
				password: this.password,
				nickname: this.nickname,
			};
			axios
				.post(url, data)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		},
	},
};
</script>

<style></style>

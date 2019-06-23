<template>
  <form @submit.prevent="loginUser">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
      <p v-if="!isEmail">ID must be an email</p>
    </div>
		<button :disabled="username && !isEmail" type="submit">login</button>
		<div v-if="login">
			Logged in
		</div>
  </form>
</template>

<script>
import axios from 'axios';

function validateEmail(email) {
	if (!email) {
		return true;
	}
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()~\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default {
	data() {
		return {
			username: '',
			login: false,
			id: '',
		};
	},
	computed: {
		isEmail() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async loginUser() {
			try {
				const url = 'https://jsonplaceholder.typicode.com/users';
				const response = await axios.post(url, {
					username: this.username,
				});
				this.id = response.data.id;
				this.login = true;
			} catch (error) {
				console.log(error);
			}
		},
	},
};
</script>

<style>
</style>

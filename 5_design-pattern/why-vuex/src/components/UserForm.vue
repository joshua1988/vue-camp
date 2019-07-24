<template>
  <div>
    <div>
      id: <input type="text" v-model="id">
    </div>
    <div>
      pw: <input type="text">
    </div>
    <button @click="loginUser">login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			id: '',
		};
	},
	methods: {
		// loginUser() {
		// 	let url = 'https://jsonplaceholder.typicode.com/users';
		// 	let data = {
		// 		username: this.id,
		// 	};
		// 	axios
		// 		.post(url, data)
		// 		.then(response => {
		// 			console.log(response.data.username);
		// 			let name = response.data.username;
		// 			this.$store.commit('setUsername', name);
		// 		})
		// 		.catch(error => console.log(error));
		// 	// this.$emit('pass:id', this.id);
		// 	// this.$store.commit('setUserId', this.id);
		// 	// this.$store.state.userId = this.id;
		// },
		loginUser() {
			let url = 'https://jsonplaceholder.typicode.com/users';
			let data = {
				username: this.id,
			};
			// this.$store.commit();
			this.$store.dispatch('LOGIN', this.id);
		},
	},
};
</script>

<style>
</style>

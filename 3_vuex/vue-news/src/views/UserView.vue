<template>
  <div>
    {{ user }}
  </div>
</template>

<script>
import { fetchUser } from '../api/index.js';

export default {
	data() {
		return {
			user: {},
		};
	},
	methods: {
		fetchUserByName(name) {
			fetchUser(name)
				.then(response => {
					this.user = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	created() {
		// console.log(this);
		console.log(this.$route.params);
		let name = this.$route.params.userName;
		this.fetchUserByName(name);
	},
};
</script>

<style>
</style>

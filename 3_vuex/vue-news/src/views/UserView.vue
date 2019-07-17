<template>
  <div>
    user
  </div>
</template>

<script>
import { fetchUser } from '../api/index.js';

export default {
	methods: {
		fetchUserByName(name) {
			fetchUser(name)
				.then(response => {
					console.log(response);
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	created() {
		console.log(this.$route.params);
		let name = this.$route.params.userName;
		this.fetchUserByName(name);
	},
};
</script>

<style>
</style>

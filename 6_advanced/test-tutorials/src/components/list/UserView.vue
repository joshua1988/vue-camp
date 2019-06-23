<template>
  <div>
    <user-list :items="users"></user-list>
  </div>
</template>

<script>
import axios from 'axios';
import UserList from './UserList.vue';

export default {
	components: {
		UserList,
	},
	data() {
		return {
			users: [],
		};
	},
	methods: {
		async fetchUsers() {
			try {
				const url = 'https://jsonplaceholder.typicode.com/users';
				const { data } = await axios.get(url);
				this.users = data;
			} catch (error) {
				console.log(error);
			}
		},
	},
	created() {
		this.fetchUsers();
	},
};
</script>

<style>
</style>

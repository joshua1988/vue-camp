<template>
  <div>
    <div>
      <p v-for="askItem in askItems" :key="askItem.id">
        <router-link v-bind:to="`/item/${askItem.id}`">
					{{ askItem.title }}
				</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { fetchAsk } from '../api/index.js';

export default {
	data() {
		return {
			askItems: [],
		};
	},
	methods: {
		fetchData() {
			fetchAsk()
				.then(response => {
					this.askItems = response.data;
				})
				.catch(error => console.log(error));
		},
	},
	beforeMount() {
		this.fetchData();
	},
};
</script>

<style>
</style>

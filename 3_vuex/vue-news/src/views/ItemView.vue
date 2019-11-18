<template>
  <div>
    <h1>Item View</h1>
    <div>
      {{ item }}
    </div>
  </div>
</template>

<script>
import { fetchItem } from '../api/index';

export default {
	data() {
		return {
			item: {},
		};
	},
	created() {
		console.log(this.$route.params.askId);
		const id = this.$route.params.askId;
		const response = fetchItem(id);
		this.item = response.data;

		// fetchItem()
		// 	.then(response => {
		//     this.item = response.data;
		//   })
		// 	.catch(error => console.log(error));
	},
};
</script>

<style>
</style>
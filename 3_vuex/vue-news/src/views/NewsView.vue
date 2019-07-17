<template>
  <div>
    <ul>
      <li v-for="newsItem in newsItems" v-bind:key="newsItem.id">
				<p>
					{{ newsItem.title }}
					<router-link v-bind:to="'/user/' + newsItem.user">
						{{ newsItem.user }}
					</router-link>
					<!-- <a v-bind:href="'/user/' + 사용자 이름">
						사용자 이름...
					</a> -->
				</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetchNews } from '../api/index.js';

export default {
	data() {
		return {
			newsItems: [],
		};
	},
	methods: {
		fetchNewsItems() {
			fetchNews()
				.then(response => {
					console.log(response.data);
					this.newsItems = response.data;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
	created() {
		this.fetchNewsItems();
	},
};
</script>

<style scoped>
.blue {
	color: blue;
}
</style>
